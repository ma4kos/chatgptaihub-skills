---
name: checklist-from-sop
description: Turn a pasted SOP or runbook into a numbered operator checklist with owners and evidence fields.
category: ops
version: 0.1.0
status: draft
---

# Checklist from SOP

## Purpose

Convert a pasted standard operating procedure (SOP) or runbook into a printable operator checklist: ordered steps, owner role, evidence/done criteria — without inventing process steps.

## When to use

- Promoting tribal SOP prose into a day-of checklist
- Onboarding coverage for a shift handoff
- Not for regulated GMP/FDA validation packages or legal certifications

## Inputs

Provide:

1. **SOP title**
2. **SOP body** — paste sections/bullets as-is
3. **Audience role** — who executes (e.g. `ops lead`, `on-call`)
4. **Cadence** — `one-shot` | `daily` | `weekly` | `per-incident` (default `one-shot`)

Optional:

- **Default owner** — name or role if SOP omits owners
- **Risk tags to flag** — e.g. `payment`, `data-delete`, `customer-facing`

## Instructions (follow in order)

1. Read the SOP once. Do not add steps that are not implied by the text.
2. Split into **checklist items** in execution order. Merge purely narrative fluff into notes, not fake steps.
3. For each item fill:
   - `step` — imperative, one line
   - `owner` — role from SOP or `Default owner` or `UNASSIGNED`
   - `evidence` — what "done" looks like (screenshot, ticket id, checkbox, `none`)
   - `risk` — `none` | `payment` | `data` | `customer` | `other` (only if language warrants)
4. Extract **prerequisites** (access, tools, windows) as a separate list; do not bury them mid-checklist.
5. Extract **rollback / stop conditions** if present; else `None reported.`
6. Emit the output format. No ticket creation or auto-notify.

## Output format

```markdown
# Checklist — {SOP title}
Audience: {Audience role}
Cadence: {Cadence}

## Prerequisites
- ...

## Checklist
| # | Step | Owner | Evidence | Risk |
|---|------|-------|----------|------|
| 1 | ... | ... | ... | none|payment|data|customer|other |

## Stop / rollback
- ...

## Open gaps in SOP
- ...
```

## Determinism rules

- Prefer `UNASSIGNED` / `None reported.` over guessing owners or rollback
- Do not invent tooling names not in the SOP
- Same SOP → same step order and risk labels
- Distinct from `meeting-notes-to-actions` (no meeting attendees) and `weekly-ops-brief` (no weekly narrative)

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

If the SOP mentions credential stores, refer to them by **name only** (e.g. `vault path LABEL`) — never paste values.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SOP_DEFAULT_OWNER` | no | `ops-oncall` | Fallback owner label |
| `SOP_EVIDENCE_DIR` | no | `runbooks/evidence/` | Suggested evidence path label |

Both optional labels only — not filesystem credentials.

## Out of scope

- Auto-paging or Slack posts
- Publishing private spine runbooks
- Compliance attestation / e-signature workflows

## Dry-run example (fictional)

**Input:** title `Close register`; body `Count cash drawer. Compare to POS total. Drop sealed bag in safe. Photo bag seal.`; audience `shift lead`; cadence `daily`.

**Expected shape:** 4 checklist rows; evidence for count/photo; risk may flag `payment` on cash steps; prerequisites may be empty or POS access if stated.
