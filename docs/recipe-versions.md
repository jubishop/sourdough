---
status: current
---

# Baseline and experiment recipes

The site holds two complete recipes. The baseline is the tested recipe. The
experiment is what the owner is trying on the next loaf, and the site
highlights every way it differs from the baseline. While the two match, there
is no experiment, and the site shows only the baseline.

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

On 2026-11-17, the owner asked that the site hide the experiment while the
recipes match, and that agents ignore the experiment unless the owner raises
it.

## Choose which recipe to change

- **The recipes match:** apply a recipe change to both files, keeping them
  identical, without asking or mentioning the experiment. Edit only the
  experiment when the owner asks for an experiment or a trial for the next
  loaf; the switch then reappears on the site. The owner set this rule on
  2026-11-17.
- **The recipes differ:** each change applies to the baseline or the
  experiment. If the owner's instruction does not say which, ask before
  editing. Do not infer the answer from earlier changes or from which recipe
  changed last. The owner set this rule on 2026-11-04.

The recipes match when the two files differ only in their opening comment and
export name. Weekly mother-starter care belongs to neither recipe, so a change
to it needs no such question.

## Recipe files

- [Baseline](../lib/recipes/baseline.ts) and
  [experiment](../lib/recipes/experiment.ts) each hold a complete recipe:
  the bake steps and the mother-starter refresh during the bake. Edit only
  the file for the chosen recipe, or both while the recipes match.
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
Hard-coded step references in text, such as "Step 4", need updating by hand
when steps move.

## How the page behaves

- While the recipes match, the page shows only the baseline, with no switch
  in the header and no mention of an experiment.
- The baseline view shows the recipe with no comparison marks.
- Mother starter maintenance sits below the bake checklist, apart from the
  recipe, and reads the same in both views.
- The experiment view lists every change at the top of the checklist, with
  links to each one. Highlighted words are new; struck words appear only in
  the baseline. Changed steps get a "Changed" tag, new steps a "New" tag,
  and removed steps a "Removed" tag.
- Each device remembers the last recipe it showed under the
  `sourdough-recipe-version` key, so a bake in progress reopens on the
  recipe being followed. First visits, and every visit while the recipes
  match, show the baseline.
- Checklist progress is shared between the two recipes, because it tracks
  one bake by step ID.

## Promote or reset the experiment

When the owner confirms the experiment as their new best, copy the
experiment's recipe into the baseline file, keeping the `baseline` export
name. The two then match, and the site hides the experiment, until the next
experiment change. To abandon an experiment, copy the baseline's recipe into
the experiment file the same way.

[Recipe guide decisions](recipe-guide.md) describe the baseline. Record an
experiment change under its topic there too, marked as an experiment. When
the experiment is promoted, drop the marks; when it is abandoned, remove
those entries.
