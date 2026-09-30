---
name: weekly-ops-brief
description: Assemble a one-page weekly operations brief from structured bullet inputs for SMB teams.
category: ops
version: 0.1.0
status: published
---

# Weekly Ops Brief

## Purpose

Produce a single-page weekly operations brief from operator-supplied bullets: wins, risks, metrics, and next-week focus.

## When to use

- Friday wrap or Monday kickoff
- Owner wants a shareable summary without a BI tool
- Not a substitute for audited financial reporting

## Inputs

Provide under these headings (bullets allowed; leave section empty if unknown):

1. **Week label** — e.g. `2026-W40`
2. **Wins**
3. **Misses / incidents**
4. **Metrics** — name: value pairs only (no raw exports)
5. **Hiring / capacity**
6. **Customer highlights**
7. **Next week priorities** (max 5)

## Instructions (follow in order)

1. Normalize bullets; drop empty sections from the narrative but keep the section heading with `None reported.`
2. Cap **Next week priorities** at 5; if more given, keep the first 5 and list overflow under `Deferred`.
3. Rewrite metrics as a compact table; do not invent numbers.
4. Call out any incident that mentions data loss, downtime, or payment failure under **Risks** in one line each.
5. Write an **Executive snapshot** of exactly 3 sentences.
6. Emit the output format. No email send.

## Output format

```markdown
# Weekly ops brief — {Week label}
Audience: {OPS_BRIEF_AUDIENCE or "leadership"}
Timezone context: {OPS_BRIEF_TZ or "unspecified"}

## Executive snapshot
1. ...
2. ...
3. ...

## Wins
- ...

## Misses / incidents
- ...

## Risks
- ...

## Metrics
| Metric | Value |
|--------|-------|
| ... | ... |

## Capacity
- ...

## Customer highlights
- ...

## Next week (max 5)
1. ...

## Deferred
- ...
```

## Determinism rules

- No new KPIs that were not in inputs
- No severity inflation; quote operator words when unsure
- Empty input section → `None reported.`

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

Do not paste warehouse credentials, dashboard cookies, or private VPC URLs into the skill file. Paste metrics as plain name/value pairs only.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `OPS_BRIEF_TZ` | no | `Indian/Mauritius` | Label for header context |
| `OPS_BRIEF_AUDIENCE` | no | `leadership` | Audience line |

Both are optional labels only. Most SMB teams can omit them and rely on prompt defaults.

## Out of scope

- Live VPC dashboard as catalog surface
- Publishing confidential spine inventory
- Auto-posting to Slack/email without human approval

## Dry-run example (fictional)

**Input:** week `2026-W40`; wins: `Closed 3 renewals`; misses: `1h checkout blip Tuesday`; metrics: `NPS: 42`; next week: `Ship FAQ v2`, `Hire SE`.

**Expected shape:** 3-sentence snapshot; metrics table with NPS only; risks line for checkout blip; max 5 next-week items; no invented KPIs.
