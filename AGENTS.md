# Sourdough instructions

Keep designs, decisions, and research in [docs](docs/README.md). Use
[GitHub Issues](https://github.com/jubishop/sourdough/issues) for work items
and implementation progress.

Before non-trivial work or writing memory, search the relevant knowledge.
Use `bin/knowledge search "term"` for known terms and
`bin/knowledge query "question" --no-rerank` for broader questions.
Read focused results with `bin/knowledge get <path> -l 80`.
Use direct reads or `rg` for known paths or after a successful lookup with no
matches. Markdown source files are authoritative.
If configured QMD fails, report it to the user immediately and attempt repair.
If repair fails, pause knowledge-dependent work until the user approves a
fallback; never silently bypass broken QMD with `rg` or direct reads. Follow
the [search failure policy](docs/development-workflow.md#search-failures).

Run `bin/setup` after cloning. Use `bin/check --documents-only` for Markdown
edits and `bin/check` for foundation checks only. Application tools must not
run in either mode. For code edits, run relevant application checks explicitly.
Run `bin/check --full` after setup or foundation changes, and before a code PR
or deployment; it adds foundation tests, typechecking, lint, and the production
build. Do not run checks for discussion or read-only work. Batch related edits before checking
and reuse passing results while relevant inputs are unchanged.
Use `bin/doctor` to inspect local setup and `bin/qmd-index` to refresh search
after uncommitted knowledge edits when current search results are needed.
Hooks refresh search after Git events.

Follow the [memory](memory/README.md) and [docs](docs/README.md) formats.
Keep accepted decisions separate from proposals. Preserve unrelated changes.
Keep secrets and generated caches out of Git.

Keep [Markdown pages focused](docs/development-workflow.md#markdown-pages)
on one topic or reader task, without numeric size limits.

## Complete every change

After changes, run the required checks, commit, and push to GitHub. Deploy
functionally material changes, including recipe content and UI changes, under
the [deployment policy](docs/site-and-hosting.md#when-deployment-is-required).
Documentation, comments, formatting-only edits, and other functionally
immaterial changes do not require deployment. Honor explicit instructions to
deploy or stop before delivery steps. Preserve unrelated work and include
only authorized changes in the commit.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
