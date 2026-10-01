# Getting Started — ChatGPTAIHub Free Skills

Newcomer path for **SMB** teams: install → pick a pack → run your first skill → unlock the next ones.

**Audience:** founder-led shops to roughly mid-size teams using ChatGPT and/or Codex.  
**Catalog version (this tree):** see root [`marketplace.json`](../marketplace.json) (`0.4.0-launch-mass`).

## 0. What you’re getting

Lean `SKILL.md` procedures — paste-in inputs, deterministic tables/checklists, secret-safe. This is a **curated** free catalog, not a scraped mega-index.

| Do | Don’t |
|----|-------|
| Start with **published** skills | Treat **draft** as Featured-ready |
| Dry-run on fictional SMB data | Paste API keys into skill files |
| Keep human send/publish/merge | Expect auto-email or auto-LinkedIn |
| Use pack walkthroughs | Wait for a “perfect” commercial SKU |

Private spine / webmaster / secret-bound estate skills are **out of scope** here.

## 1. Install

Full guide: [`INSTALL.md`](./INSTALL.md). Security: [`SECURITY.md`](./SECURITY.md).

**Short path**

1. Open the [repo](https://github.com/ma4kos/chatgptaihub-skills), [Pages](https://ma4kos.github.io/chatgptaihub-skills/), or a Release when available.
2. Copy `skills/<slug>/SKILL.md` into ChatGPT Project/Custom GPT instructions **or** a Codex skills directory.
3. Read **Secrets** / **Environment** — **names only**.
4. Run one fictional dry-run before customer data.

```bash
git clone https://github.com/ma4kos/chatgptaihub-skills.git
cp -R chatgptaihub-skills/skills/meeting-notes-to-actions \
  ~/.codex/skills/meeting-notes-to-actions   # path illustrative
python3 chatgptaihub-skills/scripts/validate_catalog.py
```

Host-specific:

- ChatGPT → [`edu/quickstart-chatgpt.md`](./edu/quickstart-chatgpt.md)
- Codex → [`edu/quickstart-codex.md`](./edu/quickstart-codex.md)

## 2. Pick a pack

Packs **reference** flat skills (no forked copies). Full map: [`SMB_CONTENT_PACKS.md`](./SMB_CONTENT_PACKS.md).

| Pack | Start here if you… | First skill |
|------|--------------------|-------------|
| **ops-engine-starter** (P0) | Run meetings, SOPs, weekly ops | `meeting-notes-to-actions` (**published**) |
| **support-essentials** (P0) | Own the inbox / CX | `customer-email-triage` (**published**) |
| **sales-accelerator** (P1) | Founder-led outbound / proposals | `outbound-email-draft` (**published**) |
| **content-creation-kit** (P1) | Need briefs & LinkedIn outlines | `content-brief-to-draft` (**published**); LinkedIn still draft |
| **developer-assistant** (P2) | PR summaries / repro | `codex-pr-summary` (**draft**) |

Walkthroughs (pack hubs):

- [Ops Engine Starter](../packs/ops-engine-starter/WALKTHROUGH.md)
- [Support Essentials](../packs/support-essentials/WALKTHROUGH.md)
- [Sales Accelerator](../packs/sales-accelerator/WALKTHROUGH.md)
- [Content kit (edu)](./edu/walkthrough-content-kit.md)
- [Developer Assistant](../packs/developer-assistant/WALKTHROUGH.md)

## 3. Run your first skill (recommended)

**Skill:** `meeting-notes-to-actions` (published, zero env required)

1. Paste the skill into your host.
2. Open [`edu/examples/meeting-notes-to-actions.md`](./edu/examples/meeting-notes-to-actions.md).
3. Paste the **Sample input** and instruct the model to follow the skill exactly.
4. Compare shape to **Expected-shaped output** (tables, `UNASSIGNED` / `TBD`).

Then try other published skills: `customer-email-triage`, `weekly-ops-brief`, then pack mates (SOP/checklist, macros, outbound/proposal/rollup, content brief).

## 4. Next skills (same week)

| After you succeed at… | Add next | Status |
|-----------------------|----------|--------|
| Meeting actions | `weekly-ops-brief` | published |
| Email triage | `support-macro-library` | published |
| Ops brief rhythm | `sop-from-bullets` → `checklist-from-sop` | published |
| Outbound draft | `proposal-outline-smb` → `pipeline-weekly-rollup` | published |
| Content brief | `linkedin-post-outline` | draft |
| Coding (optional) | `codex-pr-summary` / `bug-repro-steps` | draft |

**Messaging rule:** Catalog has **10 published** skills (v0.4.0-launch-mass). Promote published first; keep drafts (`linkedin-post-outline`, `agent-handoff-checklist`, coding-assistant) as preview. Template Generator = SPEC only.

## 5. Quality & FAQ

- Quality bar: [`QUALITY_BAR.md`](./QUALITY_BAR.md)
- FAQ: [`FAQ.md`](./FAQ.md)
- All examples index: [`EXAMPLES_INDEX.md`](./EXAMPLES_INDEX.md)
- Template Generator: **spec / concept** — [`TEMPLATE_GENERATOR.md`](./TEMPLATE_GENERATOR.md) (not a live web app)

## 6. Contribute / Featured

- Submit path: [`SUBMIT.md`](./SUBMIT.md)
- Featured Skill (Manus): [`FEATURED_SKILL.md`](./FEATURED_SKILL.md) — published skills only

Welcome aboard — ship useful procedures, not perfect plans.
