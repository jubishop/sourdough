'use client';

import { Fragment } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Circle,
  CookingPot,
  Flame,
  FlaskConical,
  RotateCcw,
  Scale,
  Snowflake,
  Sparkles,
  Sprout,
  Wheat,
} from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import { useChecklist } from '@/hooks/use-checklist';

const starterInspection = 'Discard the entire starter if you see mold or pink/orange streaks.';
const motherStorageGuidance = 'Let it develop more before refrigerating if you plan to use it again sooner.';

const steps = [
  {
    id: 'starter',
    phase: 'Evening before day 1',
    time: '~10–14 hr to at least double with 20 g starter',
    icon: Sprout,
    title: 'Wake up the starter',
    body: 'Make the baking build in a separate temporary container so you can clean the mother jar while it ripens.',
    details: [
      starterInspection,
      'Take the mother starter from the refrigerator. Move 20–60 g into the temporary container; discard what remains in the mother jar.',
      'Add 60 g water + 60 g flour. Use less mother starter when you have more time and more when you want the build ready sooner.',
      'Wash and dry the empty mother jar while the build ripens at your pantry temperature.',
    ],
  },
  {
    id: 'autolyse',
    phase: 'Day 1',
    time: '30 min–2 hr',
    icon: Wheat,
    title: 'Autolyse: hydrate the flour',
    body: 'In your mixing bowl, mix 500 g whole-wheat flour and all 450 g water until no dry pockets remain. Cover and rest for 30 minutes to 2 hours.',
  },
  {
    id: 'mix',
    phase: 'Day 1',
    time: 'Until uniform',
    icon: Scale,
    title: 'Add starter and salt',
    body: 'In the same mixing bowl, add 100 g active starter (levain) and 11 g salt. Squeeze and mix until reasonably uniform.',
    details: [
      'The dough is at about 90.9% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
    ],
  },
  {
    id: 'slap-and-fold',
    phase: 'Day 1',
    time: 'First immediately · then at least 15 min apart',
    icon: RotateCcw,
    title: 'Stretch and fold as needed',
    body: 'Do the first stretch and fold immediately after mixing in the salt and levain. Then repeat as needed, waiting at least 15 minutes between sets.',
    cue: 'Keep the dough covered in the mixing bowl between repeats. Before transferring the dough, rub a very light film of oil over the inside of your 2-quart proofing container to help the dough release easily later. After your last stretch and fold, gently transfer the dough to the container and cover it.',
  },
  {
    id: 'bulk',
    phase: 'Bulk fermentation',
    time: '~6–10 hr total',
    icon: FlaskConical,
    title: 'Aim for 1.2 L at the glass edge',
    body: 'Leave the dough covered and undisturbed in the proofing container. Aim for 1.2 L where the dough meets the glass. Fermentation will make the center noticeably higher. The dough should look puffy and rounded, with bubbles at the edges and a gentle jiggle when you move the container. Then shape and place it in the banneton.',
    cue: 'If it still looks dense and tight, give it more time and recheck. If it starts to sink or collapse, shape now.',
  },
  {
    id: 'shape',
    phase: 'Day 1',
    time: 'After bulk',
    icon: Circle,
    title: 'Shape and place in the banneton',
    body: 'Use your cotton banneton without dusting it with flour.',
    details: [
      'Gently tilt the proofing container and let gravity ease the dough onto a clean, dry counter. Use a bench scraper to release any sticking dough, disturbing it as little as possible.',
      'Shape the dough. Then lift the loaf with both hands into your cotton banneton with the smooth side down and the seam side up.',
      'Place the entire banneton inside a large Ziploc bag and seal it closed to keep the moisture in.',
    ],
  },
  {
    id: 'cold-proof',
    phase: 'Overnight',
    time: '8–16 hr at ~38°F',
    icon: Snowflake,
    title: 'Cold-proof overnight',
    body: 'Keep the bag sealed and refrigerate immediately for 8–16 hours. Bake directly from the refrigerator.',
  },
  {
    id: 'preheat',
    phase: 'Day 2',
    time: 'At least 60 min',
    icon: Flame,
    title: 'Preheat the Dutch oven and pizza stone',
    body: 'Prepare the foil base, then preheat the Dutch oven with the pizza stone at 500°F for at least 60 minutes.',
    details: [
      'While the Dutch oven is cold, loosely crumple a long sheet of aluminum foil, then shape and flatten it into a level pad about ¼ inch thick. Fit it over only the flat bottom and leave it in place during preheating and baking.',
      'Put the pizza stone on a separate rack directly below the Dutch oven.',
    ],
    cue: 'Keep the loaf refrigerated until the Dutch oven is ready.',
  },
  {
    id: 'load',
    phase: 'Day 2',
    time: 'After 8–16 hr',
    icon: CookingPot,
    title: 'Score and load the loaf',
    body: 'When your chosen 8–16-hour cold proof is complete and the Dutch oven is fully preheated, take the loaf from the refrigerator.',
    details: [
      'Cut a piece of parchment paper large enough to hold the loaf, with two long ends to use as handles. Center it over the open banneton, hold it in place, and invert both together.',
      'Set the loaf on your work surface with the parchment underneath, then gently lift off the banneton. The seam is now underneath, and the smooth side faces up.',
      'Score a box in the smooth top with four straight cuts that join at the corners. Keep each corner about 1 inch in from the edge of the dough. Hold the blade straight down and cut ½ inch deep.',
      'Remove the hot Dutch oven. Use the parchment handles to lower the scored loaf onto the foil pad, then put the lid on. Leave the parchment under the loaf during baking.',
    ],
    cue: 'The Dutch oven and lid are extremely hot. Use dry oven mitts and keep your hands clear of the iron.',
  },
  {
    id: 'covered-bake',
    phase: 'Bake',
    time: '30 min covered',
    icon: CookingPot,
    title: 'Bake covered at 475°F',
    body: 'Lower the oven to 475°F and bake with the lid on for 30 minutes. The covered bake traps steam so the loaf can expand.',
  },
  {
    id: 'uncovered-bake',
    phase: 'Bake',
    time: '22 min uncovered',
    icon: Flame,
    title: 'Finish uncovered at 445°F',
    body: 'Remove the lid, lower the oven to 445°F, and bake for 22 minutes. The uncovered bake lets the crust dry and brown. Then remove the loaf from the oven.',
  },
  {
    id: 'cool',
    phase: 'Finish',
    time: 'At least 3 hr',
    icon: Sparkles,
    title: 'Let the crumb set',
    body: 'Remove the loaf from the Dutch oven and cool uncovered on a wire rack for at least 3 hours before slicing. Let it cool longer if it is still warm.',
    cue: 'Cutting early can make a properly baked loaf seem gummy.',
  },
];

