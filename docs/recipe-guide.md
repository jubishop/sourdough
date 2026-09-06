---
status: current
---

# Recipe guide decisions

This document records accepted choices for the baking instructions in the
[recipe page](../app/recipe-page.tsx). The [site and hosting guide](site-and-hosting.md)
owns hosting and the fixed one-loaf scope.

## Exact current recipe

On 2026-09-05, the user clarified that the recipe must represent their
current best judgment of exactly what to do. State the selected quantities,
temperatures, and durations directly. Avoid optional alternatives or loose
"baseline" wording when a fixed instruction is practical.

Retain condition-based decisions where needed, such as starter readiness,
dough strength, bulk fermentation, bench rest, and the accepted visual
baking endpoint. Give a specific cue and action for each exception.

The starter-build amount is also intentionally flexible so the user can
adjust its readiness to their schedule. See [Starter build timing](#starter-build-timing).

Troubleshooting can identify a possible improvement. Once the user chooses
a change, update the recipe itself, including affected steps, quantities,
and schedule text. Until then, the recipe's current settings remain
the instructions to follow.

For cold proofing, keep the full 12 hours at approximately 38°F. The user
declined making that duration flexible. If a different duration is adopted
later, revise the recipe to that exact duration. This prioritizes a clear,
repeatable procedure and requires maintaining the recipe as choices change.

## Separate gear and ingredient sections

On 2026-09-05, the user initially accepted an extra preparation-ingredients
note, then asked to remove it because they already know which flour and
other supplies are needed. They then explicitly requested removal of the
gear list and the entire ingredient-scale block, including the one-loaf
ingredient panel and its notes. This supersedes the earlier preparation
note decision. Keep the quantities in the recipe steps and starter-feeding
instructions. The user explicitly clarified that this cleanup applies only
to the sections above the steps, not to the written steps themselves.
Remove navigation to the deleted section.

## Equipment detail

On 2026-09-05, the user declined further equipment specification and asked
to skip the topic. They do not want the recipe to be precise about every
piece of equipment. Keep the current equipment instructions within the
recipe steps; do not request brands, models, or sizes as part of this review.
The separate gear list is removed as described above.

## Website timers and checklist

On 2026-09-05, the user chose to remove all website timers because they
will not use them. Remove the kitchen timer panel, presets, per-step timer
buttons, countdown state, and related styles. Keep the written recipe
durations and schedule overview.

Retain the step checkmarks, mother-starter checkmark, progress display,
reset control, and saved checklist progress. The user considers these
potentially useful. Timer reliability no longer needs work because the
feature is removed.

## Schedule overview

On 2026-09-05, the user accepted a short overview of the full bake sequence
to make it easier to plan when the loaf will be ready to eat. Place it near
the top of the page and include starter preparation, mixing and bulk,
shaping, cold proofing, baking, and cooling.

Use the current recipe settings: roughly 6–12 hours to first doubling for
the 20 g starter build, roughly 6–10 hours of bulk from starter addition,
a 10–20 minute bench rest when needed, a full 12-hour cold proof, 30 minutes
covered followed by 12 minutes to the first uncovered crust check, and at
least three hours of cooling. Keep the near-peak starter cues, dough cues,
optional shorter bench rest, and visual baking endpoint clear.

Show the overlaps: start the 60-minute autolyse when the starter looks about
an hour from ready; folds and their rests count within bulk; preheat the
oven and Dutch oven for at least the final 45 minutes of the cold proof.
The starter and bulk estimates assume the user's 70°F pantry. Do not turn
them into guaranteed clock times or promise a fixed total duration.

## Visual baking endpoint

On 2026-09-05, the user chose visual guidance for checking the baked loaf.
They do not have or want to use a probe to measure its center temperature.
Do not require an internal-temperature reading in the baking instructions.

Keep 30 minutes covered at 450°F and an initial 12 minutes uncovered at 425°F.
After the initial 12 minutes uncovered, inspect the exposed crust for a deep
golden-brown color. Distinguish flour dusting from pale crust. If the crust
is still pale, continue uncovered in five-minute increments and check again.

Color cannot confirm the condition of the center. Keep the existing minimum
three-hour cooling period, then use the cooled crumb to refine future bake
timing. This method avoids a probe but depends more on experience with the
oven and results from previous loaves.

References checked on 2026-09-05:

- [The Perfect Loaf: whole-wheat sourdough](https://www.theperfectloaf.com/100-whole-wheat-sourdough/)
  uses crust color as a baking cue and recommends cooling before slicing.
- [King Arthur: using a thermometer with yeast bread](https://www.kingarthurbaking.com/blog/2017/04/07/using-a-thermometer-with-yeast-bread)
  explains why baking endpoints depend on the bread and desired texture.

## Bake phase explanations

On 2026-09-05, the user accepted a short explanation of each baking phase:
the covered bake traps steam so the loaf can expand; the uncovered bake
lets the crust dry and brown. Keep the selected times and temperatures.

Remove the claim that more covered time favors a thinner,
softer crust and the explanation that assigns crumb moisture, crust
texture, and browning to separate controls. Their effects interact. Keep
finished-loaf adjustment suggestions in the final troubleshooting section.

[King Arthur's baking guidance](https://www.kingarthurbaking.com/blog/2015/10/15/artisan-sourdough-bread-tips-part-3)
supports the distinction between early steam and later drying. The source
was checked on 2026-09-05.

## Conditional troubleshooting

On 2026-09-05, the user accepted a troubleshooting table that connects each
adjustment to supporting observations. A single loaf symptom can have
several causes, so avoid diagnosing fermentation from crumb or loaf shape
alone.

The user clarified on 2026-09-05 that the final troubleshooting section is
strictly for problems with the finished loaf: crumb, crust, loaf shape,
and flavor. Its adjustments apply to the next bake. Earlier observations
may help explain a finished-loaf problem, but this section must not contain
standalone problems with the ongoing process or instructions to intervene
in the current bake.

Put process troubleshooting at the relevant step. For example, a slow
starter build belongs with Step 1 and starter recovery; weak dough during
folding belongs with the fold step; stalled bulk belongs with Step 6;
and a pale crust during baking belongs with Step 12. This keeps help where
the baker needs it and reserves the final table for reviewing the result.

Compare the fully cooled crumb with observations from mixing, bulk, and
shaping. In particular:

- Suggest a later bulk endpoint when dense crumb agrees with dough that was
  tight and poorly aerated at shaping. Small holes alone are normal for
  whole-wheat bread.
- Suggest an earlier endpoint when dough developed strength and then lost
  it late in bulk. Dough that was loose throughout calls for checking water,
  dough strength, and shaping first.
- For gummy crumb, check cooling and fermentation cues before suggesting
  more bake time. Keep the visual baking endpoint; do not add a probe check.
- Separate freshly baked dry crumb from bread that has dried during storage.
- Base next-bake crust adjustments on the cooled crumb and crust together.
  Keep the current-bake visual checks in Step 12.

Keep numerical adjustments as small trials, changing one variable per bake.
The table offers hypotheses to test, not guaranteed diagnoses. This adds
some reading but helps avoid making an unrelated adjustment that worsens
the next loaf. Existing flavor-preference rows remain in place.

The [whole-wheat recipe and troubleshooting reference](https://www.theperfectloaf.com/100-whole-wheat-sourdough/)
was checked on 2026-09-05 and identifies multiple causes of gummy crumb.

## Fold strength checkpoint

On 2026-09-05, the user accepted a strength checkpoint and an optional third
fold set. Perform two sets, with the third only when the strength check
calls for it. Put this guidance in Step 5, where
it helps the baker assess dough during early bulk.

After the second set, look for dough that gathers into a cohesive mound,
stretches with some resistance, and holds its shape briefly. Some spreading
during the rest is normal. If it remains weak and spreads immediately,
cover and rest another 30 minutes, then perform one additional gentle set
of four folds. Stop stretching when the dough resists; avoid tearing it.

Leave the dough alone after the second or optional third set. Count the
extra rest within total bulk time and keep the aliquot sample undisturbed.
This allows extra strengthening when needed, at the cost of another brief
handling step. It does not add a mandatory third set to every bake.

[The Perfect Loaf's folding guide](https://www.theperfectloaf.com/how-to-stretch-and-fold-sourdough-bread-dough/)
supports adjusting folds to the dough's strength. It was checked on
2026-09-05.

## Shaping instructions

On 2026-09-05, the user accepted concrete hand movements for final shaping
in Step 7 because this guidance would help them for now. Replace the
general instruction to create surface tension with folding the edges into
a parcel, turning it seam-side down, and cupping and gently pulling it
across the counter. Rotate and repeat until the skin is smooth and taut;
stop if it starts to tear.

Keep the existing bench-rest timing and dough-based exceptions. Keep the
final orientation in the banneton: smooth side down, seam side up.

[The Perfect Loaf's round-loaf shaping guide](https://www.theperfectloaf.com/guides/shaping-a-boule/)
supports folding and gentle pulling to tighten the outer surface. The
source was checked on 2026-09-05.

## Finished-loaf storage

On 2026-09-05, the user declined adding bread-storage guidance and asked
to skip the topic. Do not add storage instructions after cooling. The
existing mother-starter storage guidance is a separate topic and remains.

## Crumb reference photo

On 2026-09-05, the user chose to skip adding a crumb reference photo.
Leave the guide without one for now.

## Aliquot rise target

On 2026-09-05, the user chose to keep the existing tube guidance in Step 6:
use a 40–50% sample rise as the current target, alongside the existing
dough cues. The sample stays beside the main dough in the approximately
70°F pantry. The user wants a useful, repeatable measurement and declined
an additional temperature warning in the recipe.

Keep the current instructions. Do not add a separate temperature check for
the tube. This decision does not establish that sample and dough temperatures
are always identical; the accepted approach uses the consistent setup and
finished-loaf results to refine the target.

## Flour specification

On 2026-09-05, the user declined specifying flour brands and types for the
dough and starter and asked to skip this topic. Leave the current flour
specification unchanged. The starter's flour composition remains unspecified;
do not infer it from this decision.

## Starter build timing

On 2026-09-05, the user clarified that the 20–60 g mother-starter range is
intentional: use less when there is more time and more to ripen the build
sooner. Keep the added water and flour at 60 g each, and keep the dough's
ripe-starter amount at 100 g. Do not replace the range with a fixed 20 g.

The user accepted clarifying the step's timing label to
"~6–12 hr to double with 20 g starter." This identifies which build the
planning estimate describes. Keep the existing near-peak readiness cues;
choosing the amount helps manage timing but does not guarantee an exact
readiness time.

[King Arthur's feeding-ratio trials](https://www.kingarthurbaking.com/blog/2025/03/13/sourdough-feeding-ratios)
support using the feeding ratio to adjust ripening time. The source was
checked on 2026-09-05.

## Starter contamination check

On 2026-09-05, the user accepted a contamination check in Step 1 and mother
starter maintenance. Before retaining a portion or feeding, discard the
entire starter if it has visible mold or pink/orange streaks. A layer of
liquid, even dark liquid, does not by itself establish spoilage.

Place this check before the feeding instructions so a contaminated culture
is not treated as a merely sluggish starter. Keep it out of the final
finished-loaf troubleshooting section. The two locations share the same
wording.

[King Arthur's starter troubleshooting guidance](https://www.kingarthurbaking.com/blog/2018/03/09/sourdough-starter-troubleshooting-2)
supports this distinction. The source was checked on 2026-09-05.

## Mother maintenance ratio

On 2026-09-06, the user chose 1:3:3 by weight for mother maintenance,
matching the recovery-feeding ratio. The user explicitly corrected the
initially written 3:1:1 to 1:3:3: one part starter, three parts water, and
three parts fresh flour. This supersedes the former 1:2:2 maintenance feed.

Apply it to weekly feeding, the bake-day mother refresh, and the feed used
to return a recovered starter to storage. Retain around 20 g and weigh the
actual portion: 20 g takes 60 g each water and flour; 22 g takes 66 g each.
Keep the storage-rest guidance based on when the mother will next be used,
and keep the separate baking-build range and readiness checks.
