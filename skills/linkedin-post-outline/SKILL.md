---
name: linkedin-post-outline
description: Turn bullet talking points into a LinkedIn post outline with hook, body beats, and CTA — draft only.
category: content
version: 0.1.0
status: draft
---

# LinkedIn Post Outline

## Purpose

Transform bullet talking points into a LinkedIn-ready post **outline** (hook variants, body beats, CTA, hashtag suggestions) — not an auto-published post.

## When to use

- Company or personal brand posts from rough bullets
- Repurposing a blog/newsletter idea into a short LinkedIn structure
- Not for scraped competitor copy, engagement bait farms, or fake testimonials

## Inputs

Provide:

1. **Topic** — one line
2. **Bullets** — 3–10 talking points (paste)
3. **Audience** — e.g. `SMB founders`, `ops managers`
4. **Goal** — `awareness` | `leads` | `hiring` | `community` (default `awareness`)
5. **Voice** — `plain` | `story` | `howto` (default `plain`)

Optional:

- **Must include** — product name, event date, or URL label (no tracking params required)
- **Must avoid** — competitor names, politics, etc.

## Instructions (follow in order)

1. Do not invent metrics, customer logos, or quotes not in the bullets.
2. Propose **3 hook options** (≤ 20 words each); mark one as `recommended`.
3. Outline **body beats** as 4–7 short bullets (not a full polished post unless bullets are already long).
4. Write **one CTA** aligned to Goal; no fake "comment YES for the PDF" unless Goal is `leads` and bullets support a real asset.
5. Suggest **3–5 hashtags** (mix broad + niche); no banned/spam tags.
6. Add a **throttle note**: if this is a Company Page auto-post candidate, prefer human narrative and avoid stacking daily autoposts (catalog policy: throttle LinkedIn Company Page auto-posts).
7. Emit the output format. Do not publish.

## Output format

```markdown
# LinkedIn outline — {Topic}
Audience: {Audience}
Goal: awareness|leads|hiring|community
Voice: plain|story|howto

## Hooks
1. ...  (recommended)
2. ...
3. ...

## Body beats
- ...

## CTA
...

## Hashtags
#... #...

## Assumptions / gaps
- ...

## Throttle note
Human review before Company Page auto-post; avoid stacking daily autoposts.
```

## Determinism rules

- No vanity metrics invented ("10k founders use…")
- Same bullets → same beat count band and goal-aligned CTA type
- Prefer concrete verbs from the bullets over hype

## Secrets

**NEVER embed API keys, tokens, passwords, or session cookies in this skill or in outputs.**

No LinkedIn OAuth, Buffer tokens, or scheduling API keys in this pack.

## Environment (placeholders only — names, never values)

| Variable | Required | Example placeholder | Purpose |
|----------|----------|---------------------|---------|
| `CONTENT_BRAND_VOICE` | no | `plain-confident` | Voice hint |
| `CONTENT_CTA_URL_LABEL` | no | `chatgptaihub.com/skills` | Public URL label only |

Optional. Never store OAuth tokens as env values in-repo.

## Out of scope

- Auto-post to LinkedIn / Buffer / Hootsuite
- Scraping others' posts for imitation
- Manus article full drafts (separate editorial path)

## Dry-run example (fictional)

**Input:** topic `Why SMB ops briefs beat dashboard sprawl`; bullets: `one page`, `owners + dates`, `Friday ritual`; audience `SMB ops`; goal `awareness`; voice `howto`.

**Expected shape:** 3 hooks; 4–7 beats; CTA to read/install a related free skill; hashtags; throttle note; no invented follower counts.
