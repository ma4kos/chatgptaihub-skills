# Hosting — lean GitHub public catalog

## Decision (hard-coded)

| Surface | Role |
|---------|------|
| **GitHub repo** | Source of truth for `SKILL.md`, docs, `marketplace.json` |
| **README** | Human pitch + install |
| **GitHub Pages** | Optional static browse of catalog / docs |
| **GitHub Releases** | Versioned zip/tag of skill packs |
| **marketplace.json** | Machine-readable index |
| **Notion** | Editorial only (not public catalog) |
| **VPC dashboard** | **Not** a public catalog |

Positioning: curated free SMB packs + editorial trust — **not** a million-skill scraper.

## Suggested Pages layout (minimal)

- `/` → README or a generated index from `marketplace.json`
- `/docs/*` → quality, submit, hosting
- Avoid auth walls on the public catalog

## Releases

- Tag `v0.x.y` when promoting stubs to published
- Attach an archive of `skills/` for offline install
- Changelog: skill slugs added/removed

## What not to host here

- Private spine inventory (`ma4kos/markos-spine`; Hub webmaster = private-ops-only — not published here)
- Production secrets, `.env` with real values
- Estate-only automations that cannot run without private network access

## Operational notes

- CI (optional later): JSON schema validate `marketplace.json`; lint frontmatter
- CDN/caching: Pages defaults are enough for a lean catalog
- Mirror policy: prefer canonical GitHub URL; site [chatgptaihub.com](https://chatgptaihub.com) links in

## Related

- Template-generator side path: [`TEMPLATE_GENERATOR.md`](./TEMPLATE_GENERATOR.md)
- Decisions log: [`../CATALOG_DECISIONS.md`](../CATALOG_DECISIONS.md)

## Pages enable (2026-09-30)

1. Prefer **GitHub Actions** via `.github/workflows/pages.yml` (deploys `docs/` after copying `marketplace.json` + featured pin).
2. Repo **Settings → Pages → Source = GitHub Actions**.
3. Expected URL: `https://ma4kos.github.io/chatgptaihub-skills/`
4. Alternate: branch `main` / folder `/docs` without Actions (then keep `docs/marketplace.json` in sync manually).
