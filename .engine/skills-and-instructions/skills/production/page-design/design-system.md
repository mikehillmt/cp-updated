# Page Design System

Design patterns derived from top-converting landing page templates. These are the house visual rules for ClickCampaigns funnel/landing pages built with the `page-design` skill.

> **Fonts:** Inter (or a comparable clean sans) is the deliberate, legible body default for direct-response pages. To avoid a generic feel, pair it with a distinctive **display font for headlines** (see Font Stacks and "Font Pairings" below) and lean on weight, scale, and color for personality. For bespoke brand sites/app UIs built from scratch, use the `frontend-design` skill instead, whose stricter "avoid generic fonts" rules apply there.

## Color Palettes

### Default Palette (Warm Professional)
- **Background:** `#FFFFFF` (white) or `#F8F9FA` (off-white)
- **Text:** `#1A1A2E` (near-black) for headlines, `#4A4A68` for body
- **Accent/CTA:** `#E8590C` (warm orange) — highest-converting CTA color
- **Secondary:** `#228BE6` (clean blue) for links, secondary actions
- **Light Section:** `#F1F3F5` alternating section backgrounds
- **Dark Section:** `#1A1A2E` for contrast sections (white text)

### Bold Palette
- **Background:** `#0F0F23` (dark navy)
- **Text:** `#FFFFFF` headlines, `#B8B8D0` body
- **Accent/CTA:** `#FFD43B` (gold) or `#51CF66` (green)

### Clean Palette
- **Background:** `#FFFFFF`
- **Text:** `#212529` headlines, `#495057` body
- **Accent/CTA:** `#339AF0` (blue) or `#20C997` (teal)

### Soft Palette (Coaching/Wellness)
- **Background:** `#FDF8F4` (warm cream)
- **Text:** `#2D2A32` headlines, `#5C5470` body
- **Accent/CTA:** `#E07A5F` (terracotta) or `#81B29A` (sage)

## Typography

### Font Stacks
```css
/* Headlines — choose ONE per page */
--font-headline: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
/* OR for more personality: */
--font-headline: 'Playfair Display', Georgia, serif;

/* Body — always sans-serif */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Scale
| Element | Size (mobile) | Size (desktop) | Weight | Line Height |
|---------|--------------|----------------|--------|-------------|
| H1 (hero) | 2rem (32px) | 3rem (48px) | 800 | 1.1 |
| H2 (section) | 1.75rem (28px) | 2.25rem (36px) | 700 | 1.2 |
| H3 (card/feature) | 1.25rem (20px) | 1.5rem (24px) | 600 | 1.3 |
| Body | 1rem (16px) | 1.125rem (18px) | 400 | 1.6 |
| Small/Legal | 0.875rem (14px) | 0.875rem | 400 | 1.5 |
| CTA Button | 1rem (16px) | 1.125rem (18px) | 700 | 1 |

### Rules
- Never use more than 2 fonts per page
- Headlines: tight line-height (1.1-1.2)
- Body: generous line-height (1.5-1.6)
- Max body text width: 680px (for readability)
- Mobile font sizes never below 16px for body text

## Spacing

### Base Unit: 8px
| Token | Value | Use |
|-------|-------|-----|
| `--space-xs` | 4px | Inline spacing |
| `--space-sm` | 8px | Tight spacing |
| `--space-md` | 16px | Default spacing |
| `--space-lg` | 24px | Between elements |
| `--space-xl` | 32px | Between groups |
| `--space-2xl` | 48px | Section padding (mobile) |
| `--space-3xl` | 64px | Section padding (desktop) |
| `--space-4xl` | 96px | Large section padding (desktop) |

### Section Padding
- Mobile: `48px 16px` (top/bottom, left/right)
- Desktop: `80px 24px`
- Content max-width: `1100px` centered

## Components

### CTA Buttons
```css
.cta-primary {
  display: inline-block;
  padding: 16px 40px;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  /* Color from palette */
  background: var(--accent);
  color: #fff;
}
.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

**CTA Copy Patterns (proven converters):**
- "SAVE MY SPOT" (webinars)
- "GET INSTANT ACCESS" (lead magnets)
- "GET THE COUPON" (offers)
- "START NOW" / "JOIN NOW" (memberships)
- "DOWNLOAD FREE GUIDE" (resources)
- "YES, I WANT THIS" (sales)
- "SUBSCRIBE" (newsletters)

