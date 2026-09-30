---
name: pipeline-weekly-rollup
description: Roll pasted SMB pipeline rows into a weekly sales brief — stages, risks, next actions — distinct from ops briefs.
category: sales
version: 0.1.0
status: published
---

# Pipeline Weekly Rollup

## Purpose

Assemble a **one-page weekly sales pipeline rollup** from pasted deal rows or CRM export snippets: stage mix, at-risk deals, next actions, and asks for leadership — for SMB sellers without enterprise revenue intelligence tools.

## When to use

- Friday (or Monday) sales ritual for a founder-led or small AE team
- When CRM is a Sheet / HubSpot free tier / pasted rows
- Not for forecasting models that invent commit numbers, or auto-updating CRM fields

## Install

Load this `SKILL.md` into ChatGPT (project / custom instructions) or your Codex skills directory.

Full paths and Release pinning: [`docs/INSTALL.md`](../../docs/INSTALL.md). Newcomer path: [`docs/GETTING_STARTED.md`](../../docs/GETTING_STARTED.md).


## Differentiation

| Skill | Object | Vocabulary |
|-------|--------|------------|
| `weekly-ops-brief` | ops / delivery | blockers, owners, capacity |
| `pipeline-weekly-rollup` (this) | **sales pipeline** | stage, amount, close date, next step, risk |

Do not emit ops-brief sections here.

## Inputs

Provide:

1. **Week label** — e.g. `2026-W40` or date range
2. **Pipeline rows** — paste (deal name, stage, amount or `TBD`, close date or `TBD`, owner, next step)
3. **Stage list** — ordered stages your SMB uses (or default below)
4. **Audience** — `founder` | `sales lead` | `whole team` (default `founder`)

Optional:

- **Currency** — label only (`USD`, `MUR`, …)
- **Commit definition** — one line if you have one; else omit forecasts

Default stages if unspecified: `Lead → Qualified → Proposal → Negotiation → Won/Lost`.

## Instructions (follow in order)

1. Parse rows; do not invent deals, amounts, or close dates. Missing → `TBD` / `UNASSIGNED`.
2. Summarize **stage counts** and **amount sums only where every row in that stage has a numeric amount**; otherwise show `partial / TBD`.
3. Flag **at-risk** deals: stalled next step, close date in the past, or notes saying blocked — label `risk_reason`.
4. List **wins / losses** this week only if rows say so.
5. Produce **next actions** table: owner, deal, action, due (`TBD` ok).
6. Produce **asks for leadership** (intros, pricing exception, hiring) — only from evidence or `None reported.`
7. Emit the output format. Do not write back to CRM APIs.

## Output format

```markdown
# Pipeline rollup — {Week label}
Audience: {Audience}
Currency: {label or unspecified}

## Stage mix
| Stage | Deals | Amount |
|-------|-------|--------|
| ... | n | sum or partial/TBD |

## At-risk
| Deal | Owner | Risk reason | Next step |
|------|-------|-------------|-----------|
| ... | ... | ... | ... |

## Won / Lost (stated only)
- Won: ...
- Lost: ...

## Next actions
| Owner | Deal | Action | Due |
|-------|------|--------|-----|
| ... | ... | ... | ... |

## Asks for leadership
- ...

## Data gaps
- ...
```

## Determinism rules

- Same rows → same stage mix and risk flags
- Never invent commit/forecast % 
- Prefer `TBD` over guessed close dates
- SMB lens: 5–40 deals typical; keep the brief one page

## Why useful for SMB

- Friday sales ritual from Sheet/HubSpot-free pasted rows — no RevOps suite.
- Distinct vocabulary from weekly-ops-brief (stages/amounts vs capacity/incidents).
- Never invents forecasts; TBD/UNASSIGNED stay honest.

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

No CRM OAuth or enrichment API keys. Paste-in rollup only.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SALES_DEFAULT_CURRENCY` | no | `USD` | Currency label |
| `SALES_PIPELINE_STAGES` | no | `Lead|Qualified|Proposal|Negotiation|Won/Lost` | Stage list hint |
| `SALES_ROLLUP_AUDIENCE` | no | `founder` | Default audience |

Optional labels only.

## Out of scope

- Auto-updating CRM stages
- Spiff / commission calculation as authoritative payroll
- Secret-bound sales-estate connectors
- Cap FIRE or personal investing content

## Example (dry-run)

**Input:** week `2026-W40`; rows: `Northwind Bakery | Proposal | 4800 | 2026-10-10 | Alex | send outline`; `Blue Pier Café | Negotiation | TBD | TBD | Sam | wait on budget`; `Old Mill Gym | Qualified | 1200 | 2026-10-20 | Alex | demo`; audience `founder`; currency `USD`.

**Expected shape:** stage mix table; Blue Pier in at-risk (amount/close TBD); next actions for Alex/Sam; no invented quarterly forecast.

Full paste-ready sample: [`docs/edu/examples/pipeline-weekly-rollup.md`](../../docs/edu/examples/pipeline-weekly-rollup.md).

## Example prompts (paste variants)

Use **≥3** distinct prompts. The dry-run above counts as **prompt A**. Paste B/C as-is (fictional SMB data only).

### Prompt A — dry-run

Use the **Example (dry-run)** input in this file (or the full sample under `docs/edu/examples/`).

### Prompt B — sparse sheet export

```text
Week label: 2026-W41
Audience: sales lead
Currency: USD
Stages: Lead → Qualified → Proposal → Negotiation → Won/Lost
Pipeline rows:
- Old Mill Gym | Lead | TBD | TBD | UNASSIGNED | first call
- Harbor Dental | Proposal | 3600 | 2026-10-18 | Alex | send outline
- Pier Roasters | Negotiation | 9200 | 2026-10-05 | Sam | wait legal (past close date)
- Green Cart Café | Won | 2100 | 2026-09-28 | Alex | onboard
```

### Prompt C — founder focus

```text
Week label: 2026-W40
Audience: founder
Currency: MUR
Pipeline rows:
- Island Clinic | Qualified | 15000 | 2026-11-01 | Maya | demo
- Café Lotus | Proposal | TBD | TBD | Maya | pricing TBD
- Surf Shop Co | Lost | 0 | 2026-09-25 | Sam | chose competitor (stated)
Commit definition: omit — no forecast invented
```

**Human confirm:** review output before send, publish, wiki post, or CRM write-back.
