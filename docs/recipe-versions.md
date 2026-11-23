---
status: current
---

# Baking paths and recipe versions

The site holds two baking paths, Dutch oven and loaf pan, which share their
first three steps and then part. Each path holds two complete recipes. The
baseline is the tested recipe. The experiment is what the owner is trying on
the next loaf, and the site highlights every way it differs from that path's
baseline. While a path's two recipes match, that path has no experiment, and
the site shows only its baseline.

## Decision

On 2026-11-04, the owner asked for two recipes on the site:

- **Baseline:** the tested recipe they have confirmed as their best so far.
- **Experiment:** what they are trying out for the next loaf.

Both recipes started out identical on 2026-11-04. The owner left the page
design open and suggested that the experiment view highlight its
differences from the baseline.

On 2026-11-06, the owner asked that mother starter maintenance be its own
thing, outside the two recipes. Weekly mother-starter care is now shared:
one copy serves both views, and the experiment comparison ignores it. The
mother-starter refresh during a bake stays part of each recipe.

On 2026-11-17, the owner asked that the site hide the experiment while the
recipes match, and that agents ignore the experiment unless the owner raises
it.

On 2026-11-22, the owner added a loaf pan path beside the Dutch oven, with a
toggle between them, each with its own baseline and optional experiment. They
chose to share steps 1–3 and the mother-starter refresh between the paths,
and to be asked which path a change targets when a step has a counterpart in
both, because those steps could diverge. The loaf pan recipe itself is under
[Loaf pan path](recipe-guide.md#loaf-pan-path).

## Choose which recipe to change

First choose the path:

- **Shared steps:** the starter build, mixing, squash and fold except its
  closing transfer, and the mother-starter refresh change both paths at once.
- **Steps with a counterpart in both paths:** such as the cold proof, the
  bakes, the temperature check, the olive-oil brush, and the cooling rest. If
  the owner's instruction does not name a path, ask: Dutch oven, loaf pan, or
  both. The owner set this rule on 2026-11-22.
- **Steps only one path has:** such as the Dutch oven's preheat and shaping,
  or the loaf pan's rise to 1 cm below the rim, change that path.

Then choose the recipe within each chosen path:

- **The recipes match:** apply a recipe change to both, keeping them
  identical, without asking or mentioning the experiment. Edit only the
  experiment when the owner asks for an experiment or a trial for the next
  loaf; the switch then reappears on the site. The owner set this rule on
  2026-11-17.
- **The recipes differ:** each change applies to the baseline or the
  experiment. If the owner's instruction does not say which, ask before
  editing. Do not infer the answer from earlier changes or from which recipe
  changed last. The owner set this rule on 2026-11-04.

A path's recipes match when its two files differ only in their opening
comment and export name. Weekly mother-starter care belongs to neither path
nor recipe, so a change to it needs no such question.

## Recipe files

- [Shared steps](../lib/recipes/shared.ts) hold steps 1–3 and the
  mother-starter refresh, written once. All four recipe files use them, so an
  edit there reaches every path and recipe. Squash and fold takes each path's
  closing transfer as an argument. To change a shared step in one experiment
  only, replace that file's import with an edited copy that keeps the step's
  ID. To change one for the baselines while an experiment keeps the old text,
  give that experiment a copy of the old step first.
- [Dutch oven baseline](../lib/recipes/dutch-oven/baseline.ts) and
  [experiment](../lib/recipes/dutch-oven/experiment.ts), and
  [loaf pan baseline](../lib/recipes/loaf-pan/baseline.ts) and
  [experiment](../lib/recipes/loaf-pan/experiment.ts), each hold a complete
  recipe. Edit only the files for the chosen paths and recipes.
- [Paths](../lib/recipes/methods.ts) list each path's label, icon, and
  recipes in switch order.
- [Starter maintenance](../lib/starter-maintenance.ts) holds weekly
  mother-starter care, which every recipe shares.
- [Recipe types](../lib/recipes/types.ts) describe the fields.
  `**double asterisks**` mark bold text.
- [Comparison](../lib/recipes/compare.ts) finds an experiment's differences
  from its path's baseline, down to the word, for the page to highlight.
- The [recipe page](../app/recipe-page.tsx) renders whichever path and recipe
  are selected.

Steps are matched by `id`. Keep a step's ID when editing it so the comparison
shows the edit and saved checklist progress still applies. Give a new step a
new ID, and delete a step to remove it; the experiment view shows the removed
baseline step struck through. Loaf pan steps after the shared ones take a
`pan-` ID, so progress never carries over from a Dutch oven step. Step numbers
come from each recipe's order. Hard-coded step references in text, such as
"Step 4", need updating by hand when steps move.

## How the page behaves

- A switch under the title chooses the Dutch oven or loaf pan path. First
  visits show the Dutch oven.
- While a path's recipes match, the page shows only its baseline, with no
  recipe switch in the header and no mention of an experiment.
- The baseline view shows the recipe with no comparison marks.
- Mother starter maintenance sits below the bake checklist, apart from the
  recipes, and reads the same in every view.
- The experiment view lists every change from its path's baseline at the top
  of the checklist, with links to each one. Highlighted words are new; struck
  words appear only in the baseline. Changed steps get a "Changed" tag, new
  steps a "New" tag, and removed steps a "Removed" tag.
- Each device remembers the last path under the `sourdough-recipe-method` key
  and the last recipe under the `sourdough-recipe-version` key, so a bake in
  progress reopens on what is being followed. A path with no experiment
  always shows its baseline.
- Checklist progress is shared across paths and recipes, because it tracks
  one bake by step ID.

## Promote or reset an experiment

When the owner confirms a path's experiment as their new best, copy the
experiment's recipe into that path's baseline file, keeping the `baseline`
export name. The two then match, and the site hides that path's experiment
until its next change. To abandon an experiment, copy the baseline's recipe
into the experiment file the same way.

[Recipe guide decisions](recipe-guide.md) describe the baselines. Record an
experiment change under its topic there too, marked as an experiment and
naming its path. When the experiment is promoted, drop the marks; when it is
abandoned, remove those entries.
