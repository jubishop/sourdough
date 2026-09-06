'use client';

import { Fragment, useEffect, useState } from 'react';
import {
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock3,
  CookingPot,
  Flame,
  FlaskConical,
  Pause,
  Play,
  RotateCcw,
  Scale,
  Snowflake,
  Sparkles,
  Sprout,
  TimerReset,
  Wheat,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useChecklist } from '@/hooks/use-checklist';

const ingredients = [
  { name: 'Whole-wheat flour', grams: 500, note: '100% of the flour' },
  { name: 'Water', grams: 400, note: 'About 82% total hydration' },
  { name: 'Active starter', grams: 100, note: '100% hydration; ripe and near peak' },
  { name: 'Fine salt', grams: 11, note: '2% of total flour' },
];

const steps = [
  {
    id: 'starter',
    phase: 'Before you mix',
    time: '~6–12 hr to double',
    icon: Sprout,
    title: 'Wake up the starter',
    body: 'Make the baking build in a separate temporary container so you can clean the mother jar while it ripens.',
    details: [
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
    timer: 60,
    icon: Wheat,
    title: 'Autolyse: hydrate the flour',
    body: 'Mix 500 g whole-wheat flour and 375 g water until no dry pockets remain. Cover and rest for 60 minutes.',
    details: [
      'Keep 60 minutes as the baseline if the dough feels smoother and stretches more easily afterward.',
      'If it remains stiff or tears easily, try 75 minutes next time. If it becomes slack or weak, try 45 minutes next time.',
    ],
    cue: 'Save the final 25 g water. The rest gives the bran time to soften.',
  },
  {
    id: 'mix',
    phase: 'Day 1',
    time: 'Until uniform',
    icon: Scale,
    title: 'Add starter, salt, and take a sample',
    body: 'Add 100 g active starter, 11 g salt, and the remaining 25 g water. Squeeze and fold until reasonably uniform. No kneading.',
    details: [
      'The dough will feel sticky at about 82% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
      'Take the sample immediately after the starter, salt, and reserved water are fully mixed in.',
      'Use the vacuum pump to draw dough into the tube and establish its 0% starting level.',
      'Keep the filled tube beside the bowl at the same temperature. Do not disturb it or return the sample to the loaf.',
    ],
    cue: 'The printed scale shows the rise directly—no millimeter conversion is needed.',
  },
  {
    id: 'fold-one',
    phase: 'Early bulk',
    time: '+30 min',
    timer: 30,
    icon: RotateCcw,
    title: 'First fold',
    body: 'Keep the bowl covered on the counter for 30 minutes. Then stretch one side up and across. Turn the bowl and repeat four times.',
    cue: 'This should take about 20 seconds. Be gentle. Judge hydration from the dough here: if it remains unusually stiff or tears easily after trying the longer autolyse, use 10–20 g more water on a later loaf.',
  },
  {
    id: 'fold-two',
    phase: 'Early bulk',
    time: '+30 min',
    timer: 30,
    icon: RotateCcw,
    title: 'Second and final fold',
    body: 'Cover and rest another 30 minutes, then repeat one gentle set of four folds.',
    cue: 'After this, leave the dough alone. The aliquot sample remains undisturbed throughout.',
  },
  {
    id: 'bulk',
    phase: 'Bulk fermentation',
    time: '~6–10 hr total',
    icon: FlaskConical,
    title: 'Aim for a 40–50% rise',
    body: 'Use 40–50% on the tube’s printed scale as your starting target for this whole-wheat loaf and overnight cold proof. Check the main dough too: it should look inflated and rounded, with bubbles at the edges and a gentle jiggle.',
    details: [
      'Ready feels airy and softly bouncy, with enough elasticity to hold together. Airiness is a good sign; dough becoming progressively weaker, tearing easily, or collapsing is a reason to shape sooner. Stickiness alone does not mean it has gone too far.',
      'If it is still tight and poorly aerated at the target, give it more time and recheck.',
      'At 10 hours of total bulk: if the sample is still below 40%, check the actual dough temperature and that the intended starter amount was added. Note the sample level and check again at 12 hours. Little or no further rise over those 2 hours, together with few bubbles, is a stalled-progress flag. These checkpoints prompt troubleshooting; they do not prove the starter is weak.',
      'A brisk Step 1 build makes starter weakness less likely. If this dough is still gaining volume and holding together, give it more time. If it is losing strength or collapsing, shape promptly rather than waiting for a number. There is no reliable clock-only cutoff for abandoning a mixed loaf. Before the next bake, test the reserved starter with the timed 1:3:3 recovery routine if bulk was persistently sluggish; refeeding helps the starter for that future loaf.',
      'Underfermentation means the dough needed more fermentation time before baking. In the cooled loaf, look for unusually dense areas, sometimes with a few large holes or tunnels surrounded by tight crumb. Whole-wheat bread naturally has a tighter crumb, so small holes alone do not prove underfermentation. If these signs agree with dough that was tight at shaping, try 5–10 percentage points more rise next loaf—for example, 50% to 55–60%—while keeping other variables steady.',
      'If the dough loses strength before your target, shape now rather than chasing the number. If that pattern and a flat, weak loaf repeat, try 5–10 percentage points less rise next time.',
      'Warmer dough keeps fermenting faster while it cools in the fridge, so it generally needs an earlier cutoff; cooler dough may tolerate more rise. Pantry temperature helps compare bakes, but actual dough temperature controls fermentation. Whole-wheat dough may show less rise than white dough: do not automatically wait for doubling.',
    ],
    cue: 'In your 70°F pantry, allow roughly 6–10 hours of total bulk from starter addition with a ripe, active starter. This is a starting estimate to refine from your own bakes, not a deadline; a weaker starter or cooler dough can take longer, and warmer dough can finish sooner. Count the fold-and-rest time in that total. Keep 40–50% as the baseline and use the dough cues above.',
  },
  {
    id: 'shape',
    phase: 'Day 1',
    time: '10–20 min, as needed',
    timer: 10,
    icon: Circle,
    title: 'Shape and place in the banneton',
    body: 'Dust the banneton generously with rice flour before shaping the loaf.',
    details: [
      'Turn the dough onto a lightly floured counter and form a gentle round.',
      'Rest it uncovered for 10 minutes, then check it. Continue to the final shape once it has relaxed slightly but still holds its rounded form. Wait up to another 10 minutes if it still springs back.',
      'Shorten or skip the rest if the dough is already relaxed or spreading. Cover it if the surface starts to form a dry skin.',
      'If bulk timing was correct but the dough is still slack and spreads even after shortening or skipping the rest, use 10–20 g less water next loaf.',
      'Final-shape the dough, creating firm surface tension without tearing it.',
      'Lift the shaped loaf into the banneton. Put the smooth side down against the basket and leave the seam side facing up.',
    ],
    cue: 'The rest makes final shaping easier; a longer rest does not automatically make a better loaf. The seam faces you in the banneton.',
  },
  {
    id: 'cold-proof',
    phase: 'Overnight',
    time: '12 hr at ~38°F',
    timer: 720,
    icon: Snowflake,
    title: 'Cold-proof overnight',
    body: 'Cover and refrigerate immediately for 12 hours. Bake the loaf directly from the refrigerator.',
    cue: 'Keep the loaf refrigerated for the full 12 hours. Start Step 9 during the final 45 minutes or earlier.',
  },
  {
    id: 'preheat',
    phase: 'Day 2',
    time: 'At least 45 min',
    overlap: 'Overlaps Step 8',
    timer: 45,
    icon: Flame,
    title: 'Preheat the Dutch oven',
    body: 'At least 45 minutes before the 12-hour cold proof ends, preheat the oven and Dutch oven to 475°F. You can begin earlier.',
    cue: 'Keep the loaf refrigerated until both the full 12-hour proof and the preheat are complete.',
  },
  {
    id: 'load',
    phase: 'Day 2',
    time: 'After 12 hr',
    icon: CookingPot,
    title: 'Score and load the loaf',
    body: 'When the 12-hour cold proof is complete and the Dutch oven is fully preheated, take the loaf from the refrigerator.',
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
    timer: 30,
    icon: CookingPot,
    title: 'Bake covered at 450°F',
    body: 'Lower the oven to 450°F and bake with the lid on for 30 minutes. The trapped steam keeps the crust flexible so the loaf can expand.',
    cue: 'Skip added ice and water. The loaf supplies its own steam. More covered time keeps steam around the loaf longer and favors a thinner, softer crust.',
  },
  {
    id: 'uncovered-bake',
    phase: 'Bake',
    time: '12 min uncovered',
    timer: 12,
    icon: Flame,
    title: 'Finish uncovered at 425°F',
    body: 'Remove the lid, lower the oven to 425°F, and bake for 12 minutes. Removing the lid lets the crust dry and brown.',
    cue: 'Use total bake time to tune crumb moisture, the covered/uncovered split to tune crust texture, and temperature to tune browning speed. Adjust time by 5 minutes or temperature by 25°F, and change only one thing per loaf. If the bottom scorches, place a sheet pan on the rack below.',
  },
  {
    id: 'cool',
    phase: 'Finish',
    time: 'At least 3 hr',
    timer: 180,
    icon: Sparkles,
    title: 'Let the crumb set',
    body: 'Cool the loaf for at least 3 hours before slicing. Whole-wheat bread needs this time to finish setting inside.',
    cue: 'Cutting early can make a properly baked loaf seem gummy.',
  },
];

const timerPresets: { label: string; minutes: number; display?: string }[] = [
  { label: 'Autolyse', minutes: 60 },
  { label: 'Between folds', minutes: 30 },
  { label: 'Bench rest', minutes: 10, display: '10–20 min' },
  { label: 'Cold proof', minutes: 720 },
  { label: 'Preheat', minutes: 45 },
  { label: 'Covered bake', minutes: 30 },
  { label: 'Uncovered bake', minutes: 12 },
  { label: 'Cool', minutes: 180 },
];

const gear = [
  'Digital scale', 'Large mixing bowl with cover', 'Small container for the starter build', 'Aliquot tube and vacuum pump',
  'Banneton or towel-lined bowl', 'Rice flour', 'Dutch oven',
  'Parchment and scoring blade',
];

const diagnoses = [
  ['Dense, tight crumb + little spring', 'End bulk later next time.'],
  ['Loose, flat loaf + weak spring', 'End bulk sooner next time.'],
  ['Fully cooled crumb is wet or gummy', 'Add 5 minutes to the covered bake time.'],
  ['Fully cooled crumb is dry', 'Remove 5 minutes from the covered bake time.'],
  ['Crust too thick or hard', 'Shift 5 minutes from uncovered to covered next time. Keep the total bake time the same.'],
  ['Crust too soft or not crisp enough', 'Shift 5 minutes from covered to uncovered next time. Keep the total bake time the same.'],
  ['Crust too dark', 'Lower the uncovered temperature by 25°F next time.'],
  ['Crust too pale', 'Raise the uncovered temperature by 25°F next time.'],
  ['Good structure, want more tang', 'Extend the cold proof.'],
  ['Good structure, want less tang', 'Shorten the cold proof.'],
  ['Good structure, flavor tastes flat', 'Use 1 g more salt next time.'],
  ['Good structure, tastes too salty', 'Use 1 g less salt next time.'],
];

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours) return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

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
  const [loaves, setLoaves] = useState(1);
  const [completed, setCompleted] = useChecklist();
  const [timerSeconds, setTimerSeconds] = useState(60 * 60);
  const [timerInitial, setTimerInitial] = useState(60 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning || timerSeconds <= 0) return;
    const interval = window.setInterval(() => {
      setTimerSeconds((value) => {
        if (value <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const completedSteps = steps.filter((step) => completed.includes(step.id)).length;
  const progress = Math.round((completedSteps / steps.length) * 100);
  const motherRefrigerated = completed.includes('mother-refrigerated');
  function toggleStep(id: string, checked: boolean) {
    setCompleted((current) =>
      checked ? [...new Set([...current, id])] : current.filter((item) => item !== id),
    );
  }

  function setTimer(minutes: number) {
    const seconds = minutes * 60;
    setTimerInitial(seconds);
    setTimerSeconds(seconds);
    setTimerRunning(true);
    document.getElementById('kitchen-timer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sourdough home">
          <span className="brand-mark"><Wheat aria-hidden="true" /></span>
          <span>Sourdough</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#starter">Starter</a><a href="#recipe">Recipe</a><a href="#workflow">Workflow</a><a href="#troubleshooting">Troubleshooting</a>
        </nav>
        <a className="header-action" href="#workflow">Start baking <ChevronRight aria-hidden="true" /></a>
      </header>

      <section id="top" className="recipe-intro shell">
        <div className="recipe-intro-main">
          <h1 className="font-display">Whole-wheat sourdough</h1>
          <a className="primary-link" href="#workflow">Open checklist <ChevronRight /></a>
        </div>
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
                <li>Take it from the refrigerator and move around <strong>20 g</strong> into the temporary container. Weigh the amount you actually transfer, discard the rest, and wash and dry the mother jar.</li>
                <li>Return the reserved starter to the mother jar. Add <strong>twice its weight in water and twice its weight in fresh flour</strong>. For example: 20 g starter + 40 g water + 40 g flour.</li>
                <li>Mix, cover, and mark the starting level. Let it rest in your <strong>70°F pantry</strong>, choosing how far to let it rise from the guide below, then refrigerate.</li>
              </ol>
              <MotherStorageGuidance />
              <div className="starter-note"><strong>Is it sluggish?</strong><p>If it has been neglected or its baking builds rise weakly, keep it at room temperature for recovery feedings at <strong>1:3:3 by weight: 1 part starter, 3 parts water, and 3 parts fresh flour.</strong> For example, keep 20 g starter and add 60 g water + 60 g flour, making 140 g total. At each new feeding, retain a small portion and discard the rest, then add three times the retained weight in both water and flour.</p><p>Mark the starting level and note when it doubles. Let each feed reach its highest rise, with the top leveling off or just beginning to recede, before feeding again. Do not automatically re-feed after 12 hours if it is still slowly rising; a cold start can take longer.</p><p><strong>Return-to-baking benchmark:</strong> aim for two consecutive 1:3:3 feeds, started and kept at about 70°F, that each double within 10 hours. This is a practical consistency target for planning your bakes, not a universal definition of a healthy starter. If a feed takes longer, continue the recovery routine. Once it meets that target, use the near-peak readiness cues in Step 1; the first cold feed is not one of these two room-temperature checks.</p><p>To return a recovered starter to storage, use the maintenance feed above (1:2:2), then choose its counter rest from the storage guide based on your next bake. The storage rest is not a test of baking readiness.</p></div>
            </article>
          </div>
        </details>
      </section>

      <section id="recipe" className="section shell recipe-section">
        <h2 className="sr-only">Recipe</h2>
        <div className="gear-card recipe-gear"><p className="kicker">Before you begin</p><h2 className="font-display">Gear check</h2><div className="gear-list">{gear.map((item) => <p key={item}><Check />{item}</p>)}</div></div>
        <div className="recipe-grid ingredient-only">
          <div className="ingredient-panel">
            <div className="panel-header">
              <div><p className="kicker">Ingredient scale</p><h3>{loaves === 1 ? 'One loaf' : 'Two loaves'}</h3></div>
              <div className="quantity-toggle" aria-label="Number of loaves">
                {[1, 2].map((count) => <button key={count} type="button" className={loaves === count ? 'active' : ''} onClick={() => setLoaves(count)}>{count}</button>)}
              </div>
            </div>
            <div className="ingredient-list">
              {ingredients.map((ingredient) => (
                <div className="ingredient-row" key={ingredient.name}><div><strong>{ingredient.name}</strong><span>{ingredient.note}</span></div><b>{ingredient.grams * loaves}<small> g</small></b></div>
              ))}
            </div>
            <p className="panel-note"><Check aria-hidden="true" /> Use traditional whole wheat for a deep, nutty loaf. Golden whole wheat makes it lighter.</p>
            <p className="panel-note"><Scale aria-hidden="true" /> Formula note: The 100%-hydration starter contributes equal flour and water. Including it, the dough is about 82% hydrated and the salt is 2% of total flour. The aliquot sample removes ingredients proportionally, so those percentages stay the same.</p>
          </div>
        </div>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="shell">
          <h2 className="sr-only">Bake checklist</h2>
          <div className="workflow-toolbar">
            <div className="progress-copy" aria-live="polite"><strong>{completedSteps} of {steps.length}</strong><span>steps complete</span><div className="progress-track"><i style={{ width: `${progress}%` }} /></div></div>
          </div>
          <div id="kitchen-timer" className="timer-panel">
            <div className="timer-heading"><div className="timer-icon"><Clock3 aria-hidden="true" /></div><div><p className="kicker">Kitchen timer</p><h3>{formatTime(timerSeconds)}</h3></div></div>
            <div className="timer-presets" aria-label="Timer presets">
              {timerPresets.map((preset) => <button key={preset.label} type="button" onClick={() => setTimer(preset.minutes)}>{preset.label}<span>{preset.display ?? (preset.minutes >= 60 ? `${preset.minutes / 60} hr` : `${preset.minutes} min`)}</span></button>)}
            </div>
            <div className="timer-controls">
              <Button className="timer-main" onClick={() => setTimerRunning((value) => !value)} disabled={timerSeconds === 0}>{timerRunning ? <Pause /> : <Play />} {timerRunning ? 'Pause' : 'Start'}</Button>
              <Button variant="outline" size="icon-lg" aria-label="Reset timer" onClick={() => { setTimerSeconds(timerInitial); setTimerRunning(false); }}><TimerReset /></Button>
            </div>
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
              const stepBody = step.id === 'autolyse'
                ? `Mix ${500 * loaves} g whole-wheat flour and ${375 * loaves} g water until no dry pockets remain. Cover the bowl.`
                : step.id === 'mix'
                  ? `Add ${100 * loaves} g active starter, ${11 * loaves} g salt, and the remaining ${25 * loaves} g water. Squeeze and fold until reasonably uniform. No kneading.`
                  : step.body;
              const stepCue = step.id === 'autolyse'
                ? `Start this when Step 1 looks about 60 minutes from ready. Save the final ${25 * loaves} g water.`
                : step.cue;
              return (
                <Fragment key={step.id}>
                  {step.id === 'cold-proof' && (
                    <div className="parallel-prep" aria-label="Steps 8 and 9 can overlap">
                      <div className="parallel-copy"><p className="kicker">Preheat in parallel</p><strong>Start Step 9 at least 45 minutes before the 12-hour cold proof ends.</strong><span>Keep the loaf cold. Both steps finish before Step 10.</span></div>
                      <div className="parallel-timeline" aria-hidden="true">
                        <div className="timeline-row"><b>8 · Cold proof</b><i /><span>12 hr</span></div>
                        <div className="timeline-row overlap-line"><b>9 · Preheat</b><i /><span>45+ min</span></div>
                        <div className="timeline-merge"><ChevronRight /> Step 10 · Score and load</div>
                      </div>
                    </div>
                  )}
                  <article className={`step-card ${checked ? 'complete' : ''}`}>
                    <div className="step-number">{String(index + 1).padStart(2, '0')}</div><div className="step-icon"><Icon aria-hidden="true" /></div>
                  <div className="step-copy"><p className="step-meta"><span>{step.phase}</span>{step.time}{step.overlap && <b className="overlap-badge">{step.overlap}</b>}</p><h3>{step.title}</h3><p>{stepBody}</p>{step.details && <ol className="step-substeps">{step.details.map((detail) => <li key={detail}>{detail}</li>)}</ol>}<p className="step-cue">{stepCue}</p>{step.timer && <button className="set-timer" type="button" onClick={() => setTimer(step.timer!)}><Clock3 /> Set {step.timer >= 60 ? `${step.timer / 60}-hour` : `${step.timer}-minute`} timer</button>}</div>
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
                          <li><strong>Feed the reserved portion.</strong> Put around 20 g of ripe build into the clean mother jar. Weigh the amount you actually transfer, then add twice that weight in water and twice that weight in fresh flour. For example: 22 g starter + 44 g water + 44 g flour.</li>
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
          <div className="diagnosis-card"><div className="diagnosis-list">{diagnoses.map(([signal, adjustment]) => <div key={signal}><strong>{signal}</strong><span><ChevronRight />{adjustment}</span></div>)}</div></div>
        </details>
      </section>
    </main>
  );
}
