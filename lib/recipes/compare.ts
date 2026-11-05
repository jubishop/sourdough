import type { LucideIcon } from 'lucide-react';

import type { Recipe, RecipeStep } from './types';

// A run of recipe text: unchanged, new in the shown recipe, or only in the baseline.
export type ChunkKind = 'same' | 'added' | 'removed';
export type TextPart = { text: string; bold: boolean };
export type Chunk = { kind: ChunkKind; parts: TextPart[] };
export type ItemStatus = 'same' | 'changed' | 'added' | 'removed';
export type ListEntry = { status: ItemStatus; chunks: Chunk[] };

export type StepView = {
  id: string;
  status: ItemStatus;
  // Removed baseline steps have no number in the shown recipe.
  number?: number;
  icon: LucideIcon;
  plainTitle: string;
  phase: Chunk[];
  time: Chunk[];
  title: Chunk[];
  body?: Chunk[];
  details?: ListEntry[];
  cue?: Chunk[];
};

export type Change = { anchor: string; label: string; status: ItemStatus };

export type RecipeView = {
  steps: StepView[];
  motherRefresh: {
    afterStep: string;
    changed: boolean;
    label: Chunk[];
    title: Chunk[];
    flow: Chunk[];
    instructions: ListEntry[];
  };
  maintenance: {
    changed: boolean;
    kicker: Chunk[];
    title: Chunk[];
    steps: ListEntry[];
  };
  changes: Change[];
};

export const stepAnchor = (id: string) => `step-${id}-card`;
export const motherRefreshAnchor = 'mother-refresh';
export const maintenanceAnchor = 'starter';

type Token = TextPart;

// Split text into word and space tokens, reading **bold** markers.
function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  text.split('**').forEach((segment, index) => {
    for (const piece of segment.split(/(\s+)/)) {
      if (piece) tokens.push({ text: piece, bold: index % 2 === 1 });
    }
  });
  return tokens;
}

const isSpace = (token: Token) => /^\s+$/.test(token.text);

function pushPart(parts: TextPart[], token: Token) {
  const last = parts.at(-1);
  if (last && last.bold === token.bold) last.text += token.text;
  else parts.push({ ...token });
}

function pushChunk(chunks: Chunk[], kind: ChunkKind, tokens: Token[]) {
  if (tokens.length === 0) return;
  let chunk = chunks.at(-1);
  if (!chunk || chunk.kind !== kind) {
    chunk = { kind, parts: [] };
    chunks.push(chunk);
  }
  for (const token of tokens) pushPart(chunk.parts, token);
}

export function textChunks(text: string, kind: ChunkKind = 'same'): Chunk[] {
  const chunks: Chunk[] = [];
  pushChunk(chunks, kind, tokenize(text));
  return chunks;
}

// lengths[i][j] is the longest common subsequence of a[i..] and b[j..].
function commonLengths(a: string[], b: string[]): number[][] {
  const lengths = Array.from({ length: a.length + 1 }, () => Array.from({ length: b.length + 1 }, () => 0));
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      lengths[i][j] = a[i] === b[j] ? lengths[i + 1][j + 1] + 1 : Math.max(lengths[i + 1][j], lengths[i][j + 1]);
    }
  }
  return lengths;
}

// Short unchanged words between two edits, such as "the" or "to", read better
// inside the edit than as islands between struck and highlighted words.
const absorbable = (tokens: Token[]) =>
  tokens.every((token) => isSpace(token) || token.text.length <= 3) &&
  tokens.filter((token) => !isSpace(token)).length <= 1;

type Run = { same: true; tokens: Token[] } | { same: false; removed: Token[]; added: Token[] };

