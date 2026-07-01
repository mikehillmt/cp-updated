#!/usr/bin/env node
/**
 * build-page-catalog.js
 * Regenerates the page-design template catalog (index.json) and refreshes the
 * gallery's embedded data island (index.html) so it works over file://.
 *
 * Run after adding/editing/removing templates:
 *   node .engine/scripts/build-page-catalog.js
 *
 * Source of truth = the HTML files + the CATALOG map below (mirrors the
 * conversion tables in SKILL.md). Placeholders / accent / theme / JS are read
 * straight from each file so the catalog never drifts from the templates.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.resolve(__dirname, '../skills-and-instructions/skills/production/page-design');
const TEMPLATES_DIR = path.join(SKILL_DIR, 'templates');
const INDEX_JSON = path.join(SKILL_DIR, 'index.json');
const INDEX_HTML = path.join(SKILL_DIR, 'index.html');

// Editorial metadata from SKILL.md (category, ranked variant, best-for, conversion benchmark).
// conversionRate is an informational benchmark, not a guarantee (null where the source gives a lift note instead).
const CATALOG = {
  // Squeeze / Opt-in
  'squeeze-quiz':        { category: 'squeeze', rank: 1, variant: 'Quiz / Assessment',      bestFor: 'Lead magnets, assessments, quizzes',               conversionRate: '35-55%' },
  'squeeze':             { category: 'squeeze', rank: 2, variant: 'Basic Centered',         bestFor: 'Simple email capture, newsletter',                 conversionRate: '25-40%' },
  'squeeze-hero':        { category: 'squeeze', rank: 3, variant: 'Full-Screen Hero',       bestFor: 'Dramatic freebie offers, bold brands',             conversionRate: '20-35%' },
  'squeeze-split':       { category: 'squeeze', rank: 4, variant: 'Split with Mockup',      bestFor: 'Ebooks, guides, downloads with preview',           conversionRate: '20-30%' },
  'squeeze-benefits':    { category: 'squeeze', rank: 5, variant: 'Benefits Section',       bestFor: 'Planners, toolkits, resources that need selling',  conversionRate: '15-25%' },
  // Sales — Short
  'sales-short-countdown': { category: 'sales-short', rank: 1, variant: 'Countdown / Flash Sale', bestFor: 'Time-limited offers, flash sales',        conversionRate: '15-25%' },
  'sales-short-tripwire':  { category: 'sales-short', rank: 2, variant: 'Tripwire',               bestFor: 'Front-end offers ($7-$27), upsell funnels', conversionRate: '12-20%' },
  'sales-short-bundle':    { category: 'sales-short', rank: 3, variant: 'Bundle Deal',            bestFor: 'Product bundles, course stacks',           conversionRate: '10-18%' },
  'sales-short':           { category: 'sales-short', rank: 4, variant: 'Basic Coupon',           bestFor: 'Coupons, discounts, basic offers',         conversionRate: '10-15%' },
  'sales-short-seasonal':  { category: 'sales-short', rank: 5, variant: 'Seasonal / Holiday',     bestFor: 'Black Friday, New Year, seasonal promos',  conversionRate: '8-15%' },
  // Sales — Long
  'sales-long-challenge':  { category: 'sales-long', rank: 1, variant: 'Challenge / Program', bestFor: '5/7-day challenges, list building',          conversionRate: '8-15%' },
  'sales-long-story':      { category: 'sales-long', rank: 2, variant: 'Story / Narrative',   bestFor: 'Coaches, course creators, personal brands',  conversionRate: '5-12%' },
  'sales-long':            { category: 'sales-long', rank: 3, variant: 'Standard',            bestFor: 'Coaching, courses, services, products',      conversionRate: '4-10%' },
  'sales-long-comparison': { category: 'sales-long', rank: 4, variant: 'Before / After',      bestFor: 'Transformation products, programs',          conversionRate: '4-10%' },
  'sales-long-authority':  { category: 'sales-long', rank: 5, variant: 'Authority / Expert',  bestFor: 'Consultants, agencies, high-ticket',         conversionRate: '3-8%' },
  // Webinar Registration
  'webinar-reg-speaker': { category: 'webinar-reg', rank: 1, variant: 'Speaker-Focused',  bestFor: 'Expert-led webinars, masterclasses', conversionRate: '35-50%' },
  'webinar-reg-agenda':  { category: 'webinar-reg', rank: 2, variant: 'Agenda / Outline',  bestFor: 'Content-driven webinars',            conversionRate: '30-45%' },
  'webinar-reg':         { category: 'webinar-reg', rank: 3, variant: 'Standard',          bestFor: 'General webinars, workshops',        conversionRate: '30-40%' },
  'webinar-reg-replay':  { category: 'webinar-reg', rank: 4, variant: 'Replay / On-Demand', bestFor: 'Evergreen webinar funnels',         conversionRate: '25-40%' },
  'webinar-reg-series':  { category: 'webinar-reg', rank: 5, variant: 'Multi-Day Series',  bestFor: 'Summits, multi-day events',          conversionRate: '20-35%' },
  // VSL
  'vsl-webinar':     { category: 'vsl', rank: 1, variant: 'Webinar Replay',     bestFor: 'Evergreen webinar funnels',                   conversionRate: '8-15%' },
  'vsl-long':        { category: 'vsl', rank: 2, variant: 'VSL + Long Copy',     bestFor: 'Products needing video + written persuasion', conversionRate: '5-12%' },
  'vsl-testimonial': { category: 'vsl', rank: 3, variant: 'VSL + Testimonials',  bestFor: 'Social-proof-heavy offers',                   conversionRate: '4-10%' },
  'vsl':             { category: 'vsl', rank: 4, variant: 'Standard',            bestFor: 'General VSL pages',                           conversionRate: '3-8%' },
  'vsl-minimal':     { category: 'vsl', rank: 5, variant: 'Ultra-Minimal',       bestFor: 'Warm traffic, direct response',               conversionRate: '3-8%' },
  // Checkout (source gives conversion LIFT, not an absolute rate)
  'checkout-orderbump':    { category: 'checkout', rank: 1, variant: 'Order Bump',      bestFor: 'Increasing AOV (+30-50% take rate)',     conversionRate: null },
  'checkout-2step':        { category: 'checkout', rank: 2, variant: 'Two-Step',        bestFor: 'Reducing friction, higher completion',   conversionRate: null },
  'checkout-payment-plan': { category: 'checkout', rank: 3, variant: 'Payment Plan',    bestFor: 'High-ticket (+15-25% conversion)',       conversionRate: null },
  'checkout-summary':      { category: 'checkout', rank: 4, variant: 'Product Summary', bestFor: 'High-ticket, reducing buyer’s remorse', conversionRate: null },
  'checkout':              { category: 'checkout', rank: 5, variant: 'Standard',        bestFor: 'General purchases',                      conversionRate: null },
  // Thank You / Confirmation
  'thank-you-video':      { category: 'thank-you', rank: 1, variant: 'Welcome Video',          bestFor: 'Course/membership onboarding (60-80% watch rate)', conversionRate: null },
  'thank-you-share':      { category: 'thank-you', rank: 2, variant: 'Social Share / Referral', bestFor: 'Viral lead magnets (15-25% share rate)',          conversionRate: null },
  'thank-you-download':   { category: 'thank-you', rank: 3, variant: 'Download',               bestFor: 'PDF/guide lead magnets',                           conversionRate: null },
  'thank-you':            { category: 'thank-you', rank: 4, variant: 'Standard',               bestFor: 'General post-signup/purchase',                     conversionRate: null },
  'thank-you-onboarding': { category: 'thank-you', rank: 5, variant: 'Onboarding Checklist',   bestFor: 'SaaS/membership activation',                       conversionRate: null },
  // Link in Bio
  'link-bio-creator':   { category: 'link-bio', rank: 1, variant: 'Content Creator',    bestFor: 'YouTubers, podcasters, bloggers',           conversionRate: null },
  'link-bio':           { category: 'link-bio', rank: 2, variant: 'Standard',           bestFor: 'General personal brand',                    conversionRate: null },
  'link-bio-business':  { category: 'link-bio', rank: 3, variant: 'Business / Services', bestFor: 'Local businesses, agencies, consultants',   conversionRate: null },
  'link-bio-portfolio': { category: 'link-bio', rank: 4, variant: 'Portfolio',          bestFor: 'Designers, photographers, freelancers',     conversionRate: null },
  'link-bio-minimal':   { category: 'link-bio', rank: 5, variant: 'Ultra-Minimal Dark', bestFor: 'Minimalist brands, writers, thought leaders', conversionRate: null },
};

const CATEGORIES = ['squeeze', 'sales-short', 'sales-long', 'webinar-reg', 'vsl', 'checkout', 'thank-you', 'link-bio'];
const CATEGORY_LABELS = {
  'squeeze': 'Squeeze / Opt-in', 'sales-short': 'Sales — Short', 'sales-long': 'Sales — Long',
  'webinar-reg': 'Webinar Registration', 'vsl': 'VSL', 'checkout': 'Checkout',
  'thank-you': 'Thank You', 'link-bio': 'Link in Bio',
};

function luminance(hex) {
  if (!hex) return 1;
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const r = parseInt(h.slice(0, 2), 16) / 255, g = parseInt(h.slice(2, 4), 16) / 255, b = parseInt(h.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function analyze(file, html) {
  const placeholders = [...new Set((html.match(/\{\{[A-Z0-9_]+\}\}/g) || []).map(t => t.slice(2, -2)))].sort();
  const accent = (html.match(/--accent:\s*(#[0-9a-fA-F]{3,6})/) || [])[1] || null;
  const bg = (html.match(/--bg:\s*(#[0-9a-fA-F]{3,6})/) || [])[1] || null;
  const fontMatch = (html.match(/family=([A-Za-z0-9+]+)/) || [])[1];
  const font = fontMatch ? fontMatch.replace(/\+/g, ' ') : 'system';
  const hasJs = /<script/i.test(html);
  // Section dividers are UPPERCASE HTML comments, e.g. <!-- HERO -->
  const sections = [...new Set((html.match(/<!--\s*([A-Z][A-Z0-9 /&-]{1,40})\s*-->/g) || [])
    .map(c => c.replace(/<!--\s*|\s*-->/g, '').trim().toLowerCase().replace(/\s+/g, '-')))];
  // Local (non-token, non-data, non-http) asset refs that would 404. Strip HTML comments first:
  // commented-out example images (e.g. <!-- <img src="logo.png"> -->) are intentional docs, not live refs.
  const live = html.replace(/<!--[\s\S]*?-->/g, '');
  const assetRefs = [...new Set([
    ...(live.match(/url\('(?!\{\{|data:|https?:)[^')]+'\)/g) || []),
    ...(live.match(/src="(?!\{\{|data:|https?:|#)[^"]+"/g) || []),
  ])];
  const lines = html.split('\n').length;
  return { placeholders, accent, bg, font, hasJs, sections, assetRefs, lines };
}

const files = fs.readdirSync(TEMPLATES_DIR).filter(f => f.endsWith('.html')).sort();
const templates = [];
const problems = [];

for (const f of files) {
  const id = f.replace(/\.html$/, '');
  const meta = CATALOG[id];
  if (!meta) { problems.push(`No CATALOG entry for ${f}`); continue; }
  const a = analyze(f, fs.readFileSync(path.join(TEMPLATES_DIR, f), 'utf8'));
  if (a.assetRefs.length) problems.push(`${f} has local asset refs: ${a.assetRefs.join(', ')}`);
  templates.push({
    id,
    category: meta.category,
    variant: meta.variant,
    file: `templates/${f}`,
    rank: meta.rank,
    bestFor: meta.bestFor,
    conversionRate: meta.conversionRate,
    theme: luminance(a.bg) < 0.5 ? 'dark' : 'light',
    accentDefault: a.accent,
    font: a.font,
    hasJs: a.hasJs,
    sections: a.sections,
    placeholders: a.placeholders,
    optionalBlocks: [],
    assetRefs: a.assetRefs,
    legacy: false,
  });
}

templates.sort((x, y) =>
  CATEGORIES.indexOf(x.category) - CATEGORIES.indexOf(y.category) || x.rank - y.rank);

const catalog = {
  schemaVersion: 1,
  generator: 'build-page-catalog.js',
  stack: 'static-html',
  placeholderSyntax: '{{UPPER_SNAKE_CASE}}',
  categories: CATEGORIES,
  categoryLabels: CATEGORY_LABELS,
  count: templates.length,
  templates,
};

fs.writeFileSync(INDEX_JSON, JSON.stringify(catalog, null, 2) + '\n');
console.log(`Wrote ${INDEX_JSON} (${templates.length} templates)`);

// Refresh the gallery data island so index.html renders over file:// without fetch().
if (fs.existsSync(INDEX_HTML)) {
  let html = fs.readFileSync(INDEX_HTML, 'utf8');
  const island = `<script type="application/json" id="catalog">\n${JSON.stringify(catalog, null, 2)}\n</script>`;
  const re = /<script type="application\/json" id="catalog">[\s\S]*?<\/script>/;
  if (re.test(html)) {
    html = html.replace(re, island);
    fs.writeFileSync(INDEX_HTML, html);
    console.log(`Refreshed data island in ${INDEX_HTML}`);
  } else {
    console.warn(`WARN: no #catalog data island found in ${INDEX_HTML}; left unchanged.`);
  }
}

if (problems.length) {
  console.error('\nPROBLEMS:\n' + problems.map(p => '  - ' + p).join('\n'));
  process.exit(1);
}
console.log('OK — catalog consistent, no local asset refs.');