### Form Fields
```css
.form-field {
  width: 100%;
  padding: 14px 16px;
  font-size: 1rem;
  border: 2px solid #DEE2E6;
  border-radius: 6px;
  background: #fff;
  transition: border-color 0.15s;
}
.form-field:focus {
  outline: none;
  border-color: var(--accent);
}
```

### Countdown Timer
```css
.countdown {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.countdown-unit {
  text-align: center;
}
.countdown-number {
  font-size: 2.5rem;
  font-weight: 800;
  display: block;
}
.countdown-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
}
```

### Trust Badges
- Shield icon + "30-DAY MONEY BACK GUARANTEE"
- Lock icon + "SECURE CHECKOUT"
- Star icon + "4.9/5 RATING"
- Use inline SVG icons (no icon libraries)
- Font size: 0.75rem, uppercase, letter-spacing: 1px
- Flex row, centered, gap 24px

### Testimonial Block
```html
<blockquote class="testimonial">
  <p>"Quote text here — keep it to 2-3 sentences max."</p>
  <cite>— First Name L., descriptor</cite>
</blockquote>
```
```css
.testimonial {
  max-width: 680px;
  margin: 0 auto;
  padding: 48px 24px;
  text-align: center;
}
.testimonial p {
  font-size: 1.25rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--text);
}
.testimonial cite {
  display: block;
  margin-top: 16px;
  font-size: 0.875rem;
  font-style: normal;
  opacity: 0.7;
}
```

## Section Patterns (by page type)

### Squeeze / Opt-in Page
Single screen. No scrolling required. Centered layout.
```
[HERO SECTION]
  Logo (optional, small)
  Headline (bold, benefit-driven)
  Subheadline (1-2 sentences, what they get)
  Product mockup or relevant image (optional)
  Email input field
  CTA button
  Privacy note ("We respect your privacy")
```

### Sales Page — Short (Coupon/Offer)
```
[HERO SECTION]
  Headline ("Get ready.")
  Subheadline (what's happening / what they get)
  Description paragraph (offer details)
  Email input
  CTA button

[FOOTER]
  Address / legal info
  Copyright
```

### Sales Page — Long (Coaching/Service/Course)
```
[HERO SECTION]
  Full-width or split background image
  Headline (aspirational, benefit-driven)
  Subheadline (1-2 sentences)
  CTA button (primary)

[PROBLEM/SOLUTION SECTION]
  Split layout: image on one side, text on other
  Paragraph explaining the transformation

[BENEFITS GRID]
  Section headline ("How [product] helps you:")
  3-4 benefit cards in grid:
    Icon or small image
    Benefit headline (3-5 words)
    Benefit description (2-3 sentences)

[SOCIAL PROOF]
  Testimonial blockquote
  Attribution with name + descriptor

[FEATURES / WHAT'S INCLUDED]
  Section headline ("What's included:")
  3-4 feature blocks:
    Feature name (bold)
    Feature description (2-3 sentences)

[FINAL CTA]
  Headline (action-oriented)
  Paragraph (urgency or restatement of value)
  CTA button

[FOOTER]
  Copyright
```

### Webinar Registration
```
[HERO SECTION — single screen preferred]
  "Free Webinar" or "Free Masterclass" label
  Headline (benefit promise)
  Date + time
  Countdown timer (days/hours/minutes/seconds)
  CTA button ("SAVE MY SPOT")

  — OR for longer format: —

  Speaker photo(s) + bio
  3-4 bullet points of what they'll learn
  Registration form (name + email)
  CTA button
```

### VSL (Video Sales Letter)
```
[HERO SECTION]
  Headline (curiosity/benefit)
  Video embed (centered, 16:9 aspect ratio)
  CTA button below video

[OPTIONAL: below-fold content]
  Benefits list
  Testimonials
  FAQ
  Final CTA
```

### Checkout Page
```
[MAIN SECTION — centered, max-width 600px]
  Headline (reinforce purchase decision)
  Product description (what they're buying)

  Form:
    Email field
    Credit card field (or payment integration)
    Order summary box
    Pay button

  Terms of service note
  Trust badges row (money-back, secure checkout)

[FOOTER]
  Copyright + legal
```

### Thank You / Confirmation
```
[HERO SECTION]
  Checkmark or success icon
  Headline ("You're in!" or "Check your inbox!")
  Next steps paragraph

  [OPTIONAL] Upsell or share section:
    "While you're here..." + offer
    Social sharing buttons
    "Invite a friend" CTA
```

