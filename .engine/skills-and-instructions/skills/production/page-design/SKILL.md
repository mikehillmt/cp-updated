---
name: page-design
description: Build high-converting funnel pages from a library of 40 static HTML templates — squeeze/opt-in, sales (short & long), webinar registration, VSL, checkout, thank-you, and link-in-bio. Use this skill when the user wants a landing page, sales page, opt-in, registration, checkout, or thank-you page for a campaign. Templates are framework-free static HTML with {{UPPER_SNAKE_CASE}} placeholder tokens you fill with campaign copy.
license: Complete terms in LICENSE.txt
---

# Page Design

Build high-converting landing pages, sales pages, opt-in pages, webinar registration pages, VSL pages, checkout pages, and thank-you pages — fast — by starting from a proven template and filling in the placeholders. All pages are **static HTML/CSS/JS: no frameworks, no build tools, no dependencies.** They load fast, look professional, and convert.

This is the house standard for ClickCampaigns funnel/landing pages. For bespoke, from-scratch brand sites, dashboards, or "make it unforgettable" interfaces, use the **`frontend-design`** skill instead (see "When to use which" below).

## Files
- `SKILL.md` — this file (overview, rules, template catalog).
- `design-system.md` — the house design system: colors, typography, spacing, components, section patterns.
- `index.json` — machine-readable catalog of all 40 templates (category, variant, conversion benchmark, placeholders, theme, accent). Regenerate with `node .engine/scripts/build-page-catalog.js` after editing templates.
- `index.html` — static gallery to browse/preview all 40 templates. Open it directly (`file://`) or serve the folder. Click any card to open the full page.
- `templates/` — the 40 static HTML template files.

## How It Works
1. User requests a page (e.g., "build me a webinar registration page").
2. Pick the right template: choose the page type + variant from the catalog below (or browse `index.html`). Match the variant to the offer and traffic.
3. Build the page: copy the template, set the brand `:root` CSS variables (`--accent`, `--text`, `--bg`, `--font`), and replace **every** `{{PLACEHOLDER}}` token with real campaign copy, URLs, and images. Uncomment any optional blocks you want (logos, mockups, etc.).
4. Save to `campaigns/<campaign-name>/output-assets/html/<page>.html`.
5. Preview by opening the file in a browser (or serve the folder). Run a copy pass with the direct-response copywriter (Ryan) before shipping.

Design direction and copy are coordinated by Alex across the relevant specialists; there is no separate build server — pages are plain files in the campaign folder.

## Key Rules
- **Fill every token.** Library templates intentionally ship with `{{UPPER_SNAKE_CASE}}` placeholders. A *delivered* page must contain **zero** `{{ }}` tokens — replace them all with real content. (The templates keep them; generated pages do not.)
- **No AI slop.** No generic gradients, no stock-photo-looking layouts, no "corporate template" feel. Pages should look like a human who gives a damn designed them.
- **Speed is king.** No external CSS frameworks (no Bootstrap, no Tailwind CDN). Inline critical CSS. System fonts or a single Google Font. Minimal images — use CSS for visual effects where possible.
- **Mobile-first.** Design for phones first, then scale up. Single column by default. Large touch targets (min 44px).
- **One goal per page.** Every page has ONE action. Remove anything that doesn't serve it. No nav menus on landing pages.
- **Conversion patterns matter.** Follow the proven section structures in `design-system.md`. Iterate on what converts; don't reinvent the wheel.

## When to use page-design vs frontend-design
- **page-design (this skill):** a templated funnel/landing page for a campaign — squeeze, sales, webinar, VSL, checkout, thank-you, link-in-bio. Conversion-optimized, static, legible by design. Inter (or a comparable clean sans) is an intentional direct-response choice here, not a lazy default — though pairing a distinctive display font for headlines is encouraged (see `design-system.md`).
- **frontend-design:** a bespoke brand site, app UI, dashboard, marketing artifact, or anything meant to be visually *unforgettable* and built from scratch. Its "avoid generic fonts / avoid purple-gradient-on-white" guidance governs there.

## Page Types Available (40 templates)

