---
name: codex-pr-summary
description: Summarize a pasted git diff or PR description into an SMB-friendly PR summary with test gaps and reviewer asks — no auto-merge.
category: coding-assistant
version: 0.1.0
status: draft
---

# Codex PR Summary

## Purpose

From a pasted **diff**, commit list, or rough PR body, produce a **clear PR summary** for small product/engineering teams: what changed, why, risk, test plan gaps, and reviewer asks — Codex/ChatGPT-oriented, no GitHub auth required.

## When to use

- Before opening or updating a PR on a small repo
- When a Codex session produced a large diff and humans need a narrative
- Not for force-push instructions, secret exfiltration, or bypassing required reviews

## Inputs

Provide:

1. **PR title hint** — or `TBD`
2. **Diff or change paste** — `git diff` / file summaries / bullet list of changes
3. **Intent** — why the change (one paragraph or bullets)
4. **Repo context** — language/stack one-liner (e.g. `Python Flask SMB app`)

Optional:

- **Test commands run** — paste results or `none run`
- **User-facing?** — `yes` | `no` | `unknown`
- **Migration / data?** — `yes` | `no` | `unknown`

## Instructions (follow in order)

1. Scan paste for secrets (keys, tokens, `.env` values). If found, list under **Secret leak risk** and replace with `[REDACTED]` in summaries — never repeat values.
2. Summarize **what changed** as 3–8 bullets grouped by area (API, UI, docs, tests, config).
3. State **why** from Intent only; do not invent product rationale.
4. Assess **risk** as `low` | `medium` | `high` with one-line reason (migrations, auth, payments → tend higher).
5. Draft **test plan**: what should be verified; mark gaps if `none run`.
6. List **reviewer asks** (questions, intentional TODOs) — no fake “LGTM.”
7. Suggest a **PR title** ≤ 72 chars if hint is `TBD` or weak.
8. Emit the output format. Do not `git push`, open the PR, or approve it.

## Output format

```markdown
# PR summary — {title}
Stack: {Repo context}
User-facing: yes|no|unknown
Migration/data: yes|no|unknown
Risk: low|medium|high — {reason}

## Summary
- ...

## Why
...

## Test plan
- [ ] ...
Gaps: ...

## Reviewer asks
- ...

## Secret leak risk
- none found | list of file/area flags (values NOT repeated)

## Suggested PR title
...
```

## Determinism rules

- Same diff + intent → same section set and risk banding logic
- Prefer `unknown` / `Gaps: none run` over assuming tests passed
- Do not invent benchmarks or coverage %
- SMB lens: reviewers may be part-time — keep summary scannable

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

If the diff adds env vars, document **names only** in the summary.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `CODEX_PR_DEFAULT_STACK` | no | `Node/TS` | Stack hint |
| `CODEX_PR_RISK_PAYMENTS` | no | `high` | Risk hint when payments files appear |

Optional labels only — not GitHub tokens.

## Out of scope

- Auto-opening or merging PRs
- Disabling branch protection / skipping CI
- Copying proprietary skill bodies from other catalogs
- Instructions to exfiltrate credentials

## Dry-run example (fictional SMB)

**Input:** title hint `TBD`; intent `add CSV export for café inventory counts`; diff bullets: `new /export route`, `CSV helper`, `README note`, `no tests`; stack `Python Flask`; user-facing `yes`; migration `no`; tests `none run`.

**Expected shape:** summary bullets; risk medium (user-facing, no tests); test plan with export cases; secret leak none; suggested title like `Add CSV export for inventory counts`.
