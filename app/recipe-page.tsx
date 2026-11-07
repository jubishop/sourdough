'use client';

import { Fragment } from 'react';
import { BadgeCheck, CheckCircle2, ChevronRight, FlaskConical, RotateCcw, Snowflake, Wheat } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import { useChecklist } from '@/hooks/use-checklist';
import { useRecipeVersion } from '@/hooks/use-recipe-version';
import { baseline } from '@/lib/recipes/baseline';
import {
  type Change,
  type Chunk,
  type ItemStatus,
  type ListEntry,
  type StepView,
  motherRefreshAnchor,
  stepAnchor,
  textChunks,
  viewRecipe,
} from '@/lib/recipes/compare';
import { experiment } from '@/lib/recipes/experiment';
import { starterMaintenance } from '@/lib/starter-maintenance';
import { cn } from '@/lib/utils';

// The baseline shows plainly; the experiment marks every difference from it.
const views = {
  baseline: viewRecipe(baseline, baseline),
  experiment: viewRecipe(experiment, baseline),
};
const experimentChanges = views.experiment.changes.length;
const plural = (count: number) => `${count} ${count === 1 ? 'change' : 'changes'}`;
const tagLabels: Record<Exclude<ItemStatus, 'same'>, string> = { changed: 'Changed', added: 'New', removed: 'Removed' };

function Rich({ chunks }: { chunks: Chunk[] }) {
  return (
    <>
      {chunks.map((chunk, index) => {
        const parts = chunk.parts.map((part, partIndex) =>
          part.bold ? <strong key={partIndex}>{part.text}</strong> : <Fragment key={partIndex}>{part.text}</Fragment>,
        );
        if (chunk.kind === 'added') return <ins key={index} className="diff-added">{parts}</ins>;
        if (chunk.kind === 'removed') return <del key={index} className="diff-removed">{parts}</del>;
        return <Fragment key={index}>{parts}</Fragment>;
      })}
    </>
  );
}

function RichList({ entries, className }: { entries: ListEntry[]; className: string }) {
  if (entries.length === 0) return null;
  return (
    <ol className={className}>
      {entries.map((entry, index) => (
        <li key={index} className={entry.status === 'same' ? undefined : `is-${entry.status}`}>
          <Rich chunks={entry.chunks} />
        </li>
      ))}
    </ol>
  );
}

function ChangeTag({ status }: { status: ItemStatus }) {
  if (status === 'same') return null;
  return <span className={`diff-tag is-${status}`}>{tagLabels[status]}</span>;
}

function StepContent({ step }: { step: StepView }) {
  return (
    <>
      <p className="step-meta">
        <span className="step-phase"><Rich chunks={step.phase} /></span>
        <Rich chunks={step.time} />
        <ChangeTag status={step.status} />
      </p>
      <h3><Rich chunks={step.title} /></h3>
      {step.body?.length ? <p><Rich chunks={step.body} /></p> : null}
      {step.details && <RichList className="step-substeps" entries={step.details} />}
      {step.cue?.length ? <p className="step-cue"><Rich chunks={step.cue} /></p> : null}
    </>
  );
}

function ComparisonSummary({ changes }: { changes: Change[] }) {
  return (
    <div className="compare-summary">
      <p className="compare-title">
        <FlaskConical aria-hidden="true" />
        {changes.length ? `${plural(changes.length)} from the baseline` : 'Same as the baseline'}
      </p>
      {changes.length ? (
        <>
          <ul className="compare-links">
            {changes.map((change) => (
              <li key={change.anchor}>
                <a href={`#${change.anchor}`}><ChangeTag status={change.status} />{change.label}</a>
              </li>
            ))}
          </ul>
          <p className="compare-legend">
            <ins className="diff-added">New in the experiment</ins>
            <del className="diff-removed">Baseline only</del>
          </p>
        </>
      ) : (
        <p className="compare-empty">Nothing differs yet. Every step follows the tested recipe.</p>
      )}
    </div>
  );
}

