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
    time: '~6–12 hr to double with 20 g starter',
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
    time: '1–2 hr',
    overlap: 'Overlaps Step 1',
    icon: Wheat,
    title: 'Autolyse: hydrate the flour',
    body: 'In your mixing bowl, mix 500 g whole-wheat flour and all 450 g water until no dry pockets remain. Cover and rest for 1–2 hours. Longer is better; aim for 2 hours.',
    cue: 'Start this when Step 1 looks about 1–2 hours from ready.',
  },
  {
    id: 'mix',
    phase: 'Day 1',
    time: 'Until uniform',
    icon: Scale,
    title: 'Add starter and salt',
    body: 'In the same mixing bowl, add 100 g active starter (levain) and 11 g salt. Squeeze and fold until reasonably uniform. No kneading.',
    video: {
      url: 'https://www.youtube.com/watch?v=YOt3IJFhFCw',
      title: 'Watch: pinch and fold to mix the dough',
      caption: 'Sunrise Flour Mill · 20 seconds · YouTube',
    },
    details: [
      'The dough is at about 90.9% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
    ],
    cue: 'Cover the mixing bowl after mixing. Keep the dough in this bowl for all 2–4 fold sets.',
  },
  {
    id: 'fold-one',
    phase: 'Early bulk',
    time: '30 min after mixing',
    icon: RotateCcw,
    title: 'First fold',
    body: 'Rest the dough in the covered mixing bowl for 30 minutes after adding the starter, then do one set of four gentle folds with lightly wet hands.',
    video: {
      url: 'https://www.youtube.com/watch?v=mwtTZK7_t08',
      title: 'Watch: stretch and fold sourdough',
      caption: 'The Perfect Loaf · 29 seconds · YouTube',
    },
  },
  {
    // Keep the existing key for completing the remaining fold sets.
    id: 'fold-two',
    phase: 'Early bulk',
    time: '30 min between sets',
    icon: RotateCcw,
    title: 'Finish folding: 2–4 sets total',
    body: 'Cover the mixing bowl and rest for 30 minutes after the first fold, then do another set of four gentle folds with lightly wet hands. Do 2–4 sets total, with 30-minute covered rests between sets. More sets are better; aim for 4.',
    cue: 'After the final set, gently transfer the dough to your 2-quart proofing container and cover it. All sets and rests count toward total bulk time.',
  },
  {
    id: 'bulk',
    phase: 'Bulk fermentation',
    time: '~6–10 hr total',
    icon: FlaskConical,
    title: 'Aim for 1.4 quarts',
    body: 'Leave the dough covered and undisturbed in the proofing container. Aim for 1.4 quarts on its volume scale. The dough should look puffy and rounded, with bubbles at the edges and a gentle jiggle when you move the container. Then shape and place it in the banneton.',
    cue: 'If it still looks dense and tight, give it more time and recheck. If it starts to sink or collapse, shape now.',
  },
  {
    id: 'shape',
    phase: 'Day 1',
    time: '10 min rest',
    icon: Circle,
    title: 'Shape and place in the banneton',
    body: 'Use your cotton banneton without dusting it with flour.',
    video: {
      url: 'https://www.youtube.com/watch?v=MPdedk9gJLQ&t=118s',
      title: 'Watch: shape a round loaf with your hands',
      caption: 'Ken Forkish · Watch 1:58–3:02 · YouTube',
    },
    details: [
      'Turn the dough onto a clean, dry counter and use your hands to form a gentle round.',
      'Rest the round uncovered for 10 minutes so it becomes easier to fold.',
      'Shape the dough. Then lift the loaf with both hands into your cotton banneton with the smooth side down and the seam side up.',
      'Do stitch shaping in the banneton: gently pull small flaps from opposite sides over the middle, alternating sides like lacing a corset, to create extra surface tension.',
      'Place the entire banneton inside a large Ziploc bag and seal it closed to keep the moisture in.',
    ],
    cue: 'If dough sticks to your hands, dampen them lightly. Keep the counter dry. Use a tiny dusting of flour at a sticking spot only if the dough sticks enough to tear. Stop tightening if the outer skin starts to tear.',
  },
  {
    id: 'cold-proof',
    phase: 'Overnight',
    time: '12–24 hr at ~38°F',
    icon: Snowflake,
    title: 'Cold-proof overnight',
    body: 'Keep the bag sealed and refrigerate immediately for 12–24 hours. Aim near 12 hours for a milder loaf, or closer to 24 hours for more tang. Bake directly from the refrigerator.',
    cue: 'Choose your bake time within the 12–24-hour range. Start Step 9 at least 60 minutes before you plan to bake, and keep the loaf refrigerated until the Dutch oven is ready.',
  },
  {
    id: 'preheat',
    phase: 'Day 2',
    time: 'At least 60 min',
    overlap: 'Overlaps Step 8',
    icon: Flame,
    title: 'Preheat the Dutch oven and pizza stone',
    body: 'Line the bottom of the Dutch oven with one layer of aluminum foil, then preheat it with the pizza stone at 475°F for at least 60 minutes.',
    details: [
      'While the Dutch oven is cold, lay one sheet of foil across the bottom and smooth it flat.',
      'Put the pizza stone on a separate rack directly below the Dutch oven. Leave the foil lining in the pot during the preheat and bake.',
    ],
    cue: 'Keep the loaf refrigerated until your chosen 12–24-hour proof and the preheat are complete.',
  },
  {
    id: 'load',
    phase: 'Day 2',
    time: 'After 12–24 hr',
    icon: CookingPot,
    title: 'Score and load the loaf',
    body: 'When your chosen 12–24-hour cold proof is complete and the Dutch oven is fully preheated, take the loaf from the refrigerator.',
    details: [
      'Cut a sheet of parchment paper large enough to use as a sling.',
      'Invert the cold loaf from the banneton onto the parchment. The seam that faced up in the banneton is now underneath; the smooth side faces up.',
      'Score the smooth top—not the seam side—with one decisive ½-inch-deep slash at a 30–45° angle. Start about 1 inch in from one edge and stop about 1 inch before the opposite edge.',
      'Remove the hot Dutch oven. Use the parchment as a sling to lower the scored loaf onto the foil lining, then put the lid on.',
    ],
    cue: 'The Dutch oven and lid are extremely hot. Use dry oven mitts and keep your hands clear of the iron.',
  },
  {
    id: 'covered-bake',
    phase: 'Bake',
    time: '30 min covered',
    icon: CookingPot,
    title: 'Bake covered at 450°F',
    body: 'Lower the oven to 450°F and bake with the lid on for 30 minutes. The covered bake traps steam so the loaf can expand.',
  },
  {
    id: 'uncovered-bake',
    phase: 'Bake',
    time: '20 min uncovered',
    icon: Flame,
    title: 'Finish uncovered at 425°F',
    body: 'Remove the lid, lower the oven to 425°F, and bake for 20 minutes. The uncovered bake lets the crust dry and brown. Then remove the loaf from the oven.',
  },
  {
    id: 'cool',
    phase: 'Finish',
    time: 'At least 3 hr',
    icon: Sparkles,
    title: 'Let the crumb set',
    body: 'Cool the loaf for at least 3 hours before slicing. Whole-wheat bread needs this time to finish setting inside.',
    cue: 'Cutting early can make a properly baked loaf seem gummy.',
  },
];

