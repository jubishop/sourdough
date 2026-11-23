# Sourdough instructions

<!-- project-starter:begin -->
Project Starter manages this block; add project rules after it. Project rules
take precedence over this block and the foundation pages wherever they differ.

- Keep durable guidance and non-derivable context in [memory](memory/README.md),
  and designs, decisions, and research in [docs](docs/README.md). Before
  non-trivial work or writing memory, search with `bin/knowledge search "term"`
  or `bin/knowledge query "question" --no-rerank`, then read results with
  `bin/knowledge get <path> -l 80`. Markdown sources are authoritative.
- If configured QMD fails, follow `~/AGENTS.md` for a failed knowledge search,
  repairing it as
  [search failures](docs/foundation/knowledge-search.md#search-failures)
  describes.
- Follow the [engineering policy](docs/foundation/engineering-policy.md):
  fewer dependencies, red-green tests for behavior changes, cohesive files and
  pages, checkout-isolated validation, and the latest stable toolchains.
- Run [checks](docs/foundation/engineering-policy.md#checks) by change:
  `bin/check --documents-only` for text, the relevant checks while editing
  code, and `bin/check --full` before merging or releasing production code
  unless an enforced CI gate runs it. Reuse passing results.
- Keep accepted decisions separate from proposals, and keep generated caches
  out of Git. Keep secrets out of public repositories only; a private one may
  commit them.
- Run `bin/setup` after cloning, `bin/doctor` to diagnose setup, and
  `bin/qmd-index` after uncommitted knowledge edits. Managed files listed in
  `.project-starter.json` change only through Project Starter or a recorded
  override with its reason.
<!-- project-starter:end -->

## Project

Use [GitHub Issues](https://github.com/jubishop/sourdough/issues) for shared
work and acceptance criteria. `bin/check --full` adds typechecking, lint, and
the production build; see the
[development workflow](docs/development-workflow.md).

## Baking paths and recipe versions

The site has two baking paths, Dutch oven and loaf pan, which share steps 1–3
and the mother-starter refresh. A change to a shared step changes both paths.
For a step with a counterpart in both paths, such as the cold proof or the
bakes, ask which path a change targets when the instruction does not say.

Each path has two recipes: the baseline, the owner's tested best, and the
experiment, what they are trying on the next loaf. While a path's two match,
it has no experiment and the site shows only its baseline: apply a recipe
change to both, without asking or mentioning the experiment, unless the owner
raises it. While they differ, ask which one a change targets when the
instruction does not say. Weekly mother-starter care is separate from every
recipe and shared, so it needs no such question. See
[baking paths and recipe versions](docs/recipe-versions.md).

## Complete every change

This is a personal recipe site, and the owner wants every change live at
once (2026-10-15). This overrides the checks and pull requests that the managed
block and `~/AGENTS.md` call for: after any change, commit it on `main` and
push it immediately, with no local checks and no pull request. Then, when the
change affects the site, dependencies and configuration included, deploy to
production right away and confirm the live site, as the
[deployment policy](docs/site-and-hosting.md#when-deployment-is-required)
says; a docs- or memory-only change needs no deploy. Honor explicit
instructions to stop before delivery steps. Preserve unrelated work and include
only authorized changes in the commit.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