// A word-level comparison of two texts, showing removed baseline words before
// the words that replace them.
export function diffText(before: string | undefined, after: string | undefined): Chunk[] {
  if (before === after) return after ? textChunks(after) : [];
  if (!before) return textChunks(after ?? '', 'added');
  if (!after) return textChunks(before, 'removed');

  const a = tokenize(before);
  const b = tokenize(after);
  const lengths = commonLengths(a.map((token) => token.text), b.map((token) => token.text));

  const runs: Run[] = [];
  const add = (kind: ChunkKind, token: Token) => {
    let run = runs.at(-1);
    if (kind === 'same') {
      if (!run || !run.same) runs.push((run = { same: true, tokens: [] }));
      run.tokens.push(token);
      return;
    }
    if (!run || run.same) runs.push((run = { same: false, removed: [], added: [] }));
    (kind === 'added' ? run.added : run.removed).push(token);
  };
  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i].text === b[j].text) {
      add('same', b[j]);
      i++;
      j++;
    } else if (j >= b.length || (i < a.length && lengths[i + 1][j] >= lengths[i][j + 1])) {
      add('removed', a[i++]);
    } else {
      add('added', b[j++]);
    }
  }

  // Fold short unchanged islands into the surrounding edit.
  const merged: Run[] = [];
  for (const run of runs) {
    const previous = merged.at(-1);
    if (!run.same && previous?.same && absorbable(previous.tokens)) {
      const edit = merged.at(-2);
      if (edit && !edit.same) {
        merged.pop();
        edit.removed.push(...previous.tokens, ...run.removed);
        edit.added.push(...previous.tokens, ...run.added);
        continue;
      }
    }
    merged.push(run);
  }

  const chunks: Chunk[] = [];
  for (const run of merged) {
    if (run.same) {
      pushChunk(chunks, 'same', run.tokens);
      continue;
    }
    // Keep spacing at an edit's edges outside the highlight.
    const edgeIsSpace = (pick: (tokens: Token[]) => Token | undefined) =>
      run.removed.length + run.added.length > 0 &&
      [run.removed, run.added].every((tokens) => {
        const token = pick(tokens);
        return !token || isSpace(token);
      });
    const lead: Token[] = [];
    const trail: Token[] = [];
    while (edgeIsSpace((tokens) => tokens[0])) {
      const added = run.added.shift();
      const removed = run.removed.shift();
      lead.push((added ?? removed)!);
    }
    while (edgeIsSpace((tokens) => tokens.at(-1))) {
      const added = run.added.pop();
      const removed = run.removed.pop();
      trail.unshift((added ?? removed)!);
    }
    pushChunk(chunks, 'same', lead);
    pushChunk(chunks, 'removed', run.removed);
    pushChunk(chunks, 'added', run.added);
    pushChunk(chunks, 'same', trail);
  }
  return chunks;
}

// Compare list items, pairing edited items so their words can be compared.
export function diffList(before: string[] = [], after: string[] = []): ListEntry[] {
  const lengths = commonLengths(before, after);

  const entries: ListEntry[] = [];
  let removed: string[] = [];
  let added: string[] = [];
  const flush = () => {
    const paired = Math.min(removed.length, added.length);
    for (let k = 0; k < paired; k++) entries.push({ status: 'changed', chunks: diffText(removed[k], added[k]) });
    for (const item of added.slice(paired)) entries.push({ status: 'added', chunks: textChunks(item, 'added') });
    for (const item of removed.slice(paired)) entries.push({ status: 'removed', chunks: textChunks(item, 'removed') });
    removed = [];
    added = [];
  };
  let i = 0;
  let j = 0;
  while (i < before.length || j < after.length) {
    if (i < before.length && j < after.length && before[i] === after[j]) {
      flush();
      entries.push({ status: 'same', chunks: textChunks(after[j]) });
      i++;
      j++;
    } else if (j >= after.length || (i < before.length && lengths[i + 1][j] >= lengths[i][j + 1])) {
      removed.push(before[i++]);
    } else {
      added.push(after[j++]);
    }
  }
  flush();
  return entries;
}

const changed = (chunks: Chunk[] | undefined) => chunks?.some((chunk) => chunk.kind !== 'same') ?? false;
const listChanged = (entries: ListEntry[] | undefined) => entries?.some((entry) => entry.status !== 'same') ?? false;
const plain = (text: string) => text.replaceAll('**', '');