### Link in Bio
```
[SINGLE COLUMN, centered, max-width 480px]
  Profile photo (circle, centered)
  Name / brand
  Short bio (1-2 lines)

  Link buttons (stacked, full-width):
    Primary link (accent color)
    Secondary links (outlined or light)

  Social icons row
  Email opt-in (optional)
  Content grid (optional — blog posts, products)
```

## Responsive Breakpoints
```css
/* Mobile-first base styles */
/* ... */

/* Tablet */
@media (min-width: 768px) {
  /* 2-column grids, larger typography */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Full layouts, max-width containers */
}
```

## Proven Conversion Components

These are the components that separate real high-converting templates (Leadpages, Unbounce, ClickFunnels) from AI-generated slop. USE THESE.

### "As Seen In" Logo Bar
Place immediately below the hero on sales pages and webinar pages. Grayscale logos = social proof without competing with brand colors.
```html
<section class="logo-bar">
  <p class="logo-bar-label">As Seen In</p>
  <div class="logo-bar-logos">
    <img src="{{LOGO_1}}" alt="{{LOGO_1_ALT}}" loading="lazy">
    <img src="{{LOGO_2}}" alt="{{LOGO_2_ALT}}" loading="lazy">
    <img src="{{LOGO_3}}" alt="{{LOGO_3_ALT}}" loading="lazy">
    <img src="{{LOGO_4}}" alt="{{LOGO_4_ALT}}" loading="lazy">
  </div>
</section>
```
```css
.logo-bar {
  padding: 32px 16px;
  text-align: center;
  background: #F8F9FA;
  border-top: 1px solid #E9ECEF;
  border-bottom: 1px solid #E9ECEF;
}
.logo-bar-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ADB5BD;
  margin-bottom: 20px;
}
.logo-bar-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}
.logo-bar-logos img {
  height: 28px;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: opacity 0.2s, filter 0.2s;
}
.logo-bar-logos img:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

### Sticky Mobile CTA Bar
Fixed bottom bar on mobile with the primary CTA. Shows only on scroll (after hero passes viewport). Adds +25-37% conversions on mobile.
```html
<div class="sticky-cta" id="stickyCta">
  <a href="#signup" class="sticky-cta-btn">{{CTA_TEXT}}</a>
</div>
```
```css
.sticky-cta {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  background: #fff;
  box-shadow: 0 -2px 12px rgba(0,0,0,0.1);
  z-index: 9999;
}
.sticky-cta-btn {
  display: block;
  width: 100%;
  padding: 16px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
}
@media (min-width: 768px) {
  .sticky-cta { display: none !important; } /* Desktop doesn't need it */
}
```
```js
// Show sticky CTA after scrolling past hero
const hero = document.querySelector('.hero');
const stickyCta = document.getElementById('stickyCta');
if (hero && stickyCta) {
  const observer = new IntersectionObserver(([e]) => {
    stickyCta.style.display = e.isIntersecting ? 'none' : 'block';
  }, { threshold: 0 });
  observer.observe(hero);
}
```

### SVG Wave Section Divider
Use between sections instead of flat color blocks. Gives a professional, non-boxy feel.
```html
<!-- Place at bottom of a section, before the next section -->
<div class="wave-divider">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#F8F9FA"/>
  </svg>
</div>
```
```css
.wave-divider {
  position: relative;
  margin-top: -1px;
  line-height: 0;
}
.wave-divider svg {
  width: 100%;
  height: 60px;
  display: block;
}
```

### Guarantee Badge
Place adjacent to or just below the final CTA. Shield icon + text. Increases sales ~32%.
```html
<div class="guarantee">
  <div class="guarantee-badge">
    <svg viewBox="0 0 24 24" width="40" height="40"><path fill="var(--accent)" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
  </div>
  <div class="guarantee-text">
    <strong>{{GUARANTEE_DURATION}} Money-Back Guarantee</strong>
    <p>{{GUARANTEE_BODY}}</p>
  </div>
</div>
```
```css
.guarantee {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  max-width: 480px;
  margin: 24px auto 0;
  text-align: left;
}
.guarantee-badge { flex-shrink: 0; }
.guarantee-text strong {
  font-size: 0.9375rem;
  display: block;
  margin-bottom: 4px;
}
.guarantee-text p {
  font-size: 0.8125rem;
  color: var(--text-light);
  line-height: 1.5;
}
```

### Scroll Fade-In Animation
Add to any section or card. Elements fade in + slide up when scrolled into view. Industry standard for professional pages.
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```
```js
// Fade-in on scroll — add class="fade-in" to any element
const faders = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
faders.forEach(el => fadeObserver.observe(el));
```