export function RecipePage() {
  const [version, setVersion] = useRecipeVersion();
  const [completed, setCompleted] = useChecklist();
  const comparing = version === 'experiment';
  const view = views[version];
  const steps = view.steps.filter((step) => step.status !== 'removed');
  const completedSteps = steps.filter((step) => completed.includes(step.id)).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  const motherRefrigerated = completed.includes('mother-refrigerated');
  const refresh = view.motherRefresh;
  function toggleStep(id: string, checked: boolean) {
    setCompleted((current) =>
      checked ? [...new Set([...current, id])] : current.filter((item) => item !== id),
    );
  }

  return (
    <main data-version={version}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sourdough home">
          <span className="brand-mark"><Wheat aria-hidden="true" /></span>
          <span className="brand-name">Sourdough</span>
        </a>
        <fieldset className="version-switch" data-version={version}>
          <legend className="sr-only">Recipe version</legend>
          <button type="button" aria-pressed={!comparing} onClick={() => setVersion('baseline')}>
            <BadgeCheck aria-hidden="true" /> Baseline
          </button>
          <button type="button" aria-pressed={comparing} onClick={() => setVersion('experiment')}>
            <FlaskConical aria-hidden="true" /> Experiment
            {experimentChanges > 0 && (
              <span className="version-count"><span className="sr-only">, </span>{experimentChanges}<span className="sr-only"> {experimentChanges === 1 ? 'change' : 'changes'}</span></span>
            )}
          </button>
        </fieldset>
        <a className="header-action" href="#workflow">Start baking <ChevronRight aria-hidden="true" /></a>
      </header>

      <section id="top" className="recipe-intro shell">
        <div className="recipe-intro-main">
          <div className="recipe-intro-copy">
            <p className="eyebrow version-eyebrow"><span /> {comparing ? 'Experiment · the next loaf' : 'Baseline · tested best'}</p>
            <h1 className="font-display">Whole-wheat sourdough</h1>
            <p className="version-note">
              {comparing
                ? experimentChanges
                  ? `The trial for the next loaf. Its ${plural(experimentChanges)} from the baseline are highlighted.`
                  : 'The trial for the next loaf. It matches the baseline for now.'
                : 'The tested recipe: the best loaf so far.'}
            </p>
          </div>
          <a className="primary-link" href="#workflow">Open checklist <ChevronRight /></a>
        </div>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="shell">
          <h2 className="sr-only">{comparing ? 'Experiment' : 'Baseline'} bake checklist</h2>
          <div className="workflow-toolbar">
            {comparing && <ComparisonSummary changes={view.changes} />}
            <div className="progress-copy" aria-live="polite"><strong>{completedSteps} of {steps.length}</strong><span>steps complete</span><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
          </div>
          <div className="steps-list">
            {view.steps.map((step) => {
              const Icon = step.icon;
              if (step.status === 'removed') {
                return (
                  <article key={`removed-${step.id}`} id={stepAnchor(step.id)} className="step-card is-removed">
                    <div className="step-number" aria-hidden="true">—</div><div className="step-icon"><Icon aria-hidden="true" /></div>
                    <div className="step-copy">
                      <StepContent step={step} />
                      <p className="step-cue">The experiment skips this baseline step.</p>
                    </div>
                  </article>
                );
              }
              const checked = completed.includes(step.id);
              return (
                <Fragment key={step.id}>
                  <article id={stepAnchor(step.id)} className={cn('step-card', checked && 'complete', step.status !== 'same' && `is-${step.status}`)}>
                    <div className="step-number">{String(step.number).padStart(2, '0')}</div><div className="step-icon"><Icon aria-hidden="true" /></div>
                    <div className="step-copy"><StepContent step={step} /></div>
                    <label className="step-check" htmlFor={`step-${step.id}`}><Checkbox id={`step-${step.id}`} checked={checked} onCheckedChange={(value) => toggleStep(step.id, value)} aria-label={`Mark ${step.plainTitle} complete`} /><span>{checked ? 'Done' : 'Mark done'}</span></label>
                  </article>
                  {step.id === refresh.afterStep && (
                    <aside id={motherRefreshAnchor} className={cn('mother-task', motherRefrigerated && 'is-complete', refresh.changed && 'is-changed')} aria-labelledby="mother-refresh-title">
                      <div className="mother-task-copy">
                        <div className="mother-task-heading">
                          <Snowflake aria-hidden="true" />
                          <div><p className="mother-task-label"><Rich chunks={refresh.label} /> {refresh.changed && <ChangeTag status="changed" />}</p><h3 id="mother-refresh-title"><Rich chunks={refresh.title} /></h3></div>
                        </div>
                        <p className="mother-task-flow"><strong><Rich chunks={refresh.flow} /></strong></p>
                        <RichList className="mother-task-instructions" entries={refresh.instructions} />
                      </div>
                      <label className="step-check mother-task-check" htmlFor="mother-refrigerated"><Checkbox id="mother-refrigerated" checked={motherRefrigerated} onCheckedChange={(value) => toggleStep('mother-refrigerated', value)} aria-label="Mark mother starter back in the fridge" /><span>Back in the fridge</span></label>
                    </aside>
                  )}
                </Fragment>
              );
            })}
          </div>
          <div className="checklist-footer"><p><CheckCircle2 /> Your progress is saved on this device.</p><button type="button" onClick={() => setCompleted([])}><RotateCcw /> Reset this bake</button></div>
        </div>
      </section>

      {/* Weekly care stands apart from both recipes, so it never shows comparison marks. */}
      <section id="starter" className="section shell starter-section">
        <details className="expandable-section starter-maintenance">
          <summary className="expandable-summary">
            <span className="expandable-summary-title"><span className="eyebrow"><span /> When you are not baking</span><span className="expandable-summary-heading font-display">Mother starter maintenance</span></span>
            <span className="expandable-summary-action">Weekly care</span>
          </summary>
          <div className="starter-grid mother-only">
            <article className="starter-card weekly-card">
              <div className="starter-card-heading"><Snowflake aria-hidden="true" /><div><p className="kicker">{starterMaintenance.kicker}</p><h3>{starterMaintenance.title}</h3></div></div>
              <ol className="starter-steps">
                {starterMaintenance.steps.map((step, index) => <li key={index}><Rich chunks={textChunks(step)} /></li>)}
              </ol>
            </article>
          </div>
        </details>
      </section>
    </main>
  );
}
