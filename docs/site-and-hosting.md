---
status: current
---

# Site and hosting

This repository contains Justin's public whole-wheat sourdough recipe site.
Next.js builds the recipe page as static content. Scaling, timers, and the
checklist run in the browser. No database or account service is required.

## Accepted scope

On 2026-09-05, the user requested a port from ChatGPT Sites to Vercel and
confirmed that the whole site must be public, with no starter-log form or
login restrictions. The reason is to maintain the sourdough baking and recipe
work in this repository. This is a hosting port; preserve the current recipe
and visual design.

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

- [Recipe page](../app/recipe-page.tsx): ingredients, steps, starter care,
  troubleshooting, timers, and page markup.
- [Styles](../app/globals.css): layout, colors, and responsive behavior.
- [Layout](../app/layout.tsx): fonts, title, description, and sharing metadata.
- [Checklist hook](../hooks/use-checklist.ts): device-local progress. It reads
  the existing `sourdough-checklist` key and the older `first-loaf-checklist`
  key. Invalid stored data falls back to an empty checklist. If storage writes
  fail, the current page can still track progress without saving it.
- [Public assets](../public): the original favicon and sharing image.

Recipe text comes from the imported source. The port does not independently
reassess the baking advice.

## Local development

Install Node.js 24 and pnpm 11.25.0, then run:

```sh
bin/setup
pnpm dev
```

Open the local URL printed by Next.js. No environment values are required.
Run `bin/check` before delivery. It runs foundation tests, TypeScript checks,
lint for application code, and the production build. Use `pnpm start` to serve
the completed production build locally.

## Vercel deployment

The production site is [sourdough-eosin.vercel.app](https://sourdough-eosin.vercel.app).
The Vercel project is `artisanal-software/sourdough`.

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
styles, and sharing image load, then check scaling, timers, checklist persistence,
and the mobile layout. Track delivery in
[issue 1](https://github.com/jubishop/sourdough/issues/1).
