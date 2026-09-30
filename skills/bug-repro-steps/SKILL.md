---
name: bug-repro-steps
description: Force a deterministic bug repro script from messy SMB bug reports before anyone attempts a fix.
category: coding-assistant
version: 0.1.0
status: draft
---

# Bug Repro Steps

## Purpose

Turn a messy bug report (email, Slack, ticket paste) into a **deterministic reproduction script**: environment, preconditions, steps, expected vs actual, artifacts — so SMB builders fix the right bug instead of guessing.

## When to use

- Before “quick fixing” production issues on a small product
- When non-technical staff filed the report and engineers need clarity
- Not for exploiting third-party systems, bypassing auth for fun, or inventing CVEs

## Inputs

Provide:

1. **Bug report paste** — as filed
2. **Product surface** — e.g. `iOS app`, `admin web`, `API`
3. **Environment known** — `prod` | `staging` | `local` | `unknown`
4. **Severity guess from reporter** — `blocker` | `major` | `minor` | `unknown`

Optional:

- **Build / version** — if stated
- **Account type** — `owner` | `staff` | `readonly` | `unknown` (no passwords)
- **Already tried** — bullets

## Instructions (follow in order)

1. Redact secrets and session cookies → `[REDACTED]`. Never ask for passwords in outputs.
2. Extract **observed actual behavior** and **expected behavior** separately; if expected missing → `TBD — confirm with reporter`.
3. List **preconditions** (role, data setup, feature flags named only).
4. Write **repro steps** as numbered imperatives that a second person can follow; one action per step.
5. Mark steps `unconfirmed` when the report is ambiguous rather than inventing UI labels.
6. Specify **artifacts to capture** (screenshot, HAR label, log snippet **without secrets**, video).
7. Add **non-repro / cannot proceed** conditions (missing account type, missing version).
8. Add **fix hypotheses** as a short optional list labeled `hypothesis only` — do not apply fixes here.
9. Emit the output format. Do not patch code or restart production.

## Output format

```markdown
# Repro script — {short title}
Surface: {Product surface}
Environment: prod|staging|local|unknown
Severity (reporter): blocker|major|minor|unknown
Version: {or TBD}

## Expected
...

## Actual
...

## Preconditions
- ...

## Repro steps
1. ...
2. ...

## Artifacts to capture
- [ ] ...

## Blockers to repro
- ...

## Hypotheses (optional — do not fix yet)
- hypothesis only: ...

## Reporter follow-ups
- ...
```

## Determinism rules

- Same report → same step banding and TBD usage
- Prefer `unconfirmed` / `TBD` over inventing button names
- Do not escalate severity beyond reporter + clear evidence
- SMB lens: assume limited staging; call out when prod-only repro is the only path

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

Ask for **account role**, not credentials. Log guidance must say “redact tokens.”

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `BUG_DEFAULT_ENV` | no | `staging` | Default env label |
| `BUG_ARTIFACT_DIR` | no | `bugs/artifacts/` | Suggested artifact path label |

Optional labels only — not error-tracker API keys.

## Out of scope

- Writing the code fix in the same skill run (use a separate fix session)
- Exploit PoCs against systems you do not own
- Dumping production customer PII into the repro
- Auto-filing tickets without human confirm

## Dry-run example (fictional SMB)

**Input:** report `Owner says CSV export downloads empty file on iPhone Safari after selecting two cafés`; surface `admin web`; env `prod`; severity `major`; version `unknown`; tried `refresh, different café`.

**Expected shape:** expected=non-empty CSV; actual=empty file; preconditions include multi-café selection; repro steps on Safari iOS; artifacts=screenshot+file size; follow-up=ask app version; hypotheses optional (filter bug) labeled hypothesis only.
