# Visual / Brand Design Audit

## Purpose
Maintains brand consistency and emotional connection through design systems. This audit ensures typography, colour systems, responsive design, and motion principles align with brand values and create a cohesive visual experience.

## Pre-Audit Setup

- [ ] Review brand guidelines and strategy
- [ ] Review existing documentation:
  - `.docs/design/styling-guide.md`
  - `.docs/voice-and-tone-guide.md`
- [ ] Set up testing environments:
  - Multiple browsers (Chrome, Firefox, Safari, Edge)
  - Multiple devices (desktop, tablet, mobile)
  - Design tools (Figma, Sketch, or similar)
- [ ] Prepare screenshot documentation tools

---

## 1. Brand Alignment

### Brand Identity
- [ ] Visual design reflects brand values:
  - Pragmatic and no-nonsense approach
  - Confidence without arrogance
  - Clear, structured thinking
  - Professional yet approachable
- [ ] Design system supports brand positioning
- [ ] Emotional tone appropriate for target audience (government, education, enterprise)
- [ ] Visual hierarchy emphasizes key brand messages

### Visual Personality
- [ ] Design communicates "systematic problem-solving"
- [ ] Aesthetic is minimal and pragmatic (not trendy)
- [ ] Professional without being corporate or sterile
- [ ] Approachable without being casual
- [ ] Spacious layout conveys clarity and structure

### Brand Differentiation
- [ ] Visual design distinguishes from competitors
- [ ] Design decisions justify strategic positioning
- [ ] Unique visual elements memorable and appropriate
- [ ] No generic stock design patterns

---

## 2. Typography System

### Font Family: Work Sans (Modern Sans-Serif Only)
- [ ] Work Sans loaded correctly from Google Fonts
- [ ] Preconnect to Google Fonts implemented
- [ ] Font display: swap prevents invisible text
- [ ] Work Sans weights available: 300, 400, 500, 600, 700
- [ ] Work Sans used throughout (all headings, body, UI)
- [ ] Hierarchy through size, weight, colour, spacing—NOT font changes
- [ ] Aligns with modern service design studios (IDEO, Future Friendly, Local Peoples, Folk)
- [ ] Consider self-hosting fonts for performance

### Type Scale
- [ ] Type scale follows consistent ratio
- [ ] Current scale reviewed:
  - `--font-size-xs`: 0.75rem (12px)
  - `--font-size-sm`: 0.875rem (14px)
  - `--font-size-base`: 1rem (16px)
  - `--font-size-lg`: 1.125rem (18px)
  - `--font-size-xl`: 1.25rem (20px)
  - `--font-size-2xl`: 1.5rem (24px)
  - `--font-size-3xl`: 2rem (32px)
  - `--font-size-4xl`: 2.5rem (40px)
  - `--font-size-5xl`: 3rem (48px)
  - `--font-size-6xl`: 4rem (64px)
- [ ] Font sizes appropriate for content hierarchy
- [ ] Minimum 16px for body text (accessibility)

### Typography Hierarchy
- [ ] H1 distinctive and appropriate (48-64px)
- [ ] H2-H6 clear hierarchy
- [ ] Heading weights emphasize importance
- [ ] Body text comfortable to read (16-18px)
- [ ] Small text not too small (min 12px)
- [ ] Large text used sparingly for emphasis

### Text Formatting
- [ ] Line height appropriate:
  - Body text: 1.5-1.75
  - Headings: 1.1-1.3
  - Current: `--line-height-tight`: 1.1, `--line-height-normal`: 1.5, `--line-height-relaxed`: 1.75
- [ ] Letter spacing (tracking) appropriate
- [ ] Paragraph spacing creates rhythm (current: 1.5rem)
- [ ] Text alignment consistent (left-aligned body text)
- [ ] Line length optimal (45-75 characters, max ~75)
- [ ] Hyphenation not overused

### Typography Consistency
- [ ] Consistent font weights across similar elements
- [ ] Consistent sizing for same content types
- [ ] Text styles defined in CSS variables
- [ ] No arbitrary font size values
- [ ] No mix of font families (except monospace for code)

---

## 3. Colour System

