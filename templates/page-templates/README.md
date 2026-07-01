# Page Templates

> **The main template library now lives in the `page-design` skill.**
> `.engine/skills-and-instructions/skills/production/page-design/`

That library has **40 framework-free static HTML templates** (squeeze, sales-short, sales-long, webinar registration, VSL, checkout, thank-you, link-in-bio) with `{{UPPER_SNAKE_CASE}}` placeholder tokens.

- **Browse / preview:** open `.engine/skills-and-instructions/skills/production/page-design/index.html` (the gallery)
- **Machine-readable catalog:** `.engine/skills-and-instructions/skills/production/page-design/index.json`
- **Design system:** `.engine/skills-and-instructions/skills/production/page-design/design-system.md`
- **How to use:** `.engine/skills-and-instructions/skills/production/page-design/SKILL.md`
- **Regenerate the catalog** after editing templates: `node .engine/scripts/build-page-catalog.js`

## How to use a template
1. Pick a template (gallery or catalog).
2. Copy it into your campaign's `output-assets/html/` folder.
3. Set the brand `:root` CSS variables (`--accent`, `--text`, `--bg`, `--font`).
4. Replace **every** `{{PLACEHOLDER}}` token with real copy, URLs, and images — a delivered page has zero `{{ }}` left.
5. Open the file in a browser to preview.

---

## Legacy template (this folder)

### `modern-dark-course-sales.html` — _legacy (Tailwind v4 + Lucide)_
A modern premium dark + blue course sales page. It **predates the static-HTML standard** and uses Tailwind v4 CDN + Lucide icons with hard-coded content (no `{{placeholders}}`). Kept here as an exception; convert to the static `page-design` standard before treating it as a reusable template.

- **Style:** Modern Premium Dark + Blue Accent · Rubik + DM Sans
- **Best for:** Course sales pages, digital product offers, membership offers
- **Customize:** edit the CSS variables in the `@theme` block to rebrand.
