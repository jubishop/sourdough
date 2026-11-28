// The loaf pan experiment: what the owner is trying on the next loaf pan bake.
// The site highlights every difference from the loaf pan baseline, so edit only
// what the experiment changes.
import { CookingPot, Flame, FlaskConical, Snowflake, Sparkles } from 'lucide-react';

import { mixDough as sharedMixDough, motherRefresh, squashAndFold, wakeStarter } from '../shared';
import type { Recipe, RecipeStep } from '../types';

// The experiment's own copy of the shared mix step, with 420 g water instead of
// 400 g. It keeps the step's ID so the comparison shows the change.
const mixDough: RecipeStep = {
  ...sharedMixDough,
  body: 'In your stand mixer bowl, mix all 420 g water, 100 g active starter (levain), and 12 g salt with the paddle until the starter is dispersed and the salt dissolves. Then immediately add 500 g King Arthur Golden Whole Wheat Flour and mix with the paddle until reasonably uniform, with no dry pockets. Then move the dough into a large glass bowl, which is easier to work with during squash and fold.',
  cue: 'The dough is at about 85.5% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
};

// Steps unique to this path take a `pan-` ID, so checklist progress never
// carries over from a Dutch oven step.
const steps: RecipeStep[] = [
  wakeStarter,
  mixDough,
  squashAndFold('Before transferring the dough, rub a thin layer of avocado oil over the inside of your loaf pan so the parchment paper sticks to it. Then line the pan with parchment paper that sticks out above the rim, enough to lift the baked loaf out by it. After the last round, gently transfer the dough to the lined pan and cover it with plastic wrap.'),
  {
    id: 'pan-rise',
    phase: 'Bulk fermentation',
    time: 'Until 1 cm below the rim',
    icon: FlaskConical,
    title: 'Rise until 1 cm below the rim',
    body: 'Place the covered loaf pan inside the proofing box set anywhere from 72°F to 78°F, depending on how soon you want the rise to finish; warmer finishes sooner. Leave the dough undisturbed until the dough at the sides of the pan is 1 cm below the rim.',
  },
  {
    id: 'pan-cold-proof',
    phase: 'Overnight',
    time: '8–16 hr at ~38°F',
    icon: Snowflake,
    title: 'Cold-proof overnight',
    body: 'Take off the plastic wrap, then place the loaf pan inside a large Ziploc bag and seal it closed to keep the moisture in. Refrigerate immediately for 8–16 hours. Bake directly from the refrigerator.',
  },
  {
    id: 'pan-load',
    phase: 'Day 2',
    time: 'After 8–16 hr · no preheat',
    icon: CookingPot,
    title: 'Score, cover, and load the pan',
    body: 'When your chosen 8–16-hour cold proof is complete, take the loaf pan from the refrigerator and remove it from the Ziploc bag. Do not preheat the oven.',
    details: [
      'Score one long cut lengthwise down the middle of the loaf. Start and end it about 1 inch from the ends of the dough. Hold the blade straight down and cut ¼ inch deep.',
      'Turn the second matching loaf pan upside down and set it on top as a lid.',
      'Place the covered pan in the cold oven.',
    ],
  },
  {
    id: 'pan-covered-bake',
    phase: 'Bake',
    time: '45 min covered',
    icon: CookingPot,
    title: 'Bake covered at 465°F from a cold oven',
    body: 'Turn the oven on to 465°F and start timing right away; the warm-up counts toward the 45 minutes. Bake with the top pan on for 45 minutes. The covered bake traps steam so the loaf can expand.',
  },
  {
    id: 'pan-uncovered-bake',
    phase: 'Bake',
    time: '45 min uncovered',
    icon: Flame,
    title: 'Finish uncovered at 315°F',
    body: 'Lift off the top pan, lower the oven to 315°F, and bake for 45 minutes. The uncovered bake lets the crust dry and brown. Then remove the loaf pan from the oven.',
    cue: 'Both pans are extremely hot. Use dry oven mitts.',
  },
  {
    id: 'pan-cool',
    phase: 'Finish',
    time: 'At least 3 hr',
    icon: Sparkles,
    title: 'Let the crumb set',
    body: 'As soon as the pan is out of the oven, lift the loaf out by the parchment, peel the parchment away, and set the loaf on a wire rack. Optionally, probe its center with a thermometer. If it reads below 208°F, adjust the next bake; do not put this loaf back in the oven. Then immediately brush the crust with olive oil. Cool uncovered for at least 3 hours before slicing. Let it cool longer if it is still warm.',
    cue: 'Cutting early can make a properly baked loaf seem gummy.',
  },
];

export const experiment: Recipe = { steps, motherRefresh };
