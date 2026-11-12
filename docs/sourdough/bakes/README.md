# Historical journal context and reusable template

This file preserves the undated background, historical recipe snapshots, and reusable template from the former running journal. Actual dated bake observations live in `YYYY-MM-DD.md` files in this directory. Experiment plans live in `../experiments.md`.

## Historical context

**Last updated:** November 9, 2026  
**Purpose:** Preserve actual results, reference photographs, hypotheses, next experiments, and uncertain recollections across chats. Update on each future bake.  
**Source recipe:** https://sourdough-eosin.vercel.app (the published recipe may change; the snapshot below is as checked on Oct 29).

**Website workflow as of November 6 (verified against `jubishop/sourdough`, branch `main`):** The two source files, [`lib/recipes/baseline.ts`](https://github.com/jubishop/sourdough/blob/main/lib/recipes/baseline.ts) and [`lib/recipes/experiment.ts`](https://github.com/jubishop/sourdough/blob/main/lib/recipes/experiment.ts), contain the same full recipe other than the **bulk endpoint**: Baseline stops at **1.0 L** at the glass edge, Experiment stops at **1 US qt (~946 mL)**. Recipe-documentation source: [`docs/recipe-versions.md`](https://github.com/jubishop/sourdough/blob/main/docs/recipe-versions.md). Experiment changes graduate into Baseline only upon user approval. Both current recipes already omit pre-shaping refrigeration, which user has accepted as the **permanent no-chill standard** after easy container release on November 6. Shaping method and bulk endpoint remain *open questions*. Both recipes still instruct shaping and pinching belly buttons; the no-shaping and alternative-shaping trials are future possibilities, not yet on either recipe. Both recipe files currently use up to **four rounds** of squash-and-fold and preheat with **two perforated silicone liners plus a circular King Arthur liner** (and parchment under the dough at loading). Historical bake methods may differ; use the website recipe snapshot applicable to that bake.


**Current status following November 7 discussion (supersedes the open-question language in the November 6 snapshot above):** The user **approved the 1 US quart (~946 mL) endpoint as the new baseline** rather than 1.0 L. This is an accepted working decision, **not a verified edit to the published website**. The no-chill method remains baseline. A more radical reduction in fermentation volume is a **future** experiment, explicitly not next time. The next chosen experiment is **two folding sessions 30 minutes apart** (rather than four at 20-minute spacing), at kitchen temperature during folds, followed by a **fixed 76°F proofing-box setting** (revised November 8; supersedes the earlier ~78°F plan). Restore **315°F uncovered bake**; accidental 390°F on November 7 gave an excessively dark, thick, hard, crispy crust.

## Experimental method

- Change only **one variable per bake** unless explicitly deciding otherwise.
- Record the *actual* values used, not merely intended recipe values.
- Distinguish directly observed results from hypotheses and uncertain memories.
- Save dated **exterior** and **cross-section / crumb** photos for each loaf; where possible, photograph similar slice locations and lighting.
- Assess: interior gumminess after full cooling, density at the base, crumb openness and evenness, loaf height and oven spring, score expansion, and crust firmness/color.



## Future experiments — relevant backlog entry (unprioritized)

- **Existing idea #7 — Proofing-box/bulk fermentation temperature:** Compare **74°F versus 78°F** in deliberately separate bakes (using the current **76°F** fixed setting as the working reference if useful) while keeping ingredients, hydration, fold schedule, shaping, baking and other conditions constant. The **1 US quart glass-edge mark** remains the user's current chosen endpoint; however, document dome height/shape and consider whether a differently calibrated endpoint or better rise measurement is needed for genuinely equivalent fermentation. Record actual dough temperature if feasible, total bulk time, oven spring, base compression, crumb openness, and perceived gumminess. **Open question:** Does cooler/slower versus warmer/faster bulk fermentation change enzyme-related starch breakdown and the risk of a gummy crumb in 100% whole-wheat sourdough? This is a **future hypothesis to test**, not an established effect and not a request to change the next bake. The existing temperature experiment should **not** be duplicated as a new numbered experiment.

- **New idea #12 — Levain quantity / inoculation:** The user wants to test **less and more levain than the current 100 g** in future, unprioritized, **separate** bakes. Suggested comparison: **50 g vs. 100 g (control) vs. 150 g** of **100%-hydration whole-wheat levain**. To isolate levain quantity rather than changing dough hydration or size, compensate the main flour and water so each loaf still has **550 g total flour, 450 g total water, 12 g salt** (50 g levain: 525 g flour + 425 g water; 100 g: 500 g + 400 g; 150 g: 475 g + 375 g). Keep the chosen 76°F box setting, same levain maturity, fold schedule, 1 US qt bulk mark, shaping, cold proof and baking consistent across trials. Record **time to bulk endpoint**, dough temperature and dome/shape, acidity/taste, handling/strength, oven spring, crumb texture and gumminess. Hypothesis: less levain generally slows fermentation, more generally speeds it; effects on flavor or finished crumb remain to be observed, not predicted as certain. **Not the next bake and not a baseline change.** Details: `/Sourdough/Experiment-12-Levain-Quantity.md`.

## Future bake entry template

### YYYY-MM-DD — Loaf N
- Goal / single changed variable:
- Flour / water / levain / salt; any extra water from handling:
- Bulk target and actual final volume at glass; time and proof-box temperature:
- Pre-shaping chill and cold-proof duration / refrigerator temperature:
- Covered bake schedule:
- Uncovered bake schedule:
- Measured center temperature; cooling time:
- Exterior appearance and oven spring:
- Crumb structure (especially base) and perceived gumminess:
- Photo files (exterior / crumb):
- What the test suggests (with uncertainty):
- Next trial (one variable):
