// Weekly mother-starter care between bakes. It stands apart from the baseline
// and experiment recipes: both share it, and the experiment comparison ignores
// it. Text marks bold words with **double asterisks**.
const starterInspection = 'Discard the entire starter if you see mold or pink/orange streaks.';
const motherStorageGuidance = 'Let it develop more before refrigerating if you plan to use it again sooner.';

export const starterMaintenance = {
  kicker: 'Keep it ready',
  title: 'Feed it weekly',
  steps: [
    'Feed the mother starter about once a week. A mother-starter refresh on a bake day counts as that feeding.',
    starterInspection,
    'Take it from the refrigerator and move around **15 g** into the temporary container. Discard the rest, and wash and dry the mother jar.',
    'Return the reserved starter to the mother jar. Add **40 g water and 40 g fresh flour**.',
    `Mix and cover. Let it rest in your **70°F pantry**, then refrigerate. ${motherStorageGuidance}`,
  ],
};
