---
status: current
---

# Development workflow

This page records this project's own commands and integrations. Shared rules
are in the [foundation pages](foundation/README.md). Track work in
[GitHub Issues](https://github.com/jubishop/sourdough/issues). The public site
uses Next.js. See [site and hosting](site-and-hosting.md) for recipe editing,
local development, and Vercel deployment.

## Setup

```sh
bin/setup
bin/setup-application
bin/doctor
bin/check --full
```

Setup needs Git and Python 3.9 or later, and checks also need ShellCheck.
QMD and direnv are optional; setup reports skipped features. Install td and
run `td init` as described in [task tracking](foundation/task-tracking.md).
The project has no `.envrc`; create it only when the project needs environment
settings, and review it before running `direnv allow`. Search does not need it.

`bin/setup-application` installs the application dependencies from the
lockfile with `pnpm install --frozen-lockfile`, and reports when pnpm is
missing. Project Starter manages `bin/setup`, so this project-owned script
holds the install step that `bin/setup` ran before the 2.0 migration.

## Checks

Follow the [check schedule](foundation/engineering-policy.md#checks).
`bin/check-application`, which `bin/check --full` runs after the foundation
checks, runs the Python tests in `tests/`. When `package.json` exists, it then
runs `pnpm typecheck`, `pnpm lint`, and `pnpm build`, the Next.js production
build, which can download the site's Google fonts. It stops at the first
failure and returns that command's exit status. `tests/test_check_application.py`
and `tests/test_setup_application.py` cover both application scripts.

The default and `--documents-only` modes do not start pnpm or application
tools. Run `pnpm typecheck` or `pnpm lint` explicitly when code edits need
them.

[Repository checks](../.github/workflows/check.yml) run `bin/check --full` for pull
requests and pushes to `main` on GitHub Actions. The Ubuntu 24.04 runner
includes ShellCheck; the workflow verifies it without refreshing apt package
repositories. It selects Node from `.nvmrc`, installs pnpm, and installs the
locked dependencies before the check. The workflow has read-only repository
permissions, and CI does not download search models.

## Runtime and toolchain versions

The site uses Node.js 24, declared by `.nvmrc` and the `engines` field in
`package.json`, and pnpm 11.25.0, declared by `packageManager`. CI reads both
declarations. Application dependencies, including Next.js and TypeScript, are
pinned in `package.json` and locked in `pnpm-lock.yaml`. Foundation checks
need only Python 3.9 or later and ShellCheck. These follow the
[version policy](foundation/engineering-policy.md#runtime-and-toolchain-versions).

## Deployment

Publish to Vercel through the connected Vercel tool or the CLI, as described
in [Vercel deployment](site-and-hosting.md#vercel-deployment). Deploy
functionally material changes; documentation, comments, formatting-only, and
other functionally immaterial changes need no deployment, as recorded in
[when deployment is required](site-and-hosting.md#when-deployment-is-required).
A Git push alone does not prove that production updated.

## Project Starter

`.project-starter.json` records the installed Project Starter release and the
hashes of its managed files. Update them with Project Starter's `bin/sync`,
and record any intentional local change as an override with its reason.
