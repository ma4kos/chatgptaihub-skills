# Template Generator (live MVP)

**Status:** Live on GitHub Pages as static HTML + vanilla JS. **Never** auto-publishes to the catalog.

## Open

https://ma4kos.github.io/chatgptaihub-skills/generator/

Or open `index.html` locally / via any static host. No backend.

## Files

| File | Role |
|------|------|
| `index.html` | Form UI |
| `generator.css` | Styles |
| `generator-core.js` | Validation + SKILL.md render + AT1–AT7 |
| `generator.js` | DOM wiring (slug autofill, copy) |
| `skill-template.SKILL.md` | Template reference |
| `run_acceptance_tests.mjs` | Node harness for AT1–AT7 |

## Hard rules

- Emits **MIT** draft `SKILL.md` text only (copy/paste)
- **Never** writes `marketplace.json`
- Secret-pattern validation blocks generate
- Categories: support, sales, ops, finance, content, coding-assistant
