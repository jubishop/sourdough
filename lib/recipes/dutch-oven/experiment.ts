// The Dutch oven experiment: what the owner is trying on the next loaf. The site
// highlights every difference from the Dutch oven baseline, so edit only what the
// experiment changes.
import { Circle, CookingPot, Flame, FlaskConical, Snowflake, Sparkles } from 'lucide-react';

import { mixDough, motherRefresh, squashAndFold, wakeStarter } from '../shared';
import type { Recipe, RecipeStep } from '../types';

const steps: RecipeStep[] = [
  wakeStarter,
  mixDough,
  squashAndFold('Before transferring the dough, spread a thin, even film of olive oil over the entire bottom and sides of your 2-quart proofing container. Leave no bare spots or pools of oil. After the last round, gently transfer the dough to the oiled container and cover it.'),
  {
    id: 'bulk',
    phase: 'Bulk fermentation',
    time: '~4–8 hr total',
    icon: FlaskConical,
    title: 'Aim for exactly 1 L at the glass edge',
    body: 'Place the covered proofing container inside the proofing box set anywhere from 72°F to 78°F, depending on how soon you want bulk fermentation to finish; warmer finishes sooner. Leave the dough undisturbed. Aim for exactly 1 L where the dough meets the glass. Fermentation will make the center noticeably higher.',
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
      'Center a sheet of parchment paper over the open banneton, hold it in place, and invert the banneton and parchment together onto the countertop.',
      'Gently lift off the banneton. The seam is now underneath, and the smooth side faces up.',
      'Stack two perforated silicone liners centered on the King Arthur round loaf lifter, then center a plain, flat, circular King Arthur silicone liner on top of them. Lift the parchment with the loaf on it and set it down centered on the plain liner.',
      'Score a big X in the smooth top with two diagonal cuts that cross in the center. Start and end each cut about 1 inch from the edge of the dough. Hold the blade straight down and cut ½ inch deep.',
      'Remove the hot Dutch oven. Hold the lifter handles to lower the scored loaf into the empty Dutch oven, with the parchment and liners between the loaf and the lifter. Put the lid on. Leave the lifter, liners, and parchment under the loaf during the bake.',
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
    cue: 'After 20 minutes, lower the oven to 390°F and keep the lid on for the last 10 minutes.',
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
    body: 'Optionally, as soon as the loaf is out of the oven, probe its center with a thermometer. If it reads below 208°F, adjust the next bake; do not put this loaf back in the oven. Then remove the loaf from the Dutch oven, place it on a wire rack, and immediately brush the crust with olive oil. Cool uncovered for at least 3 hours before slicing. Let it cool longer if it is still warm.',
    cue: 'Cutting early can make a properly baked loaf seem gummy.',
  },
];

export const experiment: Recipe = { steps, motherRefresh };
