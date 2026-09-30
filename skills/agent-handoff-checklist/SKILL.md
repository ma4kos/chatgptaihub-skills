---
name: agent-handoff-checklist
description: Produce a deterministic human↔agent or agent↔agent handoff checklist for SMB multi-step work — ownership, artifacts, and stop conditions.
category: ops
version: 0.1.0
status: draft
---

# Agent Handoff Checklist

## Purpose

Create a **handoff checklist** when work moves between people, ChatGPT/Codex sessions, or lightweight agents — so an SMB team does not lose context, secrets, or “what done means.” Paste-in only; no estate orchestration.

## When to use

- Ending a ChatGPT/Codex session before a teammate continues
- Passing a draft (proposal, SOP, support macros) to a human reviewer
- Multi-step SMB workflows (research → draft → approve → send-by-human)
- Not for private VPC agent fleets, secret-bound spine orchestration, or unsupervised production changes

## Inputs

Provide:

1. **Work title** — what is being handed off
2. **From** — person or agent label (e.g. `Codex session`, `Alex`)
3. **To** — person or agent label
4. **Context paste** — goals, what’s done, what’s left (bullets ok)
5. **Artifact list** — files/links/labels already produced (names/paths only)

Optional:

- **Risk level** — `low` | `medium` | `high` (default `medium` if customer-facing or payment-related language appears)
- **Deadline** — ISO date or `TBD`
- **Forbidden actions for receiver** — e.g. `do not send email`, `do not merge`

## Instructions (follow in order)

1. Redact secrets in working copy → `[REDACTED]`. Never copy API keys into the handoff.
2. Summarize **goal** and **definition of done** in one sentence each (from context; else `TBD`).
3. Split context into **Done**, **In progress**, **Not started** — no invented completed work.
4. Build **checklist for receiver** as imperative rows with `evidence` of completion.
5. List **artifacts** with type (`doc`|`diff`|`sheet`|`other`) and location label; missing paths → `UNASSIGNED path`.
6. State **stop conditions** (when receiver must halt and ask a human).
7. State **secrets posture**: which env **names** may be needed at runtime — never values.
8. Emit the output format. Do not message Slack/email automatically.

## Output format

```markdown
# Handoff — {Work title}
From: {From} → To: {To}
Deadline: {Deadline or TBD}
Risk: low|medium|high

## Goal
...

## Definition of done
...

## State
### Done
- ...
### In progress
- ...
### Not started
- ...

## Receiver checklist
| # | Action | Evidence | Status |
|---|--------|----------|--------|
| 1 | ... | ... | pending |

## Artifacts
| Name | Type | Location label |
|------|------|----------------|
| ... | doc|diff|sheet|other | ... |

## Stop conditions
- ...

## Secrets posture
- Env names allowed to request at runtime: ... or none
- Values in this handoff: NONE (must stay empty)

## Open questions
- ...
```

## Determinism rules

- Prefer `TBD` / `UNASSIGNED` / `None reported.` over guessing
- Same context → same section set and checklist banding
- Never promote “In progress” to “Done” without evidence in the paste
- SMB lens: assume the receiver may be the founder between meetings — keep checklist ≤ 12 rows when possible

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

Handoffs are a common leak point — env **names only**. If context includes a pasted secret, replace with `[REDACTED]` and add an open question to rotate it.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `HANDOFF_DEFAULT_RISK` | no | `medium` | Default risk label |
| `HANDOFF_MAX_CHECKLIST` | no | `12` | Soft row cap hint |

Optional. No orchestration credentials.

## Out of scope

- Triggering other agents or webhooks
- Writing CI secrets or cloud keys into artifacts
- Private spine / VPC estate playbooks
- Auto-sending the handoff to third parties

## Dry-run example (fictional SMB)

**Input:** title `Café SMS reminder proposal`; from `Codex`; to `Priya (ops)`; context: `outline drafted, pricing TBD, need PMS name from buyer`; artifacts: `proposal-outline.md`; forbidden: `do not email buyer`.

**Expected shape:** goal/DoD; done=outline; not started=pricing; checklist includes confirm PMS + human send; secrets posture empty; stop condition includes “do not email buyer.”
