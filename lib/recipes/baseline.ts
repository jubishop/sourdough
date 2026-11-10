// The baseline: the tested recipe the owner has confirmed as their best so far.
import {
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

import type { Recipe, RecipeStep } from './types';

const starterInspection = 'Discard the entire starter if you see mold or pink/orange streaks.';
const motherStorageGuidance = 'Let it develop more before refrigerating if you plan to use it again sooner.';

const steps: RecipeStep[] = [
  {
    id: 'starter',
    phase: 'Evening before day 1',
    time: '~10–14 hr to at least double',
    icon: Sprout,
    title: 'Wake up the starter',
    body: 'Make the baking build in a separate temporary container so you can clean the mother jar while it ripens.',
    details: [
      starterInspection,
      'Take the mother starter from the refrigerator. Move 10 g into the temporary container; discard what remains in the mother jar.',
      'Add 60 g water + 60 g flour.',
      'Wash and dry the empty mother jar while the build ripens at your pantry temperature.',
    ],
  },
  {
    id: 'autolyse',
    phase: 'Day 1',
    time: 'About 90 min',
    icon: Wheat,
    title: 'Autolyse: hydrate the flour',
    body: 'In your mixing bowl, mix 500 g whole-wheat flour and all 400 g water until no dry pockets remain. Cover and rest for about 90 minutes.',
  },
  {
    id: 'mix',
    phase: 'Day 1',
    time: 'Mix until uniform',
    icon: Scale,
    title: 'Add starter and salt',
    body: 'In the same mixing bowl, add 100 g active starter (levain) and 12 g salt. Squeeze and mix until reasonably uniform.',
    cue: 'The dough is at about 81.8% total hydration. Wet your hands lightly; do not add flour to make it easier to handle.',
  },
  {
    id: 'slap-and-fold',
    phase: 'Day 1',
    time: '3 rounds · 30 min before each',
    icon: RotateCcw,
    title: 'Squash and fold',
    body: 'Squash and fold for three rounds, with four squash and folds in each round. Rest 30 minutes before each round, starting after you mix in the starter and salt.',
    cue: 'During every wait, keep the dough covered in the mixing bowl outside the proofing box. Before transferring the dough, spread a thin, even film of olive oil over the entire bottom and sides of your 2-quart proofing container. Leave no bare spots or pools of oil. After the third round, gently transfer the dough to the oiled container and cover it.',
  },
  {
    id: 'bulk',
    phase: 'Bulk fermentation',
    time: '~4–8 hr total',
    icon: FlaskConical,
    title: 'Aim for about 1 L at the glass edge',
    body: 'Place the covered proofing container inside the proofing box set to 72°F. Leave the dough undisturbed. Aim for about 1 L where the dough meets the glass. Fermentation will make the center noticeably higher. The dough should look puffy and rounded, with bubbles at the edges and a gentle jiggle when you move the container.',
  },
  {
    id: 'shape',
    phase: 'Day 1',
    time: 'After bulk',
    icon: Circle,
    title: 'Shape and place in the banneton',
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
    title: 'Preheat the Dutch oven',
    body: 'Preheat the empty Dutch oven at 475°F for at least 60 minutes.',
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
      'Center a sheet of parchment paper over the open banneton, hold it in place, and invert the banneton and parchment together.',
      'Set the parchment, with the loaf on it, on the King Arthur round loaf lifter on the countertop, then gently lift off the banneton. The seam is now underneath, and the smooth side faces up.',
      'Score a big X in the smooth top with two diagonal cuts that cross in the center. Start and end each cut about 1 inch from the edge of the dough. Hold the blade straight down and cut ½ inch deep.',
      'Remove the hot Dutch oven. Hold the lifter handles to lower the scored loaf into the empty Dutch oven, with the parchment between the loaf and the lifter. Put the lid on. Leave the lifter and parchment under the loaf during the bake.',
    ],
    cue: 'The Dutch oven and lid are extremely hot. Use dry oven mitts and keep your hands clear of the iron.',
  },
  {
    id: 'covered-bake',
    phase: 'Bake',
    time: '30 min covered',
    icon: CookingPot,
    title: 'Bake covered at 465°F, then 390°F',
    body: 'Lower the oven to 465°F and bake with the lid on for 30 minutes. The covered bake traps steam so the loaf can expand.',
    cue: 'After 10 minutes, lower the oven to 390°F and keep the lid on for the last 20 minutes.',
  },
  {
    id: 'uncovered-bake',
    phase: 'Bake',
    time: '45 min uncovered',
    icon: Flame,
    title: 'Finish uncovered at 315°F',
    body: 'Remove the lid, lower the oven to 315°F, and bake for 45 minutes. The uncovered bake lets the crust dry and brown. Then remove the Dutch oven from the oven.',
  },
  {
    id: 'cool',
    phase: 'Finish',
    time: 'At least 3 hr',
    icon: Sparkles,
    title: 'Let the crumb set',
    body: 'Remove the loaf from the Dutch oven, place it on a wire rack, and immediately brush the crust with olive oil. Cool uncovered for at least 3 hours before slicing. Let it cool longer if it is still warm.',
    cue: 'Cutting early can make a properly baked loaf seem gummy.',
  },
];

export const baseline: Recipe = {
  steps,
  motherRefresh: {
    afterStep: 'mix',
    label: 'Alongside the bulk',
    title: 'Refresh the mother starter',
    flow: 'Keep making the loaf while this jar rests.',
    instructions: [
      'Put around **15 g** of ripe build into the clean mother jar. Add **40 g water and 40 g fresh flour**.',
      `**Refrigerate during Step 4 or 5.** Mix and cover. Let it rest in your 70°F pantry, then put it back in the fridge. ${motherStorageGuidance}`,
    ],
  },
};
