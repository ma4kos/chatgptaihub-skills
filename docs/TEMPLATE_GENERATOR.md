# Template Generator — live tool

**Status:** **Live** on GitHub Pages — static HTML + vanilla JavaScript (no backend).  
**Open:** [Skill Template Generator](./generator/) · source under `docs/generator/`  
**Authority:** fusion build plan T1–T9 (2026-10-01). Catalog publish still requires [`QUALITY_BAR.md`](./QUALITY_BAR.md) + human PR.

Authors can also hand-copy [`templates/skill-template/SKILL.md`](../templates/skill-template/SKILL.md) if they prefer.

## Problem

Hand-copying the static template is slow and produces inconsistent `SKILL.md` files. The Template Generator is a **guided, client-side authoring accelerator** that collects structured **non-secret** inputs and emits a QUALITY_BAR-shaped `SKILL.md` (plus optional env stub text). It does **not** publish to the free catalog, store secrets, or replace editorial review.

## One-liner

**Static page + form → client-side fill of `skill-template` → copyable `SKILL.md` (optional env-example stubs); never collects secret values; outputs remain drafts until QUALITY_BAR + catalog PR.**

## User flow

| Step | Actor | Action | Notes |
|------|-------|--------|-------|
| 1 | Author | Open [generator](./generator/) (no login) | GitHub Pages |
| 2 | Author | Enter skill name; slug auto-suggested kebab-case | Editable |
| 3 | Author | Pick category enum (six catalog categories) | support / sales / ops / finance / content / coding-assistant |
| 4 | Author | Fill goal, when-to-use, inputs, output format, instructions, out-of-scope | Structured fields |
| 5 | Author | Optional env var **NAMES** (UPPER_SNAKE); toggle stubs | Values forbidden |
| 6 | System | Client-side validate + render | No server round-trip |
| 7 | System | Show `SKILL.md` + Copy; optional stub pane | Zip = v2 |
| 8 | Author | Paste into local repo → editorial → PR | Generator is **not** a publish gateway |

## Inputs (collect)

| Field | Required | Validation |
|-------|----------|------------|
| `skill_name` | yes | 2–100 chars |
| `skill_slug` | yes | lowercase kebab-case |
| `category` | yes | catalog six only |
| `description` | yes | one-line SMB outcome |
| Purpose / goal | yes | deterministic outcome |
| `when_to_use` | yes | ≥1 trigger; include Not for |
| `inputs` | yes | ≥1 |
| `instructions` | yes | numbered steps |
| `output_format` | yes | table/checklist shape |
| `out_of_scope` | yes | include no auto-send / no secrets |
| `env_var_names` | no | UPPER_SNAKE names only |
| `include_setup_stubs` | no | default false |
| dry-run input/expected | should | fictional only |

## Inputs (NEVER collect)

- Real API keys, OAuth tokens, passwords, session cookies, private keys  
- Environment **values** (names only)  
- Customer PII dumps / real ticket corpora  
- Private spine / webmaster skill bodies  
- Payment card data  

Heuristic: if a field matches secret patterns (`sk-`, `Bearer `, `-----BEGIN`, long base64), **block generate** and show a security warning.

## Outputs

| Artifact | Notes | Emitted text license |
|----------|-------|----------------------|
| `SKILL.md` | From skill template | **MIT** (catalog-aligned) |
| Optional `setup-env.example.sh` | `export NAME="placeholder"` | MIT |
| Optional `cloud-env.codex.example.toml` | Pattern only | MIT |

Always emit **Secrets** (`NEVER embed API keys`), **Determinism** (`UNASSIGNED` / `TBD` / no invented facts), and **Out of scope**.

## Security

- Client-side only → no server persistence of form data  
- Never prompt for secret **values**  
- No auto-deploy to VPC / private spine  
- **Never** writes `marketplace.json`

## Relation to free catalog

- Catalog remains **hand-curated** MIT listings in `marketplace.json`  
- Generator output = draft starting point, never auto-listed  
- Same QUALITY_BAR before `status: published`

## Acceptance tests (summary)

| ID | Then |
|----|------|
| AT1 | Valid inputs → SKILL.md with required sections populated |
| AT2 | `My Cool Skill!` → slug `my-cool-skill` |
| AT3 | Empty env names → Secrets section still present |
| AT4 | Empty goal → blocked |
| AT5 | Secret-looking token → blocked; no emit containing it |
| AT6 | Stubs on + `SUPPORT_TONE` → example sh without real values |
| AT7 | Category options = exactly six catalog categories |

## What NOT built (MVP)

Backend stores of skills/secrets/PII; auth; direct CI publish; skill runtime; Cap FIRE widgets; auto-listing without human PR.
