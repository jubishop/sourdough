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

- [Recipe page](../app/recipe-page.tsx): recipe steps, starter care,
  and page markup.
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

## Local development

Install Node.js 24 and pnpm 11.25.0, then run:

```sh
bin/setup
pnpm dev
```

Open the local URL printed by Next.js. No environment values are required.
Use `bin/check` for foundation checks only, or `bin/check --documents-only`
for Markdown edits. Run `pnpm typecheck` or `pnpm lint` explicitly when code
edits need them. Run `bin/check --full` before a code PR or deployment; it adds
foundation tests, typechecking, lint, and the production build. Reuse a passing
result until relevant inputs change. Use `pnpm start` to serve the completed
production build locally.

## Vercel deployment

The production site is [sourdough-eosin.vercel.app](https://sourdough-eosin.vercel.app).
The Vercel project is `artisanal-software/sourdough`.

The project ID is `prj_kLYoyycFstxYJVjvXD2Y3JpDTLOa`; the team ID is
`team_G6Ne98tjomMFr4bTlq6RwnOy`. These identifiers were checked through the
Vercel connection on 2026-09-06. If access to this team is rejected, reconnect
Vercel with access to `artisanal-software`; do not select a different project.

### Publish through the connected Vercel tool

The connected `deploy_to_vercel` tool accepts source files directly, so an
authenticated local CLI is not required. First run the required checks and
commit and push the source. Prepare the tracked files from that revision,
respecting `.vercelignore`; exclude local credentials, caches, and build output.
Preserve binary assets by encoding their original bytes as base64.

Call the tool with `name: "sourdough"`, the team ID above,
`target: "production"`, and a `files` array. Each entry contains `file` (the
root-relative path), `data` (the complete contents), and `encoding` (`utf-8`
or `base64`). Use `projectSettings` with `framework: "nextjs"`,
`buildCommand: "pnpm build"`, and
`installCommand: "pnpm install --frozen-lockfile"`.

Poll the returned deployment ID with `get_deployment` and the same team ID
until it reaches `READY` or a terminal failure. Check build logs if it fails.
Then verify the intended content at the production URL above, rather than
treating an upload, a Git push, or an initializing deployment as publication.
This workflow was checked against the
[Vercel MCP tool reference](https://vercel.com/docs/agent-resources/vercel-mcp/tools)
on 2026-09-06.

### Publish through the CLI

The root [Vercel configuration](../vercel.json) selects Next.js and uses the
pnpm lockfile. Deploy from the repository root. With an authenticated Vercel
CLI, link the project and publish:

```sh
vercel link --scope artisanal-software --project sourdough
vercel --prod
```

The link file under `.vercel/` is local and ignored by Git. Verify the selected
account before linking. No database, authentication keys, or secret environment
values are needed. Keep the production domain accessible to anonymous visitors.

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
