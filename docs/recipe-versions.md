---
status: current
---

# Baseline and experiment recipes

The site shows two complete recipes, and a switch in the page header moves
between them. The baseline is the tested recipe. The experiment is what the
owner is trying on the next loaf, and the site highlights every way it
differs from the baseline.

## Decision

On 2026-11-04, the owner asked for two recipes on the site:

- **Baseline:** the tested recipe they have confirmed as their best so far.
- **Experiment:** what they are trying out for the next loaf.

Both recipes started out identical on 2026-11-04. The owner left the page
design open and suggested that the experiment view highlight its
differences from the baseline.

On 2026-11-06, the owner asked that mother starter maintenance be its own
thing, outside the two recipes. Weekly mother-starter care is now shared:
one copy serves both views, and the experiment comparison ignores it. The
mother-starter refresh during a bake stays part of each recipe.

## Ask which recipe to change

Each recipe change applies to the baseline or the experiment. If the owner's
instruction does not say which, ask before editing. Do not infer the answer
from earlier changes or from which recipe changed last. The owner requested
this rule on 2026-11-04. Weekly mother-starter care belongs to neither recipe,
so a change to it needs no such question.

## Recipe files

- [Baseline](../lib/recipes/baseline.ts) and
  [experiment](../lib/recipes/experiment.ts) each hold a complete recipe:
  the bake steps and the mother-starter refresh during the bake. Edit only
  the file for the chosen recipe.
- [Starter maintenance](../lib/starter-maintenance.ts) holds weekly
  mother-starter care, which both recipes share.
- [Recipe types](../lib/recipes/types.ts) describe the fields.
  `**double asterisks**` mark bold text.
- [Comparison](../lib/recipes/compare.ts) finds the experiment's
  differences, down to the word, for the page to highlight.
- The [recipe page](../app/recipe-page.tsx) renders whichever recipe is
  selected.

Steps are matched by `id`. Keep a step's ID when editing it so the comparison
shows the edit and saved checklist progress still applies. Give a new step a
new ID, and delete a step to remove it; the experiment view shows the removed
baseline step struck through. Step numbers come from each recipe's order.
Hard-coded step references in text, such as "Step 4 or 5" in the mother
refresh, need updating by hand when steps move.

## How the page behaves

- The baseline view shows the recipe with no comparison marks.
- Mother starter maintenance sits below the bake checklist, apart from the
  recipe, and reads the same in both views.
- The experiment view lists every change at the top of the checklist, with
  links to each one. Highlighted words are new; struck words appear only in
  the baseline. Changed steps get a "Changed" tag, new steps a "New" tag,
  and removed steps a "Removed" tag. When the two recipes match, the
  experiment view says so.
- Each device remembers the last recipe it showed under the
  `sourdough-recipe-version` key, so a bake in progress reopens on the
  recipe being followed. First visits show the baseline.
- Checklist progress is shared between the two recipes, because it tracks
  one bake by step ID.

## Promote or reset the experiment

When the owner confirms the experiment as their new best, copy the
experiment's recipe into the baseline file, keeping the `baseline` export
name. The two then match until the next experiment change. To abandon an
experiment, copy the baseline's recipe into the experiment file the same way.

[Recipe guide decisions](recipe-guide.md) describe the baseline. Record an
experiment change under its topic there too, marked as an experiment. When
the experiment is promoted, drop the marks; when it is abandoned, remove
those entries.
