---
name: outbound-email-draft
description: Draft a single SMB outbound sales email from prospect context with a clear CTA — no auto-send.
category: sales
version: 0.1.0
status: published
---

# Outbound Email Draft

## Purpose

Produce one outbound sales email draft (subject + body) from pasted prospect context, with a single clear CTA and an assumptions list — without sending.

## When to use

- Cold or warm outbound to one prospect / account
- Follow-up after a meetup, webinar, or inbound form (paste context)
- Not for bulk sequences, CAPTCHA-dodging, or purchased-list spam

## Inputs

Provide:

1. **Prospect** — name, role, company (as known)
2. **Trigger** — why write now (event, signal, referral, or `unknown`)
3. **Offer** — what you sell in one sentence (no invented pricing)
4. **CTA** — preferred ask (e.g. 15-min call, reply with availability)
5. **Tone** — `direct` | `warm` | `formal` (default `direct`)

Optional:

- **Objections / constraints** — known blockers
- **Proof point** — one factual proof you already have (do not invent case studies)

## Instructions (follow in order)

1. Redact secrets in working copy (API keys, passwords). Replace with `[REDACTED]`.
2. Do not invent company metrics, logos, mutual contacts, or pricing not in inputs.
3. Write **one** subject line ≤ 8 words; no ALL-CAPS tricks; no fake "Re:" / "Fwd:".
4. Write body: 80–140 words; open with trigger; one offer sentence; one CTA; sign-off placeholder `{Your Name}` / `{Your Company}`.
5. List **assumptions** you made (missing role, vague trigger, etc.).
6. List **facts needed** before a human sends (missing company URL, calendar link, etc.).
7. Emit the output format. Do not send, BCC, or call CRM APIs.

## Output format

```markdown
# Outbound draft — {Prospect company or name}

- Tone: direct|warm|formal
- CTA type: {call|reply|resource|other}

## Subject
...

## Body
...

## Assumptions
- ...

## Facts needed before send
- ...

## Internal note
One sentence for the seller (not for the prospect).
```

## Determinism rules

- Same inputs → same structure and CTA type
- Prefer shorter over hype adjectives
- Never claim "noticed you hired…" unless trigger states it
- Empty proof point → omit social proof; do not fabricate

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

No CRM OAuth, mailbox tokens, or enrichment API keys in this pack. Paste-in draft only.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SALES_SENDER_NAME` | no | `Alex Rivera` | Sign-off name hint |
| `SALES_SENDER_TITLE` | no | `AE` | Sign-off title hint |
| `SALES_CTA_DEFAULT` | no | `15-min intro` | Default CTA wording |

All optional. Most SMB teams can omit them and fill sign-off in the prompt.

## Out of scope

- Auto-send or sequence enqueue
- Scraping LinkedIn / enrichment APIs
- Secret-bound CRM estate skills

## Dry-run example (fictional)

**Input:** prospect `Jordan Lee, Ops Lead, Northwind Bakery`; trigger `downloaded inventory checklist`; offer `lightweight stock-count app for multi-site cafés`; CTA `15-min fit check`; tone `warm`.

**Expected shape:** subject referencing checklist or ops; body ≤140 words; CTA for a short call; assumptions if company size unknown; no invented revenue numbers.
