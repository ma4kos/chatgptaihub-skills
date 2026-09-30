---
name: content-brief-to-draft
description: Expand an SMB content brief into a structured draft with voice placeholders, SEO notes, and human-edit flags — no auto-publish.
category: content
version: 0.1.0
status: published
---

# Content Brief to Draft

## Purpose

Expand a short **content brief** into a **structured first draft** (blog, newsletter, or landing section) with brand-voice placeholders, claim flags, and an edit checklist — for SMB marketers and founder-led content without an enterprise CMS workflow.

## When to use

- Brief → draft for a blog post, customer newsletter, or landing-page section
- Repurposing bullet research into something an editor can ship
- Not for scraped article mills, fake testimonials, medical/legal advice, or auto-publishing

## Install

Load this `SKILL.md` into ChatGPT (project / custom instructions) or your Codex skills directory.

Full paths and Release pinning: [`docs/INSTALL.md`](../../docs/INSTALL.md). Newcomer path: [`docs/GETTING_STARTED.md`](../../docs/GETTING_STARTED.md).


## Inputs

Provide:

1. **Brief** — goal, audience, key points, CTA (paste)
2. **Format** — `blog` | `newsletter` | `landing-section` (default `blog`)
3. **Length band** — `S` (~400–600 words) | `M` (~700–1000) | `L` (~1100–1500) (default `M`)
4. **Voice** — `plain` | `warm` | `expert-plain` (default `plain`)

Optional:

- **Must include** — product name, proof points you already have (facts only)
- **Must avoid** — competitors, hype phrases, topics
- **SEO primary phrase** — if any; do not stuff

## Instructions (follow in order)

1. Do not invent metrics, customer logos, quotes, or study results. Flag needed proof as `{{CLAIM_NEEDED}}`.
2. Outline first: title options (3), H2 plan matching the brief’s key points.
3. Write the draft in the Length band; use short paragraphs (SMB readers on mobile).
4. Insert `{{BRAND_VOICE_NOTE}}` once if voice is underspecified; insert `{{CTA_URL}}` for links (label only).
5. Add **SEO notes** (optional phrase placement) without keyword stuffing.
6. Add **human-edit flags**: factual checks, tone, legal/claims.
7. Emit the output format. Do not publish to WordPress, MailPoet, or social.

## Output format

```markdown
# Draft — {working title}
Format: blog|newsletter|landing-section
Voice: plain|warm|expert-plain
Length band: S|M|L

## Title options
1. ... (recommended)
2. ...
3. ...

## Outline
- H2: ...
- H2: ...

## Draft body
...

## CTA
...
Link placeholder: {{CTA_URL}}

## SEO notes
- Primary phrase: ... or none
- Avoid stuffing: yes

## Claim / proof flags
- {{CLAIM_NEEDED}}: ...

## Human-edit checklist
- [ ] Facts verified
- [ ] No invented testimonials
- [ ] CTA URL filled
- [ ] Brand voice pass
```

## Determinism rules

- Same brief → same outline H2 count band and flag style
- Prefer `{{CLAIM_NEEDED}}` over fabricated proof
- No vanity metrics (“trusted by 10,000 SMBs”) unless brief states a real number
- SMB lens: practical examples (schedules, inboxes, cashflow) over enterprise platforms

## Why useful for SMB

- Brief → editable first draft for blogs, newsletters, or landing sections.
- Claim flags (`{{CLAIM_NEEDED}}`) stop invented testimonials and vanity metrics.
- No auto-publish to WordPress, MailPoet, or social.

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

No CMS/WordPress application passwords, MailPoet keys, or social OAuth in this pack.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `CONTENT_BRAND_VOICE` | no | `plain-confident` | Voice hint |
| `CONTENT_CTA_URL_LABEL` | no | `chatgptaihub.com` | Public URL label |
| `CONTENT_DEFAULT_LENGTH` | no | `M` | Default length band |

Optional. Never store CMS credentials as values in-repo.

## Out of scope

- Auto-publish to WordPress / newsletter tools
- Generating medical, legal, or financial advice as authoritative content
- Manus full editorial articles (separate path)
- Cap FIRE or unrelated personal-finance product pitches

## Example (dry-run)

**Input:** brief `Audience: café owners; goal: explain why weekly ops briefs beat five dashboards; points: one page, owners+dates, Friday ritual; CTA: download free skill`; format `blog`; length `S`; voice `warm`.

**Expected shape:** 3 title options; 3–4 H2s; short draft; CTA with `{{CTA_URL}}`; claim flags if any stats were implied without numbers; no invented café chain logos.

Full paste-ready sample: [`docs/edu/examples/content-brief-to-draft.md`](../../docs/edu/examples/content-brief-to-draft.md).

## Example prompts (paste variants)

Use **≥3** distinct prompts. The dry-run above counts as **prompt A**. Paste B/C as-is (fictional SMB data only).

### Prompt A — dry-run

Use the **Example (dry-run)** input in this file (or the full sample under `docs/edu/examples/`).

### Prompt B — newsletter for clinic

```text
Format: newsletter
Length band: S
Voice: warm
Brief:
Goal: remind patients that online reschedule is available
Audience: existing BrightSmile patients
Key points: portal link placeholder, office hours, no medical advice
CTA: update your reminder preferences
Must avoid: inventing clinical outcomes
SEO primary phrase: none
```

### Prompt C — landing section

```text
Format: landing-section
Length band: M
Voice: expert-plain
Brief:
Goal: explain PantryCount weekly count for multi-site cafés
Audience: café owners with 2–10 sites
Key points: replace spreadsheet chaos, waste flags, Friday ritual
CTA: book a 15-min fit check
Must include: product name PantryCount
Must avoid: fake ROI percentages
SEO primary phrase: multi-site stock count
```

**Human confirm:** review output before send, publish, wiki post, or CRM write-back.
