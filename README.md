# Sourdough

Repository for the Sourdough project. The foundation provides project docs,
durable memory, local search, Git hooks, and isolated worktrees. Application
code and application-specific commands have not been added yet.

Track work in [GitHub Issues](https://github.com/jubishop/sourdough/issues).

## Development

Run `bin/setup` after cloning. It requires Git and Python 3.9 or later.
QMD and direnv are optional; setup reports skipped features.

Run `bin/check` before delivering changes. It also requires ShellCheck.
Use `bin/doctor` for diagnostics. See the
[development workflow](docs/development-workflow.md) for search, worktrees,
hook integration, and recovery.

## Knowledge

- [Memory](memory/README.md): durable guidance and non-code context.
- [Docs](docs/README.md): designs, decisions, research, and reference guides.

GitHub Actions runs `bin/check` for pull requests and pushes to `main` on
Ubuntu 24.04. Add application setup and checks to these entry points as the
project develops.

The foundation comes from
[Project Starter](https://github.com/jubishop/project-starter/blob/main/GUIDE.md).
The copied revision is recorded in [.project-starter.json](.project-starter.json).
