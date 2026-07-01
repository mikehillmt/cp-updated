---
name: competitive-intel
description: Analyze competitor pages, swipe design styles, extract copy insights, and reverse-engineer landing pages from a URL. Use this skill when the user shares a URL to study, wants to emulate a page's look, or asks for competitive analysis.
---

# Competitive Intelligence & Style Swipe

When the user shares a URL or mentions a competitor, you go to the page yourself. No screenshots needed from the user — you do all the work.

## Core Capabilities

### 1. Full Page Analysis (default when user shares a URL)
When someone drops a URL with no other context, do ALL of this:

**Step 1: Visit and capture**
- `browser` → `navigate` to the URL
- `browser` → `screenshot` (full page) — save to campaign folder for reference
- `browser` → `snapshot` (format: `ai`) — get the full DOM/accessibility tree
- `web_fetch` the URL in markdown mode — get the readable text content

**Step 2: Design teardown**
Extract and document:
- **Color palette** — primary, secondary, accent, background, text colors (hex values)
- **Typography** — font families (inspect via JS: `getComputedStyle`), sizes, weights, line-heights
- **Layout pattern** — hero structure, section flow, grid vs stack, whitespace strategy
- **Visual effects** — gradients, shadows, animations, overlays, textures, border treatments
- **Image style** — photography vs illustration, dark vs light, lifestyle vs abstract
- **CTA design** — button colors, shapes, text, placement, hover effects
- **Trust elements** — testimonials format, logos, badges, social proof placement
- **Mobile approach** — responsive patterns, mobile-first indicators

**Step 3: Copy analysis**
- **Headline structure** — main promise, supporting headlines, power words used
- **Copy framework** — identify if it's PAS, AIDA, Story-based, etc.
- **Offer stack** — what's included, how bonuses are presented, pricing display
- **Urgency/scarcity** — countdown timers, limited spots, deadline language
- **Voice and tone** — formal vs casual, first vs second person, sentence length
- **CTA copy** — button text, action phrases, micro-copy around CTAs

**Step 4: Strategic assessment**
- **Target audience** — who is this page speaking to?
- **Core promise** — what's the one big transformation?
- **Objection handling** — what fears/doubts does the page address?
- **Conversion strategy** — what's the page optimized to get the visitor to do?
- **Strengths** — what's working well that we should learn from?
- **Weaknesses** — where could this page be stronger?

### 2. Style Swipe ("make mine look like this")
When the user wants to emulate a page's visual style:

1. Do the full design teardown (Step 2 above)
2. Create a **style brief document** saved to the campaign's `brand-kit/` folder:

```markdown
# Style Brief — Swiped from [URL]

## Color Palette
- Primary: #XXXXXX
- Secondary: #XXXXXX
- Accent: #XXXXXX
- Background: #XXXXXX
- Text: #XXXXXX

## Typography
- Headlines: [Font Family], [weight], [size range]
- Body: [Font Family], [weight], [size], [line-height]
- Google Fonts import: <link href="...">

## Layout Pattern
[Description of structure, sections, spacing]

## Visual Effects
[Gradients, shadows, animations to replicate]

## CTA Style
[Button design specs]

## Overall Aesthetic
[One paragraph capturing the feel — is it bold/minimal/luxury/playful/etc.]
```

3. When building pages for this campaign, reference this style brief instead of the default design specs

### 3. Copy Improvement ("use their copy approach on mine")
When the user wants to improve existing copy based on a competitor:

1. `web_fetch` the competitor URL for their copy
2. Read the user's existing page from `~/clawd/campaigns/`
3. Compare side-by-side:
   - Where is the competitor's copy stronger? (headlines, CTAs, proof elements)
   - What copy frameworks are they using that we aren't?
   - What objections do they handle that we miss?
4. Rewrite the weak sections of our page using insights from the competitor
5. Keep our brand voice — steal the structure and strategy, not the words

### 4. Multiple Competitor Roundup
When the user wants to study several competitors:

1. Visit each URL, do the full analysis
2. Create a comparison document:
   - What design patterns appear across all of them?
   - What copy frameworks are most common?
   - Where do they all agree? (this is probably proven)
   - Where do they differ? (this is opportunity)
3. Recommend a strategy that takes the best from each

## How to Trigger

The user just needs to share a URL. Recognize these patterns:
- Bare URL with no context → Full page analysis
- "Make mine look like [URL]" → Style swipe + rebuild
- "Check out [URL], improve my page" → Copy improvement
- "Look at these: [URL1] [URL2] [URL3]" → Multiple competitor roundup
- "What are [competitor] doing?" → Navigate to their site, full analysis

## Important

- **Never ask the user to screenshot or describe a page.** You have a browser — go look at it yourself.
- **Always screenshot the page** and save it to the campaign folder for reference.
- **Extract real CSS values** using browser evaluate/JavaScript when possible, don't guess from screenshots.
- **Save all analysis docs** to the campaign folder so they can be referenced later.
- When building pages after a style swipe, the style brief overrides the default design specs in the frontend-design SKILL.md. Use the swiped style as the primary direction.
