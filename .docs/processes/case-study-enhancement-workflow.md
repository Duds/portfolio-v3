# Case Study Enhancement Workflow

**Purpose:** Document how to add enhanced visual components to case studies while maintaining build compatibility.  
**Last Updated:** 15 October 2025

---

## Overview

Case studies are authored in **Markdown** (`.md` files) and converted to **HTML** via the build script (`npm run build:content`). To maintain visual enhancements from the Art Director review, enhanced HTML components must be embedded directly in the markdown files.

**Why:** Markdown parsers (like `marked`) pass through raw HTML unchanged, so HTML blocks in `.md` files will appear in the generated `.html` files.

---

## Enhanced Components Available

### 1. Insight Quote

**Purpose:** Highlight key challenge questions or critical insights at the top of case studies.

**Markdown Syntax:**
```html
<blockquote class="insight-quote">
"How do you ensure expeditioners have immediate access to current safety protocols when there's no internet connectivity for months, environmental conditions are extreme, and protocol access can be life-saving?"
</blockquote>
```

**When to Use:**
- After the client/industry metadata
- Before the results section
- To frame the core challenge as a question

**Visual Result:**
- Serif font (IBM Plex Serif)
- Italic styling
- Large font size (18px)
- Amber left border (4px)
- Stone background with padding
- Rounded corners

---

### 2. Results Callout

**Purpose:** Display impact metrics in a prominent, scannable grid format.

**Markdown Syntax:**
```html
<div class="results-callout">
  <h3>Impact</h3>
  <div class="results-grid">
    <div class="result-item">
      <span class="result-number">78%</span>
      <span class="result-label">Improvement in safety protocol adherence</span>
    </div>
    <div class="result-item">
      <span class="result-number">100%</span>
      <span class="result-label">Availability during 6-month Antarctic winter isolation</span>
    </div>
    <div class="result-item">
      <span class="result-number">Seconds</span>
      <span class="result-label">Policy reference time (reduced from minutes)</span>
    </div>
    <div class="result-item">
      <span class="result-number">All Stations</span>
      <span class="result-label">Framework deployed across Australian Antarctic stations</span>
    </div>
  </div>
</div>
```

**When to Use:**
- After the challenge description
- Before the main content sections
- To emphasize measurable outcomes

**Visual Result:**
- Stone background with amber left border
- Grid layout (responsive, wraps on mobile)
- Large serif numbers in amber
- Small sans labels in charcoal

**Customization:**
- Add/remove `result-item` blocks as needed
- Numbers can be percentages, time units, or text
- Labels should be short and specific

---

### 3. Section Labels

**Purpose:** Create visual hierarchy for the narrative arc (Challenge → Approach → Result).

**Markdown Syntax:**
```html
<div class="case-study-section">
<span class="section-label">The Challenge</span>

## The Service Design Challenge

[Content here...]

</div>
```

**Available Labels:**
- `The Challenge` - For problem/context sections
- `The Approach` - For methodology/solution sections
- `The Result` - For outcomes/impact sections

**When to Use:**
- At the start of major case study sections
- Immediately before H2 headings
- To guide readers through the narrative arc

**Visual Result:**
- Small uppercase text (12px)
- Amber colour
- Stone background
- Pill-shaped (fully rounded borders)
- Letter spacing for emphasis

**Important:**
- Place the opening `<div>` tag **before** the section label
- Place the closing `</div>` tag **after** the section content
- Leave blank lines around HTML tags for proper markdown parsing

---

## Workflow for Adding Enhancements

### Step 1: Edit the Markdown File

Open the case study markdown file: `/case-studies/[name].md`

### Step 2: Add Enhanced Components

Insert HTML blocks at appropriate locations:

1. **Insight Quote** - After metadata, before results
2. **Results Callout** - After challenge, before main content
3. **Section Labels** - Before major H2 sections

### Step 3: Rebuild HTML

Run the build command:
```bash
npm run build:content
```

This regenerates all `.html` files from `.md` sources.

### Step 4: Verify Output

Check the generated HTML file: `/case-studies/[name].html`

Confirm:
- ✅ Enhanced components are present
- ✅ CSS classes are correct
- ✅ Typography renders correctly (serif for headings)
- ✅ Responsive layout works on mobile

---

## Example: Complete Enhanced Case Study

```markdown
# Designing Safety Protocol Delivery for Extreme Isolation

**Client:** Australian Antarctic Division  
**Industry:** Scientific Research & Exploration  
**Duration:** 8 months  
**Year:** 2019  
**Type:** Service Design & User Research

**Challenge:** To design a service for delivering safety protocols...

<blockquote class="insight-quote">
"How do you ensure expeditioners have immediate access to current safety protocols when there's no internet connectivity for months?"
</blockquote>

<div class="results-callout">
  <h3>Impact</h3>
  <div class="results-grid">
    <div class="result-item">
      <span class="result-number">78%</span>
      <span class="result-label">Improvement in safety protocol adherence</span>
    </div>
    <div class="result-item">
      <span class="result-number">100%</span>
      <span class="result-label">Availability during 6-month isolation</span>
    </div>
  </div>
</div>

---

<div class="case-study-section">
<span class="section-label">The Challenge</span>

## The Service Design Challenge

### Context: Extreme Isolation

Antarctic expeditioners face unique challenges...

</div>

---

<div class="case-study-section">
<span class="section-label">The Approach</span>

## Service Design Approach

### User Research & Field Testing

[Content...]

</div>

---

## [Continue with remaining sections...]
```

