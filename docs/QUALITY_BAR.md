# Quality bar — ChatGPTAIHub free skills

Skills listed in the public catalog must clear this bar before `status: published` in `marketplace.json`.

## Must

1. **Original writing** — Author for this catalog. Do not paste OpenAI skill bodies, scraped marketplaces, or copyrighted runbooks.
2. **Deterministic procedure** — Numbered steps; explicit inputs/outputs; stable labels (buckets, priorities, table columns).
3. **Secret-safe** — `SKILL.md` must say **NEVER embed API keys**. Document env vars as placeholders only. No real tokens in repo, Releases, or Pages.
4. **SMB fit** — Usable by a small team without enterprise-only platforms. Prefer paste-in workflows over brittle scrapers.
5. **Category fit** — One primary category: `support` | `sales` | `ops` | `finance` | `content` | `coding-assistant`.
6. **Frontmatter** — At least `name`, `description`; prefer `category`, `version`, `status`.
7. **Out of scope section** — State what the skill will not do (auto-send, ticket create without confirm, etc.).
8. **No secret-bound estate duplication** — Do not republish private spine / VPC-only skills. Spine inventory is UNKNOWN and private.

## Should

- Include a short dry-run example (fictional data only)
- Prefer tables for structured output
- Name owners/`UNASSIGNED` and dates/`TBD` instead of guessing
- Keep a single `SKILL.md` lean (< ~200 lines unless justified)

## Must not

- Ship malware, phishing, credential harvesting, or exploit instructions
- Claim affiliation with OpenAI beyond “works with ChatGPT/Codex-style skill files”
- Use Notion or VPC dashboard as the public catalog of record
- Inflate metrics or invent customer facts

## Review checklist (editor)

- [ ] Original; no copied skill bodies
- [ ] Secrets section present and correct
- [ ] Env placeholders only
- [ ] Output format copy-pasteable
- [ ] License posture matches catalog TBD (MIT/CC-BY)
- [ ] `marketplace.json` entry consistent with folder slug

## Promotion path

`example-stub` → editorial review (Notion internal) → PR to this repo → `skills[]` + Release tag → optional Manus daily feature.
