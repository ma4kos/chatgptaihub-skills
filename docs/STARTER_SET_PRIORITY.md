# Starter set priority — SMB demand signals

Prioritized free skills to build after the three example stubs. Signals summarized from landscape themes: **business ops**, **writing/content**, and **agent workflows** for SMB ChatGPT/Codex users. Curated set — not a scraper backlog.

## De-dupe policy vs openai/skills reference categories

- Treat OpenAI / public “skills” **category names** as a **reference map only** (e.g. writing, productivity, coding helpers).
- **Do not copy skill bodies**, prompts, or proprietary examples from openai/skills or other catalogs.
- If a starter overlaps a well-known category, differentiate on **SMB procedure** (owners, SLAs, paste-in inputs, secret-safe env placeholders).
- Never republish private spine / estate skills (inventory UNKNOWN).

## Priority tiers

### P0 — ship next (ops + support spine)

| Slug (proposed) | Category | Why | De-dupe note |
|-----------------|----------|-----|--------------|
| `meeting-notes-to-actions` | ops | Universal SMB pain; already stubbed | Overlaps “productivity/meetings” category labels only — original procedure |
| `customer-email-triage` | support | High-frequency inbox work; already stubbed | Overlaps “support/writing” labels — no copied triage prompts |
| `weekly-ops-brief` | ops | Leadership-ready ritual; already stubbed | Overlaps “reporting” labels — original brief schema |

### P1 — strong SMB demand (writing + sales + ops)

| Slug (proposed) | Category | Why | De-dupe note |
|-----------------|----------|-----|--------------|
| `proposal-outline-smb` | sales | Quote/proposal structure without CRM lock-in | Differs from generic “sales email” dumps — outline + assumptions table |
| `sop-from-bullets` | ops | Turns tribal knowledge into an SOP draft | Not a copy of generic “documentation” skills — fixed SOP sections |
| `support-macro-library` | support | Builds reusable reply macros from past tickets (paste) | Category overlap with helpdesk writing; body must be original |
| `content-brief-to-draft` | content | Brief → draft with brand-voice placeholders | Reference “writing” category only; no scraped article mill prompts |
| `pipeline-weekly-rollup` | sales | Stages → risks → next actions | Distinct from ops brief; sales-object vocabulary |

### P2 — agent workflows + coding assistant

| Slug (proposed) | Category | Why | De-dupe note |
|-----------------|----------|-----|--------------|
| `agent-handoff-checklist` | ops | Multi-agent / human handoff discipline | Agent-workflow demand; not estate orchestration |
| `codex-pr-summary` | coding-assistant | PR summary + test gaps from diff paste | Coding-assistant category reference; original checklist |
| `bug-repro-steps` | coding-assistant | Forces deterministic repro before “fix it” | Differs from generic debug personas |
| `changelog-from-commits` | coding-assistant | Conventional commit bullets → user-facing notes | Common category; original format rules |


### P3 — finance / compliance-light (careful)

| Slug (proposed) | Category | Why | De-dupe note |
|-----------------|----------|-----|--------------|
| `invoice-line-sanity` | finance | Spot duplicates/odd totals from pasted lines | No bank APIs; no secret-bound accounting estate skills |
| `expense-report-draft` | finance | Categorize pasted expenses for human approval | Explicitly non-authoritative |

## Explicit non-goals for starter set

- Million-skill mirrors / scraper imports
- Secret-bound VPC connectors as catalog entries
- Cap FIRE or other unrelated finance products
- Anything requiring real production secrets in-repo

## Build order recommendation

1. ~~Graduate the three stubs~~ **Done (polish 2026-09-30):** `meeting-notes-to-actions`, `customer-email-triage`, `weekly-ops-brief` are in `skills[]` with `status: published`.
2. ~~Add P1 writing/sales/ops~~ **Partial (2026-09-30):** drafts `outbound-email-draft` (sales), `checklist-from-sop` (ops), `linkedin-post-outline` (content) in `skills[]` with `status: draft`. Remaining P1 from table above still queued.
3. Add P2 agent/coding four.
4. Add P3 finance only with heavy disclaimer + no live credentials.

## Demand signal sources (qualitative)

- SMB ops: meetings → actions, weekly briefs, SOPs
- Writing: briefs, macros, proposals
- Agent workflows: handoffs, deterministic checklists over free-form agents
- Coding assistants: PR/repro/changelog adjacent to Codex usage

Update this list when MailPoet / site metrics (open question) or editorial Notion queues provide harder numbers.
