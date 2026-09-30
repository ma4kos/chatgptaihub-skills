---
name: support-macro-library
description: Build a reusable SMB support macro library from pasted tickets or replies — tone tags, variables, and escalation cues.
category: support
version: 0.1.0
status: published
---

# Support Macro Library

## Purpose

From pasted past tickets or good replies, produce a **small reusable macro library** for an SMB helpdesk: title, when-to-use, tone, variable placeholders, body, and escalation cue — without connecting to a live helpdesk API.

## When to use

- A 1–10 person support queue wants consistent replies without enterprise macro suites
- Cleaning up “we always say roughly this” into copy-paste macros
- Not for scraping competitor help centers, phishing templates, or auto-sending from the mailbox

## Install

Load this `SKILL.md` into ChatGPT (project / custom instructions) or your Codex skills directory.

Full paths and Release pinning: [`docs/INSTALL.md`](../../docs/INSTALL.md). Newcomer path: [`docs/GETTING_STARTED.md`](../../docs/GETTING_STARTED.md).


## Inputs

Provide:

1. **Source paste** — 1–8 past tickets or reply drafts (redact customers if needed)
2. **Brand tone** — `friendly-concise` | `formal` | `plain` (default `friendly-concise`)
3. **Channels** — e.g. `email`, `chat`, `both`
4. **Product one-liner** — what you support (facts only)

Optional:

- **Macro count cap** — integer 3–12 (default `6`)
- **Must-avoid phrases** — list
- **Escalation owner label** — e.g. `L2` / `founder` / `UNASSIGNED`

## Instructions (follow in order)

1. Redact secrets and live credentials in working copy → `[REDACTED]`. Replace real customer emails with `{{customer_name}}` / `{{ticket_id}}` style variables.
2. Cluster source paste into **intents** (billing question, how-to, bug report, refund ask, access issue, …). Do not invent intents with zero evidence.
3. For each intent (up to cap), draft one macro:
   - `id` — slug `macro-{intent}`
   - `title` — human label
   - `when` — one line trigger
   - `tone` — from Brand tone
   - `variables` — list of `{{placeholder}}` names only
   - `body` — 60–140 words, SMB-plain language
   - `escalate_if` — condition or `none`
4. Add a **coverage gaps** list: common SMB intents missing from the source paste.
5. Emit the output format. Do not push macros into Zendesk/Intercom/etc.

## Output format

```markdown
# Support macro library — draft
Tone: {Brand tone}
Channels: {Channels}
Product: {one-liner}

## Macros
### {title} (`{id}`)
- When: ...
- Variables: {{...}}, ...
- Escalate if: ...
- Body:
...

## Coverage gaps
- ...

## Editor checklist
- [ ] Human reviewed each body
- [ ] No secrets or live customer PII left in macros
- [ ] Variables match your helpdesk syntax (adapt {{ }} if needed)
```

## Determinism rules

- Same source paste + cap → same intent clusters and macro ids
- Prefer fewer solid macros over padded filler
- Never invent refund/legal policy; mark `TBD — confirm policy` when source lacks it
- SMB lens: assume the person answering also ships product — keep macros short

## Why useful for SMB

- Turns pasted good replies into a small macro set for a 1–10 person queue.
- Variables and escalation cues without Zendesk/Intercom connectors.
- No auto-send — editor still approves bodies.

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

No helpdesk OAuth or mailbox tokens. Document env **names** only below.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `SUPPORT_TONE` | no | `friendly-concise` | Default tone hint |
| `SUPPORT_ESCALATION_LABEL` | no | `L2` | Escalate-to label |
| `SUPPORT_MACRO_PREFIX` | no | `macro-` | Id prefix |

Optional. Never store helpdesk API keys as values in-repo.

## Out of scope

- Auto-send or auto-close tickets
- Building phishing / social-engineering copy
- Secret-bound estate helpdesk connectors
- Scraping third-party knowledge bases for verbatim macros

## Example (dry-run)

**Input:** source paste of three threads — password reset how-to, invoice copy request, “app won’t sync on Wi-Fi”; tone `friendly-concise`; channels `email`; product `inventory app for cafés`; cap `5`.

**Expected shape:** macros for reset, invoice copy, sync troubleshooting; variables like `{{customer_name}}`, `{{order_id}}`; coverage gaps may include refunds/cancellations; no invented SLA hours unless pasted.

Full paste-ready sample: [`docs/edu/examples/support-macro-library.md`](../../docs/edu/examples/support-macro-library.md).

## Example prompts (paste variants)

Use **≥3** distinct prompts. The dry-run above counts as **prompt A**. Paste B/C as-is (fictional SMB data only).

### Prompt A — dry-run

Use the **Example (dry-run)** input in this file (or the full sample under `docs/edu/examples/`).

### Prompt B — dental office SMS / booking

```text
Brand tone: friendly-concise
Channels: email
Product: BrightSmile Family Dental — appointments & reminder SMS
Macro count cap: 5
Source paste (fictional, anonymized):
1) Patient asks how to reschedule SMS reminder — reply explains portal link {{portal_url}} and office hours
2) Billing: request copy of last statement — ask for {{member_id}} and send PDF when verified
3) "I got a reminder for the wrong day" — apologize, confirm {{appointment_datetime}}, offer reschedule
Must-avoid: promising refunds; medical advice
```

### Prompt C — SaaS inventory app

```text
Brand tone: plain
Channels: both
Product: PantryCount stock-count app for cafés
Cap: 6
Source paste:
- Wi-Fi sync fails on older Android — steps: check version, toggle airplane mode, retry
- How to invite a second site manager — send invite from Settings → Team
- Invoice PDF missing — regenerate from Billing → Invoices
Escalation owner label: L2
```

**Human confirm:** review output before send, publish, wiki post, or CRM write-back.
