# Sourdough research

This is the shared research archive for the 100% whole-wheat sourdough project. The deployed recipe source remains in `lib/recipes/baseline.ts` and `lib/recipes/experiment.ts`; these research documents do not change the deployed recipe.

## Start here

- [Experiments — unified register](experiments.md): all 13 numbered experiment ideas, six preserved detailed plans, and the scalding proposal. This is the single place to add or update experiment plans.
- [Goals and historical priorities](goals-and-experiment-priorities.md): goal hierarchy and November 9 ranking. Its old next-bake ordering is superseded by decisions below.
- [Dated bake records](bakes/): one Markdown file per dated bake or documented planning/handling event. Full original detailed notes for November 3, 5, and 7 are included in their respective records.

## Latest working decisions — November 12, 2026

1. Goal order stays **less rubbery/gummy-feeling crumb**, then **larger and more evenly distributed air pockets**, then **vertical oven spring**. User clarified the unwanted crumb texture is mainly **rubbery and chewy**, not paste-like/sticky.
2. **15-minute autolyse experiment assessed November 12:** No improvement in gumminess or noticeable shaping-time dough handling compared with the 90-minute experience. A huge localized cavity and the recurring underside belly button were seen, but **crumb near the outer edges away from the shaping defect looked fairly good**. Aggressive shaping is a plausible cause of the localized void, not a proven reason for the general rubbery texture. [Full observation](bakes/2026-11-12.md).
3. **Next planned bake:** **2.5–3 hours flour-and-water autolyse at room temperature**; target **1.0 L at the glass edge** for bulk, returning from **1 US quart (~946 mL)**, which the user has tried many times. The user considers the ~5.7% glass-mark difference small and familiar enough to assess the main autolyse distinction; nonetheless, document both changes. Try **much gentler shaping** and keep other steps similar. **Not yet baked.**
4. Current formula reference: **550 g total whole-wheat flour, 450 g total water, 12 g salt, 100 g 100%-hydration levain** (nominal 81.8% hydration). Lowering hydration made the dough difficult to work, and extended uncovered baking has not fixed the texture. Do not prioritize either.
5. **72°F** is the recently documented working bulk-temperature setting, but the **actual setting for the next bake has not been reconfirmed**; record what is used. Different-flour, fermentation, scalded-flour and bake-heat experiments remain possible. Excessive amylase is a **hypothesis, not a diagnosis**.
6. These are research-journal updates only: **do not change the deployed Baseline or Experiment recipe** by inference.


## Documentation rules

- Add or update experiment plans in **experiments.md**, not separate numbered files.
- Create or update **`bakes/YYYY-MM-DD.md`** for each dated bake. Put the actual recipe parameters, observations, photos, outcome, and follow-up decisions in that single file. A date with only a planning decision or pre-proof observation is explicitly labeled as such; do not invent a completed bake. Link photographs and recipe Git commits when available.
- **Do not recreate `bake-journal.md` or duplicate detailed bake notes in a running journal.** The dated records are the canonical historical source; use this README only as a navigation and current-status overview.
- Distinguish **observed results**, **planned changes**, and **hypotheses**. A later dated decision overrides an older plan, but not the historical record of what was actually baked.
- Prefer one controlled variable per bake; repeat promising results before promoting to Baseline.
- Start every page other than a README with `status: current` frontmatter, as [the page format](../README.md#page-format) describes, and link each new page from this README. `bin/check --documents-only` enforces both, and pushes to `main` fail without them.

## Dated records

- [October 29 — baseline loaf](bakes/2026-10-29.md)
- [October 31 — shaping and underside seam](bakes/2026-10-31.md)
- [November 3 — gumminess largely resolved](bakes/2026-11-03.md)
- [November 5 — successful bottom-crust liners](bakes/2026-11-05.md)
- [November 6 — pre-proof belly-button observation](bakes/2026-11-06.md)
- [November 7 — finished crumb and bulk-endpoint decision](bakes/2026-11-07.md)
- [November 8 — temperature planning decision, not a bake](bakes/2026-11-08.md)
- [November 12 — 15-minute autolyse outcome and next 2.5–3-hour plan](bakes/2026-11-12.md)

Historical plans in these files may have been superseded. Use the most recent verified bake notes and the working decisions above when planning future tests.

## Migration status

The documents above were copied from ChatGPT Library and organized in GitHub. Some original experiment documents (#1–3 and #6–9), later journal updates, and photos were not accessible during migration. The unified register contains clearly labeled summaries for those experiments, **not invented transcriptions**. Library originals remain intact. No application or recipe code was modified.

## Bake photos

The [photo archive](photos/) contains the original JPEGs recovered from ChatGPT Library, plus photos added since. The dated records link to the October 31, November 3, November 5, November 6, November 7, and November 12 photos. The October 29 photos remain unconfirmed.
