"""Project identifiers and the pushed-revision check shared by bin/vercel-*."""

from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
PROJECT_ID = "prj_kLYoyycFstxYJVjvXD2Y3JpDTLOa"
TEAM_ID = "team_G6Ne98tjomMFr4bTlq6RwnOy"


def git(*args, cwd=ROOT, env=None):
    return subprocess.run(["git", *args], cwd=cwd, env=env, capture_output=True, check=True).stdout


def pushed_commit(revision):
    """Return the full SHA of revision, refusing one not already on origin/main.

    Fetches origin/main first, so a push from another clone isn't missed.
    """
    git("fetch", "--quiet", "origin", "main")
    commit = git("rev-parse", "--verify", f"{revision}^{{commit}}").decode().strip()
    if subprocess.run(["git", "merge-base", "--is-ancestor", commit, "origin/main"], cwd=ROOT).returncode:
        raise RuntimeError(f"{revision} is not on origin/main; push it first.")
    return commit
