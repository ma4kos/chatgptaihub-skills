# Install — outsider guide (repo vs Release)

How a small-business teammate installs a **ChatGPTAIHub free skill** without needing our private estate.

## What you get

A folder with `SKILL.md` — instructions a ChatGPT custom GPT / project, or a Codex-style skills directory, can follow. **No** API keys ship in the file. **No** auto-send to your customers.

## Option A — from the GitHub repo (latest main)

1. Open [ma4kos/chatgptaihub-skills](https://github.com/ma4kos/chatgptaihub-skills).
2. Browse `skills/<slug>/SKILL.md` (or use Pages: [ma4kos.github.io/chatgptaihub-skills](https://ma4kos.github.io/chatgptaihub-skills/)).
3. Copy the file into your tool’s skills location **or** paste the body into project/custom instructions.
4. Read **Secrets** and **Environment**: set only placeholder **names** you need in your host’s secret store — never commit real values into the skill file.
5. Dry-run on fictional data before production customer or financial data.

```bash
git clone https://github.com/ma4kos/chatgptaihub-skills.git
cp -R chatgptaihub-skills/skills/meeting-notes-to-actions \
  ~/.codex/skills/meeting-notes-to-actions   # path is illustrative
```

## Option B — from a GitHub Release (pinned version)

1. Open [Releases](https://github.com/ma4kos/chatgptaihub-skills/releases).
2. Download the source zip/tarball for a tag (e.g. `v0.x.y`) when available.
3. Extract and copy only the `skills/<slug>/` you need.
4. Prefer Release pins for team SOPs so everyone shares the same skill version.

> Note: catalog version `0.3.0-content` may exist in working trees before a public Release is cut. If no Release exists yet, use Option A and record the commit SHA you copied.

## Option C — browse only

Use the Pages catalog to read descriptions, then jump to GitHub for the file:

- Pages: https://ma4kos.github.io/chatgptaihub-skills/
- Machine index: https://ma4kos.github.io/chatgptaihub-skills/marketplace.json

## After install (SMB checklist)

- [ ] Skill status understood (`published` vs `draft` — drafts may change)
- [ ] No secrets pasted into `SKILL.md`
- [ ] One dry-run with fictional café/clinic/agency data
- [ ] Human still sends email / publishes posts / merges PRs

## Related

- [`SECURITY.md`](./SECURITY.md) — what the public catalog promises
- [`QUALITY_BAR.md`](./QUALITY_BAR.md) — what “good” means
- [`SUBMIT.md`](./SUBMIT.md) — if you want to contribute
