# Walkthrough — Support Essentials

**Pack id:** `support-essentials` (P0)  
**Audience:** Support leads / CX at SMBs  
**Outcome:** Triage buckets + reply outlines; reusable macros from pasted tickets — **no auto-send**.

## Skills in this pack

| Slug | Role | Catalog status |
|------|------|----------------|
| `customer-email-triage` | core | **published** |
| `support-macro-library` | core | **published** |
| `agent-handoff-checklist` | addon | draft (P2 — after macros) |

## Story (fictional) — BrightSmile Family Dental

Riley (office manager) gets emails about reminder SMS, cancellations, and billing questions. They need consistent triage without connecting a live helpdesk API to this catalog.

### Step A — Triage an inbound email (published)

1. Install [`customer-email-triage`](../../skills/customer-email-triage/SKILL.md).
2. Optional env names: `SUPPORT_TONE`, `SLA_HOURS_URGENT` (values are non-secret settings).
3. Dry-run [`examples/customer-email-triage.md`](./examples/customer-email-triage.md).

**Quickstart blurb:** *Classify one inbound message into priority + bucket and sketch a reply — you still send it.*

### Step B — Build a macro library

1. Paste 3–10 anonymized historical replies (fictional in our examples).
2. Run [`support-macro-library`](../../skills/support-macro-library/SKILL.md) — [`examples/support-macro-library.md`](./examples/support-macro-library.md).
3. Editor replaces outlines with approved copy; keep variables like `{{member_id}}`.

**Quickstart blurb:** *Cluster past tickets into named macros with tone tags and escalation cues.*

### Step C — Handoffs (later)

When multi-step agent/human handoffs matter, try draft `agent-handoff-checklist` (P2). Not required for pack MVP.

## Success criteria

- [ ] Triage output includes facts-needed and a draft outline (not a final legal letter)
- [ ] Macros avoid refund promises and auto-send language
- [ ] No API keys in skill files

## Safety

Never paste real patient charts or payment PANs into prompts. Examples use `@example-patient.test` style addresses.
