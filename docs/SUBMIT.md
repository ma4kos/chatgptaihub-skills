# Submit a skill

## Who can submit

Anyone proposing a **free**, original SMB skill for ChatGPT/Codex-style `SKILL.md` packs. Editorial acceptance is not guaranteed.

## How to submit (lean GitHub path)

1. Fork / branch this repository.
2. Add `skills/<slug>/SKILL.md` (slug: lowercase, hyphenated).
3. Meet [`QUALITY_BAR.md`](./QUALITY_BAR.md).
4. Add a metadata object to `marketplace.json` `skills[]` (after editorial OK):
   - Required fields: `slug`, `name`, `description`, `category`, `path`, `version`, `status`, `tags`, `requires_secrets`, `env_placeholders`
   - Use `status: draft` in the PR until editors set `published`
   - Run `python3 scripts/validate_catalog.py` before requesting review
5. Open a Pull Request with:
   - Skill purpose (3 sentences)
   - Category
   - Confirmation: no secrets, no copied third-party skill bodies
   - Optional: link to a dry-run paste (fictional data)

## Editorial lane

- **Notion** is for draft review and comments (internal).
- **GitHub** is the public catalog of record (README, Pages, Releases, `marketplace.json`).
- Do not treat VPC dashboards as submission or discovery surfaces.

## What we reject quickly

- Secret-bound connectors that need private estate credentials
- Scraped or mirrored OpenAI/community skill dumps
- Skills whose primary job is unauthorized access, spam, or deception
- Empty “persona only” files with no procedure

## After merge

- Maintainers may cut a GitHub Release
- Skill may be queued for Manus daily featured skill
- Authors should watch issues for breakage reports

## License

By submitting, you agree the skill may be redistributed under the catalog’s final license (**MIT and/or CC-BY 4.0 — TBD**). See `CATALOG_DECISIONS.md`.
