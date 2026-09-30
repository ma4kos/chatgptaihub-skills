# Content-gen fusion alignment addendum

**Written:** 2026-09-30 (edu / content build pass)  
**Tree:** `chatgptaihub_skills_marketplace`  
**Constraints:** no Cap FIRE · no git push · no Release · no Hub WP publish · no LinkedIn send · no secrets

## Authority inputs

| Artifact | Role |
|----------|------|
| Staging `content_gen/FUSION_SMB_CONTENT_PACKS.md` | **ADOPT** pack structure + ranked skills |
| Staging `content_gen/FUSION_TEMPLATE_GENERATOR_SPECS.md` | **ADOPT** MVP generator spec |
| Interim edu bar (this pass) | Used because `edu_layer/02_*` and `03_*` were not present at build time |

## Alignments applied in-repo

1. **Packs** — Documented in `docs/SMB_CONTENT_PACKS.md`; `content_packs[]` added to `marketplace.json` referencing flat skill slugs (no forked pack trees).
2. **Statuses** — Left accurate: 3× `published`, remaining listed skills `draft`. Docs promote published first; strongest P1 drafts called out as preview only.
3. **Template Generator** — `docs/TEMPLATE_GENERATOR.md` rewritten to fusion-shaped MVP/spec (still not a live app).
4. **Edu layer** — `docs/GETTING_STARTED.md`, `FAQ.md`, `EXAMPLES_INDEX.md`, `docs/edu/**` quickstarts, walkthroughs, and per-skill examples for published + top P1 drafts.
5. **SKILL.md** — Target skills use `## Example (dry-run)` with link to paste-ready edu examples.
6. **Non-goals honored** — No Cap FIRE, no secret values, no spine/webmaster catalog entries, no auto-send messaging.

## Not done in this addendum (by design)

- Promoting drafts → `published` (needs editorial PR)
- Building live Template Generator HTML app
- P3 finance-light skills
- `changelog-from-commits`
- Git push / Release / Hub publish / LinkedIn

## Edu fusion files

If later `edu_layer/02_FUSION_EDU_SPEC_AND_CRITICAL_MASS.md` or `03_LAUNCH_EDU_RECOMMENDATION.md` land, re-read and delta this tree against them. Receipt for this build: staging `edu_layer/04_EDU_CONTENT_BUILT.md`.
