'use client';

import { Fragment } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock3,
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

const starterInspection = 'Discard the entire starter if you see mold or pink/orange streaks. A layer of liquid—even dark liquid—does not by itself mean the starter has spoiled.';

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
      'In your 70°F pantry, use roughly 6–12 hours from feeding to first doubling as an initial planning range for 20 g cold mother starter + 60 g pantry-temperature water + 60 g flour (1:3:3). A larger seed amount generally shortens the wait. This estimate assumes an established, reasonably active starter; peak can come later than doubling.',
      'Use roughly doubling as the usual readiness checkpoint, then look for bubbles throughout and a domed top beginning to level off near its highest rise. If your build regularly rises beyond double, let its familiar near-peak appearance guide you instead of using it at the first doubling.',
      'At 12 hours: if it has not doubled, postpone the loaf and switch to the 1:3:3 recovery routine in Mother starter maintenance. Stop the bake plan at this point; let a still-rising feed reach peak before feeding it again. This is your practical go/no-go cutoff for the 20/60/60 g build at 70°F, not a universal test of starter health. A slow first feed from the fridge may recover well with further feedings.',
      'Peak is a useful window, not an exact moment. A build that has only just started to recede can still work; if it has collapsed substantially, re-feed and let it ripen again for a more predictable bake.',
      'Once ripe, reserve around 20 g for the separate mother-starter refresh below. Keep 100 g ready for Step 3, then discard any extra.',
    ],
    cue: 'This is the checkpoint for starter strength before committing flour to the loaf. A brisk, repeatable rise here makes normal bulk timing more likely. Mark this step done when the baking build is ready; the mother-starter refresh runs separately.',
  },
  {
    id: 'autolyse',
    phase: 'Day 1',
    time: '60 min',
    overlap: 'Overlaps Step 1',
    icon: Wheat,
    title: 'Autolyse: hydrate the flour',
    body: 'Mix 500 g whole-wheat flour and all 420 g water until no dry pockets remain. Cover and rest for 60 minutes.',
    details: [
      'After the 60-minute rest, check whether the dough feels smoother and stretches more easily.',
      'If it remains stiff or tears easily, try 75 minutes next time. If it becomes slack or weak, try 45 minutes next time.',
    ],
    cue: 'Start this when Step 1 looks about 60 minutes from ready.',
  },
  {
    id: 'mix',
    phase: 'Day 1',
    time: 'Until uniform',
    icon: Scale,
    title: 'Add starter, salt, and take a sample',
    body: 'Add 100 g active starter and 11 g salt. Squeeze and fold until reasonably uniform. No kneading.',
    video: {
      url: 'https://www.youtube.com/watch?v=YOt3IJFhFCw',
      title: 'Watch: pinch and fold to mix the dough',
      caption: 'Sunrise Flour Mill · 20 seconds · YouTube',
    },
    details: [
      'The dough is at about 85.5% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
      'Take the sample immediately after the starter and salt are fully mixed in.',
      'Use the vacuum pump to draw dough into the tube and establish its 0% starting level.',
      'Keep the filled tube beside the bowl at the same temperature. Do not disturb it or return the sample to the loaf.',
    ],
    cue: 'The printed scale shows the rise directly—no millimeter conversion is needed.',
  },
  {
    // Keep the former folding-complete key so saved progress remains accurate.
    id: 'fold-two',
    phase: 'Early bulk',
    time: 'Check every ~30 min',
    icon: RotateCcw,
    title: 'Fold every 30 minutes as needed',
    body: 'Keep the bowl covered on the counter for 30 minutes after adding the starter, then give the dough one gentle fold set. Cover and rest about 30 minutes between further sets, repeating only while the dough needs more strength.',
    video: {
      url: 'https://www.youtube.com/watch?v=mwtTZK7_t08',
      title: 'Watch: stretch and fold sourdough',
      caption: 'The Perfect Loaf · 29 seconds · YouTube',
    },
    details: [
      'Follow the video for one set of four folds, using lightly wet hands. Keep each stretch gentle and stop when the dough resists; do not force it or tear it.',
      'If it looks smoother and stays gathered with rounded edges after the rest, stop folding. One set may be enough. Some spreading is normal; this wet whole-wheat dough does not need to stay in a tight ball.',
      'If it still feels slack and quickly flattens after the rest, give it another gentle set, cover, and check again in about 30 minutes.',
      'Keep these folds within roughly the first 2 hours after adding the starter. Stop sooner if the dough is already puffy and airy. If it remains loose at that point, stop folding and follow the bulk checks in Step 5; do not keep folding through the whole rise.',
      'If the dough remains unusually stiff or tears easily after trying the longer autolyse, use 10–20 g more water on a later loaf.',
    ],
    cue: 'Mark this step done when folding is finished, even if only the first set was needed. Leave the dough covered and undisturbed for the rest of bulk. All folds and rests count toward total bulk time. Keep the aliquot sample undisturbed throughout.',
  },
  {
    id: 'bulk',
    phase: 'Bulk fermentation',
    time: '~6–10 hr total',
    icon: FlaskConical,
    title: 'Aim for a 40–50% rise',
    body: 'Aim for 40–50% rise on the tube’s printed scale. Check the main dough too: it should look inflated and rounded, with bubbles at the edges and a gentle jiggle.',
    details: [
      'Ready feels airy and softly bouncy, with enough elasticity to hold together. Airiness is a good sign; dough becoming progressively weaker, tearing easily, or collapsing is a reason to shape sooner. Stickiness alone does not mean it has gone too far.',
      'If it is still tight and poorly aerated at the target, give it more time and recheck.',
      'At 10 hours of total bulk: if the sample is still below 40%, check the actual dough temperature and that the intended starter amount was added. Note the sample level and check again at 12 hours. Little or no further rise over those 2 hours, together with few bubbles, is a stalled-progress flag. These checkpoints prompt troubleshooting; they do not prove the starter is weak.',
      'A brisk Step 1 build makes starter weakness less likely. If this dough is still gaining volume and holding together, give it more time. If it is losing strength or collapsing, shape promptly rather than waiting for a number. There is no reliable clock-only cutoff for abandoning a mixed loaf. Before the next bake, test the reserved starter with the timed 1:3:3 recovery routine if bulk was persistently sluggish; refeeding helps the starter for that future loaf.',
      'Underfermentation means the dough needed more fermentation time before baking. In the cooled loaf, look for unusually dense areas, sometimes with a few large holes or tunnels surrounded by tight crumb. Whole-wheat bread naturally has a tighter crumb, so small holes alone do not prove underfermentation. If these signs agree with dough that was tight at shaping, try 5–10 percentage points more rise next loaf—for example, 50% to 55–60%—while keeping other variables steady.',
      'If the dough loses strength before your target, shape now rather than chasing the number. If that pattern and a flat, weak loaf repeat, try 5–10 percentage points less rise next time.',
      'Warmer dough keeps fermenting faster while it cools in the fridge, so it generally needs an earlier cutoff; cooler dough may tolerate more rise. Pantry temperature helps compare bakes, but actual dough temperature controls fermentation. Whole-wheat dough may show less rise than white dough: do not automatically wait for doubling.',
    ],
  },
  {
    id: 'shape',
    phase: 'Day 1',
    time: '10–20 min, as needed',
    icon: Circle,
    title: 'Shape and place in the banneton',
    body: 'Use your cotton banneton without dusting it with flour.',
    video: {
      url: 'https://www.youtube.com/watch?v=0zCPoagZk4Q',
      title: 'Watch: shape a round loaf with a bench scraper',
      caption: 'Alexandra’s Kitchen · 58 seconds · YouTube',
    },
    details: [
      'Turn the dough onto a clean, dry counter without flour and use a bench scraper to form a gentle round.',
      'Rest the round uncovered for 10 minutes so it becomes easier to fold. Skip the rest if it is already loose and easy to fold. Cover it if the surface starts to form a dry skin.',
      'Check by gently stretching one edge a short distance. If it resists and pulls back strongly, rest another 5 minutes, then check again. Repeat once if needed, for about 20 minutes total.',
      'If the edge stretches and folds easily while the dough remains a rounded mound, stop resting and shape using the video. A little spreading is normal; the dough can still have some elasticity.',
      'If the dough quickly spreads wide and becomes flat, stop resting and shape promptly, even if 10 minutes have not passed.',
      'Follow the video for final shaping, then place the loaf in your cotton banneton with the smooth side down and the seam side up.',
    ],
    cue: 'If dough sticks to your hand or scraper, dampen them lightly. Keep the counter dry. Use a tiny dusting of flour at a sticking spot only if the dough sticks enough to tear. Stop tightening if the outer skin starts to tear.',
  },
  {
    id: 'cold-proof',
    phase: 'Overnight',
    time: '12–24 hr at ~38°F',
    icon: Snowflake,
    title: 'Cold-proof overnight',
    body: 'Cover and refrigerate immediately for 12–24 hours. Aim near 12 hours for a milder loaf, or closer to 24 hours for more tang. Bake directly from the refrigerator.',
    details: [
      'Longer fermentation can build more acidity and a tangier flavor. The change depends on your starter, dough, and refrigerator temperature.',
    ],
    cue: 'Choose your bake time within the 12–24-hour range. Start Step 8 at least 45 minutes before you plan to bake, and keep the loaf refrigerated until the Dutch oven is ready.',
  },
  {
    id: 'preheat',
    phase: 'Day 2',
    time: 'At least 45 min',
    overlap: 'Overlaps Step 7',
    icon: Flame,
    title: 'Preheat the Dutch oven and pizza stone',
    body: 'At least 45 minutes before your planned bake time, put the pizza stone on the rack directly below the Dutch oven. Preheat the oven, Dutch oven, and pizza stone to 475°F. You can begin earlier.',
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
      'Score the smooth top—not the seam side—with one decisive ½-inch-deep slash at a 30–45° angle.',
      'Remove the hot Dutch oven. Use the parchment as a sling to lower the scored loaf into it, then put the lid on.',
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
    cue: 'Skip added ice and water. The loaf supplies its own steam.',
  },
  {
    id: 'uncovered-bake',
    phase: 'Bake',
    time: 'Check after 15 min',
    icon: Flame,
    title: 'Finish uncovered at 425°F',
    body: 'Remove the lid, lower the oven to 425°F, and bake for 15 minutes. The uncovered bake lets the crust dry and brown. Then check the crust.',
    details: [
      'Look for a deep golden-brown crust on the exposed top and sides. Flour dusting can stay pale, so judge the crust beneath it.',
      'If the exposed crust is still pale, continue baking uncovered in 5-minute increments, checking the color each time.',
      'Crust color cannot confirm the condition of the center. After the loaf has cooled for at least 3 hours, check the crumb when slicing and use the result to refine the bake time next time.',
    ],
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
  ['Dense, tight crumb + little oven rise', 'If the dough was also tight and poorly aerated at shaping, try 5–10 percentage points more rise next bake. Small holes alone are normal in whole-wheat bread.'],
  ['Loose, flat loaf + little oven rise', 'If the dough developed strength but then became progressively weaker or collapsed late in bulk, try 5–10 percentage points less rise next bake. If it was loose from the start, check dough strength, water amount, and shaping first.'],
  ['Fully cooled crumb is wet or gummy', 'If the loaf cooled for at least 3 hours and the dough was airy and held together at shaping, try 5 more minutes covered next bake. If the dough was tight or collapsing at shaping, review fermentation first.'],
  ['Fully cooled crumb is dry', 'If the crumb is dry throughout when freshly baked and fully cooled, try 5 fewer minutes covered next bake. Still follow the visual crust check in Step 11.'],
  ['Crust too thick or hard', 'If the cooled crumb is well baked and moist, try shifting 5 minutes from uncovered to covered next bake. Keep total bake time the same and compare the result.'],
  ['Crust too soft or not crisp enough', 'If the crust is still too soft after cooling uncovered, try shifting 5 minutes from covered to uncovered next bake. Keep total bake time the same and compare the result.'],
  ['Crust too dark', 'If the finished crust is too dark for your taste, try lowering the uncovered temperature by 25°F next bake. Keep the bake time as your first trial.'],
  ['Crust too pale', 'If the finished crust is pale and the cooled crumb is moist and well baked, try 5 more minutes uncovered next bake. If the crumb is already too dry, try raising the uncovered temperature by 25°F instead.'],
  ['Good structure, want more tang', 'Try a cold proof closer to 24 hours. A longer proof can develop more acidity; compare the flavor next bake.'],
  ['Good structure, want less tang', 'Try a cold proof closer to 12 hours, at the shorter end of the range.'],
  ['Good structure, flavor tastes flat', 'Use 1 g more salt next time.'],
  ['Good structure, tastes too salty', 'Use 1 g less salt next time.'],
];

