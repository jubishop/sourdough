// What both paths share, written once: steps 1–3 and the mother-starter refresh.
// Every recipe file uses these, so a change here changes the Dutch oven and loaf
// pan recipes alike. An experiment that changes one for its path alone
// replaces the import with its own edited copy, keeping the step's ID.
import { RotateCcw, Scale, Sprout } from 'lucide-react';

import type { Recipe, RecipeStep } from './types';

const starterInspection = 'Discard the entire starter if you see mold or pink/orange streaks.';
const motherStorageGuidance = 'Let it develop more before refrigerating if you plan to use it again sooner.';

export const wakeStarter: RecipeStep = {
  id: 'starter',
  phase: 'Evening before day 1',
  time: '~10–14 hr to at least double',
  icon: Sprout,
  title: 'Wake up the starter',
  body: 'Make the baking build in a separate temporary container so you can clean the mother jar while it ripens.',
  details: [
    starterInspection,
    'Take the mother starter from the refrigerator. Move 10 g into the temporary container; discard what remains in the mother jar.',
    'Add 60 g water + 60 g King Arthur Golden Whole Wheat Flour.',
    'Wash and dry the empty mother jar while the build ripens at your pantry temperature.',
  ],
};

export const mixDough: RecipeStep = {
  id: 'mix',
  phase: 'Day 1',
  time: 'Mix until uniform',
  icon: Scale,
  title: 'Mix the dough',
  body: 'In your stand mixer bowl, mix all 400 g water, 100 g active starter (levain), and 12 g salt with the paddle until the starter is dispersed and the salt dissolves. Then immediately add 500 g King Arthur Golden Whole Wheat Flour and mix with the paddle until reasonably uniform, with no dry pockets. Then move the dough into a large glass bowl, which is easier to work with during squash and fold.',
  cue: 'The dough is at about 81.8% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
};

// Each path ends squash and fold with its own transfer, which closes the cue.
export const squashAndFold = (transfer: string): RecipeStep => ({
  id: 'slap-and-fold',
  phase: 'Day 1',
  time: '4–6 rounds · 30 min before each',
  icon: RotateCcw,
  title: 'Squash and fold',
  body: 'Squash and fold for four to six rounds. In each round, do as many squash and folds as you can before the dough becomes excessively tight and stiff. Rest 30 minutes before each round, starting after you mix in the flour.',
  cue: `During every wait, keep the dough covered in the glass bowl outside the proofing box. ${transfer}`,
});

export const motherRefresh: Recipe['motherRefresh'] = {
  afterStep: 'mix',
  label: 'Alongside the bulk',
  title: 'Refresh the mother starter',
  flow: 'Keep making the loaf while this jar rests.',
  instructions: [
    'Put around **10 g** of ripe build into the clean mother jar. Add **40 g water and 40 g fresh flour**.',
    `Mix and cover. Let it rest in your 70°F pantry, then put it back in the fridge. ${motherStorageGuidance}`,
  ],
};
