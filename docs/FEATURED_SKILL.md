# Featured Skill — Manus daily rotate

## Purpose

ChatGPTAIHub highlights **one** free catalog skill per day (Manus article + collection tags). The machine-readable pin lives at [`catalog/featured.json`](../catalog/featured.json).

## Fields (`catalog/featured.json`)

| Field | Required | Meaning |
|-------|----------|---------|
| `skill_slug` | yes | Must match a `skills[].slug` in `marketplace.json` |
| `featured_date` | yes | Editorial day `YYYY-MM-DD` (Mauritius / MUT context) |
| `git_sha` | yes | Full git commit SHA of the catalog state to pin |
| `release_tag` | no | Optional GitHub Release tag (e.g. `v0.1.1`) |
| `manus_notes` | no | Short notes for Manus / social copy |

## Daily rotate process (brief)

1. Pick next published skill from `marketplace.json` (prefer variety across categories; skip `draft` unless intentional).
2. Update `catalog/featured.json`: new `skill_slug`, today’s `featured_date`, current `git_sha` (`git rev-parse HEAD` after the commit that ships the pin).
3. Optional: cut/attach a Release and set `release_tag`.
4. Manus: publish/update the day’s Featured Skill article linking the GitHub `SKILL.md` + SHA/Release pin.
5. Site/social: link [chatgptaihub.com](https://chatgptaihub.com); **throttle** LinkedIn **Company Page** auto-posts (human narrative preferred; avoid stacking daily autoposts at launch).
6. Do **not** feature private spine / `chatgptaihub-webmaster` / secret-bound estate skills.

## Pages

The static docs site (`docs/index.html`) loads `featured.json` alongside `marketplace.json` when present. GitHub Actions workflow `.github/workflows/pages.yml` copies both into the Pages artifact.

## Non-goals

- Inventing engagement metrics or MailPoet subscriber counts
- Auto-posting every feature to LinkedIn without throttle
- Cap FIRE or unrelated finance product promotion
