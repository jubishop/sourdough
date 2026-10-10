"""Verify the application checks that bin/check --full runs, with simulated tools."""

import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest

SOURCE = Path(__file__).resolve().parents[1]
SCRIPTS = ("typecheck", "lint", "build")


class CheckApplicationTests(unittest.TestCase):
    def setUp(self):
        temporary = tempfile.TemporaryDirectory(prefix="sourdough application checks ")
        self.addCleanup(temporary.cleanup)
        base = Path(temporary.name)
        self.repo = base / "checkout"
        (self.repo / "bin").mkdir(parents=True)
        shutil.copy2(SOURCE / "bin/check-application", self.repo / "bin/check-application")
        (self.repo / "package.json").write_text("{}\n")
        (self.repo / "tests").mkdir()
        self.events = base / "events.jsonl"
        for name in ("first", "second"):
            (self.repo / "tests" / f"test_{name}.py").write_text(
                "import json, os, unittest\n"
                "class Probe(unittest.TestCase):\n"
                "    def test_probe(self):\n"
                "        with open(os.environ['CHECK_EVENTS'], 'a') as stream:\n"
                f"            stream.write(json.dumps(['{name}']) + '\\n')\n"
                "        self.assertNotIn('FAIL_PYTHON', os.environ)\n")
        self.tools = base / "tools"
        self.tools.mkdir()
        (self.tools / "python3").symlink_to(sys.executable)
        pnpm = self.tools / "pnpm"
        pnpm.write_text("#!" + sys.executable + "\n"
                        "import json, os, sys\n"
                        "with open(os.environ['CHECK_EVENTS'], 'a') as stream:\n"
                        "    stream.write(json.dumps(['pnpm', *sys.argv[1:]]) + '\\n')\n"
                        "sys.exit(7 if sys.argv[-1] == os.environ.get('FAIL_APPLICATION') else 0)\n")
        pnpm.chmod(0o755)
        self.env = {key: value for key, value in os.environ.items() if key not in {"FAIL_PYTHON", "FAIL_APPLICATION"}}
        self.env.update(PATH=str(self.tools), CHECK_EVENTS=str(self.events), PYTHONDONTWRITEBYTECODE="1")

    def check(self, **extra):
        return subprocess.run([str(self.repo / "bin/check-application")], cwd=self.repo, env=self.env | extra,
                              text=True, capture_output=True, timeout=60)

    def recorded(self):
        return [json.loads(line) for line in self.events.read_text().splitlines()] if self.events.exists() else []

    def test_runs_python_tests_then_pnpm_scripts_in_order(self):
        result = self.check()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.recorded(), [["first"], ["second"], *[["pnpm", script] for script in SCRIPTS]])

    def test_failures_propagate_and_stop_later_commands(self):
        result = self.check(FAIL_PYTHON="1")
        self.assertNotEqual(result.returncode, 0)
        self.assertNotIn("pnpm", [event[0] for event in self.recorded()])
        for index, script in enumerate(SCRIPTS):
            with self.subTest(script=script):
                self.events.unlink(missing_ok=True)
                result = self.check(FAIL_APPLICATION=script)
                self.assertEqual(result.returncode, 7)
                self.assertEqual([event for event in self.recorded() if event[0] == "pnpm"],
                                 [["pnpm", name] for name in SCRIPTS[:index + 1]])

    def test_missing_pnpm_fails_with_setup_guidance(self):
        (self.tools / "pnpm").unlink()
        result = self.check()
        self.assertEqual(result.returncode, 1)
        self.assertIn("pnpm is required. Run bin/setup before bin/check.", result.stderr)

    def test_without_package_json_runs_only_python_tests(self):
        (self.repo / "package.json").unlink()
        (self.tools / "pnpm").unlink()
        result = self.check()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.recorded(), [["first"], ["second"]])


if __name__ == "__main__":
    unittest.main()
