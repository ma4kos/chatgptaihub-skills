# FAQ — ChatGPTAIHub Free Skills Marketplace

Practical answers for SMB operators and contributors. Catalog statuses reflect `marketplace.json` in this tree.

## Product & positioning

### 1. What is this repository?

A **curated free catalog** of ChatGPT/Codex-ready `SKILL.md` packs for **SMB** workflows (support, sales, ops, content, coding assistants). Trust comes from editorial review and a published [quality bar](./QUALITY_BAR.md) — not from scraping a million skills.

### 2. Is this affiliated with OpenAI?

No corporate affiliation beyond **file compatibility** with ChatGPT / Codex-style skill instructions. We do not claim official OpenAI partnership.

### 3. ChatGPT vs Codex — which should I use?

Both. Skills are plain markdown procedures.

- **ChatGPT:** paste into Project / Custom GPT instructions — see [`edu/quickstart-chatgpt.md`](./edu/quickstart-chatgpt.md).
- **Codex:** copy into a skills directory — see [`edu/quickstart-codex.md`](./edu/quickstart-codex.md).

Pick the host your team already uses; the skill body is the same.

### 4. Who is the audience?

Small and mid-size business teams — founder-led shops to roughly ~200 employees typical. Examples sound like cafés, clinics, and agencies, not Fortune-500 program offices.

## Secrets & safety

### 5. Do skills need API keys?

**No** for the public free catalog (`requires_secrets: false` on every listing). Some skills document optional **env placeholder names** (tone, timezone, CTA labels). Never embed real API keys, OAuth tokens, or passwords in `SKILL.md`, Releases, or Pages.

### 6. Where do secrets go if my company later adds integrations?

In **your** host’s secret store — not in this repo. Private spine / VPC / webmaster skills are deliberately **out of scope** for this public catalog.

### 7. Can a skill auto-send email or auto-post to LinkedIn?

**No.** Skills draft or outline only. A human sends, publishes, merges, or creates tickets. Company Page LinkedIn automation must stay throttled and separately authorized.

## Catalog status & packs

### 8. What do `published` and `draft` mean?

| Status | Meaning |
|--------|---------|
| `published` | Cleared quality bar for public starter use |
| `draft` | In-repo for trial / editorial; may change before promotion |

This tree (v0.4.0-launch-mass): **10 published**, **4 drafts** (see `marketplace.json`).

### 9. What are SMB content packs?

Curated **groups of skill slugs** (ops, support, sales, content, …) for messaging and learning paths. Skills stay flat under `skills/<slug>/`; packs reference slugs — they do not fork copies. See [`SMB_CONTENT_PACKS.md`](./SMB_CONTENT_PACKS.md).

### 10. Which packs should I start with?

P0: **ops-engine-starter** and **support-essentials**. P1: **sales-accelerator** and **content-creation-kit**. P2: **developer-assistant** (draft skills). Lead with published skills first.

### 11. Which drafts are strongest to try next?

Remaining drafts (preview only): `linkedin-post-outline`, `agent-handoff-checklist`, `codex-pr-summary`, `bug-repro-steps`. Keep status as draft until a promotion PR. Prefer the **10 published** skills for day-one work.

## Quality, Featured, Template Generator

### 12. What is the quality bar?

Original writing, deterministic steps, secret-safe, SMB fit, category fit, out-of-scope honesty, no estate duplication. Concrete pass/fail cases: [`QUALITY_BAR.md`](./QUALITY_BAR.md).

### 13. What is the Featured Skill?

An optional Manus **daily** highlight of a **published** free catalog skill (throttled social). Pin file: `catalog/featured.json`. Process: [`FEATURED_SKILL.md`](./FEATURED_SKILL.md). Drafts are not Featured candidates.

### 14. Is the Template Generator live?

**Not yet.** [`TEMPLATE_GENERATOR.md`](./TEMPLATE_GENERATOR.md) is the **fusion-shaped spec** for a future static, client-side form that emits draft `SKILL.md` files. It does not publish to the catalog and must never collect secret values. Until built, authors copy `templates/skill-template/SKILL.md`.

### 15. Will the generator auto-list my skill?

No. Generator output (when built) is a **draft starting point**. Listing still requires QUALITY_BAR + human PR to `marketplace.json`.

## Hub, Releases, metrics

### 16. Is there a Hub marketplace page on chatgptaihub.com?

Landing page may still be **pending**. In-repo draft: [`HUB_PAGE_DRAFT.md`](./HUB_PAGE_DRAFT.md). GitHub README + Pages + `marketplace.json` are the public catalog surfaces today.

### 17. Why is there no Release yet / why versions look like `0.3.0-content`?

Content can land in the working tree before a GitHub Release is cut. Prefer commit SHA pins until a Release exists. This FAQ does not create Releases.

### 18. Do you publish MailPoet / SEO / subscriber metrics here?

No inventing marketing metrics. Demand signals stay qualitative unless real numbers are separately authorized.

### 19. Is Cap FIRE part of this catalog?

**No.** Cap FIRE and unrelated personal-finance/FIRE products are explicit non-goals.

### 20. How do I contribute?

Follow [`SUBMIT.md`](./SUBMIT.md). Keep skills original, secret-safe, and SMB-shaped. Run `python3 scripts/validate_catalog.py` before PR.

## Still stuck?

- Newcomer path: [`GETTING_STARTED.md`](./GETTING_STARTED.md)
- Examples: [`EXAMPLES_INDEX.md`](./EXAMPLES_INDEX.md)
- Install: [`INSTALL.md`](./INSTALL.md)
