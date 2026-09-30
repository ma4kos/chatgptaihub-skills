# ChatGPTAIHub Free Skills Marketplace

**Curated free SMB skill packs for ChatGPT and Codex** — not a scraped mega-index.

This public catalog hosts lean, editorial-reviewed [SKILL.md](https://chatgpt.com) packs aimed at small and mid-size business workflows: support, sales, ops, finance, content, and coding assistance. Trust comes from curation and a published quality bar, not volume.

- **Website:** [chatgptaihub.com](https://chatgptaihub.com)
- **Catalog host:** this GitHub repository (README + GitHub Pages + Releases + `marketplace.json`)
- **Editorial:** Notion (internal) — drafts and reviews land here after approval
- **Featured:** Manus daily featured skill (see site / social for the day’s pick)

> Private “spine” estate skills and secret-bound integrations are **out of scope** for this public catalog. Do not expect duplicates of internal VPC or credentialed connectors here.

### Spine note (private ops — not this catalog)

Hub webmaster and other secret-bound estate skills live in the **private** ops repo **`ma4kos/markos-spine`** (e.g. `plugins/markos-content/skills/chatgptaihub-webmaster`). That inventory is **private ops only** and is **not** published, mirrored, or listed in this public free catalog. Authors: de-dupe against spine mentally via editorial review — never paste private skill bodies here.

---

## Positioning

| We are | We are not |
|--------|------------|
| Curated free SMB starters | A million-skill scraper |
| ChatGPT / Codex-ready `SKILL.md` packs | A substitute for secret-bound estate skills |
| Editorial trust + quality bar | Unreviewed dumps from the open web |
| GitHub-hosted public catalog | Notion or VPC as the public surface |

---

## How to install a skill

1. Open this repo (or a [Release](../../releases)) and pick a skill under `skills/<slug>/`.
2. Copy `SKILL.md` into your ChatGPT / Codex skills location (or paste the body into a custom GPT / project instructions as your product supports).
3. Read the skill’s **Secrets** and **Environment** sections. Set only the placeholders you need; **never** paste real API keys into the skill file.
4. Run a dry-pass on sample data before using it on production customer or financial data.
5. Optional: pin a Release tag so your team installs a known version.

CLI-style sketch (adapt paths to your toolchain):

```bash
# Example: clone or download a release, then copy one skill
git clone https://github.com/ma4kos/chatgptaihub-skills.git   # canonical remote (D14); create when publishing
cp -R chatgptaihub-skills/skills/meeting-notes-to-actions \
  ~/.codex/skills/meeting-notes-to-actions   # path is illustrative
```

Machine-readable index: [`marketplace.json`](./marketplace.json).

Validate locally:

```bash
python3 scripts/validate_catalog.py
```

---

## Starter skills (published)

| Slug | Category | Env placeholders |
|------|----------|------------------|
| `meeting-notes-to-actions` | ops | none |
| `customer-email-triage` | support | `SUPPORT_TONE`, `SLA_HOURS_URGENT` (optional) |
| `weekly-ops-brief` | ops | `OPS_BRIEF_TZ`, `OPS_BRIEF_AUDIENCE` (optional) |

## P1 drafts (sales / ops / content)

| Slug | Category | Status | Env placeholders |
|------|----------|--------|------------------|
| `outbound-email-draft` | sales | draft | `SALES_SENDER_NAME`, `SALES_SENDER_TITLE`, `SALES_CTA_DEFAULT` (optional) |
| `checklist-from-sop` | ops | draft | `SOP_DEFAULT_OWNER`, `SOP_EVIDENCE_DIR` (optional) |
| `linkedin-post-outline` | content | draft | `CONTENT_BRAND_VOICE`, `CONTENT_CTA_URL_LABEL` (optional) |

---


## GitHub Pages (catalog browse)

Static browse of the catalog ships from the `docs/` folder:

- Site entry: [`docs/index.html`](./docs/index.html) (loads `docs/marketplace.json` + featured pin)
- Workflow: [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) — on push to `main`, validates the catalog, copies `marketplace.json` / `catalog/featured.json` into `docs/`, deploys Pages
- Featured pin: [`catalog/featured.json`](./catalog/featured.json) — see [`docs/FEATURED_SKILL.md`](./docs/FEATURED_SKILL.md)

**Enable Pages (one-time):** Repo **Settings → Pages → Build and deployment → Source = GitHub Actions** (preferred). After the first green `Deploy GitHub Pages` run, the site is at `https://ma4kos.github.io/chatgptaihub-skills/`. Alternate: Source = Deploy from a branch → `main` → `/docs`.

No secrets in the Pages artifact. Do not put `.env` values or private spine skills here.

## Quality bar (summary)

Every listed skill must be:

- **Original** — written for this catalog; no verbatim copies of OpenAI or third-party skill bodies
- **Deterministic** — clear inputs → steps → outputs; avoid vague “be helpful” fluff
- **Secret-safe** — never embed keys; document env placeholders only
- **SMB-scoped** — useful for a small team without enterprise platform lock-in
- **Licensed** — see license note below

Full criteria: [`docs/QUALITY_BAR.md`](./docs/QUALITY_BAR.md).  
Submissions: [`docs/SUBMIT.md`](./docs/SUBMIT.md).  
Hosting model: [`docs/HOSTING.md`](./docs/HOSTING.md).  
Author template: [`templates/skill-template/SKILL.md`](./templates/skill-template/SKILL.md).

---

## Categories

| Category | Intent |
|----------|--------|
| `support` | Triage, replies, escalation hygiene |
| `sales` | Outreach, CRM notes, pipeline briefs |
| `ops` | Meeting → actions, weekly briefs, runbooks |
| `finance` | Invoice checks, expense summaries (no live bank secrets) |
| `content` | Drafts, outlines, editorial checklists |
| `coding-assistant` | Repo hygiene, PR notes, Codex-oriented helpers |

---

## License

**Default (D13 / fusion F7):** free catalog packs ship under **MIT** — see [`LICENSE`](./LICENSE). No warranty.

---

## Manus daily featured skill

ChatGPTAIHub highlights one free catalog skill per day via Manus (and the site). Featured picks rotate through the curated set; they do not expand the quality bar. Machine pin: [`catalog/featured.json`](./catalog/featured.json). Process: [`docs/FEATURED_SKILL.md`](./docs/FEATURED_SKILL.md). Check [chatgptaihub.com](https://chatgptaihub.com) for today’s skill. Throttle LinkedIn Company Page auto-posts.

---

## Repo map

```
marketplace.json                 # machine-readable catalog (skills[])
catalog/featured.json            # Manus daily Featured Skill pin
skills/<slug>/SKILL.md           # skill packs
scripts/validate_catalog.py      # path + required-field checks
templates/skill-template/        # blank SKILL.md for authors
docs/                            # Pages site + quality/submit/hosting/featured
.github/workflows/pages.yml      # GitHub Pages deploy from docs/
CATALOG_DECISIONS.md             # design decisions + open questions
SCAFFOLD_SUMMARY.txt             # initial scaffold inventory
POLISH_SUMMARY.txt               # polish-pass file list
```

---

## Disclaimer

These skills are instructional templates. You are responsible for accuracy, compliance, and any data you feed them. Do not put secrets, PII dumps, or regulated data into prompts without your own policy controls.