const diagnoses = [
  ['Dense, tight crumb + little oven rise', 'If the dough was also tight and poorly aerated at shaping, let bulk go a little longer next bake. Small holes alone are normal in whole-wheat bread.'],
  ['Loose, flat loaf + little oven rise', 'If the dough developed strength but then became progressively weaker or collapsed late in bulk, shape a little earlier next bake. If it was loose from the start, check dough strength, water amount, and shaping first.'],
  ['Fully cooled crumb is wet or gummy', 'If the loaf cooled for at least 3 hours and the dough was airy and held together at shaping, try 5 more minutes covered next bake. If the dough was tight or collapsing at shaping, review fermentation first.'],
  ['Fully cooled crumb is dry', 'If the crumb is dry throughout when freshly baked and fully cooled, try 5 fewer minutes covered next bake.'],
  ['Crust too thick or hard', 'If the cooled crumb is well baked and moist, try shifting 5 minutes from uncovered to covered next bake. Keep total bake time the same and compare the result.'],
  ['Crust too soft or not crisp enough', 'If the crust is still too soft after cooling uncovered, try shifting 5 minutes from covered to uncovered next bake. Keep total bake time the same and compare the result.'],
  ['Crust too dark', 'If the finished crust is too dark for your taste, try lowering the uncovered temperature by 25°F next bake. Keep the bake time as your first trial.'],
  ['Crust too pale', 'If the finished crust is pale and the cooled crumb is moist and well baked, try 5 more minutes uncovered next bake. If the crumb is already too dry, try raising the uncovered temperature by 25°F instead.'],
  ['Good structure, want more tang', 'Try a cold proof closer to 24 hours. A longer proof can develop more acidity; compare the flavor next bake.'],
  ['Good structure, want less tang', 'Try a cold proof closer to 12 hours, at the shorter end of the range.'],
  ['Good structure, flavor tastes flat', 'Use 1 g more salt next time.'],
  ['Good structure, tastes too salty', 'Use 1 g less salt next time.'],
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
          <a href="#starter">Starter</a><a href="#workflow">Workflow</a><a href="#troubleshooting">Troubleshooting</a>
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
          <ol className="schedule-list">
            <li>
              <h3>Starter build</h3>
              <strong>~6–12 hr to double with 20 g starter</strong>
              <p>Wait for near-peak readiness. Start the 1–2-hour autolyse when the build looks about 1–2 hours from ready. Longer is better; aim for 2 hours.</p>
            </li>
            <li>
              <h3>Mix and bulk</h3>
              <strong>~6–10 hr from starter addition</strong>
              <p>Mix and do 2–4 fold sets in the mixing bowl, with 30-minute rests between sets. More sets are better; aim for 4. After the final set, transfer to the proofing container and cover it. Aim for 1.4 quarts, using the visual cues in Step 6. All sets and rests count toward total bulk time.</p>
            </li>
            <li>
              <h3>Shape</h3>
              <strong>Bench rest: 10 min</strong>
              <p>Form a gentle round. Rest uncovered for 10 minutes, then do the final shape. Place it in the banneton, do stitch shaping, seal the bag, and refrigerate.</p>
            </li>
            <li>
              <h3>Cold proof</h3>
              <strong>12–24 hr at ~38°F</strong>
              <p>Aim near 12 hours for a milder loaf, or closer to 24 hours for more tang. Line the bottom of the Dutch oven with one layer of foil, then preheat it with the pizza stone at 475°F for at least the final 60 minutes.</p>
            </li>
            <li>
              <h3>Bake</h3>
              <strong>30 min covered + 20 min uncovered</strong>
              <p>Bake at 450°F covered, then 425°F uncovered. Then remove the loaf from the oven.</p>
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
          <div className="parallel-prep" aria-label="Steps 1 and 2 can overlap">
            <div className="parallel-copy"><p className="kicker">Prep in parallel</p><strong>Start Step 2 when the starter looks about 1–2 hours from ready.</strong><span>The ripe baking build and autolyse must both be ready for Step 3.</span><a className="parallel-side-link" href="#mother-refresh">Mother-starter care has its own timeline <ChevronRight aria-hidden="true" /></a></div>
            <div className="parallel-timeline" aria-hidden="true">
              <div className="timeline-row starter-line"><b>1 · Starter build</b><i /><span>Ready</span></div>
              <div className="timeline-row overlap-line"><b>2 · Autolyse</b><i /><span>1–2 hr</span></div>
              <div className="timeline-merge"><ChevronRight /> Step 3 · Mix</div>
            </div>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => {
              const Icon = step.icon; const checked = completed.includes(step.id);
              return (
                <Fragment key={step.id}>
                  {step.id === 'cold-proof' && (
                    <div className="parallel-prep" aria-label="Steps 8 and 9 can overlap">
                      <div className="parallel-copy"><p className="kicker">Preheat in parallel</p><strong>Start Step 9 at least 60 minutes before your planned bake time.</strong><span>Keep the loaf cold. Both steps finish before Step 10.</span></div>
                      <div className="parallel-timeline" aria-hidden="true">
                        <div className="timeline-row"><b>8 · Cold proof</b><i /><span>12–24 hr</span></div>
                        <div className="timeline-row overlap-line"><b>9 · Preheat</b><i /><span>60+ min</span></div>
                        <div className="timeline-merge"><ChevronRight /> Step 10 · Score and load</div>
                      </div>
                    </div>
                  )}
                  <article className={`step-card ${checked ? 'complete' : ''}`}>
                    <div className="step-number">{String(index + 1).padStart(2, '0')}</div><div className="step-icon"><Icon aria-hidden="true" /></div>
                  <div className="step-copy"><p className="step-meta"><span>{step.phase}</span>{step.time}{step.overlap && <b className="overlap-badge">{step.overlap}</b>}</p><h3>{step.title}</h3><p>{step.body}</p>
                    {step.video && <a className="step-video" href={step.video.url} target="_blank" rel="noopener noreferrer"><span><strong>{step.video.title}</strong><span>{step.video.caption}</span></span><ChevronRight aria-hidden="true" /></a>}
                    {step.details && <ol className="step-substeps">{step.details.map((detail) => <li key={detail}>{detail}</li>)}</ol>}{step.cue && <p className="step-cue">{step.cue}</p>}</div>
                    <label className="step-check" htmlFor={`step-${step.id}`}><Checkbox id={`step-${step.id}`} checked={checked} onCheckedChange={(value) => toggleStep(step.id, value)} aria-label={`Mark ${step.title} complete`} /><span>{checked ? 'Done' : 'Mark done'}</span></label>
                  </article>
                  {step.id === 'starter' && (
                    <aside id="mother-refresh" className={`mother-task ${motherRefrigerated ? 'is-complete' : ''}`} aria-labelledby="mother-refresh-title">
                      <div className="mother-task-copy">
                        <div className="mother-task-heading">
                          <Snowflake aria-hidden="true" />
                          <div><p className="mother-task-label">Alongside the bake</p><h3 id="mother-refresh-title">Refresh the mother starter</h3></div>
                        </div>
                        <p className="mother-task-flow"><strong>Keep making the loaf while this jar rests.</strong></p>
                        <ol className="mother-task-instructions">
                          <li><strong>Feed at 1:3:3.</strong> Put around 20 g of ripe build into the clean mother jar. Add three times its actual weight in water and in fresh flour.</li>
                          <li><strong>Rest, then refrigerate.</strong> Mix and cover. Let it rest in your 70°F pantry. {motherStorageGuidance}</li>
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

      <section id="troubleshooting" className="section shell troubleshooting-section">
        <details className="expandable-section troubleshooting-details">
          <summary className="expandable-summary">
            <span className="expandable-summary-title"><span className="eyebrow"><span /> After the bake</span><span className="expandable-summary-heading font-display">Troubleshooting</span></span>
            <span className="expandable-summary-action">Adjust next loaf</span>
          </summary>
          <div className="diagnosis-card"><p className="panel-note">Judge the finished loaf after at least 3 hours of cooling. Earlier dough observations can help identify the cause. Once you choose an adjustment, update the recipe for the next bake. Change one thing at a time and compare the result.</p><div className="diagnosis-list">{diagnoses.map(([signal, adjustment]) => <div key={signal}><strong>{signal}</strong><span><ChevronRight />{adjustment}</span></div>)}</div></div>
        </details>
      </section>
    </main>
  );
}
