# Developer Assistant

**Pack id:** `developer-assistant` (P2)  
**Audience:** SMB engineering / Codex users  
**Catalog:** listed in root `marketplace.json` → `content_packs[]`

## Why this pack

Small product teams drown in messy diffs and Slack bug reports. This pack chains **pasted diff → PR summary** and **messy report → deterministic repro** — paste-in only, no GitHub auth, no auto-merge.

## Skills (slugs)

| Slug | Role | Status |
|------|------|--------|
| `codex-pr-summary` | core | draft |
| `bug-repro-steps` | core | draft |

**Queued later (not in tree yet):** `changelog-from-commits`.

Skill bodies stay flat under [`skills/`](../../skills/) — this pack does **not** fork copies.

## Start here

1. Install guide: [`docs/INSTALL.md`](../../docs/INSTALL.md)
2. Walkthrough: [`WALKTHROUGH.md`](./WALKTHROUGH.md)
3. First skill: `codex-pr-summary` dry-run (draft — preview only until published)

## Messaging

Both skills are **draft / preview**. Lead with published packs elsewhere first. Human confirms before merge or production restart. Secrets = env **names** only; never paste tokens or `.env` values into skill runs.
