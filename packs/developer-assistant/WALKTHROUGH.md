# Walkthrough — Developer Assistant

**Pack id:** `developer-assistant`  
**Audience:** SMB engineering / Codex users  
**Outcome:** Messy Codex/git diffs → PR summary with test gaps; Slack bug paste → numbered repro script.  
**Time:** ~20–30 minutes with fictional data first.  
**Status:** Both skills are **draft** — preview / dry-run only until catalog `published`.

## Skills in this pack

| Slug | Role | Catalog status |
|------|------|----------------|
| `codex-pr-summary` | core | **draft** |
| `bug-repro-steps` | core | **draft** |

**Queued later:** `changelog-from-commits` (not in tree yet).

## Story (fictional) — BeanStack café SaaS

BeanStack is a three-person team shipping a POS + loyalty SaaS for independent cafés. Priya (eng) uses Codex for day-to-day PRs; Jules (support/eng hybrid) fields “checkout broke” reports from café owners. They need clean PR narratives and repro scripts — not auto-merge or production restarts from chat.

### Step A — Diff → PR summary

1. Install [`codex-pr-summary`](../../skills/codex-pr-summary/SKILL.md) via [`docs/INSTALL.md`](../../docs/INSTALL.md) (draft skill — treat as preview).
2. Paste a fictional `git diff` / file-summary for a loyalty-points rounding fix (no real tokens, no `.env`).
3. Expect: title suggestion, what/why, risk, test-plan gaps, reviewer asks — **no** push or merge instructions.

**Quickstart:** *Paste a Codex/git diff; get an SMB-friendly PR summary with test gaps — no auto-merge.*

### Step B — Bug report → repro steps

1. Ask Jules for a messy Slack paste (“owner says tips don’t save on iPad after lunch rush”) — no passwords or session cookies.
2. Run [`bug-repro-steps`](../../skills/bug-repro-steps/SKILL.md).
3. Expect: expected vs actual, preconditions, numbered steps (mark `unconfirmed` where vague), artifacts to capture, stop conditions. Fix hypotheses labeled `hypothesis only` — do not patch prod here.

**Quickstart:** *Turn a messy bug report into a deterministic repro script before anyone attempts a fix.*

### Step C — Changelog (queued)

`changelog-from-commits` is **queued later** — not in the catalog tree yet. Skip until shipped; do not invent release notes from thin air.

## Success criteria

- [ ] One fictional diff produced a PR summary with no invented product rationale
- [ ] One messy bug paste produced numbered repro steps with redacted secrets
- [ ] No auto-merge, force-push, or production restart from the skill run
- [ ] Noted that `changelog-from-commits` is queued, not available yet

## Safety

Never paste API keys, deploy tokens, `.env` values, or session cookies. Refer to credential stores by **label only**. Do not invent Cap FIRE or finance tooling in this pack.
