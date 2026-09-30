---
name: your-skill-slug
description: One-line SMB outcome. Replace before publishing.
category: ops
version: 0.1.0
status: draft
---

# Your Skill Title

> Template generated from `docs/TEMPLATE_GENERATOR.md` guidance.
> Replace every placeholder. Pass `docs/QUALITY_BAR.md` before listing in `marketplace.json`.

## Purpose

{One or two sentences: what deterministic outcome this skill produces.}

## When to use

- {Trigger situation 1}
- {Trigger situation 2}
- Not for: {explicit non-goals}

## Inputs

Provide:

1. **{Input name}** — {type / format}
2. **{Input name}** — {type / format}

Optional:

- {Optional input}

## Instructions (follow in order)

1. {Step — observe only; do not invent facts}
2. {Step — transform with stable labels}
3. {Step — emit output format; no side effects}

## Output format

```markdown
# {Title}

## {Section}
- ...

| Column | Column |
|--------|--------|
| ... | ... |
```

## Determinism rules

- Prefer `{UNASSIGNED}` / `{TBD}` / `None reported.` over guessing
- Same inputs → same structure and labels
- Do not invent metrics, customers, or dates

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

Keep any credentials in the host runtime secret store. Document **environment variable names only** below — never values.

## Environment (placeholders only — names, never values)

Most SMB packs need **no** env vars. Delete this table if unused.

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `EXAMPLE_SETTING` | no | `friendly-concise` | {non-secret setting} |

<!-- Optional secret *name* for future connectors — do not paste real values:
| `EXAMPLE_API_KEY` | no | *(runtime secret — never paste here)* | Auth for optional API |
-->

## Out of scope

- Auto-send / auto-post / auto-create tickets without human confirm
- Secret-bound private spine / VPC estate skills
- Scraped or copied third-party skill bodies

## Dry-run example (fictional)

**Input:** {short fictional paste}

**Expected shape:** {what a good output looks like — no real customer data}
