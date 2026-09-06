# Sourdough

Justin's whole-wheat sourdough recipe and baking tools. The public site includes
ingredient scaling, a kitchen timer, starter-care guidance, and a bake checklist
saved in the browser. It has no login, starter-log form, or database.

[Open the sourdough site](https://sourdough-eosin.vercel.app).

The app uses Next.js and deploys to Vercel. See the
[site and hosting guide](docs/site-and-hosting.md) for the source revision,
deployment setup, and recipe editing paths.

Track work in [GitHub Issues](https://github.com/jubishop/sourdough/issues).

## Development

Use Node.js 24, pnpm 11.25.0, Git, and Python 3.9 or later. Run `bin/setup`
after cloning to prepare local search and install application dependencies.
QMD and direnv are optional; setup reports skipped features. Start the site
with `pnpm dev` and open the local URL printed by Next.js.

Use `bin/check --documents-only` for Markdown edits. `bin/check` runs fast
foundation checks, TypeScript checks, and application lint. It requires
ShellCheck. Run `bin/check --full` after setup or foundation changes, and before
a code PR or deployment; it adds foundation tests and the production build.
Use `bin/doctor` for diagnostics. See the
[development workflow](docs/development-workflow.md) for search, worktrees,
hook integration, and recovery.

## Knowledge

- [Memory](memory/README.md): durable guidance and non-code context.
- [Docs](docs/README.md): designs, decisions, research, and reference guides.

GitHub Actions runs `bin/check --full` for pull requests and pushes to `main` on
Ubuntu 24.04, including the application checks and build.

The foundation comes from
[Project Starter](https://github.com/jubishop/project-starter/blob/main/GUIDE.md).
The copied revision is recorded in [.project-starter.json](.project-starter.json).