### Primary Palette (Updated October 2025)
- [ ] Colour palette aligns with brand strategy
- [ ] Current palette reviewed:
  - **Black**: `#1A1A1A` (headings)
  - **White**: `#FFFFFF` (backgrounds)
  - **Amber**: `#D97706` (primary accent - replaces yellow)
  - **Warm Neutrals**: Stone (`#F5F1EA`, `#E8E1D6`, `#D4CBC0`), Charcoal (`#6B6B6B`, `#2D2D2D`)
- [ ] Warm neutral palette supports social systems reform focus
- [ ] Amber accent used strategically for focus and emphasis (not constant)
- [ ] Stone/charcoal scale provides warmth and variation
- [ ] Palette inspired by IDEO and civic design studios

### Colour Usage
- [ ] Black (`#1A1A1A`) used for headings
- [ ] Charcoal (`#2D2D2D`) used for body text
- [ ] White used for primary backgrounds
- [ ] Stone lightest (`#F5F1EA`) used for alternate backgrounds
- [ ] Amber (`#D97706`) used sparingly for:
  - Primary CTAs
  - Focus indicators
  - Section labels
  - Results callout numbers
  - Strategic emphasis (not constant brand presence)
- [ ] Warm neutrals (stone, charcoal) used for:
  - Secondary text
  - Borders
  - Backgrounds
  - Subtle dividers
- [ ] No colour used arbitrarily
- [ ] Amber functions as "signal of focus" rather than brand constant

### Colour Consistency
- [ ] All colours defined as CSS variables
- [ ] No hardcoded colour values in CSS
- [ ] Consistent colour naming convention
- [ ] Semantic colour variables (e.g., `--color-text-primary`)
- [ ] No duplicate colour values

### Colour Accessibility
- [ ] All text meets 4.5:1 contrast ratio (AA)
- [ ] Large text meets 3:1 contrast ratio
- [ ] UI components meet 3:1 contrast ratio
- [ ] Amber (`#D97706`) on white: **4.5:1** ✓ (AA compliant)
- [ ] Amber-dark (`#B45309`) on stone backgrounds: **4.5:1** ✓ (AA compliant)
- [ ] Charcoal (`#2D2D2D`) on white: **12.6:1** ✓ (AAA compliant)
- [ ] Black (`#1A1A1A`) on white provides strong contrast
- [ ] Focus indicators (amber) meet 3:1 contrast
- [ ] Colour not sole means of conveying information

---

## 4. Layout and Spacing

### Spacing Scale
- [ ] Spacing scale follows consistent system
- [ ] Current scale reviewed:
  - `--space-xs`: 0.25rem (4px)
  - `--space-sm`: 0.5rem (8px)
  - `--space-md`: 1rem (16px)
  - `--space-lg`: 1.5rem (24px)
  - `--space-xl`: 2rem (32px)
  - `--space-2xl`: 3rem (48px)
  - `--space-3xl`: 6rem (96px)
- [ ] Spacing values used consistently
- [ ] No arbitrary margin/padding values
- [ ] Spacing creates clear visual rhythm

### Section Spacing
- [ ] 96px between major sections (spacious brand aesthetic)
- [ ] Consistent vertical rhythm throughout
- [ ] Adequate breathing room around content
- [ ] Spacing reduces on mobile appropriately
- [ ] White space used strategically, not wasted

### Grid and Alignment
- [ ] Content width appropriate (max-width on containers)
- [ ] Consistent horizontal alignment
- [ ] Grid system (if used) applied consistently
- [ ] Optical alignment for visual elements
- [ ] Consistent padding on containers

### Layout Patterns
- [ ] Layout supports content hierarchy
- [ ] Consistent layout patterns across similar sections
- [ ] Focal points clear and intentional
- [ ] Visual balance appropriate
- [ ] Asymmetry (if used) purposeful

---

## 5. Responsive Design

### Breakpoints
- [ ] Breakpoints reviewed:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
  - Large: > 1280px
- [ ] Breakpoints match common device sizes
- [ ] Content reflows appropriately at each breakpoint
- [ ] No horizontal scrolling at any size

### Mobile Design (< 640px)
- [ ] Typography scales down appropriately
- [ ] Touch targets minimum 44x44px
- [ ] Spacing reduces but remains generous
- [ ] Navigation collapses to hamburger menu
- [ ] Forms easy to complete on mobile
- [ ] Images scale/crop appropriately
- [ ] No tiny text (minimum 16px body)

