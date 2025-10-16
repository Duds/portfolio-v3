# Generative Art System for Project Visuals

**Purpose:** Create consistent, code-generated project images without photography or illustration budget  
**Technology:** Vanilla JavaScript + SVG generation  
**Last Updated:** 15 October 2025

---

## Overview

The generative art system creates domain-coded visual patterns for project cards using vanilla JavaScript and SVG. Each project gets a unique but consistent pattern based on its domain type and project name.

**Benefits:**
- ✅ No photography or illustration costs
- ✅ Consistent visual language
- ✅ Reproducible (seed-based generation)
- ✅ Lightweight (inline SVG, no external files)
- ✅ Version controlled (code-based)
- ✅ Vanilla JavaScript (no dependencies)

---

## Domain-Coded Patterns

### Safety/Critical Domain
**Projects:** Antarctic Division, Holden Airbag  
**Pattern:** Grid-based, structured lines  
**Colours:** Cool greys/blues (#475569, #1E293B)  
**Visual Language:** Precision, structure, reliability  

**Usage:**
```html
<div class="card-image" data-gen-art="safety" data-project-name="antarctic"></div>
```

### Regulatory/Government Domain
**Projects:** ASIC, DCCEEW, Border Security  
**Pattern:** Layered rectangles, document-inspired  
**Colours:** Warm browns/charcoal (#8B7355, #5C4A3A)  
**Visual Language:** Frameworks, structure, layers

**Usage:**
```html
<div class="card-image" data-gen-art="regulatory" data-project-name="asic"></div>
```

### Social/Community Domain
**Projects:** University, Icon Water, MDBA  
**Pattern:** Organic curves, flowing lines  
**Colours:** Earth tones/warm greens (#D4A574, #A67C52)  
**Visual Language:** Fluidity, human connection, natural

**Usage:**
```html
<div class="card-image" data-gen-art="social" data-project-name="university"></div>
```

### Education/Research Domain
**Projects:** University projects  
**Pattern:** Geometric + organic mix (circles, rounded rectangles)  
**Colours:** Green-greys (#7C9885, #516857)  
**Visual Language:** Knowledge, growth, exploration

**Usage:**
```html
<div class="card-image" data-gen-art="education" data-project-name="ucanberra"></div>
```

---

## Implementation

### Step 1: Add Script to HTML

Include generative art script in your HTML pages:

```html
<script src="../js/generative-art.js"></script>
```

### Step 2: Mark Placeholders

Add data attributes to project card images:

```html
<div class="card">
  <div class="card-image" 
       data-gen-art="safety" 
       data-project-name="antarctic"
       style="height: 200px;"></div>
  <!-- rest of card content -->
</div>
```

### Step 3: Initialize

Script automatically runs on `DOMContentLoaded` and generates SVG for all elements with `data-gen-art` attribute.

---

## Technical Details

### Seeded Random Generation

Uses a seeded pseudo-random number generator to ensure consistent patterns:

```javascript
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }
  
  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}
```

**Seed Calculation:**
- Derived from project name (character codes)
- Same project name always generates same pattern
- Different names create visual variation

### Pattern Generation Functions

**Safety Pattern:**
- Grid-based layout
- Random cell activation (>60% threshold)
- Variable opacity for depth
- Structured, precise aesthetic

**Regulatory Pattern:**
- 8-16 layered rectangles
- Random positioning and sizing
- Document-inspired (horizontal emphasis)
- Subtle rounded corners (4px)

**Social Pattern:**
- 3-8 flowing curves
- Quadratic bezier curves
- Wide strokes (20-80px)
- Organic, natural feel

**Education Pattern:**
- Mixed circles and rounded rectangles
- 6-12 shapes per pattern
- Balance geometric and organic
- Knowledge/growth metaphor

---

## Usage Examples

### In Portfolio Cards (index.html, portfolio.html)

**Before (Static Gradient):**
```html
<div class="card-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 200px;"></div>
```

**After (Generative Art):**
```html
<div class="card-image" data-gen-art="safety" data-project-name="antarctic" style="height: 200px;"></div>
```

### Project Domain Mapping

| Project | Domain | Project Name |
|---------|--------|--------------|
| Antarctic Division | safety | antarctic |
| Holden Airbag | safety | holden |
| ASIC | regulatory | asic |
| DCCEEW | regulatory | dcceew |
| Border Security | regulatory | border |
| University Digital Agility | education | uc-digital |
| University Travel | education | uc-travel |
| Icon Water | social | iconwater |
| MDBA | social | mdba |
| Rio Tinto | regulatory | riotinto |

---

## Customization

### Adjusting Patterns

Edit `/js/generative-art.js`:

**Change colours:**
```javascript
svg += `<rect width="${width}" height="${height}" fill="#YOUR_COLOR"/>`;
```

**Adjust density:**
```javascript
if (rng.next() > 0.6) { // Change threshold (0.6 = 40% density)
```

**Modify sizes:**
```javascript
const gridSize = 20 + Math.floor(rng.next() * 30); // Min 20, max 50
```

### Creating New Patterns

Add new pattern function:

```javascript
function generateCustomPattern(seed, width, height) {
  const rng = new SeededRandom(seed);
  let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
  // ... your pattern logic
  svg += `</svg>`;
  return svg;
}
```

Update generator:
```javascript
case 'custom':
  return generateCustomPattern(seed, width, height);
```

---

## Performance

### Characteristics
- **Generation Time:** <10ms per image (client-side)
- **File Size:** 2-5KB per SVG (inline, no HTTP request)
- **DOM Operations:** Minimal (one innerHTML per placeholder)
- **Responsive:** SVG scales infinitely

### Optimization
- Patterns generated once on page load
- No animation/interaction overhead
- Can be pre-generated and cached if needed
- SVG compression available if size becomes issue

---

## Export for Static Use (Optional)

If you want to pre-generate and save SVG files:

```javascript
// In browser console:
const svg = generateProjectImage('safety', 'antarctic', 800, 600);
console.log(svg);
// Copy and save to file
```

Or create a build script:
```javascript
const fs = require('fs');
const { generateProjectImage } = require('./js/generative-art.js');

const svg = generateProjectImage('safety', 'antarctic', 800, 600);
fs.writeFileSync('assets/images/antarctic.svg', svg);
```

---

## Maintenance

### Adding New Projects

1. Determine domain (safety, regulatory, social, education)
2. Choose unique project name (lowercase, no spaces)
3. Add data attributes to card image div
4. Pattern generates automatically

### Updating Patterns

1. Edit pattern function in `/js/generative-art.js`
2. Refresh page to see changes
3. Same seed = same pattern (consistent)

### Testing Patterns

Open browser console:
```javascript
// Test safety pattern
console.log(generateProjectImage('safety', 'test', 500, 300));

// Test with different seeds
console.log(generateProjectImage('social', 'project1', 500, 300));
console.log(generateProjectImage('social', 'project2', 500, 300));
```

---

## Visual Language Guide

### Safety/Critical (Grid-based)
- **Metaphor:** Structure, precision, reliability
- **Feel:** Technical, methodical, trustworthy
- **Use For:** Life-safety projects, critical systems, high-stakes environments

### Regulatory/Government (Layered rectangles)
- **Metaphor:** Documents, frameworks, layers of governance
- **Feel:** Structured, organized, methodical
- **Use For:** Policy translation, regulatory frameworks, governance models

### Social/Community (Organic curves)
- **Metaphor:** Flow, connection, human systems
- **Feel:** Warm, natural, adaptive
- **Use For:** Community services, change management, human-centered projects

### Education/Research (Mixed geometric/organic)
- **Metaphor:** Knowledge, growth, exploration
- **Feel:** Balanced, thoughtful, expansive
- **Use For:** University projects, research translation, learning systems

---

## Troubleshooting

### Pattern Doesn't Generate
- Check `data-gen-art` attribute is present
- Verify script is loaded (`<script src="js/generative-art.js"></script>`)
- Check browser console for errors
- Ensure element has height set

### Pattern Looks Wrong
- Verify domain name spelling (safety, regulatory, social, education)
- Check project name is consistent
- Try different project name for variation

### Performance Issues
- Reduce number of shapes in pattern functions
- Simplify curves (fewer control points)
- Consider pre-generating SVGs as static files

---

## Future Enhancements (Optional)

### Animation
Add subtle motion to patterns:
- Fade in on scroll
- Gentle rotation/scale on hover
- Particle movement

### Texture
Add noise/grain overlay:
```html
<filter id="noise">
  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
</filter>
```

### Interactivity
- Regenerate pattern on hover (different seed)
- Interactive parameters (user can adjust)
- Download generated SVG

---

## Related Documentation

- **Art Director Review:** `/.docs/design/ART_DIRECTOR_PORTFOLIO_REVIEW.md`
- **Implementation Guide:** `/.docs/design/IMPLEMENTATION_SUMMARY.md`
- **Technology Stack:** `/.cursor/rules/technology-stack.mdc`

---

**Last Updated:** 15 October 2025  
**Status:** Production-ready  
**Technology:** Vanilla JavaScript + SVG


