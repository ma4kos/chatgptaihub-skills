---
name: proposal-outline-smb
description: Build an SMB sales proposal outline with assumptions, scope options, and pricing placeholders — no CRM lock-in.
category: sales
version: 0.1.0
status: published
---

# Proposal Outline (SMB)

## Purpose

Turn pasted discovery notes into a **deterministic SMB proposal outline**: problem → scope options → assumptions → pricing placeholders → next steps. Designed for owner-led and small sales teams without enterprise CPQ.

## When to use

- After a discovery call with a small or mid-size buyer (≤ ~200 employees typical)
- When you need a shareable outline before a formal PDF/quote tool
- Not for RFP mega-matrices, public-sector bid compliance packs, or auto-sending quotes

## Install

Load this `SKILL.md` into ChatGPT (project / custom instructions) or your Codex skills directory.

Full paths and Release pinning: [`docs/INSTALL.md`](../../docs/INSTALL.md). Newcomer path: [`docs/GETTING_STARTED.md`](../../docs/GETTING_STARTED.md).


## Inputs

Provide:

1. **Buyer** — company name, contact, role (as known)
2. **Problem statement** — paste discovery bullets or call notes
3. **Offer family** — what you sell in 1–2 sentences (no invented features)
4. **Currency / region** — e.g. `USD`, `MUR`, `EUR` (label only)
5. **Decision timeline** — stated date or `TBD`

Optional:

- **Budget signal** — stated range or `unknown` (never invent)
- **Must-include** — legal/ops constraints the buyer named
- **Competitors mentioned** — names only if buyer said them

## Instructions (follow in order)

1. Redact secrets in working copy (API keys, passwords, bank details) → `[REDACTED]`.
2. Extract **buyer goals** and **pain** as short bullets from the notes only — do not invent ROI %.
3. Propose **3 scope options** labeled `Good` / `Better` / `Best` (or `Core` / `Standard` / `Plus` if buyer language prefers that). Each option: deliverables list (3–6 lines), timeline band (`days`/`weeks`), and what is **out**.
4. Build an **assumptions** table: what must be true for the outline to hold; mark unknowns `TBD`.
5. Add **pricing placeholders** as rows with `Amount: TBD` unless the input already states a number — never invent list prices.
6. List **risks / blockers** (access, data migration, single-threaded buyer) from notes or `None reported.`
7. Emit **next steps** for the seller (human-owned): send outline, book review call, collect missing facts.
8. Emit the output format. Do not create CRM opportunities or email the buyer.

## Output format

```markdown
# Proposal outline — {Buyer company}
Contact: {name / role or UNASSIGNED}
Timeline: {Decision timeline}
Currency: {label}

## Problem (from notes)
- ...

## Goals (from notes)
- ...

## Scope options
### Good / Core
- Deliverables: ...
- Timeline band: ...
- Out of scope: ...

### Better / Standard
- ...

### Best / Plus
- ...

## Assumptions
| # | Assumption | Status |
|---|------------|--------|
| 1 | ... | stated|TBD |

## Pricing placeholders
| Line | Option | Amount | Notes |
|------|--------|--------|-------|
| ... | Good|Better|Best | TBD | ... |

## Risks / blockers
- ...

## Missing facts before quote
- ...

## Seller next steps
- [ ] ...
```

## Determinism rules

- Same notes → same option count (3) and section labels
- Prefer `TBD` / `UNASSIGNED` / `None reported.` over guessing budget or close date
- No fake case studies, logos, or “typical 3× ROI” claims
- SMB lens: keep language plain; avoid enterprise jargon (SOW appendices, MSA redlines) unless buyer notes mention them

## Why useful for SMB

- Good/Better/Best outline without enterprise CPQ or Salesforce lock-in.
- Pricing stays TBD until you price — no fake ROI.
- Paste discovery notes from a call; shareable before a polished PDF.

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

No CRM OAuth, Stripe keys, or billing portal credentials. Paste-in outline only.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SALES_DEFAULT_CURRENCY` | no | `USD` | Currency label hint |
| `SALES_PROPOSAL_VALID_DAYS` | no | `14` | Validity band wording |
| `SALES_SENDER_COMPANY` | no | `Acme Ops Co` | Seller company label |

Optional labels only — not payment credentials.

## Out of scope

- Auto-send proposals or e-sign envelopes
- Live price books / CPQ connectors
- Secret-bound CRM estate skills
- Cap FIRE or unrelated personal-finance products

## Example (dry-run)

**Input:** buyer `Harbor Dental (12 chairs), Ops Manager Priya`; problem `front desk double-books; no-shows ~15%; want SMS reminders`; offer `clinic scheduling + SMS reminders SaaS`; currency `USD`; timeline `wants live before holiday rush`; budget `unknown`.

**Expected shape:** three scope options (reminders-only → scheduling+SMS → +reporting); assumptions on phone-number ownership and PMS access; all amounts `TBD`; missing facts include PMS name; no invented patient counts or ROI %.

Full paste-ready sample: [`docs/edu/examples/proposal-outline-smb.md`](../../docs/edu/examples/proposal-outline-smb.md).

## Example prompts (paste variants)

Use **≥3** distinct prompts. The dry-run above counts as **prompt A**. Paste B/C as-is (fictional SMB data only).

### Prompt A — dry-run

Use the **Example (dry-run)** input in this file (or the full sample under `docs/edu/examples/`).

### Prompt B — agency website rebuild

```text
Buyer: Northwind Bakery, contact Alex (Owner)
Problem notes: current site is 2019 WordPress; no online catering orders; phone-only
Offer family: SMB web redesign + catering order form (hosted)
Currency: USD
Decision timeline: wants live before Thanksgiving
Budget signal: unknown
Must-include: keep existing domain; mobile-first
```

### Prompt C — ops tooling for clinic

```text
Buyer: BrightSmile Family Dental, Ops Manager Riley
Problem: reminder SMS inconsistent; no-shows; staff use three spreadsheets
Offer: scheduling + SMS reminders SaaS
Currency: USD
Timeline: TBD
Budget: unknown
Competitors mentioned: buyer said "we looked at a big enterprise PMS add-on once"
```

**Human confirm:** review output before send, publish, wiki post, or CRM write-back.
