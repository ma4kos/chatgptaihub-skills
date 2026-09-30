# SMB Content Packs

**Authority:** fusion adopt doc `FUSION_SMB_CONTENT_PACKS.md` (staging content_gen, 2026-09-30).  
**Rule:** Do **not** fork skills into pack-only trees. Keep flat `skills/<slug>/SKILL.md` + `marketplace.json` `skills[]`. Packs are **slug references** for learning paths and hub messaging (`content_packs[]` in `marketplace.json`).

## Why packs (vs hobbyist mega-indexes)

SMBs need paste-in, deterministic procedures with owners, SLAs, and copy-pasteable tables — not persona dumps. Differentiation: **SMB procedure + QUALITY_BAR**, original bodies only, secret-safe, no Cap FIRE, no secret-bound spine/webmaster skills.

## Pack map

### 1. `ops-engine-starter` (P0)

| | |
|--|--|
| **Audience** | Ops managers, founders, team leads |
| **Skills** | `meeting-notes-to-actions`, `weekly-ops-brief`, `sop-from-bullets`, `checklist-from-sop` (**all published**) |
| **Messaging** | Meeting chaos → owners + dates; SOP from bullets then operator checklist; one-page weekly ops brief |
| **Walkthrough** | [`packs/ops-engine-starter/WALKTHROUGH.md`](../packs/ops-engine-starter/WALKTHROUGH.md) · edu mirror [`edu/walkthrough-ops-foundation.md`](./edu/walkthrough-ops-foundation.md) |

### 2. `support-essentials` (P0)

| | |
|--|--|
| **Audience** | Support leads / CX |
| **Skills** | `customer-email-triage`, `support-macro-library` (**published**); `agent-handoff-checklist` (draft, P2 addon) |
| **Messaging** | Triage buckets + draft reply outlines — no auto-send; macros from pasted tickets |
| **Walkthrough** | [`packs/support-essentials/WALKTHROUGH.md`](../packs/support-essentials/WALKTHROUGH.md) · edu mirror [`edu/walkthrough-support-essentials.md`](./edu/walkthrough-support-essentials.md) |

### 3. `sales-accelerator` (P1 / near-P0)

| | |
|--|--|
| **Audience** | Founder-led sales, SDRs |
| **Skills** | `outbound-email-draft`, `proposal-outline-smb`, `pipeline-weekly-rollup` (**all published**) |
| **Messaging** | Proposal outline + assumptions; one outbound email + CTA; weekly pipeline rollup without CRM lock-in |
| **Walkthrough** | [`packs/sales-accelerator/WALKTHROUGH.md`](../packs/sales-accelerator/WALKTHROUGH.md) · edu mirror [`edu/walkthrough-sales-accelerator.md`](./edu/walkthrough-sales-accelerator.md) |

### 4. `content-creation-kit` (P1)

| | |
|--|--|
| **Audience** | Marketing / content owners |
| **Skills** | `content-brief-to-draft` (**published**), `linkedin-post-outline` (draft) |
| **Messaging** | Brief → editable draft; LinkedIn outline — draft only |
| **Walkthrough** | [`packs/content-creation-kit/README.md`](../packs/content-creation-kit/README.md) · edu [`edu/walkthrough-content-kit.md`](./edu/walkthrough-content-kit.md) |

### 5. `developer-assistant` (P2)

| | |
|--|--|
| **Audience** | SMB engineering / Codex users |
| **Skills** | `codex-pr-summary` (draft), `bug-repro-steps` (draft); `changelog-from-commits` (queued, not in tree yet) |
| **Messaging** | PR summary + test gaps; deterministic repro; changelog later |

### 6. `finance-light` (P3 — gated)

| | |
|--|--|
| **Skills** | `invoice-line-sanity`, `expense-report-draft` (queued) |
| **Must** | Heavy non-authoritative disclaimer; paste-in only; **no Cap FIRE** |
| **Ship** | Only after P0–P2 + QUALITY_BAR |

## Messaging must-haves

1. Curated for SMB workflows — not a hobbyist mega-index  
2. Paste-in procedures with owners, SLAs, stable labels  
3. MIT / free catalog — no hidden paywall to use listed skills  
4. Secret-safe: env names only  
5. Deterministic outputs — tables/checklists  
6. No auto-send / auto-ticket without human confirm  
7. Original skill bodies  
8. Private spine / webmaster / VPC estate skills are **not** in this catalog  

## Status honesty

Catalog **v0.4.0-launch-mass**: **10 published** skills. Lead with published; keep `linkedin-post-outline`, `agent-handoff-checklist`, and coding-assistant skills as draft/preview. Pack hubs live under `packs/<id>/`. Template Generator remains SPEC only. No Cap FIRE.
