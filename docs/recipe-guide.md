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
dough strength, bulk fermentation, and the accepted visual
baking endpoint. Give a specific cue and action for each exception.

The starter-build amount is also intentionally flexible so the user can
adjust its readiness to their schedule. See [Starter build timing](#starter-build-timing).

Troubleshooting can identify a possible improvement. Once the user chooses
a change, update the recipe itself, including affected steps, quantities,
and schedule text. Until then, the recipe's current settings remain
the instructions to follow.

Cold-proof timing is also flexible within 12–24 hours at approximately 38°F.
See [Cold-proof timing and flavor](#cold-proof-timing-and-flavor) for the
decision that supersedes the earlier fixed 12-hour instruction.

## Autolyse water

On 2026-09-09, the user chose 420 g of dough water because 400 g was still
difficult to mix into all the whole-wheat flour, and the dough felt too tight
during folding. The 20 g increase is a cautious first adjustment. Mix all
420 g water with the 500 g whole-wheat flour and rest for 60 minutes. Add
only the 100 g active starter and 11 g salt in Step 3, then take the sample
once they are fully mixed in.

The autolyse is at 84% hydration. With a 100%-hydration starter contributing
50 g each of flour and water, the final dough has 470 g water and 550 g flour:
about 85.5% total hydration, up from about 81.8%.

This supersedes the 400 g quantity selected on 2026-09-07 and the earlier
375 g autolyse plus 25 g reserved-water split. All dough water goes into
the autolyse; no water is reserved for Step 3.

On 2026-09-09, the user requested removal of all Step 2 substeps. Keep the
main mixing instruction, the 60-minute rest, and the starter-overlap cue.
The reason was not stated.

## Mixing starter and salt

On 2026-09-07, the user requested a targeted video for Step 3 if a good
match was available. Use Sunrise Flour Mill's
[20-second Pincer Method video](https://www.youtube.com/watch?v=YOt3IJFhFCw).
Its overhead close-up shows the pinch-and-fold mixing motion with a wet
hand. The publisher's [technique guide](https://sunriseflourmill.com/blogs/back-to-baking-school/pincer-method)
also identifies this method as a way to incorporate sourdough starter.
The video and its public availability were checked on 2026-09-07.

The clip demonstrates the movement, not the full mixing duration or the
addition of every ingredient. Keep the instruction to mix 100 g starter
and 11 g salt into the rested dough until reasonably uniform, with no
kneading. Keep lightly wet hands, no added flour, and taking the tube sample
only after both ingredients are fully mixed in. Step 2 remains a written
instruction to mix flour and water and rest for the autolyse.

On 2026-09-09, the user requested removal of Step 3 substeps 3 and 4,
which described filling and placing the sample tube, and the closing note
about millimeter conversion. Keep the first two substeps. The reason was
not stated.

## Cold-proof timing and flavor

On 2026-09-06, the user requested a range instead of a fixed 12-hour cold
proof, with an accurate explanation of how a longer proof affects sourness.
Use 12–24 hours at approximately 38°F: aim near 12 hours for a milder loaf,
or closer to 24 hours for more tang. Longer fermentation can build more
acidity, but the flavor change depends on the starter, dough, and refrigerator
temperature. Do not promise that more time always makes a loaf more sour.

This supersedes the 2026-09-05 decision to keep a fixed 12-hour proof. Update
the schedule, checklist, preheat overlap, and flavor troubleshooting together.
Preheat the oven and Dutch oven to 475°F for at least 45 minutes before the
chosen bake time. Keep the loaf refrigerated until ready to score and load.

On 2026-09-09, the user requested removal of the cold-proof step's sole
substep about fermentation, acidity, and flavor. Keep the main instruction
and preheat timing note. The reason was not stated.

References checked on 2026-09-06:

- [King Arthur: how to make sourdough more or less sour, part 2](https://www.kingarthurbaking.com/blog/2022/02/22/how-to-make-your-sourdough-bread-more-or-less-sour-part-2)
  explains that refrigeration often increases sour flavor, but the effect
  depends on the rest of the fermentation process.
- [King Arthur: artisan sourdough bread tips, part 2](https://www.kingarthurbaking.com/blog/2015/10/14/artisan-sourdough-bread-tips-part-2)
  describes refrigerating shaped dough for up to 24 hours.

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
a 10-minute bench rest, a 12–24-hour cold proof, 30 minutes
covered followed by 15 minutes to the first uncovered crust check, and at
least three hours of cooling. Keep the near-peak starter cues, dough cues,
10-minute bench rest, and visual baking endpoint clear.

Show the overlaps: start the 60-minute autolyse when the starter looks about
an hour from ready; folds and their rests count within bulk; preheat the
oven, Dutch oven, and pizza stone for at least the final 45 minutes of the cold proof.
The starter and bulk estimates assume the user's 70°F pantry. Do not turn
them into guaranteed clock times or promise a fixed total duration.

## Visual baking endpoint

On 2026-09-05, the user chose visual guidance for checking the baked loaf.
They do not have or want to use a probe to measure its center temperature.
Do not require an internal-temperature reading in the baking instructions.

On 2026-09-08, the user extended the initial uncovered bake in Step 12 from
12 to 15 minutes. This replaces the earlier 12-minute setting.

Keep 30 minutes covered at 450°F and an initial 15 minutes uncovered at 425°F.
After the initial 15 minutes uncovered, inspect the exposed crust for a deep
golden-brown color. Distinguish flour dusting from pale crust. If the crust
is still pale, continue uncovered in five-minute increments and check again.

Color cannot confirm the condition of the center. Keep the existing minimum
three-hour cooling period, then use the cooled crumb to refine future bake
timing. This method avoids a probe but depends more on experience with the
oven and results from previous loaves.

On 2026-09-09, the user requested removal of all substeps from the
uncovered-bake step. This supersedes the choice to include the detailed
crust-color, extra-baking-time, and cooled-crumb instructions there. Keep
the main 15-minute baking instruction and its closing crust check. The
reason was not stated.

References checked on 2026-09-05:

- [The Perfect Loaf: whole-wheat sourdough](https://www.theperfectloaf.com/100-whole-wheat-sourdough/)
  uses crust color as a baking cue and recommends cooling before slicing.
- [King Arthur: using a thermometer with yeast bread](https://www.kingarthurbaking.com/blog/2017/04/07/using-a-thermometer-with-yeast-bread)
  explains why baking endpoints depend on the bread and desired texture.

## Preheat the pizza stone with the Dutch oven

On 2026-09-08, the user chose to place a pizza stone on the rack directly
below the Dutch oven at the start of Step 9. Preheat both together and leave
the stone in place for the bake.
Remove the conditional note about adding a sheet pan if the bottom scorches.
The stone is now part of the normal bake instructions.

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
starter build belongs with Step 1; weak dough during
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

## Folding

On 2026-09-09, the user chose exactly two fold sets for Step 4 and asked
to remove the instructions for judging how many sets to perform. This
supersedes the 2026-09-07 choice to check dough strength every 30 minutes
and stop after one set or add further sets as needed. The user wants a
fixed count instead of these extra judgments.

Rest the covered dough for 30 minutes after adding the starter, then do
the first set. Cover and rest for another 30 minutes, then do the second
set. Each set consists of four gentle folds with lightly wet hands.
After the second set, cover and leave the dough undisturbed for the rest
of bulk. Both sets and rests count toward total bulk time.

Later on 2026-09-09, the user requested one checklist step per fold so
they can track how many sets they have done. Step 4 is "First fold" and
Step 5 is "Second fold", each with an independent saved checkbox. Use
`fold-one` for the first set and keep `fold-two` for the second. This
supersedes the combined folding item while keeping exactly two sets and
the 30-minute rest between them.

The checklist now has 13 steps. Update all later step numbers and their
cross-references, including cold proof, preheat, loading, and troubleshooting.
Keep the old strength checks, optional additional sets, early-stop
instructions, and later-loaf water advice out of the folding steps.

On 2026-09-07, the user requested a YouTube demonstration in place of the
written stretch-and-fold movements in Step 4. Keep The Perfect Loaf's
[29-second stretch-and-fold video](https://www.youtube.com/watch?v=mwtTZK7_t08).
Its overhead view shows wet hands and the four-sided bowl fold. The video
and its public availability were checked on 2026-09-07. Keep this recipe's
gentle handling. The video teaches the movement; the recipe specifies two
sets.

## Shaping instructions

On 2026-09-05, the user accepted concrete hand movements for final shaping
in Step 7 because this guidance would help them for now. Replace the
general instruction to create surface tension with folding the edges into
a parcel, turning it seam-side down, and cupping and gently pulling it
across the counter. Rotate and repeat until the skin is smooth and taut;
stop if it starts to tear.

Keep the final orientation in the banneton: smooth side down, seam side up.

On 2026-09-07, the user accepted a bench scraper method to avoid routine
flour dusting during Step 7. Start on a clean, dry, unfloured counter. Use
the scraper and a supporting hand to gather, release, turn, tighten, and
transfer the dough. Lightly dampen the scraper or hand if dough sticks to
them, but keep the counter dry so the dough can grip it during tightening.
Use a tiny dusting of flour at a sticking spot only if the dough sticks
enough to tear. This replaces the routine counter and top dusting and the
earlier instruction to tighten the loaf with both hands.

The tradeoff is that final shaping can still need a little flour to release
this wet dough without damage. The final basket orientation remains unchanged.

On 2026-09-08, the user requested removal of the rice-flour requirement
because their cotton banneton releases the dough well without it. Use that
banneton without flour dusting. This supersedes the earlier instruction to
dust the banneton generously with rice flour. This choice is based on the
user's basket and observed results.

Later on 2026-09-07, the user requested a YouTube demonstration in place of
the written shaping motions. Use Alexandra's Kitchen's
[58-second final shaping video](https://www.youtube.com/watch?v=0zCPoagZk4Q).
The overhead view shows folding the dough, tightening it with a bench
scraper, and transferring it seam-side up into a floured, lined bowl. The
video and its public availability were checked on 2026-09-07. It is a closer
match for the accepted scraper method than demonstrations that mainly use
both hands to tighten the loaf.

Replace the detailed fold, pull, rotate, and lift instructions with a clear
link in Step 7. Keep the recipe's initial gentle round, 10-minute rest, optional
counter-flour guidance, cotton banneton, and final orientation. The
video teaches the movements; its bowl does not replace the user's banneton.
This supersedes the earlier request for written shaping motions.

On 2026-09-09, the user removed the instructions to skip or cover the
bench rest and the three substeps for extending or stopping the rest.
Rest the preshaped round uncovered for 10 minutes, then follow the video
for final shaping. Keep the initial preshape and final basket placement.
The reason was not stated.

This supersedes the 2026-09-07 choice to use 10–20 minutes with checks for
whether the dough is ready sooner or needs more rest. Keep the step's
timing label and schedule consistent with the fixed 10-minute rest.

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

On 2026-09-09, the user requested that the bulk-fermentation step keep
only its first two substeps. Retain the airy, softly bouncy dough check
and the instruction to wait and recheck if the dough is still tight at
the target. Remove the later timing, diagnosis, temperature, and next-loaf
adjustment substeps. The reason was not stated.

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

On 2026-09-07, the user chose to begin Step 1 the night before mixing so
the starter develops overnight. Label its phase "Evening before day 1".
Keep the current starter amounts, timing estimate, and readiness checks.

On 2026-09-09, the user requested that Step 1 end after substep 4, which
instructs them to wash and dry the empty mother jar. Remove substeps 5–9
and the closing checkpoint note. This supersedes the earlier choice to
keep the detailed readiness checks within Step 1. The reason was not stated.
The separate mother-starter refresh task remains.

[King Arthur's feeding-ratio trials](https://www.kingarthurbaking.com/blog/2025/03/13/sourdough-feeding-ratios)
support using the feeding ratio to adjust ripening time. The source was
checked on 2026-09-05.

## Starter contamination check

On 2026-09-05, the user accepted a contamination check in Step 1 and mother
starter maintenance. Before retaining a portion or feeding, discard the
entire starter if it has visible mold or pink/orange streaks.

On 2026-09-09, the user requested removal of the sentence about a layer of
liquid from both locations. The reason was not stated. Keep the discard
instruction.

Place this check before the feeding instructions so a contaminated culture
is not treated as a merely sluggish starter. Keep it out of the final
finished-loaf troubleshooting section. The two locations share the same
wording.

[King Arthur's starter troubleshooting guidance](https://www.kingarthurbaking.com/blog/2018/03/09/sourdough-starter-troubleshooting-2)
supports the contamination check. The source was checked on 2026-09-05.

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

## Mother storage guide

On 2026-09-09, the user chose "A week or longer" as the second storage
option and removed the separate "Several weeks or longer" option. Keep
"Within a few days" and the existing instructions for both remaining rows.
Use the same table for weekly maintenance and the bake-day mother refresh.

The user also requested removal of all explanatory paragraphs below the
table, including the notes about a falling or sluggish mother starter.
The reason was not stated. Remove the bulk-step reference to the deleted
recovery routine.

## Mother collapse and recovery

The 2026-09-09 storage-guide change above supersedes the following choice
to include collapse and recovery notes in the recipe.

On 2026-09-07, the user accepted a short clarification before the mother
recovery routine: a slight fall after peak is normal, so continue with the
usual 1:3:3 feeding. Use the existing recovery routine if the mother has
been neglected or the next feed rises weakly. Judge strength by its response
to fresh food, not its appearance coming out of the refrigerator.

This makes the recovery trigger clearer while retaining the current feeding
ratio and recovery benchmark. A slight fall alone does not require a smaller
mother portion or additional strengthening stages. The bake-day mother
refresh continues to use a portion of the freshly ripened baking build.

[The Perfect Loaf's starter maintenance guide](https://www.theperfectloaf.com/sourdough-starter-maintenance-routine/)
was checked on 2026-09-07. It distinguishes a starter just beginning to fall
from one left collapsed for an extended period and advises judging several
signs together.
