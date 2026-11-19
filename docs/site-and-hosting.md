---
status: current
---

# Site and hosting

This repository contains Justin's public whole-wheat sourdough recipe site.
Next.js builds the one-loaf recipe page as static content. The
checklist runs in the browser. No database or account service is required.

## Accepted scope

On 2026-09-06, the user confirmed that the ChatGPT-hosted site is abandoned.
Use [this GitHub repository](https://github.com/jubishop/sourdough) and the
Vercel production site below for all future recipe edits and publishing.
The original site is only historical source material; do not update its
repository or publish it as a substitute for the Vercel site.

On 2026-09-05, the user requested a port from ChatGPT Sites to Vercel and
confirmed that the whole site must be public, with no starter-log form or
login restrictions. The reason is to maintain the sourdough baking and recipe
work in this repository. This is a hosting port; preserve the current recipe
and visual design.

On 2026-09-05, the user requested removal of the two-loaf calculator as
unnecessary complexity. Keep the recipe fixed at one loaf.

The baseline is version 64 of
[the original site](https://sourdough.jubishop.chatgpt.site), at source commit
`a6ce31b7dd09ba484f3bd850ca2dddcccb9249fa`. Source and database inspection on
2026-09-05 confirmed that this version had no starter-log form, API, or sign-in
code. The residual Sites `starter_builds` table had zero rows. No records need
to be transferred. The old Cloudflare binding, migrations, and unused server
dependencies are not part of this port.

Checklist progress belongs to a browser origin: a different hostname has
separate browser storage. Existing progress on the ChatGPT Sites hostname
does not automatically appear on the Vercel hostname. No cross-domain data
transfer is implemented.

## Edit the recipe

- [Baseline and experiment recipes](recipe-versions.md): the two recipe
  files, how to edit them, and how to choose which one a change targets.
- [Starter maintenance](../lib/starter-maintenance.ts): weekly mother-starter
  care, shared by both recipes.
- [Recipe page](../app/recipe-page.tsx): page markup, the recipe switch, and
  the experiment's highlighted differences.
- [Styles](../app/globals.css): layout, colors, and responsive behavior.
- [Layout](../app/layout.tsx): fonts, title, description, and sharing metadata.
- [Checklist hook](../hooks/use-checklist.ts): device-local progress. It reads
  the existing `sourdough-checklist` key and the older `first-loaf-checklist`
  key. Invalid stored data falls back to an empty checklist. If storage writes
  fail, the current page can still track progress without saving it.
- [Public assets](../public): the original favicon and sharing image.

Recipe text began with the imported source. The port did not independently
reassess the baking advice. Subsequent accepted changes are recorded in
[recipe guide decisions](recipe-guide.md).

## Flexible sizing

On 2026-09-11, the user requested relative sizing throughout the site so
text and layout can adapt to their browser preferences. Use `rem` for
fonts, spacing, icons, borders, and size limits; use `em` for responsive
breakpoints. Keep the root font size at `100%` so it follows the browser
setting. Avoid pixel lengths in page and checkbox styles.

Let content wrap and containers grow. Use percentages, flexible grid
columns, and viewport-relative values where space depends on the screen.
At narrow widths, give recipe text the full row.
Let the header and starter-care headings wrap into rows.
At the narrowest text-relative widths, let the header scroll with the page
and stack the maintenance control below its title. Preserve the recipe and
saved checklist behavior.

The approach follows [MDN's font-sizing guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-size)
and [relative media-query guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media),
checked on 2026-09-11. Check both normal and enlarged browser text settings
on desktop and mobile before publishing layout changes.

## Local development

Install the latest Node.js LTS (24 or later) and the latest pnpm (12 or
later), then run:

```sh
bin/setup
pnpm dev
```

`bin/setup` also installs the locked application dependencies through
`bin/setup-application`, which first caches the latest pnpm when Corepack
provides it.

Open the local URL printed by Next.js. No environment values are required.
Use `bin/check` for foundation checks only, or `bin/check --documents-only`
for Markdown checks; Markdown edits need none. Run `pnpm typecheck` or
`pnpm lint` explicitly when code edits need them. `bin/check --full` adds
`bin/check-application`: typechecking, lint, and the production build. None of
these is required before pushing or deploying. Use `pnpm start` to serve the
completed production build locally.

## Vercel deployment

### When deployment is required

After the commit and push that
[`AGENTS.md`](../AGENTS.md#complete-every-change) requires, deploy right away
when the change affects recipe content, application behavior, appearance,
dependencies, or build/runtime configuration. Confirm the deployment reaches
`READY` and verify the live production site.

Documentation, comments, formatting-only edits, and other functionally
immaterial changes do not require deployment. The user requested this
exception on 2026-09-28 to avoid deploying changes that do not affect the site.
Assess what the changes do, not their file extension, and honor explicit
instructions to deploy or stop before delivery steps.

### Production project

The production site is [sourdough-eosin.vercel.app](https://sourdough-eosin.vercel.app).
The Vercel project is `artisanal-software/sourdough`.

The project ID is `prj_kLYoyycFstxYJVjvXD2Y3JpDTLOa`; the team ID is
`team_G6Ne98tjomMFr4bTlq6RwnOy`. These identifiers were checked through the
Vercel connection on 2026-09-06. If access to this team is rejected, reconnect
Vercel with access to `artisanal-software`; do not select a different project.

### Build cache

Vercel restores `.next/cache` from the previous deployment. On 2026-11-17, a
deployment with a `globals.css` change built from that restored Turbopack
cache and served the old stylesheet, while the page markup updated. A
deployment with `--force`, which skips the cache, served the new CSS.
[`next.config.ts`](../next.config.ts) therefore turns off
`turbopackFileSystemCacheForBuild`, on by default since Next.js 16.3, so
every build compiles fresh; these builds take about 15 seconds. Keep it off.
If a deployment still serves stale output, redeploy with
`bin/vercel-deploy --force`, or through the connected tool with
`forceNew: "1"`.

### Node runtime

Vercel ignores `.nvmrc` and selects Node from `engines.node` in
`package.json`, which overrides the project's Node.js Version setting.
According to
[Vercel's Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions),
checked on 2026-10-09, the available majors are 24.x (the default), 22.x, and
20.x, and a lower bound such as `>=24` maps to the newest available major's
latest release. Vercel added Node.js 24 as an LTS release and applies patch
releases itself. Production therefore gets the latest LTS, and moves to a
newer major on the first deployment after Vercel offers it. Check the build
log's Node version after Vercel adds a major.

### pnpm version

Vercel's [package manager documentation](https://vercel.com/docs/package-managers),
last updated 2026-08-11, still describes only lockfile-based selection
(pnpm 9 or 10 for `lockfileVersion: 9.0`) and Corepack. Its open-source build
code is newer. Since `@vercel/build-utils` 14.9.0 (2026-09-01), a build
without Corepack reads `devEngines.packageManager` first and puts the newest
pnpm major from its build image that satisfies the range and the lockfile on
`PATH`, such as `/pnpm12`. It then uses that major's preinstalled release
for both `installCommand` and `buildCommand`, and moves to a newer major when
Vercel adds one. See
[`run-user-scripts.ts`](https://github.com/vercel/vercel/blob/main/packages/build-utils/src/fs/run-user-scripts.ts)
and the
[build-utils changelog](https://github.com/vercel/vercel/blob/main/packages/build-utils/CHANGELOG.md),
checked on 2026-10-09. The `ENABLE_EXPERIMENTAL_COREPACK` variable has no
effect here because Vercel uses Corepack only with a `packageManager` field.

The build log should report ``Detected `pnpm-lock.yaml` version 9 generated
by pnpm@12.x from package.json#devEngines.packageManager``. Vercel adds a
major only when its image contains that directory, and does not publish the
image's pnpm releases. Without `/pnpm12`, it falls back to pnpm 10 by project
creation date, and `engines.pnpm` stops the install with
`ERR_PNPM_UNSUPPORTED_ENGINE` rather than building with an older pnpm.

### Publish through the connected Vercel tool

The connected `create_deployment` tool deploys files by reference to the
team's Vercel file store, so an authenticated local CLI is not required. First
commit and push the source, then run `bin/vercel-request`. It fetches
`origin/main` and prints the call's `requestBody` for it, or for a revision
given as its argument, which must already be on `origin/main`:

- `name: "sourdough"`, `project` set to the project ID above, and
  `target: "production"`.
- `files`: the tracked files at that revision, minus those matching its
  `.vercelignore` and the `.gitignore` file itself, which the CLI never
  uploads either. Each entry is `{file, sha, size}`: the root-relative path,
  the SHA-1 of the contents, and the size in bytes. Inlining contents instead
  would not fit in a tool call; the base64 of `public/og.png` alone is about
  1.5 million characters.
- `projectSettings` with `framework`, `buildCommand`, and `installCommand`
  from `vercel.json`.
- `gitMetadata` with the commit's SHA, `commitRef: "main"`, its subject as
  `commitMessage`, the `origin` URL as `remoteUrl`, and `dirty: false`, so the
  deployment list shows the commit as it does for CLI deploys.

Call `create_deployment` with `teamId` set to the team ID above and that
output as `requestBody`. Add `forceNew: "1"` to force a fresh build without
the build cache when an identical deployment already exists, as when
redeploying the commit production serves. Leave
`skipAutoDetectionConfirmation` unset: the request sends the project's own
framework, so a 400 asking to confirm framework detection means the project
settings changed and need checking, not suppressing.

Earlier CLI and tool deploys have already stored most files. A 400
`missing_files` error does not name the missing ones; they are usually the
files changed since the commit production serves, its `githubCommitSha` in
`list_deployments`. Upload each with `upload_file`: `teamId`, the file's
contents as base64 in `requestBody`, `xVercelDigest` set to its SHA-1, and
`contentLength` set to its size. Then repeat the call. A missing file too
large to pass as base64 in a tool call, such as a changed `public/og.png`,
needs [the CLI](#publish-through-the-cli) instead.

Poll the returned deployment ID with `get_deployment`, setting `idOrUrl` to
it and `teamId` to the team ID, until it reaches `READY` or a terminal
failure. If it fails, read its build logs with `list_deployment_events`.
Then verify the intended content at the production URL above, rather than
treating an upload, a Git push, or an initializing deployment as publication.
On 2026-11-03, Vercel's bot protection began answering a `curl` polling loop
against the production URL with a 403 "Vercel Security Checkpoint" page after
about 30 requests in five minutes. A browser passed the challenge and showed
the new content. Verify in a browser, or check once after `READY`, rather than
polling the production URL with a script.

These steps follow the connected tool schemas as checked on 2026-11-18;
Vercel's [MCP tool reference](https://vercel.com/docs/agent-resources/vercel-mcp/tools)
defers to each connection's schemas. That day a `forceNew` production deploy
of `cf45487` by these steps reached `READY` on its first call. An earlier
deploy that also listed `.gitignore`, which no deploy had stored yet, got
`missing_files`, uploaded it with `upload_file`, and succeeded on the retry.

### Publish through the CLI

The root [Vercel configuration](../vercel.json) selects Next.js and uses the
pnpm lockfile. With an authenticated Vercel CLI, check the account with
`vercel whoami`, commit and push the source, then publish:

```sh
bin/vercel-deploy
```

It fetches `origin/main` and deploys it to production, or a revision given as
its argument, which must already be on `origin/main`; add `--force` to build
without the build cache. The CLI waits for the build and exits nonzero if it fails; then
verify the production site as the connected-tool steps describe. No database,
authentication keys, or secret environment values are needed. Keep the
production domain accessible to anonymous visitors.

Never run `vercel --prod` from a working checkout. The CLI uploads the
directory it runs in, minus `.vercelignore` and its built-in ignores, so it
ships untracked and modified files, including another session's uncommitted
work, under a commit SHA that doesn't contain them. A deploy of `0e32fe0` on
2026-11-18 shipped a browser snapshot and local build output this way.
`bin/vercel-deploy` therefore clones the revision into a temporary directory
outside the repository, writes the project link to `.vercel/project.json`
there, runs `vercel deploy --prod --yes`, and removes the clone on exit. It
uses a clone, not a linked worktree, because the CLI reads the remote URL
from the checkout's `.git/config` and the branch from `HEAD`; the clone checks
the revision out as `main` with `origin`'s URL, so the deployment records the
commit, branch, and repository as `bin/vercel-request` does. On 2026-11-18,
its deploy of `d36608f` reached `READY` with exactly the files and SHA-1s
that `bin/vercel-request` lists, while an untracked file and an uncommitted
edit in the checkout stayed behind.

Direct CLI deployment is configured. To enable deployment on Git pushes,
connect GitHub in the Vercel account's login settings, then run
`vercel git connect --scope artisanal-software` and select this repository.
The initial connection attempt returned "You need to add a Login Connection
to your GitHub account first." This does not prevent direct deployment.

Sharing metadata uses Vercel's production hostname for production builds and
the deployment hostname for previews. Set the optional `SITE_URL` to an
absolute HTTPS URL when using a custom domain. Locally it uses
`http://localhost:3000`. See [.env.example](../.env.example).

Vercel's [Next.js integration](https://vercel.com/docs/frameworks/full-stack/nextjs)
supports this deployment. Its
[system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)
provide the generated hostnames. These references were checked on 2026-09-05.

After deployment, check the public URL without a session. Confirm the recipe,
styles, and sharing image load, then check checklist persistence,
and the mobile layout. Track delivery in
[issue 1](https://github.com/jubishop/sourdough/issues/1).