### Yellow Highlighter Effect
The ClickFunnels signature move. Use on 1-2 key phrases per page — never overdo it.
```css
.highlight {
  background: linear-gradient(transparent 60%, #FFEC99 60%);
  padding: 0 4px;
}
```
```html
<p>This is the <span class="highlight">single most important thing</span> you'll learn today.</p>
```

### Testimonial Card (with Photo)
Real testimonials need real photos. Circular avatar with accent border, decorative quote mark.
```html
<div class="testimonial-card">
  <div class="testimonial-quote-mark">&ldquo;</div>
  <p>"{{TESTIMONIAL_QUOTE}}"</p>
  <div class="testimonial-author">
    <img src="{{AUTHOR_PHOTO}}" alt="{{AUTHOR_NAME}}" class="testimonial-avatar" loading="lazy">
    <div>
      <cite>{{AUTHOR_NAME}}</cite>
      <span class="testimonial-role">{{AUTHOR_ROLE}}</span>
    </div>
  </div>
</div>
```
```css
.testimonial-card {
  background: #fff;
  border-radius: 12px;
  padding: 32px 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  position: relative;
}
.testimonial-quote-mark {
  font-size: 4rem;
  font-family: Georgia, serif;
  color: var(--accent);
  opacity: 0.15;
  position: absolute;
  top: 12px;
  left: 20px;
  line-height: 1;
}
.testimonial-card p {
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 20px;
}
.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
}
.testimonial-author cite {
  font-size: 0.9375rem;
  font-weight: 600;
  font-style: normal;
  display: block;
}
.testimonial-role {
  font-size: 0.8125rem;
  color: var(--text-light);
}
```

### Urgency/Announcement Bar
Thin fixed bar at top of page. Dark background, contrasting text, optional countdown. Use on sales + webinar pages.
```html
<div class="urgency-bar">
  <span>{{URGENCY_TEXT}}</span>
  <a href="#signup" class="urgency-bar-link">{{URGENCY_CTA}} &rarr;</a>
</div>
```
```css
.urgency-bar {
  position: sticky;
  top: 0;
  z-index: 9998;
  background: #1A1A2E;
  color: #fff;
  text-align: center;
  padding: 10px 16px;
  font-size: 0.875rem;
  font-weight: 600;
}
.urgency-bar-link {
  color: var(--accent);
  text-decoration: none;
  margin-left: 8px;
  font-weight: 700;
}
```

### Price Anchoring
Strikethrough original price with large sale price. The "Most Popular" ribbon for pricing tiers.
```css
.price-anchor {
  text-align: center;
  margin: 24px 0;
}
.price-original {
  font-size: 1.25rem;
  color: #ADB5BD;
  text-decoration: line-through;
}
.price-sale {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
  margin-left: 8px;
}
.price-note {
  font-size: 0.875rem;
  color: var(--text-light);
  margin-top: 4px;
}
/* "Most Popular" ribbon on pricing card */
.popular-badge {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: -12px;
  position: relative;
  z-index: 1;
}
```

### Font Pairings (Proven Converters)
Replace default Inter-only with these pairings for more personality:
| Style | Headlines | Body | Best For |
|-------|-----------|------|----------|
| Premium/Trust | Playfair Display | Raleway | Luxury, coaching, high-ticket |
| Bold/Modern | Bebas Neue | Heebo | Tech, fitness, startups |
| Friendly | Fraunces 500 | Poppins | Wellness, community, courses |
| Industrial | Teko | IBM Plex Sans | B2B, authority, agencies |
| Safe Universal | Montserrat | Open Sans | Everything (can't go wrong) |

## Anti-Patterns (NEVER do these)
- No hamburger menus on landing pages (there should be no nav)
- No carousels or sliders (people don't click them)
- No auto-playing video with sound
- No more than 2 font families
- No background videos (kill page speed)
- No popups on page load (wait at least 30 seconds or use exit intent)
- No "click here" or "submit" as CTA text
- No tiny light-gray text on white backgrounds
- No images without alt text
- No forms with more than 3 fields (name, email, phone MAX)
