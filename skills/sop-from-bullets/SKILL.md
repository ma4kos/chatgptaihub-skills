---
name: sop-from-bullets
description: Turn tribal-knowledge bullets into a structured SMB SOP draft with purpose, steps, owners, and exceptions.
category: ops
version: 0.1.0
status: published
---

# SOP from Bullets

## Purpose

Convert messy **tribal knowledge** (bullets, Slack paste, “how we usually do it”) into a **draft Standard Operating Procedure** with fixed sections — so a small team can review and own it. This is the **inverse** of `checklist-from-sop` (which turns an existing SOP into a day-of checklist).

## When to use

- Capturing how an SMB actually runs a recurring task (open store, onboard client, close month)
- Replacing “ask Jordan” knowledge with a reviewable draft
- Not for regulated GMP/FDA validation, legal policy issuance, or publishing private spine runbooks

## Install

Load this `SKILL.md` into ChatGPT (project / custom instructions) or your Codex skills directory.

Full paths and Release pinning: [`docs/INSTALL.md`](../../docs/INSTALL.md). Newcomer path: [`docs/GETTING_STARTED.md`](../../docs/GETTING_STARTED.md).


## Differentiation

| Skill | Direction | Output |
|-------|-----------|--------|
| `sop-from-bullets` (this) | bullets / tribal notes → **SOP draft** | Purpose, scope, steps, exceptions, owners |
| `checklist-from-sop` | existing SOP → **operator checklist** | Numbered day-of rows + evidence |

Do not merge the two workflows in one run.

## Inputs

Provide:

1. **SOP working title**
2. **Bullets / tribal notes** — paste as-is
3. **Primary role** — who executes (e.g. `office manager`, `founder`, `contractor`)
4. **Trigger** — when this SOP starts (`daily open`, `new client signed`, `per incident`, …)

Optional:

- **Systems named** — tools already in use (Sheets, POS, helpdesk) — names only
- **Risk areas** — `payment`, `PII`, `customer-facing`, `none`

## Instructions (follow in order)

1. Read bullets once. Do **not** invent steps that are not implied.
2. Write **Purpose** (1–2 sentences) and **Scope** (in / out) from the notes.
3. Order **procedure steps** as numbered imperatives; merge fluff into **Notes**, not fake steps.
4. For each step, attach `owner` = Primary role or named person, else `UNASSIGNED`.
5. Extract **prerequisites** (access, materials, time windows).
6. Extract **exceptions / if-then** branches only when bullets imply them; else `None reported.`
7. Add **definition of done** and **escalation** (who to ping) — use `TBD` if missing.
8. List **open gaps** the draft still needs from a human editor.
9. Emit the output format. Do not publish to a wiki or page anyone.

## Output format

```markdown
# SOP draft — {Title}
Status: DRAFT — needs human review
Primary role: {role}
Trigger: {trigger}

## Purpose
...

## Scope
- In: ...
- Out: ...

## Prerequisites
- ...

## Procedure
| # | Step | Owner | Notes |
|---|------|-------|-------|
| 1 | ... | ... | ... |

## Exceptions
| Condition | Action | Owner |
|-----------|--------|-------|
| ... | ... | ... |

## Definition of done
- ...

## Escalation
- ...

## Systems referenced (names only)
- ...

## Open gaps for editor
- ...
```

## Determinism rules

- Prefer `UNASSIGNED` / `TBD` / `None reported.` over guessing
- Same bullets → same step order and section set
- Do not invent tooling, SLAs, or compliance claims
- SMB lens: short sentences; assume one busy owner may execute end-to-end

## Why useful for SMB

- Captures tribal “ask Jordan” knowledge into a reviewable SOP draft.
- Inverse of checklist-from-sop — write the procedure first, checklist later.
- SMB-plain sections: purpose, steps, exceptions, open gaps.

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

If bullets mention “password in the binder” or vault paths, refer by **label only** — never paste values.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SOP_DEFAULT_OWNER` | no | `office-manager` | Fallback owner label |
| `SOP_DOC_PREFIX` | no | `SOP-` | Document id prefix label |

Optional labels only.

## Out of scope

- Auto-publishing to Notion/Confluence
- Converting the draft into a checklist in the same run (use `checklist-from-sop` after review)
- Secret-bound private spine runbooks
- Compliance e-signature / attestation

## Example (dry-run)

**Input:** title `New catering client setup`; bullets: `create folder in Drive, copy menu template, ask for dietary restrictions, send deposit invoice, add to Friday prep sheet`; role `coordinator`; trigger `signed catering agreement`.

**Expected shape:** purpose around client setup; 5 procedure rows; prerequisites may include Drive access if implied; exceptions likely `None reported.` or deposit-failed branch if stated; open gaps e.g. deposit amount `TBD`.

Full paste-ready sample: [`docs/edu/examples/sop-from-bullets.md`](../../docs/edu/examples/sop-from-bullets.md).

## Example prompts (paste variants)

Use **≥3** distinct prompts. The dry-run above counts as **prompt A**. Paste B/C as-is (fictional SMB data only).

### Prompt A — dry-run

Use the **Example (dry-run)** input in this file (or the full sample under `docs/edu/examples/`).

### Prompt B — café open checklist knowledge

```text
SOP working title: Morning café open (Harbor Beans #2)
Primary role: shift lead
Trigger: daily open
Bullets:
- unlock, disable alarm (code in binder — do not paste code)
- ovens on, check milk fridge temps
- count till float vs sheet
- brew first batch; write board specials
- open Instagram story with specials photo
Risk areas: payment, customer-facing
Systems named: POS, Instagram
```

### Prompt C — client onboarding

```text
SOP working title: New retainer client kickoff
Primary role: account coordinator
Trigger: signed agreement + deposit received
Bullets:
- create Drive folder from template
- add Slack channel #client-{slug}
- schedule kickoff (30 min)
- send brand questionnaire
- log kickoff date on Friday ops sheet
Systems named: Drive, Slack, Sheets
```

**Human confirm:** review output before send, publish, wiki post, or CRM write-back.