### Squeeze / Opt-in Pages (5 variants, ranked by conversion rate)
| # | Variant | Layout | Best For | Conv. Rate | Template |
|---|---------|--------|----------|------------|----------|
| 1 | Quiz/Assessment | Interactive questions → email for results | Lead magnets, assessments, quizzes | 35-55% | `templates/squeeze-quiz.html` |
| 2 | Basic Centered | Centered, minimal, email + CTA | Simple email capture, newsletter | 25-40% | `templates/squeeze.html` |
| 3 | Full-Screen Hero | Big background image, overlay text | Dramatic freebie offers, bold brands | 20-35% | `templates/squeeze-hero.html` |
| 4 | Split with Mockup | Product image left, bullets + form right | Ebooks, guides, downloads with preview | 20-30% | `templates/squeeze-split.html` |
| 5 | Benefits Section | Hero CTA + 3 benefit cards + form below | Planners, toolkits, resources that need selling | 15-25% | `templates/squeeze-benefits.html` |

### Sales — Short (5 variants)
| # | Variant | Layout | Best For | Conv. Rate | Template |
|---|---------|--------|----------|------------|----------|
| 1 | Countdown/Flash Sale | Urgency bar + price anchor + countdown timer | Time-limited offers, flash sales | 15-25% | `templates/sales-short-countdown.html` |
| 2 | Tripwire | Value stack + absurdly low price callout | Front-end offers ($7-$27), upsell funnels | 12-20% | `templates/sales-short-tripwire.html` |
| 3 | Bundle Deal | 3 items bundled, prices compared, savings shown | Product bundles, course stacks | 10-18% | `templates/sales-short-bundle.html` |
| 4 | Basic Coupon | Simple headline + offer + email capture | Coupons, discounts, basic offers | 10-15% | `templates/sales-short.html` |
| 5 | Seasonal/Holiday | Themed styling + coupon code box + copy button | Black Friday, New Year, seasonal promos | 8-15% | `templates/sales-short-seasonal.html` |

### Sales — Long (5 variants)
| # | Variant | Layout | Best For | Conv. Rate | Template |
|---|---------|--------|----------|------------|----------|
| 1 | Challenge/Program | Day-by-day breakdown + registration form | 5/7-day challenges, list building | 8-15% | `templates/sales-long-challenge.html` |
| 2 | Story/Narrative | Personal story → struggle → discovery → offer | Coaches, course creators, personal brands | 5-12% | `templates/sales-long-story.html` |
| 3 | Standard | Hero → problem/solution → benefits → features → CTA | Coaching, courses, services, products | 4-10% | `templates/sales-long.html` |
| 4 | Before/After | Visual comparison columns (without vs with) | Transformation products, programs | 4-10% | `templates/sales-long-comparison.html` |
| 5 | Authority/Expert | Credentials + media logos + method framework | Consultants, agencies, high-ticket | 3-8% | `templates/sales-long-authority.html` |

### Webinar Registration (5 variants)
| # | Variant | Layout | Best For | Conv. Rate | Template |
|---|---------|--------|----------|------------|----------|
| 1 | Speaker-Focused | Large speaker photo + bio + bullets + countdown | Expert-led webinars, masterclasses | 35-50% | `templates/webinar-reg-speaker.html` |
| 2 | Agenda/Outline | Numbered agenda items + time estimates | Content-driven webinars | 30-45% | `templates/webinar-reg-agenda.html` |
| 3 | Standard | Dark theme, countdown + name/email form | General webinars, workshops | 30-40% | `templates/webinar-reg.html` |
| 4 | Replay/On-Demand | No countdown, "Watch Now" messaging, email-only | Evergreen webinar funnels | 25-40% | `templates/webinar-reg-replay.html` |
| 5 | Multi-Day Series | Day-by-day cards + multi-session registration | Summits, multi-day events | 20-35% | `templates/webinar-reg-series.html` |

### VSL — Video Sales Letter (5 variants)
| # | Variant | Layout | Best For | Conv. Rate | Template |
|---|---------|--------|----------|------------|----------|
| 1 | Webinar Replay | "Replay" badge + urgency expiry text | Evergreen webinar funnels | 8-15% | `templates/vsl-webinar.html` |
| 2 | VSL + Long Copy | Video hero + full sales copy below fold | Products needing video + written persuasion | 5-12% | `templates/vsl-long.html` |
| 3 | VSL + Testimonials | Video hero + 6-card testimonial wall | Social-proof-heavy offers | 4-10% | `templates/vsl-testimonial.html` |
| 4 | Standard | Dark hero, video, CTA, minimal | General VSL pages | 3-8% | `templates/vsl.html` |
| 5 | Ultra-Minimal | White bg, just headline + video + CTA | Warm traffic, direct response | 3-8% | `templates/vsl-minimal.html` |

