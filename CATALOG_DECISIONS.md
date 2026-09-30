# Catalog design decisions + open questions

Hard-coded from prior research for this scaffold. Parent may fusion-review later.

> **Spine (2026-09-30):** Canonical private repo is `ma4kos/markos-spine` (not `MA4KOS/marcos-spine`). Readable via authenticated GitHub MCP. Public marketplace must not publish Hub webmaster or other secret-bound estate skills.

> **Fusion (2026-09-30 MUT):** OpenRouter multi-model (`openai/gpt-4o-mini` + `google/gemini-2.5-flash`) + adjudicator → see `skills_marketplace_research_20260930/05_FUSION_DECISIONS.md`. No Cap FIRE. No invented MailPoet metrics.

## Decisions (locked for scaffold)

| ID | Decision |
|----|----------|
| D1 | **Public catalog host = GitHub** — repo + README + Pages + Releases + `marketplace.json`. **FUSION F1 ADOPT.** |
| D2 | **Notion = editorial only** — not the public catalog surface. **FUSION F1 ADOPT.** |
| D3 | **VPC dashboard ≠ public catalog** — do not publish the catalog through private VPC UI. **FUSION F1 ADOPT.** |
| D4 | **Positioning** — curated free SMB ChatGPT/Codex-ready `SKILL.md` packs + editorial trust; **not** a million-skill scraper. |
| D5 | **No secret-bound estate duplication** — do not mirror private spine skills into the free catalog. Spine is readable: canonical **`ma4kos/markos-spine`** (private). Hub skill `plugins/markos-content/skills/chatgptaihub-webmaster` = **private ops only**. **FUSION F5 ADOPT.** |
| D6 | **Categories** — `support`, `sales`, `ops`, `finance`, `content`, `coding-assistant`. |
| D7 | **Starter skills in `skills[]`** — `meeting-notes-to-actions`, `customer-email-triage`, `weekly-ops-brief` promoted (`status: published`); `example_skills` removed. **FUSION F2** order honored. Next: P1 sales/ops/content (see `docs/STARTER_SET_PRIORITY.md`). |
| D8 | **Secrets policy** — NEVER embed API keys in skills; env vars as placeholders only. **FUSION F4 ADOPT** (generator emits names only). |
| D9 | **Site link** — [chatgptaihub.com](https://chatgptaihub.com); Manus daily featured skill called out in README. **FUSION F3 ADOPT:** Featured Skill + article→collection tags + git SHA/Release pins; throttle LinkedIn Company Page auto-posts. |
| D10 | **Template generator** — side-license concept; emits `SKILL.md` (+ optional setup examples) with env **NAMES** only; Codex cloud secrets in setup phase. **FUSION F4 ADOPT.** Free emitted skill text follows D13; generator SaaS terms may differ (legal copy TBD). |
| D11 | **No Cap FIRE** content in this scaffold. |
| D12 | **No real secrets** in repo. |
| D13 | **License default = MIT** for free catalog packs / emitted `SKILL.md`. **FUSION F7 ADOPT** (models split MIT vs CC-BY-4.0; adjudicator chose MIT). |
| D14 | **Canonical public remote = `ma4kos/chatgptaihub-skills`**. **FUSION F8 ADOPT.** |
| D15 | **Paid geo (this campaign)** — prioritize US/UK; secondary CA/AU/IE/DE/NL/Nordics as capacity allows; exclude/deprioritize IN/PH via **ad location settings** (not cloaking). Organic globally readable. **FUSION F6 ADOPT.** Do not invent MailPoet KPIs. |

## Open questions

| ID | Question | Notes |
|----|----------|-------|
| Q1 | **Spine de-dupe process** | **Access resolved** (`02b`): `ma4kos/markos-spine` readable via GitHub MCP as ma4kos. Remaining: editorial process so public authors de-dupe vs private inventory **without** publishing secret-bound estate skills (webmaster, audio-overview, Access/SSH-bound). F5 locks the *never publish* rule; process still TBD. |
| Q2 | **MailPoet metrics** | Which newsletter metrics should drive starter priority and Manus featuring? Still **BLOCKED** until WP/MailPoet unlock. **Do not invent metrics.** |
| Q3 | **License** | ~~MIT vs CC-BY 4.0~~ → **CLOSED: MIT (D13 / F7).** Update README LICENSE placeholder when publishing. |
| Q4 | **Generator side-license (legal)** | Technical emit policy locked (D8/D10/F4). Remaining: exact paid generator SaaS terms vs free MIT skill text. |
| Q5 | **GitHub org/repo name** | ~~placeholder~~ → **CLOSED: `ma4kos/chatgptaihub-skills` (D14 / F8).** |
| Q6 | **Pages vs site** | Does chatgptaihub.com iframe/mirror Pages, or only link out? |
| Q7 | **Acceptance SLA** | Editorial turnaround target for SUBMIT PRs. |

## Change log (scaffold)

| Date (Mauritius) | Change |
|------------------|--------|
| 2026-09-30 | Initial scaffold decisions D1–D12; open questions Q1–Q7. |
| 2026-09-30 | Spine reconcile: D5/Q1 updated — `ma4kos/markos-spine` readable; Hub webmaster private-ops-only (see research `02b`, `04_SYNTHESIS.md`). |
| 2026-09-30 | Fusion F1–F8: D1–D3/D5/D7–D10 reinforced; added D13 MIT, D14 `ma4kos/chatgptaihub-skills`, D15 paid geo; closed Q3/Q5; Q4 narrowed to legal SaaS terms (`05_FUSION_DECISIONS.md`). |
| 2026-09-30 | Polish pass: promote three starters into `skills[]`; drop `example_skills`; add `scripts/validate_catalog.py` + `templates/skill-template/SKILL.md`; README spine note (`ma4kos/markos-spine` Hub webmaster = private ops). |
