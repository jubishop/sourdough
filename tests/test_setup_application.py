"""Verify that bin/setup-application installs locked dependencies, with simulated pnpm and corepack."""

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest

SOURCE = Path(__file__).resolve().parents[1]


class SetupApplicationTests(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory(prefix="sourdough application setup ")
        self.addCleanup(temporary.cleanup)
        base = Path(temporary.name)
        self.repo = base / "checkout"
        (self.repo / "bin").mkdir(parents=True)
        shutil.copy2(SOURCE / "bin/setup-application", self.repo / "bin/setup-application")
        (self.repo / "package.json").write_text("{}\n")
        self.events = base / "events.jsonl"
        self.tools = base / "tools"
        self.tools.mkdir()
        (self.tools / "python3").symlink_to(sys.executable)
        self.tool("pnpm", "PNPM_EXIT")
        self.env = {key: value for key, value in os.environ.items() if key not in {"PNPM_EXIT", "COREPACK_EXIT"}}
        self.env.update(PATH=str(self.tools), SETUP_EVENTS=str(self.events), PYTHONDONTWRITEBYTECODE="1")

    def tool(self, name, exit_variable):
        path = self.tools / name
        path.write_text("#!" + sys.executable + "\n"
                        "import json, os, sys\n"
                        "with open(os.environ['SETUP_EVENTS'], 'a') as stream:\n"
                        f"    stream.write(json.dumps([os.getcwd(), {name!r}, *sys.argv[1:]]) + '\\n')\n"
                        f"sys.exit(int(os.environ.get({exit_variable!r}, '0')))\n")
        path.chmod(0o755)

    def setup_application(self, **extra):
        return subprocess.run([str(self.repo / "bin/setup-application")], cwd=self.repo / "bin",
                              env=self.env | extra, text=True, capture_output=True, timeout=60)

    def recorded(self):
        return [json.loads(line) for line in self.events.read_text().splitlines()] if self.events.exists() else []

    def test_installs_from_the_lockfile_at_the_repository_root(self):
        result = self.setup_application()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.recorded(), [[str(self.repo.resolve()), "pnpm", "install", "--frozen-lockfile"]])

    def test_caches_the_latest_pnpm_through_corepack_before_installing(self):
        self.tool("corepack", "COREPACK_EXIT")
        result = self.setup_application()
        self.assertEqual(result.returncode, 0, result.stderr)
        root = str(self.repo.resolve())
        self.assertEqual(self.recorded(), [[root, "corepack", "install", "--global", "--cache-only", "pnpm@latest"],
                                           [root, "pnpm", "install", "--frozen-lockfile"]])

    def test_corepack_failure_warns_and_installs_with_the_available_pnpm(self):
        self.tool("corepack", "COREPACK_EXIT")
        result = self.setup_application(COREPACK_EXIT="3")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("Could not fetch the latest pnpm through corepack", result.stderr)
        self.assertEqual([event[1:] for event in self.recorded()],
                         [["corepack", "install", "--global", "--cache-only", "pnpm@latest"],
                          ["pnpm", "install", "--frozen-lockfile"]])

    def test_install_failure_propagates(self):
        self.assertEqual(self.setup_application(PNPM_EXIT="5").returncode, 5)

    def test_missing_pnpm_fails_with_install_guidance(self):
        (self.tools / "pnpm").unlink()
        result = self.setup_application()
        self.assertEqual(result.returncode, 1)
        self.assertIn("pnpm 12 or later is required.", result.stderr)

    def test_without_package_json_installs_nothing(self):
        (self.repo / "package.json").unlink()
        result = self.setup_application()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.recorded(), [])


if __name__ == "__main__":
    unittest.main()