export function RecipePage() {
  const [completed, setCompleted] = useChecklist();
  const completedSteps = steps.filter((step) => completed.includes(step.id)).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  const motherRefrigerated = completed.includes('mother-refrigerated');
  function toggleStep(id: string, checked: boolean) {
    setCompleted((current) =>
      checked ? [...new Set([...current, id])] : current.filter((item) => item !== id),
    );
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sourdough home">
          <span className="brand-mark"><Wheat aria-hidden="true" /></span>
          <span>Sourdough</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#starter">Starter</a><a href="#workflow">Workflow</a>
        </nav>
        <a className="header-action" href="#workflow">Start baking <ChevronRight aria-hidden="true" /></a>
      </header>

      <section id="top" className="recipe-intro shell">
        <div className="recipe-intro-main">
          <h1 className="font-display">Whole-wheat sourdough</h1>
          <a className="primary-link" href="#workflow">Open checklist <ChevronRight /></a>
        </div>
        <section className="schedule-overview" aria-labelledby="schedule-title">
          <h2 id="schedule-title" className="font-display">Plan your bake</h2>
          <p className="schedule-intro">Starter and bulk times are planning estimates for your 70°F pantry. Use the readiness cues in the checklist.</p>
          <p className="schedule-intro"><strong>Oven adjustment:</strong> My oven runs 25°F cool. All oven temperatures below are the settings I use to compensate. For an oven that heats accurately, set it 25°F lower.</p>
          <ol className="schedule-list">
            <li>
              <h3>Starter build</h3>
              <strong>~10–14 hr to at least double with 20 g starter</strong>
              <p>Wait for near-peak readiness.</p>
            </li>
            <li>
              <h3>Mix and bulk</h3>
              <strong>~6–10 hr from starter addition</strong>
              <p>Mix the salt and levain, then do the first stretch and fold immediately. Repeat as needed in Step 4, waiting at least 15 minutes between sets and covering the mixing bowl between repeats. Rub a very light film of oil over the inside of the proofing container to help the dough release easily later. After the last fold, transfer the dough to the container, cover, and leave undisturbed. Aim for 1.2 L at the glass edge, using the visual cues in Step 5.</p>
            </li>
            <li>
              <h3>Shape</h3>
              <strong>After bulk</strong>
              <p>Gently release the dough from the proofing container with a bench scraper and gravity. Shape it, place it in the banneton, seal the bag, and refrigerate.</p>
            </li>
            <li>
              <h3>Cold proof</h3>
              <strong>8–16 hr at ~38°F</strong>
              <p>Keep the bag sealed and refrigerate.</p>
            </li>
            <li>
              <h3>Bake</h3>
              <strong>30 min covered + 22 min uncovered</strong>
              <p>Prepare the foil pad in the cold Dutch oven, then preheat it with the pizza stone at 500°F for at least 60 minutes. Keep the loaf refrigerated until the Dutch oven is ready. Bake at 475°F covered, then 445°F uncovered. Then remove the loaf from the oven.</p>
            </li>
            <li>
              <h3>Cool</h3>
              <strong>At least 3 hr</strong>
              <p>Cool uncovered on a wire rack before slicing.</p>
            </li>
          </ol>
        </section>
      </section>

      <section id="starter" className="section shell starter-section">
        <details className="expandable-section starter-maintenance">
          <summary className="expandable-summary">
            <span className="expandable-summary-title"><span className="eyebrow"><span /> When you are not baking</span><span className="expandable-summary-heading font-display">Mother starter maintenance</span></span>
            <span className="expandable-summary-action">Weekly care</span>
          </summary>
          <div className="starter-grid mother-only">
            <article className="starter-card weekly-card">
              <div className="starter-card-heading"><Snowflake aria-hidden="true" /><div><p className="kicker">Keep it ready</p><h3>Feed it weekly</h3></div></div>
              <ol className="starter-steps">
                <li>Feed the mother starter about once a week. A mother-starter refresh on a bake day counts as that feeding.</li>
                <li>{starterInspection}</li>
                <li>Take it from the refrigerator and move around <strong>20 g</strong> into the temporary container. Weigh the amount you actually transfer, discard the rest, and wash and dry the mother jar.</li>
                <li>Return the reserved starter to the mother jar. Feed at <strong>1:3:3 by weight: 1 part starter, 3 parts water, and 3 parts fresh flour</strong>. Add three times the starter’s actual weight in both water and fresh flour. For example: 20 g starter + 60 g water + 60 g flour, making 140 g total.</li>
                <li>Mix and cover. Let it rest in your <strong>70°F pantry</strong>, then refrigerate. {motherStorageGuidance}</li>
              </ol>
            </article>
          </div>
        </details>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="shell">
          <h2 className="sr-only">Bake checklist</h2>
          <div className="workflow-toolbar">
            <div className="progress-copy" aria-live="polite"><strong>{completedSteps} of {steps.length}</strong><span>steps complete</span><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => {
              const Icon = step.icon; const checked = completed.includes(step.id);
              return (
                <Fragment key={step.id}>
                  <article className={`step-card ${checked ? 'complete' : ''}`}>
                    <div className="step-number">{String(index + 1).padStart(2, '0')}</div><div className="step-icon"><Icon aria-hidden="true" /></div>
                  <div className="step-copy"><p className="step-meta"><span>{step.phase}</span>{step.time}</p><h3>{step.title}</h3><p>{step.body}</p>
                    {step.details && <ol className="step-substeps">{step.details.map((detail) => <li key={detail}>{detail}</li>)}</ol>}{step.cue && <p className="step-cue">{step.cue}</p>}</div>
                    <label className="step-check" htmlFor={`step-${step.id}`}><Checkbox id={`step-${step.id}`} checked={checked} onCheckedChange={(value) => toggleStep(step.id, value)} aria-label={`Mark ${step.title} complete`} /><span>{checked ? 'Done' : 'Mark done'}</span></label>
                  </article>
                  {step.id === 'mix' && (
                    <aside id="mother-refresh" className={`mother-task ${motherRefrigerated ? 'is-complete' : ''}`} aria-labelledby="mother-refresh-title">
                      <div className="mother-task-copy">
                        <div className="mother-task-heading">
                          <Snowflake aria-hidden="true" />
                          <div><p className="mother-task-label">Alongside the bulk</p><h3 id="mother-refresh-title">Refresh the mother starter</h3></div>
                        </div>
                        <p className="mother-task-flow"><strong>Keep making the loaf while this jar rests.</strong></p>
                        <ol className="mother-task-instructions">
                          <li><strong>Feed at 1:3:3.</strong> Put around 20 g of ripe build into the clean mother jar. Add three times its actual weight in water and in fresh flour.</li>
                          <li><strong>Refrigerate during Step 4 or 5.</strong> Mix and cover. Let it rest in your 70°F pantry, then put it back in the fridge. {motherStorageGuidance}</li>
                        </ol>
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

    </main>
  );
}
