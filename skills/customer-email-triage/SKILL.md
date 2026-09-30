---
name: customer-email-triage
description: Classify inbound customer email into priority buckets with draft reply outlines for SMB support.
category: support
version: 0.1.0
status: published
---

# Customer Email Triage

## Purpose

Triage one inbound customer email into a priority bucket, route hint, and a short draft-reply outline — without sending anything.

## When to use

- Shared inbox / support alias paste
- First-pass classification before a human replies
- Not for legal disputes, medical, or payment-card data handling beyond redaction

## Inputs

Provide:

1. **Email subject**
2. **Email body** (paste; redact secrets/PII you must not process)
3. **Customer tier** if known: `standard` | `priority` | `unknown` (default `unknown`)

## Instructions (follow in order)

1. Redact obvious secrets in your working copy (API keys, passwords, full card numbers). Replace with `[REDACTED]`.
2. Detect language; reply outline in the same language as the customer.
3. Assign **bucket** using only these labels:
   - `urgent` — outage, payment blocked, safety, explicit deadline today
   - `normal` — how-to, status ask, non-blocking defect
   - `low` — feedback, feature idea, thanks
   - `spam_or_sales` — unsolicited vendor pitch
4. Assign **route**: `L1` | `billing` | `technical` | `account` | `ignore`
5. List **facts needed** before a real reply (missing order id, screenshot, etc.).
6. Write a **draft outline** (3–6 bullets), not a full polished email, unless the body is trivially short.
7. Emit the output format. Do not send, CC, or call APIs.

## Output format

```markdown
# Triage result

- Bucket: urgent|normal|low|spam_or_sales
- Route: L1|billing|technical|account|ignore
- Sentiment: negative|neutral|positive|mixed
- SLA hint hours: {from SUPPORT_TONE/SLA context or 4 if urgent else 24}

## Facts needed
- ...

## Draft reply outline
- ...

## Internal note
One sentence for the agent handoff.
```

## Determinism rules

- Prefer `normal` when uncertain between `urgent` and `normal` unless explicit outage/payment-block language appears
- Never promise refunds, credits, or legal outcomes
- Never include credentials in the outline

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

Do not store mailbox OAuth tokens in `SKILL.md`. This pack is paste-in triage only.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SUPPORT_TONE` | no | `friendly-concise` | Tone hint for outline |
| `SLA_HOURS_URGENT` | no | `4` | Hours shown in SLA hint for urgent |

Most SMB teams can run this skill with neither variable set (defaults: friendly-concise tone; 4h urgent / 24h otherwise).

## Out of scope

- Auto-send or auto-close
- Scraping other tenants’ mailboxes
- Duplicating secret-bound estate support skills

## Dry-run example (fictional)

**Input:** subject `Cannot log in`, body `Site down since 9am, order #1001 pending.`, tier `standard`.

**Expected shape:** bucket `urgent`, route `technical` or `account`, facts needed may include screenshot; outline acknowledges outage without promising SLA breach compensation.
