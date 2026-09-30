---
name: meeting-notes-to-actions
description: Turn raw meeting notes into owners, due dates, and a follow-up checklist for SMB teams.
category: ops
version: 0.1.0
status: published
---

# Meeting Notes to Actions

## Purpose

Convert messy meeting notes into a deterministic action list: owner, task, due date (or `TBD`), and status.

## When to use

- After standups, client calls, or planning meetings
- When notes are bullets, transcript snippets, or mixed prose
- Not for legal minutes or regulated recording workflows

## Inputs

Provide:

1. **Meeting title** (string)
2. **Date** (ISO `YYYY-MM-DD` preferred)
3. **Attendees** (comma-separated names/roles)
4. **Raw notes** (paste as-is)

Optional:

- Default due offset in business days (integer; default `3` if unspecified)
- Team timezone label (e.g. `Indian/Mauritius`) for due-date wording only

## Instructions (follow in order)

1. Read the raw notes once. Do not invent attendees or decisions that are not implied.
2. Extract **decisions** as a short bullet list (facts only).
3. Extract **action candidates**. For each candidate, fill:
   - `owner` — name from attendees or `UNASSIGNED`
   - `task` — imperative verb + object, one line
   - `due` — explicit date from notes, else `TBD` (do not invent calendar dates unless a default offset was given; if offset given, state assumption)
   - `priority` — `P0` (blocks others), `P1` (this week), `P2` (backlog)
4. Deduplicate near-identical tasks; keep the clearer wording.
5. Flag **open questions** separately; do not convert questions into fake actions.
6. Emit the output format below. No preamble.

## Output format

```markdown
# Actions — {Meeting title} ({Date})

## Decisions
- ...

## Action items
| Owner | Task | Due | Priority |
|-------|------|-----|----------|
| ... | ... | ... | P0/P1/P2 |

## Open questions
- ...

## Follow-up checklist
- [ ] Owners notified
- [ ] Dates confirmed for TBD items
- [ ] Next meeting scheduled (if mentioned)
```

## Determinism rules

- Same notes → same owners/tasks unless notes change
- Never add agenda items that were not in the notes
- Prefer `UNASSIGNED` / `TBD` over guessing

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

This skill is a pure text transform. It does not call external APIs and needs no credentials.

## Environment

No environment variables required. Paste inputs in the chat; optional timezone/due-offset are prompt inputs, not secrets.

## Out of scope

- Auto-sending email or Slack
- Creating tickets without an explicit human confirm step
- Copying proprietary third-party skill bodies

## Dry-run example (fictional)

**Input:** title `Sprint sync`, date `2026-09-29`, attendees `Alex, Sam`, notes: `Ship landing page by Friday. Sam owns copy. Who handles analytics?`

**Expected shape:** one decision; action for Sam with due Friday or `TBD`; open question on analytics; `UNASSIGNED` if no owner named.