### Tablet Design (640px - 1024px)
- [ ] Layout adapts from mobile to desktop smoothly
- [ ] Content width appropriate
- [ ] Navigation appropriate for touch and mouse
- [ ] Images and media responsive

### Desktop Design (> 1024px)
- [ ] Full design system visible
- [ ] Optimal line length maintained
- [ ] Content doesn't stretch too wide
- [ ] Hover states appropriate
- [ ] Multi-column layouts work well

### Responsive Images
- [ ] Images scale proportionally
- [ ] No distorted images
- [ ] Art direction for different sizes (if needed)
- [ ] Appropriate image formats (WebP with fallbacks)
- [ ] Lazy loading implemented for performance

---

## 6. Components and Patterns

### Buttons
- [ ] Button variants reviewed:
  - Primary: Amber background, white text, shimmer effect on hover
  - Secondary: Black border, black text
  - Ghost: No background, underline on hover
- [ ] Button styles consistent across site
- [ ] Pill shape (border-radius: full) consistent
- [ ] Button states clear:
  - Default
  - Hover (transform: translateY(-2px), shimmer animation, amber shadow)
  - Focus (3px amber outline)
  - Active
  - Disabled
- [ ] Shimmer effect (gradient overlay animation) on primary buttons
- [ ] Button sizing consistent (height, padding)
- [ ] Icon buttons (if any) properly sized and aligned

### Navigation
- [ ] Navigation design consistent
- [ ] Active state clearly indicated
- [ ] Hover states appropriate
- [ ] Mobile menu design cohesive
- [ ] Logo/brand placement consistent
- [ ] Navigation hierarchy clear

### Forms
- [ ] Form inputs styled consistently
- [ ] Input states clear:
  - Default
  - Focus (3px yellow outline)
  - Error
  - Disabled
  - Success
- [ ] Labels properly aligned and styled
- [ ] Error messages visually distinct
- [ ] Form layout clean and spacious
- [ ] Checkboxes/radios (if any) custom styled consistently

### Cards
- [ ] Card design consistent
- [ ] Card shadows/borders appropriate (multi-layered shadows for depth)
- [ ] Card hover states smooth (translateY with elevation increase)
- [ ] Amber top accent appears on hover (gradient fade 0 → 100%)
- [ ] Card content hierarchy clear (all Work Sans, hierarchy through weight/size)
- [ ] Card spacing internal and external consistent
- [ ] Generative art images for project cards (domain-coded patterns via JavaScript)
- [ ] Visual system: code-generated, seed-based, reproducible

### Lists and Content Blocks
- [ ] List styling consistent
- [ ] Bullet/number styles appropriate
- [ ] Blockquotes/testimonials visually distinct
- [ ] Content dividers subtle and consistent
- [ ] Sections clearly delineated

---

## 7. Visual Hierarchy

### Information Architecture
- [ ] Most important content emphasized visually
- [ ] Clear visual path through page
- [ ] F-pattern or Z-pattern flow (depending on content)
- [ ] Calls-to-action stand out
- [ ] Secondary content appropriately de-emphasized

### Size and Scale
- [ ] Larger elements draw attention appropriately
- [ ] Size creates clear hierarchy
- [ ] Scale jumps not too drastic
- [ ] Consistent sizing for similar importance levels

### Contrast and Emphasis
- [ ] High contrast for important elements
- [ ] Colour used to emphasize key actions
- [ ] Weight (font weight, border weight) creates hierarchy
- [ ] White space isolates important elements

### Visual Weight
- [ ] Page feels balanced
- [ ] Heavy elements don't overwhelm
- [ ] Visual weight distributed appropriately
- [ ] Focal points clear

---

## 8. Motion and Animation

### Animation Principles
- [ ] Animations serve purpose (not decorative only)
- [ ] Animation duration appropriate (current: 200ms)
- [ ] Easing functions natural (ease-in-out)
- [ ] Animations enhance, don't distract
- [ ] Reduced motion respected (`prefers-reduced-motion`)

### Interaction Animations
- [ ] Button hover animations smooth (translateY -2px)
- [ ] Link hover transitions subtle
- [ ] Focus transitions immediate and clear
- [ ] Card hover effects appropriate
- [ ] Smooth scrolling implemented (current: smooth)

