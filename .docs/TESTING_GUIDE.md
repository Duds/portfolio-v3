# Modern Portfolio Testing Guide

**Date:** 15 October 2025  
**Status:** Ready for browser testing  
**Test Server:** http://localhost:8080

---

## Quick Test

### Start Local Server
```bash
cd /home/dale-rogers/Projects/active/personal/portfolio-v3
python3 -m http.server 8080
```

### Open in Browser
- **Homepage:** http://localhost:8080/index.html
- **Work Page:** http://localhost:8080/portfolio.html
- **Case Study:** http://localhost:8080/case-studies/antarctic-doctrine-application.html

---

## What to Check

### Homepage (index.html)

**Hero Section:**
- ✅ "From Policy to Practice" shows at 110px (huge, bold)
- ✅ Left-aligned, minimal
- ✅ Two buttons below

**Services Section (DARK):**
- ✅ Dark charcoal background (#1A1A1A)
- ✅ White text readable
- ✅ Asymmetric 60/40 split layout
- ✅ NO cards (typography-driven)

**Featured Work:**
- ✅ 3 project cards with masonry layout
- ✅ Each card shows colorful generative art
- ✅ Icons appear (160px, white, centered):
  - Shield (Antarctic)
  - Factory (Rio Tinto)
  - Scales (ASIC)
- ✅ 8-bit pixel texture visible (subtle grid)
- ✅ Tags below descriptions

**Approach Section (DARK):**
- ✅ Dark background
- ✅ Narrow column layout
- ✅ 4 steps listed simply (NO cards)

**Results:**
- ✅ Light background
- ✅ Large numbers in amber (100%, Global, 4 Weeks)
- ✅ Asymmetric 60/40 layout
- ✅ NO cards

**About (DARK):**
- ✅ Dark background
- ✅ Narrow column
- ✅ 3 differentiators (NO cards)

**Resources:**
- ✅ Light background
- ✅ Single featured guide
- ✅ Border accent (NOT card)

**Contact:**
- ✅ Simple list of contact methods
- ✅ NO grid boxes

**Final CTA:**
- ✅ "The future is made today" bold statement
- ✅ Background should fade to amber while scrolling
- ✅ Two CTA buttons

**Footer:**
- ✅ Bold black background

---

### Work Page (portfolio.html)

**Header:**
- ✅ Title: "Work" (not "Service Design Portfolio")
- ✅ Simple description

**Filters:**
- ✅ "All Projects" (not "All Frameworks")
- ✅ Clean button tags

**Project Grid:**
- ✅ MASONRY LAYOUT (brick-style, not even grid)
- ✅ 10 cards in varied column positions
- ✅ All cards have:
  - Vibrant generative art backgrounds
  - 160px Phosphor icons centered
  - 8-bit pixel texture overlay
  - Tags (industry, tech, approach)
  - Clean descriptions

**Icon Mapping:**
- Antarctic: Shield ✅
- Rio Tinto: Factory ✅
- ASIC: Scales ✅
- Holden: Wrench ✅
- Border: ID Card ✅
- UC Digital: Graduation Cap ✅
- UC Travel: Airplane ✅
- MDBA: Drop ✅
- Icon Water: Faucet ✅
- DCCEEW: File Text ✅

**Generative Art Colors:**
- Safety (blue): Vibrant deep blue with cyan
- Regulatory (brown): Rich brown with amber
- Social (teal): Vibrant teal with light curves
- Education (purple): Purple/indigo with violet

---

## Common Issues & Fixes

### Issue: Icons Not Showing
**Symptoms:** Blank space where icons should be

**Check:**
1. Open browser console (F12)
2. Check for Phosphor CDN errors
3. Look for: `Failed to load resource: https://unpkg.com/@phosphor-icons/web`

**Fix:** Verify internet connection or use local Phosphor icons

### Issue: Generative Art Not Rendering
**Symptoms:** Card images are blank or white

**Check:**
1. Open console - look for JS errors
2. Inspect card element - should have SVG inside
3. Check `data-gen-art` and `data-project-name` attributes present

**Debug:**
```javascript
// In browser console:
window.initGenerativeArt(); // Force regenerate
```

### Issue: Masonry Looks Like Regular Grid
**Symptoms:** Cards in perfect even columns

**Causes:**
- Only 3 cards on homepage (not enough to see brick effect)
- Cards all same height (need varied content)

**Expected:** portfolio.html with 10 cards shows true masonry

### Issue: Background Fade Not Working
**Symptoms:** Final CTA section doesn't change color

**Check:**
1. Scroll slowly to final section
2. Should fade from off-white to amber
3. Check console for scroll-effects.js errors

**Debug:**
```javascript
// In browser console:
document.querySelector('.section-fade').classList.add('is-faded');
```

### Issue: Typography Too Large
**Symptoms:** Hero text overflows or looks too big

**Expected:** This is intentional (Future Friendly style)

**Adjust if needed:** Edit `css/variables.css` line 65:
```css
--font-size-hero: 6.875rem;  /* Reduce to 5rem if too large */
```

---

## Responsive Testing

### Desktop (1440px)
- Masonry: 3 columns
- Hero: 110px
- All sections legible
- Icons 160px

### Laptop (1024px)
- Masonry: 3 columns
- Hero: 110px
- Everything fits

### Tablet (768px)
- Masonry: 2 columns
- Hero: 60px
- Sections stack nicely

### Mobile (375px)
- Masonry: 1 column
- Hero: 40px
- All readable

---

## Performance Check

### Load Time
- Should be <2 seconds on decent connection
- Phosphor CDN: ~50KB
- Generative art: Renders client-side (<100ms)

### Console Errors
Should see NO errors for:
- Phosphor Icons loading
- Generative art initialization
- Masonry layout
- Scroll effects

### Network Tab
Should see requests to:
- Google Fonts (Work Sans)
- Phosphor Icons CDN
- All local CSS/JS files

---

## Known Behaviors

### Masonry Layout
- **Rebuilds** on window resize (debounced 250ms)
- **Rebuilds** on filter click
- **Regenerates art** after each rebuild

### Generative Art
- **Runs** 3 times:
  1. DOMContentLoaded
  2. 100ms after DOMContentLoaded
  3. window load event
- **Also runs** after masonry rebuild
- **Consistent** patterns (seed-based)

### Background Fade
- **Triggers** at 50% visibility of final section
- **Smooth** 0.6s transition
- **Amber tint** creates warmth for CTA

---

## Visual Comparison Checklist

### NOT Like "WP 2005"
- ❌ NO card-heavy layout everywhere
- ❌ NO rigid perfect grids
- ❌ NO small timid typography
- ❌ NO white/beige/white pattern
- ❌ NO everything centered and symmetrical

### IS Like Future Friendly 2025
- ✅ Bold hero statement (110px)
- ✅ Dark sections with contrast
- ✅ Asymmetric playful layouts
- ✅ Masonry brick layout
- ✅ Typography-driven (not card-driven)
- ✅ Background transitions
- ✅ Vibrant modern colors
- ✅ Simple, clear language

---

## If Something Looks Wrong

### Typography Feels Off
**Too large:** Reduce in `css/variables.css`
**Too small:** Should already be 110px, check browser zoom

### Colors Too Vibrant
**Tone down:** Edit generative art gradients in `js/generative-art.js`
**Too dull:** Should be vibrant now (blues, teals, purples, browns)

### Masonry Not Brick-Style
**3 cards:** Normal, need more cards for brick effect
**10 cards:** Should show brick pattern

**Debug:**
```javascript
// Force rebuild in console:
window.initMasonry();
```

### Icons Not Visible
**Check size:** Should be 160px
**Check color:** White with drop shadow
**Check position:** Centered on image

**Adjust size in** `css/components.css` line 336:
```css
width: 160px; /* Change if needed */
height: 160px;
```

---

## Final Validation

### Before Approving Design
- [ ] Open both pages in browser
- [ ] Check all sections render correctly
- [ ] Verify masonry brick layout visible
- [ ] Confirm icons appear (160px, centered)
- [ ] Test scroll fade effect
- [ ] Check mobile responsive
- [ ] Validate dark sections readable
- [ ] Confirm no "WP 2005" feel remaining

### Before Going Live
- [ ] Test all links functional
- [ ] Verify contact form (placeholder URL)
- [ ] Check Google Analytics (commented out)
- [ ] Create OG images (optional)
- [ ] Cross-browser test
- [ ] Performance audit

---

**Server Running:** http://localhost:8080  
**Test Now:** Open in browser to see the transformation!