### Checkout (5 variants — figures are conversion *lift*, not absolute rates)
| # | Variant | Layout | Best For | Template |
|---|---------|--------|----------|----------|
| 1 | Order Bump | Checkout + "Add to Order" checkbox box | Increasing AOV (+30-50% take rate) | `templates/checkout-orderbump.html` |
| 2 | Two-Step | Contact info → Payment (progress indicator) | Reducing friction, higher completion | `templates/checkout-2step.html` |
| 3 | Payment Plan | Radio toggle: pay-in-full vs installments | High-ticket (+15-25% conversion) | `templates/checkout-payment-plan.html` |
| 4 | Product Summary | 2-column: product detail + payment form | High-ticket, reducing buyer's remorse | `templates/checkout-summary.html` |
| 5 | Standard | Single card, form + order summary + pay | General purchases | `templates/checkout.html` |

### Thank You / Confirmation (5 variants)
| # | Variant | Layout | Best For | Template |
|---|---------|--------|----------|----------|
| 1 | Welcome Video | Checkmark + video embed + next steps | Course/membership onboarding (60-80% watch rate) | `templates/thank-you-video.html` |
| 2 | Social Share/Referral | Checkmark + share buttons + referral link | Viral lead magnets (15-25% share rate) | `templates/thank-you-share.html` |
| 3 | Download | Checkmark + download button + email note | PDF/guide lead magnets | `templates/thank-you-download.html` |
| 4 | Standard | Checkmark + next steps + optional upsell | General post-signup/purchase | `templates/thank-you.html` |
| 5 | Onboarding Checklist | Interactive checklist + progress bar | SaaS/membership activation | `templates/thank-you-onboarding.html` |

### Link in Bio (5 variants)
| # | Variant | Layout | Best For | Template |
|---|---------|--------|----------|----------|
| 1 | Content Creator | Featured content cards + link buttons | YouTubers, podcasters, bloggers | `templates/link-bio-creator.html` |
| 2 | Standard | Avatar + links + social icons | General personal brand | `templates/link-bio.html` |
| 3 | Business/Services | Logo + service cards + contact info + hours | Local businesses, agencies, consultants | `templates/link-bio-business.html` |
| 4 | Portfolio | 2-column project grid + testimonial + hire CTA | Designers, photographers, freelancers | `templates/link-bio-portfolio.html` |
| 5 | Ultra-Minimal Dark | Dark bg, name only, text links (no buttons) | Minimalist brands, writers, thought leaders | `templates/link-bio-minimal.html` |

### How to Choose the Right Template

**Squeeze Pages:**
- "I just need an email signup" → Basic Centered
- "I have a great photo/visual for the background" → Full-Screen Hero
- "I have an ebook/PDF/guide to show off" → Split with Mockup
- "My freebie needs explanation — what's in it?" → Benefits Section
- "I want the highest conversion rate possible" → Quiz/Assessment

**Sales Pages:**
- "Quick offer, coupon, or discount" → Sales Short (pick variant by urgency style)
- "I need to tell my story" → Sales Long — Story
- "Show the transformation" → Sales Long — Comparison
- "I have credentials and authority" → Sales Long — Authority
- "Running a challenge or program launch" → Sales Long — Challenge

**Webinars:**
- "The speaker is the draw" → Speaker-Focused
- "The content is the selling point" → Agenda/Outline
- "Evergreen funnel, no live date" → Replay/On-Demand
- "Multi-day event or summit" → Multi-Day Series

**Checkout:**
- "I want to increase average order value" → Order Bump
- "High-ticket, need payment flexibility" → Payment Plan
- "Reduce drop-off on checkout" → Two-Step

## Build Workflow
1. **Direction first:** Read the request. Define page type, color palette (from `design-system.md` or the brand kit), layout structure, imagery direction, and CTA copy direction.
2. **Build:** Use the matching template skeleton + the design system. Set the `:root` variables, replace all placeholders, customize copy/images/sections, uncomment optional blocks.
3. **Review:** Check visual consistency, spacing, the mobile view, and brand alignment. Run the copy through the direct-response copywriter (Ryan).
4. **Finalize:** Fix issues, optimize for speed, confirm zero leftover `{{ }}` tokens, and save to the campaign's `output-assets/html/` folder.

## Speed Optimization Checklist
- [ ] All CSS is inline in a `<style>` tag (no external stylesheets)
- [ ] Images are `loading="lazy"` except the hero
- [ ] No JavaScript unless required (countdown timer, form validation, quiz)
- [ ] Single Google Font (if any) loaded with `display=swap`
- [ ] No unused CSS
- [ ] HTML is under 50KB total (excluding images)
- [ ] Images are compressed, WebP preferred, sized to display dimensions
- [ ] **Zero `{{ }}` placeholder tokens remain in the delivered page**