function viewStep(step: RecipeStep, base: RecipeStep | undefined, status: ItemStatus, number?: number): StepView {
  const field = (key: 'phase' | 'time' | 'title' | 'body' | 'cue') => {
    if (status === 'removed') return step[key] === undefined ? undefined : textChunks(step[key], 'removed');
    // A new step's tag marks it, so its text reads plainly.
    if (status === 'added') return step[key] === undefined ? undefined : textChunks(step[key]);
    const before = base?.[key];
    const after = step[key];
    return before === undefined && after === undefined ? undefined : diffText(before, after);
  };
  const details = status === 'removed'
    ? diffList(step.details, [])
    : status === 'added'
      ? diffList(step.details, step.details)
      : step.details || base?.details
        ? diffList(base?.details, step.details)
        : undefined;
  const view: StepView = {
    id: step.id,
    status,
    number,
    icon: step.icon,
    plainTitle: plain(step.title),
    phase: field('phase') ?? [],
    time: field('time') ?? [],
    title: field('title') ?? [],
    body: field('body'),
    details,
    cue: field('cue'),
  };
  if (status === 'same' && [view.phase, view.time, view.title, view.body, view.cue].some(changed)) view.status = 'changed';
  if (status === 'same' && listChanged(view.details)) view.status = 'changed';
  return view;
}

// Build the page for a recipe, marking every difference from the comparison
// recipe. Comparing a recipe with itself shows it with no marks.
export function viewRecipe(recipe: Recipe, comparison: Recipe): RecipeView {
  const shownIds = new Set(recipe.steps.map((step) => step.id));
  const baseSteps = new Map(comparison.steps.map((step) => [step.id, step]));

  // Place each removed baseline step after the nearest earlier step that remains.
  const removedAfter = new Map<string | null, RecipeStep[]>();
  let anchor: string | null = null;
  for (const step of comparison.steps) {
    if (shownIds.has(step.id)) anchor = step.id;
    else removedAfter.set(anchor, [...(removedAfter.get(anchor) ?? []), step]);
  }

  const steps: StepView[] = (removedAfter.get(null) ?? []).map((step) => viewStep(step, undefined, 'removed'));
  recipe.steps.forEach((step, index) => {
    const base = baseSteps.get(step.id);
    steps.push(viewStep(step, base, base ? 'same' : 'added', index + 1));
    for (const removed of removedAfter.get(step.id) ?? []) steps.push(viewStep(removed, undefined, 'removed'));
  });

  const refresh = recipe.motherRefresh;
  const baseRefresh = comparison.motherRefresh;
  const motherRefresh = {
    afterStep: refresh.afterStep,
    label: diffText(baseRefresh.label, refresh.label),
    title: diffText(baseRefresh.title, refresh.title),
    flow: diffText(baseRefresh.flow, refresh.flow),
    instructions: diffList(baseRefresh.instructions, refresh.instructions),
    changed: false,
  };
  motherRefresh.changed =
    [motherRefresh.label, motherRefresh.title, motherRefresh.flow].some(changed) ||
    listChanged(motherRefresh.instructions) ||
    refresh.afterStep !== baseRefresh.afterStep;

  const care = recipe.maintenance;
  const baseCare = comparison.maintenance;
  const maintenance = {
    kicker: diffText(baseCare.kicker, care.kicker),
    title: diffText(baseCare.title, care.title),
    steps: diffList(baseCare.steps, care.steps),
    changed: false,
  };
  maintenance.changed = [maintenance.kicker, maintenance.title].some(changed) || listChanged(maintenance.steps);

  // List the changes in page order.
  const changes: Change[] = [];
  if (maintenance.changed) changes.push({ anchor: maintenanceAnchor, label: 'Weekly starter care', status: 'changed' });
  for (const step of steps) {
    if (step.status !== 'same') {
      const label = step.number === undefined ? step.plainTitle : `${String(step.number).padStart(2, '0')} ${step.plainTitle}`;
      changes.push({ anchor: stepAnchor(step.id), label, status: step.status });
    }
    if (step.id === refresh.afterStep && step.status !== 'removed' && motherRefresh.changed) {
      changes.push({ anchor: motherRefreshAnchor, label: plain(refresh.title), status: 'changed' });
    }
  }

  return { steps, motherRefresh, maintenance, changes };
}