### Performance
- [ ] Animations use transform and opacity (GPU-accelerated)
- [ ] No layout thrashing from animations
- [ ] Animations don't cause jank
- [ ] Will-change property used sparingly
- [ ] Animations performant on mobile

### Loading States
- [ ] Loading indicators present where needed
- [ ] Loading states not jarring
- [ ] Skeleton screens (if used) appropriate
- [ ] Progressive disclosure smooth

---

## 9. Imagery and Media

### Photography Style
- [ ] Photography aligns with brand
- [ ] Professional quality images
- [ ] Consistent photography style
- [ ] Images support, not distract from content
- [ ] Image subjects appropriate for target audience

### Image Treatment
- [ ] Consistent filters/treatments (if any)
- [ ] Aspect ratios consistent within categories
- [ ] Image borders/frames consistent
- [ ] Image overlays (if used) don't obscure content
- [ ] Placeholder images appropriate

### Icons and Graphics
- [ ] Icon style consistent throughout
- [ ] Icon size and weight consistent
- [ ] Icons intuitive and recognizable
- [ ] Icon colour consistent with palette
- [ ] Decorative graphics support brand

### Video and Rich Media
- [ ] Video quality appropriate
- [ ] Video controls styled consistently
- [ ] Autoplay used appropriately (not for sound)
- [ ] Media captions/subtitles available
- [ ] Media player design consistent

---

## 10. Brand Consistency

### Cross-Page Consistency
- [ ] Header consistent across all pages
- [ ] Footer consistent across all pages
- [ ] Navigation consistent
- [ ] Colour usage consistent
- [ ] Typography consistent
- [ ] Component styling consistent
- [ ] Spacing patterns consistent

### Content Consistency
- [ ] Heading styles consistent for same levels
- [ ] Lists formatted consistently
- [ ] Links styled consistently
- [ ] Callouts/notices styled consistently
- [ ] Testimonials styled consistently
- [ ] Forms styled consistently

### Tone and Voice (Visual)
- [ ] Visual tone matches written tone
- [ ] Design reflects brand personality
- [ ] Visual weight appropriate for content importance
- [ ] Design formality matches context

---

## 11. Technical Quality

### CSS Architecture
- [ ] CSS variables used throughout
- [ ] No hardcoded values for brand properties
- [ ] Consistent naming conventions
- [ ] Logical CSS organization:
  - variables.css (design tokens)
  - reset.css (base reset)
  - typography.css (type system)
  - components.css (UI components)
  - styles.css (main imports)
- [ ] No unused CSS
- [ ] CSS specificity managed appropriately
- [ ] No !important overuse

### Browser Compatibility
- [ ] Consistent rendering across browsers:
  - Chrome
  - Firefox
  - Safari
  - Edge
- [ ] Fallbacks for CSS features
- [ ] Vendor prefixes where needed
- [ ] Graceful degradation

### Performance
- [ ] CSS minified for production
- [ ] Font loading optimized
- [ ] Images optimized
- [ ] No render-blocking resources
- [ ] Critical CSS inlined (if applicable)

### Maintainability
- [ ] Design system documented (`.docs/design/styling-guide.md`)
- [ ] Component documentation clear
- [ ] CSS comments helpful
- [ ] Design tokens well-organized
- [ ] Easy to update brand colours/fonts

---

## 12. Print Styles (If Applicable)

- [ ] Print stylesheet exists
- [ ] Print styles appropriate
- [ ] Colours appropriate for print
- [ ] Page breaks sensible
- [ ] URLs shown for links
- [ ] Navigation hidden in print

---

## 13. Edge Cases and States

### Empty States
- [ ] Empty states designed (if applicable)
- [ ] Empty states helpful and on-brand
- [ ] Placeholder content appropriate

### Error States
- [ ] 404 page designed
- [ ] Error messages styled consistently
- [ ] Error states clear and helpful

### Loading States
- [ ] Loading indicators designed
- [ ] Skeleton screens (if used) appropriate
- [ ] Progress indicators clear

### Success States
- [ ] Success messages styled
- [ ] Confirmation states clear
- [ ] Success feedback appropriate

---

