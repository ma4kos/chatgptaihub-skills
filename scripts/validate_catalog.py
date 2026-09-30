#!/usr/bin/env python3
"""Validate marketplace.json paths and required skill fields.

Usage (from repo root):
  python3 scripts/validate_catalog.py
  python3 scripts/validate_catalog.py --root /path/to/repo

Exit codes:
  0 — catalog OK
  1 — validation errors
  2 — marketplace.json missing or unreadable
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

REQUIRED_TOP_LEVEL = ("version", "name", "description", "categories", "skills")
REQUIRED_SKILL_FIELDS = (
    "slug",
    "name",
    "description",
    "category",
    "path",
    "version",
    "status",
    "tags",
    "requires_secrets",
    "env_placeholders",
)
ALLOWED_CATEGORIES = {
    "support",
    "sales",
    "ops",
    "finance",
    "content",
    "coding-assistant",
}
ALLOWED_STATUSES = {"published", "example-stub", "draft", "deprecated"}


def load_marketplace(root: Path) -> dict:
    path = root / "marketplace.json"
    if not path.is_file():
        print(f"ERROR: missing {path}", file=sys.stderr)
        sys.exit(2)
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"ERROR: invalid JSON in {path}: {exc}", file=sys.stderr)
        sys.exit(2)


def validate(root: Path, data: dict) -> list[str]:
    errors: list[str] = []

    for key in REQUIRED_TOP_LEVEL:
        if key not in data:
            errors.append(f"top-level missing required key: {key}")

    categories = data.get("categories") or []
    category_ids = {c.get("id") for c in categories if isinstance(c, dict)}
    if not category_ids:
        errors.append("categories[] is empty or malformed")

    skills = data.get("skills")
    if not isinstance(skills, list):
        errors.append("skills must be an array")
        return errors

    if "example_skills" in data and data["example_skills"]:
        errors.append(
            "example_skills is non-empty; promote entries into skills[] or clear the array"
        )

    seen_slugs: set[str] = set()
    for i, skill in enumerate(skills):
        prefix = f"skills[{i}]"
        if not isinstance(skill, dict):
            errors.append(f"{prefix}: must be an object")
            continue

        for field in REQUIRED_SKILL_FIELDS:
            if field not in skill:
                errors.append(f"{prefix}: missing required field '{field}'")

        slug = skill.get("slug")
        if isinstance(slug, str):
            if slug in seen_slugs:
                errors.append(f"{prefix}: duplicate slug '{slug}'")
            seen_slugs.add(slug)
        else:
            errors.append(f"{prefix}: slug must be a string")

        category = skill.get("category")
        if category is not None and category not in ALLOWED_CATEGORIES:
            errors.append(
                f"{prefix}: category '{category}' not in {sorted(ALLOWED_CATEGORIES)}"
            )
        if category is not None and category_ids and category not in category_ids:
            errors.append(f"{prefix}: category '{category}' not listed in categories[]")

        status = skill.get("status")
        if status is not None and status not in ALLOWED_STATUSES:
            errors.append(
                f"{prefix}: status '{status}' not in {sorted(ALLOWED_STATUSES)}"
            )

        path_val = skill.get("path")
        if isinstance(path_val, str):
            skill_path = root / path_val
            if not skill_path.is_file():
                errors.append(f"{prefix}: path does not exist: {path_val}")
            elif skill_path.name != "SKILL.md":
                errors.append(f"{prefix}: path should end with SKILL.md, got {path_val}")
        elif path_val is not None:
            errors.append(f"{prefix}: path must be a string")

        tags = skill.get("tags")
        if tags is not None and not isinstance(tags, list):
            errors.append(f"{prefix}: tags must be an array")

        env = skill.get("env_placeholders")
        if env is not None:
            if not isinstance(env, list):
                errors.append(f"{prefix}: env_placeholders must be an array")
            else:
                for j, name in enumerate(env):
                    if not isinstance(name, str) or not name:
                        errors.append(
                            f"{prefix}.env_placeholders[{j}]: must be a non-empty string (name only)"
                        )
                    elif "=" in name or " " in name.strip():
                        errors.append(
                            f"{prefix}.env_placeholders[{j}]: looks like a value; names only"
                        )

        if skill.get("requires_secrets") is True:
            errors.append(
                f"{prefix}: requires_secrets=true is not allowed in the public free catalog"
            )

    return errors


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--root",
        type=Path,
        default=None,
        help="Repo root (default: parent of scripts/)",
    )
    args = parser.parse_args()
    root = args.root.resolve() if args.root else Path(__file__).resolve().parent.parent

    data = load_marketplace(root)
    errors = validate(root, data)

    skill_count = len(data.get("skills") or [])
    if errors:
        print(f"FAIL: {len(errors)} issue(s) in catalog ({skill_count} skill entries)")
        for err in errors:
            print(f"  - {err}")
        sys.exit(1)

    print(f"OK: marketplace.json valid — {skill_count} skill(s), paths exist, fields present")
    sys.exit(0)


if __name__ == "__main__":
    main()
