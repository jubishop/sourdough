---
name: active-site-workflow
description: Use the active GitHub and Vercel project for Justin's sourdough changes.
type: feedback
---

# Use the active Vercel site

On 2026-09-06, Justin explicitly confirmed that the ChatGPT-hosted sourdough
site is abandoned and asked that the correct workflow be remembered.

For future sourdough-site work, start with
[jubishop/sourdough](https://github.com/jubishop/sourdough), read its
`AGENTS.md`, and follow the [site and hosting guide](../docs/site-and-hosting.md).
That guide owns the production URL, Vercel project, and deployment procedure.
Do not select an old ChatGPT Sites checkout merely because it is available
locally, and do not commit, push, or publish changes to that retired copy.

Ground the target before editing. If the Vercel connection returns no teams,
use the repository's documented team and project to check access. An empty
team list does not establish that the active site is still on ChatGPT Sites.
If Vercel rejects the documented team scope, request reconnection with access
to that team; do not deploy to another site or team as a workaround.

Apply the change to current source, preserve later recipe decisions, run the
repository's required checks, and commit and push when authorized. Follow
the hosting guide to deploy; a successful Git push alone does not prove that
production updated. Report success only after verifying the deployment.
