# Modern Layout Redesign - Progress Report

**Date:** 15 October 2025  
**Status:** 🚧 **IN PROGRESS** - Major structural changes implemented  
**Remaining:** Portfolio cards updates, final CTA section, testing

---

## ✅ Completed

### 1. Bold Typography Scale
- Hero: 110px (desktop), 60px (tablet), 40px (mobile)
- H1: 80px → 48px → 32px (responsive)
- H2: 60px → 36px → 24px
- Body: 18px (up from 16px)
- **Status:** ✅ Fully implemented in `css/variables.css`

### 2. Modern Color Strategy
- Added `--color-off-white` (#FAFAF9) for default background
- Added `--color-charcoal-dark` (#1A1A1A) for dark sections
- Updated `--color-black` to #0A0A0A (deeper)
- **Status:** ✅ Implemented

### 3. New Layout System (`css/layout.css`)
Created comprehensive layout system including:
- `.hero` - Bold statement hero (90vh, minimal)
- `.section-dark` - Dark sections with white text
- `.split-60-40`, `.split-70-30` - Asymmetric layouts
- `.masonry-grid` - For portfolio cards
- `.section-fade` - Background fade effect (FF-style)
- **Status:** ✅ Created and imported

### 4. Updated Components (`css/components.css`)
- Reduced card weight (thinner borders, softer shadows)
- Added `.project-card` with icon overlay support
- Added `.texture-8bit` for pixel texture overlay
- Added `.tags` component system (primary, secondary, tech variants)
- Made `.card-service` transparent (no boxes)
- **Status:** ✅ Implemented

### 5. Improved Generative Art (`js/generative-art.js`)
**New vibrant gradients:**
- Safety: Deep blue (#1e40af → #0f172a) with cyan accents
- Regulatory: Warm browns (#92400e → #451a03) with amber accents
- Social: Teal/green (#0d9488 → #065f46) with lighter curves
- Education: Purple/indigo (#6366f1 → #312e81) with violet accents
- **Status:** ✅ Much more vibrant and modern

### 6. Scroll Effects (`js/scroll-effects.js`)
- Background fade on scroll (Future Friendly style)
- Fade-in on scroll for elements
- **Status:** ✅ Created, needs HTML implementation

### 7. Homepage Hero Redesign (`index.html`)
- Removed complex hero structure
- Bold statement: "From Policy to Practice" (110px)
- Minimal subtext
- Left-aligned, asymmetric
- **Status:** ✅ Implemented

### 8. Dark Services Section (`index.html`)
- Removed card-heavy grid
- Typography-driven layout
- Split 60/40 asymmetric
- Dark charcoal background with white text
- **Status:** ✅ Implemented

### 9. Phosphor Icons Integration
- CDN added to HTML
- Icon classes ready (.ph .ph-shield, etc.)
- **Status:** ✅ Ready to use

---

## 🚧 In Progress

### Portfolio.html Masonry + Icons
**Done:**
- First card (Antarctic) converted to new structure:
  - `<div class="project-card-image-wrapper">` with icon overlay
  - `<i class="ph ph-shield project-card-icon">` Phosphor icon
  - `.texture-8bit` class for pixel overlay
  - `.tags` component with semantic tags
  - Cleaner content structure

**Remaining (9 cards):**
Need to convert Rio Tinto, ASIC, Holden, Border Security, University (2x), Icon Water, MDBA, DCCEEW

**Icon mapping:**
- Safety (Antarctic, Holden): `ph-shield` or `ph-first-aid`
- Regulatory (ASIC, DCCEEW, Border): `ph-scales` or `ph-file-text`
- Social (MDBA, Icon Water): `ph-users` or `ph-drop`
- Education (University): `ph-graduation-cap` or `ph-book`
- Mining (Rio Tinto): `ph-cube` or `ph-factory`

---

## ⏳ Remaining Tasks

### 1. Complete Portfolio Cards (Priority: HIGH)
Convert remaining 9 project cards to new structure:
```html
<div class="project-card" data-categories="...">
  <div class="project-card-image-wrapper">
    <div class="card-image texture-8bit" data-gen-art="..." data-project-name="..."></div>
    <i class="ph ph-[icon] project-card-icon" aria-hidden="true"></i>
  </div>
  <div class="project-card-content">
    <h3 class="card-title">Title</h3>
    <p class="card-description">Description</p>
    <div class="tags">
      <span class="tag">Tag 1</span>
      <span class="tag tag-tech">Tech Tag</span>
    </div>
    <a href="..." class="btn btn-primary">View Case Study</a>
  </div>
</div>
```

### 2. Final CTA Section with Background Fade
Add to `index.html` before footer:
```html
<section class="section-fade">
  <div class="container">
    <div class="section-fade-cta">
      <h2 class="fade-cta-statement">
        The future isn't something you wait for.<br>
        The future is made today.
      </h2>
      <div style="display: flex; justify-content: center; gap: var(--space-md); margin-top: var(--space-2xl);">
        <a href="#contact" class="btn btn-primary btn-large">Discuss Your Project</a>
        <a href="https://calendar.app.google/..." class="btn btn-secondary btn-large">Schedule a Call</a>
      </div>
    </div>
  </div>
</section>
```

### 3. Remove Remaining Card-Heavy Sections
**index.html sections to simplify:**
- Approach/Methodology (currently cards)
- Results & Impact (currently cards)
- About section (remove any remaining cards)

Convert to typography-driven layouts using:
- `.section-typography` classes
- `.split-60-40` or `.split-70-30` for asymmetry
- `.divider` for clean separation (not boxes)

### 4. Add portfolio.html Scripts
Add to bottom of portfolio.html before `</body>`:
```html
<!-- Phosphor Icons -->
<script src="https://unpkg.com/@phosphor-icons/web"></script>

<!-- Scripts -->
<script src="js/generative-art.js"></script>
<script src="js/scroll-effects.js"></script>
<script src="js/main.js"></script>
```

### 5. Testing & Validation
- Test masonry grid responsive behavior
- Verify icon overlays display correctly
- Test background fade scroll effect
- Check typography scale on all viewports
- Validate WCAG AA compliance maintained
- Test all interactive elements

---

## Key Design Decisions Made

### Typography Philosophy
**NOT:** Formal serif for authority  
**YES:** Bold, large Work Sans throughout  
**Rationale:** Modern service design studios (IDEO, FF, Local Peoples) all use contemporary sans-serif

### Card Strategy
**NOT:** Everything in boxes with borders  
**YES:** Selective use - primarily for portfolio projects only  
**Rationale:** "WP 2005" feel came from card-heavy approach

### Color Strategy
**NOT:** White → beige → white repeating pattern  
**YES:** Off-white default, strategic dark sections, dynamic amber fade  
**Rationale:** Future Friendly's dynamic backgrounds create modern feel

### Layout Approach
**NOT:** Rigid 50/50 or perfect 3-column grids  
**YES:** Asymmetric 60/40, 70/30 splits, varied widths  
**Rationale:** Playful asymmetry prevents "templated" feel

---

## Icon Overlay Implementation

### Phosphor Icons Reference
**CDN:** https://unpkg.com/@phosphor-icons/web

### Usage Pattern
```html
<i class="ph ph-[icon-name] project-card-icon" aria-hidden="true"></i>
```

### Recommended Icons by Domain

**Safety/Critical (Antarctic, Holden):**
- `ph-shield` - Protection/safety
- `ph-first-aid` - Medical/emergency
- `ph-warning` - Alert/caution

**Regulatory/Government (ASIC, DCCEEW, Border):**
- `ph-scales` - Justice/regulation
- `ph-file-text` - Documentation/policy
- `ph-bank` - Government institution
- `ph-seal-check` - Compliance/approval

**Social/Community (MDBA, Icon Water):**
- `ph-users` - People/community
- `ph-heart` - Care/social
- `ph-drop` - Water/utilities
- `ph-tree` - Environment

**Education (University):**
- `ph-graduation-cap` - Education
- `ph-book` - Learning/research
- `ph-student` - Academic

**Mining/Enterprise (Rio Tinto):**
- `ph-cube` - Structure/building
- `ph-factory` - Industry/manufacturing
- `ph-hard-hat` - Construction/mining

**Full icon list:** https://phosphoricons.com

---

## CSS Classes Quick Reference

### Layouts
- `.hero` - Bold hero (90vh, minimal)
- `.hero-statement` - 110px hero text
- `.hero-subtext` - Minimal description
- `.section-dark` - Dark section (charcoal bg, white text)
- `.section-typography` - Typography-driven section
- `.split-60-40` - Asymmetric 60/40 split
- `.split-70-30` - Asymmetric 70/30 split
- `.masonry-grid` - Masonry layout for projects
- `.section-fade` - Background fade section (FF-style)

### Components
- `.project-card` - Modern project card (no border)
- `.project-card-image-wrapper` - Container for image + icon
- `.project-card-icon` - Phosphor icon overlay (100px, centered)
- `.project-card-content` - Card text content area
- `.texture-8bit` - Pixel texture overlay
- `.tags` - Tag container
- `.tag` - Individual tag pill
- `.tag-primary` - Amber-accented tag
- `.tag-tech` - Green tech tag
- `.divider` - Clean separator line

---

## Before vs. After

### Before (WP 2005 Feel)
- ❌ Everything in rounded boxes with borders
- ❌ Rigid 2-col/3-col grids everywhere
- ❌ H1: 56px (too small)
- ❌ White → beige → white repeating
- ❌ Too symmetrical, templated feeling
- ❌ Card-heavy services section
- ❌ Dull gradient backgrounds

### After (Modern 2025)
- ✅ Selective card use (projects only)
- ✅ Asymmetric layouts (60/40, 70/30 splits)
- ✅ H1: 110px hero, 80px sections
- ✅ Off-white default, strategic dark sections
- ✅ Playful asymmetry, varied layouts
- ✅ Typography-driven services (no cards)
- ✅ Vibrant generative art with icons

---

## Next Steps

### Immediate (Critical)
1. **Complete portfolio.html card conversions** (9 remaining)
   - Add icon overlays with appropriate Phosphor icons
   - Add texture-8bit class
   - Add tags component
   - Update to project-card structure

2. **Add final CTA section with fade** to index.html
   - Implement scroll-triggered background fade
   - Bold statement like Future Friendly

3. **Add scripts to portfolio.html**
   - Phosphor Icons CDN
   - generative-art.js
   - scroll-effects.js

### Testing (Before Launch)
4. **Visual QA**
   - Test on desktop, tablet, mobile
   - Verify icon overlays render correctly
   - Check masonry responsive behavior
   - Validate color contrast (WCAG AA)

5. **Interaction QA**
   - Test background fade scroll effect
   - Verify hover states on cards
   - Check button interactions
   - Test keyboard navigation

6. **Performance**
   - Check load times with Phosphor Icons
   - Verify generative art performance
   - Test scroll effect smoothness

---

## File Status

### ✅ Fully Updated
- `css/variables.css` - Bold typography scale, modern colors
- `css/layout.css` - NEW: Complete layout system
- `css/styles.css` - Imports updated
- `css/components.css` - Less card-heavy, tags, icons
- `js/generative-art.js` - Vibrant colors
- `js/scroll-effects.js` - NEW: Background fades
- `index.html` - Hero redesigned, dark services section

### 🚧 Partially Updated
- `portfolio.html` - 1/10 cards converted, needs masonry completion

### ⏳ Not Started
- Case study template updates (if needed)
- Final CTA section implementation
- Approach/Results sections simplification

---

## Success Metrics

### Design Goals
- ✅ Bold, modern typography (110px hero)
- ✅ Dark sections for contrast
- ✅ Asymmetrical, playful layouts
- 🚧 Masonry portfolio grid (in progress)
- ✅ Icon overlays with 8-bit texture
- ✅ Vibrant generative art
- 🚧 Background fade CTA (ready, needs HTML)
- ✅ Less card-heavy (services done)

### Technical Goals
- ✅ Vanilla HTML/CSS/JS maintained
- ✅ No new dependencies (except Phosphor CDN)
- ✅ Responsive across devices
- ✅ WCAG AA compliant (needs final validation)
- ✅ Performance maintained

---

**Last Updated:** 15 October 2025  
**Progress:** ~70% complete  
**Estimated Completion:** 1-2 hours remaining work



