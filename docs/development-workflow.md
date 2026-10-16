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
bin/doctor
bin/check --full
```

Setup needs Git, Python 3.9 or later, the latest Node.js LTS, and pnpm 12
or later; checks also need ShellCheck. QMD and direnv are optional; setup reports
skipped features. Install td and run `td init` as described in
[task tracking](foundation/task-tracking.md). The project has no `.envrc`;
create it only when the project needs environment settings, and review it
before running `direnv allow`. Search does not need it.

After the foundation setup succeeds, `bin/setup` runs the project-owned
`bin/setup-application`. When Corepack is available, it first caches the
latest pnpm release with `corepack install --global --cache-only pnpm@latest`,
so Corepack's `pnpm` runs that release here; if that fails, it warns and
continues with the pnpm already available. It then installs the application
dependencies from the lockfile with `pnpm install --frozen-lockfile` and
reports when pnpm is missing. Run it directly to update pnpm and reinstall
only the dependencies.

## Checks

No check is required before pushing or deploying: the owner wants every
change committed, pushed, and deployed right away (2026-10-15; see
[`AGENTS.md`](../AGENTS.md#complete-every-change)). This overrides the
[check schedule](foundation/engineering-policy.md#checks). CI still runs after
each push. `bin/check-application`, which `bin/check --full` runs after the foundation
checks, runs the Python tests in `tests/`. When `package.json` exists, it then
runs `pnpm typecheck`, `pnpm lint`, and `pnpm build`, the Next.js production
build, which can download the site's Google fonts. It stops at the first
failure and returns that command's exit status. `tests/test_check_application.py`
and `tests/test_setup_application.py` cover both application scripts.

The default and `--documents-only` modes do not start pnpm or application
tools. Run `pnpm typecheck` or `pnpm lint` explicitly when code edits need
them.

[Repository checks](../.github/workflows/check.yml) run `bin/check --full` for pull
requests and pushes to `main` on GitHub Actions. The latest Ubuntu runner
includes ShellCheck; the workflow verifies it without refreshing apt package
repositories. It selects the latest Node.js LTS from `.nvmrc`, installs the
newest pnpm release that `devEngines.packageManager` allows, and installs the
locked dependencies before the check. The workflow has read-only repository
permissions, and CI does not download search models.

## Runtime and toolchain versions

The site uses the latest Node.js LTS. `package.json` declares the minimum,
`"node": ">=24"`, with no upper bound, and `.nvmrc` requests `lts/*` for
local version managers and CI. Vercel selects Node from `engines`; see
[Vercel's Node selection](site-and-hosting.md#node-runtime).

pnpm also follows its latest stable release. `package.json` has no exact
`packageManager` pin; `engines.pnpm` is `>=12`, which makes pnpm refuse to
install with an older release, and `devEngines.packageManager` names pnpm with
the same unbounded range and `"onFail": "ignore"`:

- Corepack runs the newest cached pnpm in the range and downloads the newest
  published one when none is cached; `bin/setup-application` refreshes that
  cache.
- `pnpm/action-setup` in CI installs the newest published release in the range
  on every run.
- Vercel selects the newest pnpm major in its build image that satisfies the
  range; see [Vercel's pnpm selection](site-and-hosting.md#pnpm-version).
- `"onFail": "ignore"` keeps pnpm 11 and later from recording the version in
  `pnpm-lock.yaml` and switching to it, which would otherwise pin pnpm
  through the lockfile.

These behaviors were checked on 2026-10-09 against
[pnpm's `devEngines.packageManager`](https://pnpm.io/package_json#devenginespackagemanager)
and [`pmOnFail`](https://pnpm.io/settings/cli#pmonfail) documentation,
Corepack 0.36's [`devEngines.packageManager`](https://github.com/nodejs/corepack#devenginespackagemanager)
documentation and source, and the
[`pnpm/action-setup`](https://github.com/pnpm/action-setup#version) source.
Raise the minimum when the project relies on a newer pnpm major.

Application dependencies, including Next.js and TypeScript, are pinned in
`package.json` and locked in `pnpm-lock.yaml`. `@types/node` follows the
Node 24 minimum, so typechecking rejects APIs newer than Node 24. Foundation
checks need only Python 3.9 or later and ShellCheck. These follow the
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