## 14. Quality Checklist

### Visual Polish
- [ ] No visual bugs or glitches
- [ ] No misaligned elements
- [ ] No overlapping text
- [ ] No cut-off content
- [ ] Spacing feels intentional, not random
- [ ] Pixel-perfect implementation (where appropriate)

### Brand Integrity
- [ ] Design feels cohesive
- [ ] No off-brand elements
- [ ] Consistent brand experience
- [ ] Design builds trust and credibility
- [ ] Professional presentation throughout

### User Experience
- [ ] Visual design supports usability
- [ ] Clear visual feedback for interactions
- [ ] Intuitive visual hierarchy
- [ ] No confusing visual patterns
- [ ] Design doesn't obstruct content

---

## Documentation and Reporting

### Audit Report Sections
1. **Executive Summary**
   - Overall brand consistency assessment
   - Major issues found
   - Recommendations

2. **Brand Alignment**
   - How design supports brand strategy
   - Areas of strong alignment
   - Areas needing adjustment

3. **Design System Review**
   - Typography assessment
   - Colour system assessment
   - Spacing and layout review
   - Component consistency

4. **Responsive Design**
   - Mobile experience assessment
   - Tablet experience assessment
   - Desktop experience assessment
   - Responsive issues found

5. **Visual Hierarchy**
   - Information architecture assessment
   - Emphasis and focal points
   - Visual flow analysis

6. **Recommendations**
   - Priority visual fixes
   - Brand consistency improvements
   - Design system enhancements
   - Long-term visual strategy

### Update Documentation
- [ ] Update `.docs/design/styling-guide.md` with any changes
- [ ] Document new design patterns
- [ ] Update CSS variable documentation
- [ ] Create issue tickets for visual bugs
- [ ] Provide visual examples (screenshots, mockups)

---

## Testing Checklist Summary

**Quick Pass Criteria (Updated October 2025 - Corrected):**
- ✅ Brand colours used consistently (amber, stone, charcoal, black, white)
- ✅ Work Sans typography throughout (modern sans-serif only)
- ✅ Warm neutral palette creates human warmth
- ✅ "Hello 👋" logo consistent across ALL pages
- ✅ 96px section spacing maintained (desktop)
- ✅ Pill-shaped buttons with shimmer effect on primary
- ✅ 3px amber focus indicators on interactive elements
- ✅ 200ms animation transitions
- ✅ Responsive at 640px, 768px, 1024px breakpoints
- ✅ Hero section elevates "From Policy to Practice" tagline
- ✅ Case studies use section labels, results callouts, insight quotes
- ✅ Generative art system for project images (domain-coded patterns)
- ✅ Card hover effects include amber top accent
- ✅ Consistent component styling across all pages
- ✅ No visual bugs or alignment issues
- ✅ All design tokens defined in variables.css
- ✅ Smooth, purposeful animations
- ✅ Professional yet approachable—modern service design aesthetic
- ✅ Aligns with peer studios (IDEO, Future Friendly, Local Peoples, Folk)

---

## Resources

### Design Tools
- [Figma](https://www.figma.com/) - Design and prototyping
- [Adobe Color](https://color.adobe.com/) - Colour palette tools
- [Coolors](https://coolors.co/) - Colour scheme generator
- [Type Scale](https://type-scale.com/) - Typography scale calculator
- [Modular Scale](https://www.modularscale.com/) - Typographic scale

### Testing Tools
- Chrome DevTools (responsive testing)
- Firefox Developer Tools
- Safari Web Inspector
- [Responsively App](https://responsively.app/) - Responsive testing
- [BrowserStack](https://www.browserstack.com/) - Cross-browser testing

### References
- [Refactoring UI](https://www.refactoringui.com/) - Practical design patterns
- [Laws of UX](https://lawsofux.com/) - Design psychology
- [Material Design](https://material.io/design) - Design system reference

### Internal Documentation
- `.docs/design/styling-guide.md` - Complete design system
- `.docs/design/button-variants.md` - Button specifications
- `.docs/voice-and-tone-guide.md` - Brand voice guidelines

---

**Last Updated:** October 15, 2025  
**Version:** 1.0  
**Related:** Accessibility Specialist Audit, UX/UI Design Audit, Content Designer Audit