---

## CSS Component Reference

All components use styles defined in `/css/components.css`:

### `.insight-quote`
- Font: IBM Plex Serif, italic
- Size: 1.125rem (18px)
- Line height: 1.8
- Colour: Charcoal (#2D2D2D)
- Border: 4px solid amber left
- Background: Stone lightest (#F5F1EA)
- Padding: 3rem (48px)
- Border radius: 1rem (16px)

### `.results-callout`
- Background: Stone lightest (#F5F1EA)
- Border: 4px solid amber left
- Padding: 3rem (48px)
- Border radius: 0.5rem (8px)
- Margin: 4rem 0 (64px top/bottom)

### `.results-grid`
- Display: Grid
- Columns: Auto-fit, min 200px, max 1fr (responsive)
- Gap: 2rem (32px)

### `.result-number`
- Font: IBM Plex Serif
- Size: 2.5rem (40px)
- Weight: 700 (bold)
- Colour: Amber (#D97706)
- Line height: 1

### `.result-label`
- Size: 0.875rem (14px)
- Colour: Charcoal (#2D2D2D)
- Line height: 1.5

### `.section-label`
- Font: Work Sans (sans)
- Size: 0.75rem (12px)
- Weight: 600 (semibold)
- Letter spacing: 0.1em
- Text transform: Uppercase
- Colour: Amber (#D97706)
- Background: Stone lightest (#F5F1EA)
- Padding: 0.25rem 0.75rem
- Border radius: 9999px (pill)

---

## Build Process Technical Details

### How It Works:

1. **Source Files:** `/case-studies/*.md` (markdown with embedded HTML)
2. **Build Script:** `/scripts/build-content.js` (Node.js with `marked` parser)
3. **Template:** `/scripts/layout-template.js` (HTML wrapper with header/footer)
4. **Output:** `/case-studies/*.html` (fully rendered HTML pages)

### Build Command:
```bash
npm run build:content
```

### What Gets Preserved:
- ✅ Raw HTML blocks (enhanced components)
- ✅ Markdown syntax (converted to HTML)
- ✅ HTML attributes (classes, IDs)
- ✅ Nested HTML structures

### What Gets Converted:
- Markdown headings (`#`, `##`) → HTML headings (`<h1>`, `<h2>`)
- Markdown lists (`-`) → HTML lists (`<ul>`, `<li>`)
- Markdown bold (`**text**`) → HTML strong (`<strong>text</strong>`)
- Markdown links (`[text](url)`) → HTML links (`<a href="url">text</a>`)

---

## Troubleshooting

### Issue: HTML Components Don't Appear After Build

**Cause:** HTML might not be properly closed or markdown parser might be stripping it.

**Solution:**
1. Ensure HTML tags are properly opened and closed
2. Leave blank lines before/after HTML blocks
3. Check HTML syntax (use validator)
4. Rebuild: `npm run build:content`

### Issue: Styling Doesn't Apply

**Cause:** CSS classes might be misspelled or CSS file not loaded.

**Solution:**
1. Verify class names match exactly: `insight-quote`, `results-callout`, `section-label`
2. Check `/css/components.css` contains the styles
3. Clear browser cache
4. Inspect element in DevTools to verify classes are applied

### Issue: Layout Breaks on Mobile

**Cause:** Results grid might overflow or text might be too large.

**Solution:**
1. Results grid is responsive by default (auto-fit, min 200px)
2. Test at 375px, 768px, 1024px widths
3. Check `/css/variables.css` for responsive font sizes
4. Verify no fixed widths in result items

---

## Maintenance Notes

### When Adding New Enhanced Components:

1. **Define CSS** in `/css/components.css`
2. **Document here** with syntax and usage
3. **Update Art Director review** if visual system changes
4. **Test build process** to ensure compatibility

### When Updating Existing Components:

1. **Update CSS** in `/css/components.css`
2. **Rebuild all case studies**: `npm run build:content`
3. **Test visual consistency** across all case studies
4. **Update documentation** if syntax changes

---

## Related Documentation

- **Art Director Review:** `/.docs/design/ART_DIRECTOR_PORTFOLIO_REVIEW.md`
- **Implementation Summary:** `/.docs/design/IMPLEMENTATION_SUMMARY.md`
- **CSS Components:** `/css/components.css` (lines 462-538)
- **Build Script:** `/scripts/build-content.js`
- **Template:** `/scripts/layout-template.js`

---

## Quick Reference Card

**Add Insight Quote:**
```html
<blockquote class="insight-quote">
"Your key question here"
</blockquote>
```

**Add Results Callout:**
```html
<div class="results-callout">
  <h3>Impact</h3>
  <div class="results-grid">
    <div class="result-item">
      <span class="result-number">NUMBER</span>
      <span class="result-label">Description</span>
    </div>
  </div>
</div>
```

**Add Section Label:**
```html
<div class="case-study-section">
<span class="section-label">The Challenge</span>

## Section Heading

[Content...]

</div>
```

**Rebuild:**
```bash
npm run build:content
```

---

**Last Updated:** 15 October 2025  
**Document Owner:** Dale Rogers  
**Review Frequency:** After any visual system changes


