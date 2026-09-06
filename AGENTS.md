# Sourdough instructions

Keep durable guidance and non-derivable context in [memory](memory/README.md).
Keep designs, decisions, and research in [docs](docs/README.md). Use
[GitHub Issues](https://github.com/jubishop/sourdough/issues) for work items
and implementation progress.

Before non-trivial work or writing memory, search the relevant knowledge.
Use `bin/knowledge search "term"` for known terms and
`bin/knowledge query "question" --no-rerank` for broader questions.
Read focused results with `bin/knowledge get <path> -l 80`.
Use direct reads for known files or when search is unavailable or stale.
Markdown source files are authoritative. Update existing pages when possible.

Run `bin/setup` after cloning. Use `bin/check --documents-only` for Markdown
edits and `bin/check` for fast foundation checks, typechecking, and lint.
Run `bin/check --full` after setup or foundation changes, and before a code PR
or deployment; it adds foundation tests and the production build. Do not run
checks for discussion or read-only work. Batch related edits before checking
and reuse passing results while relevant inputs are unchanged.
Use `bin/doctor` to inspect local setup and `bin/qmd-index` to refresh search
after uncommitted knowledge edits when current search results are needed.
Hooks refresh search after Git events.

Read the relevant memory or docs index for its format and maintenance rules.
Keep accepted decisions separate from proposals. Preserve unrelated changes.
Keep secrets and generated caches out of Git.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
