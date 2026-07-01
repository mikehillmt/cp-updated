# ClickCampaigns — Project Context

> This file travels with the repo so Claude Code (or any AI agent) on any machine can pick up the project context.

---

## What This Project Is

**ClickCampaigns for Claude Code** — a marketing campaign builder powered by AI agents. A team of 22 specialist agents (coordinated by "Alex", the Campaign Manager) produces production-ready campaign assets: HTML funnel pages, email sequences, VSL scripts, ad copy, presentations, and more.

This is a clean, reusable framework instance. No campaigns exist yet — run the setup wizard to configure your brand and start building.

---

## Getting Started

1. **Install dependencies:** `npm install` (uses `package-lock.json`).
2. **Add your API keys:** copy `.engine/.env.example` → `.engine/.env` and fill in the keys you have (Pexels, Firecrawl, image generation). All are optional — the framework works without them, you just lose those specific tools.
3. **Run setup:** open the project in Claude Code / Cursor and follow `.engine/setup/SETUP.md` (or say "run setup"). This creates `.clickcampaigns.json` with your brand and mode.
4. **Build:** ask for a campaign asset — e.g. "build me a webinar registration page" — and Alex coordinates the specialists. Funnel/landing pages start from the **`page-design`** template library (see below).

---

## Credentials & Secrets

**DO NOT commit actual secrets.** Here's where they live (all gitignored):

| What | Where |
|------|-------|
| Project API keys (Pexels, Firecrawl, image gen) | `.engine/.env` (gitignored) |
| Root env vars | `.env` (gitignored) |
| Example env template | `.engine/.env.example` |

---

## Page Template Library

- **`page-design` skill** (`.engine/skills-and-instructions/skills/production/page-design/`) — **40 static HTML templates** in 8 categories (squeeze, sales-short, sales-long, webinar-reg, vsl, checkout, thank-you, link-bio), with `design-system.md`, a machine-readable `index.json` catalog, and a browsable `index.html` gallery. White-label, `{{placeholder}}`-tokenized. Regenerate the catalog with `node .engine/scripts/build-page-catalog.js`.
- `templates/page-templates/modern-dark-course-sales.html` — legacy Tailwind template (exception; convert to the static standard later).

---

## Behavioral Rules & Feedback

### Do
- Build production-ready, mobile-responsive HTML for funnel/landing pages as **framework-free static HTML** — inline CSS in a single `<style>` block, CSS custom properties in `:root` (`--accent`/`--text`/`--bg`/`--font`), at most one Google Font (with system-font fallback), minimal inline JS only when needed (countdown, form validation, quiz). This is the house standard — see the **`page-design`** skill.
- **Start from the `page-design` template library** (40 static templates) for any landing/sales/opt-in/webinar/VSL/checkout/thank-you/link-bio page. Browse them in the gallery (`.engine/.../production/page-design/index.html`).
- **Placeholders:** library templates intentionally keep `{{UPPER_SNAKE_CASE}}` tokens; a **delivered** campaign page must replace ALL of them — zero `{{ }}` left in the final page.
- Show drafts for review before converting approved pages into reusable templates.
- Use the project's brand colors/fonts (from the brand kit / setup) — not generic defaults.
- _Legacy exception:_ `templates/page-templates/modern-dark-course-sales.html` is Tailwind v4 + Lucide, pending conversion to the static standard.

### Do NOT
- Make pages look like copied designs — when given an inspiration site, use it for structure, not appearance. Build something original.
- Commit API keys or secrets
- Skip the setup check — always verify `.clickcampaigns.json` state before starting agent work

---

## Key Files Reference

| File / Path | Purpose |
|-------------|---------|
| `CLAUDE.md` | This file — project context for Claude Code |
| `AGENTS.md` | Agent instructions for multi-tool support (Cursor, Codex, Gemini, etc.) |
| `.clickcampaigns.json` | Campaign config & setup state (created by setup wizard) |
| `.engine/` | Core engine — agents, scripts, skills, setup, templates |
| `.engine/setup/SETUP.md` | First-time setup wizard |
| `.engine/scripts/pexels-search.js` | Stock photo search (Pexels API) |
| `.engine/scripts/generate-image.js` | AI image generation |
| `.engine/scripts/clone-page.js` | Webpage cloning (Firecrawl) |
| `.engine/scripts/build-page-catalog.js` | Regenerates the page-design `index.json` catalog + gallery data island |
| `.engine/skills-and-instructions/skills/production/page-design/` | **Page template library** — 40 static templates, design system, catalog, gallery |
| `.engine/skills-and-instructions/skills/production/page-design/index.html` | Browsable gallery of all 40 templates |
| `.engine/agents/Agents-List.md` | Full list of 22 specialist agents |
| `.engine/funnels/Funnel-Pages-Checklist.md` | Funnel page build checklist |
| `.engine/tasks/Task-Checklist.md` | Task checklist |
| `brand-kit/` | Global brand assets (knowledge base + style guide) — fill in via setup |
| `campaigns/` | Your campaign folders (one per campaign) |
| `templates/page-templates/` | Pointer to the page-design library + the one legacy Tailwind template |

---

## What's Included

- **ClickCampaigns engine** — 22 specialist agents, skill system, and multi-tool support (Claude Code, Cursor, Codex, Gemini, Windsurf)
- **Page template library** — 40 white-label static HTML templates + design system + browsable gallery (the `page-design` skill)
- **Production skills** — page-design, frontend-design, copy-critique, PPTX, PDF, DOCX
- **Creative scripts** — Pexels stock search, AI image generation, page cloning

---

## Re-running Setup

Say `reset setup` at any time. This deletes `.clickcampaigns.json` and re-runs `.engine/setup/SETUP.md`.
