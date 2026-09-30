# Template generator (side-license concept)

## Idea

A **website flow** collects structured inputs and **emits a `SKILL.md`** (plus optional setup stubs). This is a side product / side-license concept adjacent to the free catalog — not a requirement to use free skills.

```
User inputs (category, goal, inputs, outputs, env names)
        ↓
Generator (deterministic template)
        ↓
SKILL.md + optional setup script stubs
```

## What the site may collect

- Skill name / slug
- Category (support, sales, ops, finance, content, coding-assistant)
- Goal one-liner
- Input fields list
- Output format (markdown template)
- Env var **names** (never values)
- Whether cloud setup stubs are requested

## What it must never collect for embedding

- Real API keys, OAuth refresh tokens, passwords
- Customer PII dumps
- Private spine skill bodies

Emitted files must include a **Secrets** section: **NEVER embed API keys**.

## Emitted artifacts (pattern)

1. `skills/<slug>/SKILL.md` — instructions + frontmatter
2. `scripts/setup-env.example.sh` — exports placeholders only
3. `scripts/cloud-env.codex.example.toml` — **Codex cloud env example as template pattern only** (illustrative)

### Example: env placeholder script

```bash
# setup-env.example.sh — placeholders only; do not commit real values
export SUPPORT_TONE="friendly-concise"
export SLA_HOURS_URGENT="4"
# export HELPDEST_API_KEY="<<set in runtime secret store>>"
```

### Example: Codex cloud env pattern (template only)

```toml
# cloud-env.codex.example.toml — PATTERN ONLY, not a live config
# Maps skill env placeholders to a cloud secret store by NAME.
[skill.env]
SUPPORT_TONE = "friendly-concise"
SLA_HOURS_URGENT = "4"

[skill.secrets]
# Names only — values injected by the host at runtime
# HELPDEST_API_KEY = { from = "secret://helpdesk/api-key" }
```

## Secrets / cloud setup scripts

| Artifact | Allowed | Forbidden |
|----------|---------|-----------|
| Env name list | yes | real values |
| `*.example.sh` / `*.example.toml` | yes | production credentials |
| “How to set secrets in your host” prose | yes | pasting keys into SKILL.md |
| Auto-deploy into private VPC | no (out of public catalog) | — |

## Licensing note

Generator output license should align with catalog TBD (**MIT / CC-BY**). Side-license for the **generator product** (SaaS) may differ from the free emitted skill text — record final split in `CATALOG_DECISIONS.md`.

## Relation to free marketplace

- Free catalog ships hand-curated skills + stubs
- Generator accelerates authors; outputs still pass [`QUALITY_BAR.md`](./QUALITY_BAR.md) before listing
- Manus daily feature applies to curated catalog entries, not every raw generation
