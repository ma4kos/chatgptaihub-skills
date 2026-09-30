# Security — public catalog expectations

This repository is a **public**, curated free-skills catalog for **SMB** ChatGPT/Codex users. Treat everything in it as world-readable.

## Hard rules

1. **Names only for env** — `env_placeholders` and Environment tables list variable **names** (and non-secret example settings). Never real API keys, tokens, passwords, cookies, or private URLs with embedded credentials.
2. **No secret-bound skills** — `requires_secrets: true` is **rejected** by `scripts/validate_catalog.py` for this free catalog.
3. **Secrets section required** — every `SKILL.md` must state **NEVER embed API keys** (or equivalent).
4. **No private spine** — do not publish `chatgptaihub-webmaster` or other `ma4kos/markos-spine` estate skills here.
5. **No exploit packs** — no malware, phishing, credential harvesting, or unauthorized-access instructions.
6. **Pages & Releases stay clean** — same rules as the repo; workflows must not inject `.env` values into artifacts.

## What authors should do

- Redact customer PII in dry-run examples (use fictional SMB names).
- If a user pastes a secret into chat, skills should instruct replacement with `[REDACTED]` and rotation.
- Prefer paste-in workflows over connectors that need OAuth in-repo.

## What operators / Hub should do later

- Link Hub pages to GitHub/Pages; do not mirror private credentials.
- Throttle LinkedIn Company Page automation; never put tokens in posts.
- Template Generator (if built later) must not collect secrets for embedding into emitted `SKILL.md` — concept only today.

## Reporting

If you find a secret that was committed, **do not** paste it into a public issue. Contact maintainers privately, rotate the credential, and open a PR that removes the value (history scrub may still be required).

## Related

- [`QUALITY_BAR.md`](./QUALITY_BAR.md)
- [`INSTALL.md`](./INSTALL.md)
- [`HOSTING.md`](./HOSTING.md)
