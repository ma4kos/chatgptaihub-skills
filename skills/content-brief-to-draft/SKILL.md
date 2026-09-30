---
name: content-brief-to-draft
description: Turn a content brief into a structured draft while preserving audience, claims, and review gates.
category: content
version: 0.1.0
status: published
---

# Content Brief to Draft

## Purpose

Turn a content brief into a structured draft while preserving audience, claims, and review gates. Keep the result reviewable by a human and grounded only in the supplied input.

## Inputs

1. Paste the source material and identify its date or reporting period.
2. Add the intended audience, owner, and any format constraints.
3. State unknowns explicitly; do not supply invented facts, amounts, dates, or commitments.

## Instructions

1. Read the input once and preserve named facts and uncertainty.
2. Extract the relevant items into a short, ordered working list.
3. Group duplicates, flag missing decisions, and mark unsupported fields as `TBD`.
4. Produce the output format below with concise language.
5. End with a human-review checklist; never send, publish, merge, or update an external system.

## Output format

```markdown
# Content Brief to Draft

## Summary
- ...

## Details
| Item | Owner | Status | Evidence or next step |
|------|-------|--------|-----------------------|
| ...  | ...   | ...    | ...                   |

## Open questions
- ...

## Human review
- [ ] Facts and owners confirmed
- [ ] Unknowns and assumptions reviewed
- [ ] External action approved separately
```

## Secrets

This is a pure text transformation. Never include API keys, tokens, passwords, session cookies, or customer data in this file or output.

Names-only environment placeholders (optional):
- `CONTENT_BRAND_VOICE`: optional prompt context; provide a name/value only when configuring your host.
- `CONTENT_REVIEWER`: optional prompt context; provide a name/value only when configuring your host.

## Out of scope

- Auto-sending messages, publishing content, changing a CRM, merging code, or creating tickets.
- Inventing pricing, legal claims, deadlines, owners, or production credentials.