function MotherStorageGuidance() {
  return (
    <div className="mother-storage-guide">
      <table>
        <caption>Choose the rest by when you will next use the mother</caption>
        <thead><tr><th scope="col">Next use</th><th scope="col">Before refrigerating</th></tr></thead>
        <tbody>
          <tr><th scope="row">Within a few days</th><td>Let it rise substantially toward peak. Roughly doubled and still rising is a practical target; doubling may come before its actual peak, so you do not need to chase its maximum height.</td></tr>
          <tr><th scope="row">Around a week</th><td>Refrigerate earlier in its rise to leave more food for storage. About 1–2 hours at 70°F is a reasonable starting point; small new bubbles or slight expansion are useful cues, but a healthy starter may show little visible change.</td></tr>
          <tr><th scope="row">Several weeks or longer</th><td>Refrigerate soon after feeding, once fermentation has begun. Plan on refreshment feedings at room temperature before the next bake; for longer breaks, consider drying a backup.</td></tr>
        </tbody>
      </table>
      <p>These are flexible guidelines, not deadlines. If your plans are uncertain, a substantial rise while it is still growing is a reasonable compromise. The fridge slows fermentation gradually; it does not hold the starter at peak. A longer warm rest lets the microbes multiply, but also uses more food and develops more acidity.</p>
      <p>You will feed a portion of cold mother to build a fresh levain in Step 1, so the mother does not need to come out of storage at peak. Judge readiness by that new build, and use recovery feedings if it is sluggish.</p>
    </div>
  );
}

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
              <p>Wait for near-peak readiness. Start the 60-minute autolyse when the build looks about an hour from ready.</p>
            </li>
            <li>
              <h3>Mix and bulk</h3>
              <strong>~6–10 hr from starter addition</strong>
              <p>This includes the folds and rests. Aim for 40–50% rise and use the dough cues to decide when to shape.</p>
            </li>
            <li>
              <h3>Shape</h3>
              <strong>Bench rest: 10–20 min, as needed</strong>
              <p>Form a gentle round. Rest only until the dough is easy to fold, then do the final shape and refrigerate. Shape promptly if it quickly spreads flat.</p>
            </li>
            <li>
              <h3>Cold proof</h3>
              <strong>12–24 hr at ~38°F</strong>
              <p>Aim near 12 hours for a milder loaf, or closer to 24 hours for more tang. Preheat the oven, Dutch oven, and pizza stone to 475°F for at least the final 45 minutes.</p>
            </li>
            <li>
              <h3>Bake</h3>
              <strong>30 min covered + 15 min to first crust check</strong>
              <p>Bake at 450°F covered, then 425°F uncovered. If the crust is still pale, continue in 5-minute increments.</p>
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
                <li>Mix, cover, and mark the starting level. Let it rest in your <strong>70°F pantry</strong>, choosing how far to let it rise from the guide below, then refrigerate.</li>
              </ol>
              <MotherStorageGuidance />
              <div className="starter-note"><strong>Has the mother started to fall?</strong><p>A slight fall after peak is normal. Continue with the usual 1:3:3 feeding. If it has been neglected or the next feed rises weakly, use the recovery routine below. Judge its strength by how it responds to fresh food, rather than by its appearance coming out of the refrigerator.</p></div>
              <div className="starter-note"><strong>Is it sluggish?</strong><p>If it has been neglected or its baking builds rise weakly, keep it at room temperature for recovery feedings at <strong>1:3:3 by weight: 1 part starter, 3 parts water, and 3 parts fresh flour.</strong> For example, keep 20 g starter and add 60 g water + 60 g flour, making 140 g total. At each new feeding, retain a small portion and discard the rest, then add three times the retained weight in both water and flour.</p><p>Mark the starting level and note when it doubles. Let each feed reach its highest rise, with the top leveling off or just beginning to recede, before feeding again. Do not automatically re-feed after 12 hours if it is still slowly rising; a cold start can take longer.</p><p><strong>Return-to-baking benchmark:</strong> aim for two consecutive 1:3:3 feeds, started and kept at about 70°F, that each double within 10 hours. This is a practical consistency target for planning your bakes, not a universal definition of a healthy starter. If a feed takes longer, continue the recovery routine. Once it meets that target, use the near-peak readiness cues in Step 1; the first cold feed is not one of these two room-temperature checks.</p><p>To return a recovered starter to storage, use the same 1:3:3 maintenance feed above, then choose its counter rest from the storage guide based on your next bake. The storage rest is not a test of baking readiness.</p></div>
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
            <div className="parallel-copy"><p className="kicker">Prep in parallel</p><strong>Start Step 2 when the starter looks about 60 minutes from ready.</strong><span>The ripe baking build and autolyse must both be ready for Step 3.</span><a className="parallel-side-link" href="#mother-refresh">Mother-starter care has its own timeline <ChevronRight aria-hidden="true" /></a></div>
            <div className="parallel-timeline" aria-hidden="true">
              <div className="timeline-row starter-line"><b>1 · Starter build</b><i /><span>Ready</span></div>
              <div className="timeline-row overlap-line"><b>2 · Autolyse</b><i /><span>60 min</span></div>
              <div className="timeline-merge"><ChevronRight /> Step 3 · Mix</div>
            </div>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => {
              const Icon = step.icon; const checked = completed.includes(step.id);
              return (
                <Fragment key={step.id}>
                  {step.id === 'cold-proof' && (
                    <div className="parallel-prep" aria-label="Steps 7 and 8 can overlap">
                      <div className="parallel-copy"><p className="kicker">Preheat in parallel</p><strong>Start Step 8 at least 45 minutes before your planned bake time.</strong><span>Keep the loaf cold. Both steps finish before Step 9.</span></div>
                      <div className="parallel-timeline" aria-hidden="true">
                        <div className="timeline-row"><b>7 · Cold proof</b><i /><span>12–24 hr</span></div>
                        <div className="timeline-row overlap-line"><b>8 · Preheat</b><i /><span>45+ min</span></div>
                        <div className="timeline-merge"><ChevronRight /> Step 9 · Score and load</div>
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
                        <p className="mother-task-timing"><Clock3 aria-hidden="true" /> Rest depends on when you will next use the mother</p>
                        <p className="mother-task-flow"><strong>Keep making the loaf while this jar rests.</strong></p>
                        <ol className="mother-task-instructions">
                          <li><strong>Feed the reserved portion at 1:3:3.</strong> Put around 20 g of ripe build into the clean mother jar. Weigh the amount you actually transfer, then add three times that weight in water and three times that weight in fresh flour. For example: 22 g starter + 66 g water + 66 g flour.</li>
                          <li><strong>Rest while you make the dough.</strong> Mix, cover, and mark the starting level. Leave it in your 70°F pantry and choose the rest from the guide below. Continue Steps 2 and 3 on their own schedule.</li>
                          <li><strong>Return it to the fridge.</strong> Once it reaches your chosen stage, refrigerate and check this task off. You do not need to wait for its exact peak.</li>
                        </ol>
                        <MotherStorageGuidance />
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
