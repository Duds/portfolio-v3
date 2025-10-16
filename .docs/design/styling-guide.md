# Portfolio V3 - Styling Guide

## Overview
This document outlines the complete styling system for the portfolio website, ensuring a consistent and professional visual identity.

---

## Brand Identity

### Brand Personality
**Pragmatic** - The design emphasises clarity, functionality, and practical solutions over unnecessary embellishment.

### Target Audience
- Clients seeking professional web development services
- Potential employers evaluating technical and design skills

### Design Principles
- Clear and direct communication
- Functional and purposeful design choices
- Professional yet approachable aesthetic
- Focus on content and usability

---

## Colour Palette

### Primary Colours
```css
--color-black: #000000;
--color-white: #FFFFFF;
--color-grey-light: #F5F5F5;
--color-grey: #808080;
--color-grey-dark: #333333;
--color-yellow: #FFD700; /* Primary accent colour */
```

### Colour Usage Guidelines

#### Yellow (Primary Accent)
- Call-to-action buttons
- Important highlights
- Active states
- Focus indicators
- Key headings or emphasis

#### Black
- Primary text colour
- Headings
- Borders (when strong definition needed)

#### Grey Scale
- Body text (#333333 for readability)
- Subtle borders
- Disabled states
- Secondary information
- Background variations

#### White
- Primary background colour
- Card backgrounds
- Button text on dark backgrounds

### Colour Applications
| Element | Colour | Usage |
|---------|--------|-------|
| Body Background | White | Main background |
| Primary Text | Grey Dark (#333333) | Body copy |
| Headings | Black | All heading levels |
| Primary Buttons | Yellow | Main CTAs |
| Links | Yellow | Hover state |
| Borders | Grey Light | Subtle separators |

---

## Typography

### Font Family
**Work Sans** - A clean, modern sans-serif font that conveys professionalism and clarity.

```css
font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Loading
Load Work Sans from Google Fonts with weights: 300, 400, 500, 600, 700

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Typography Scale

```css
/* Headings */
--font-size-h1: 3.5rem;    /* 56px */
--font-size-h2: 2.5rem;    /* 40px */
--font-size-h3: 2rem;      /* 32px */
--font-size-h4: 1.5rem;    /* 24px */
--font-size-h5: 1.25rem;   /* 20px */
--font-size-h6: 1rem;      /* 16px */

/* Body */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-xs: 0.75rem;   /* 12px */
```

### Font Weights
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Height
```css
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.8;
```

**Usage:**
- Headings: `line-height: 1.2` (tight)
- Body text: `line-height: 1.8` (relaxed for spacious feel)
- UI elements: `line-height: 1.5` (normal)

### Text Styles

#### Headings
- Font family: Work Sans
- Font weight: 700 (bold)
- Colour: Black
- Line height: 1.2

#### Body Text
- Font family: Work Sans
- Font weight: 400 (regular)
- Font size: 16px
- Colour: Grey Dark (#333333)
- Line height: 1.8

#### Links
- Font weight: 500 (medium)
- Colour: Grey Dark (default), Yellow (hover)
- Text decoration: none (default), underline (hover)
- Transition: color 200ms ease

#### Emphasis
- Bold: font-weight 600 (semibold)
- Important: colour yellow
- Subtle: colour grey

---

## Spacing System

### Spacing Scale
Following a spacious layout principle with an 8px base unit:

```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
--space-4xl: 8rem;    /* 128px */
```

### Spacing Guidelines

#### Vertical Rhythm
- Between sections: `--space-3xl` (96px)
- Between subsections: `--space-2xl` (64px)
- Between components: `--space-xl` (48px)
- Between related elements: `--space-lg` (32px)
- Between text elements: `--space-md` (24px)

#### Component Padding
- Large cards: `--space-xl` (48px)
- Medium cards: `--space-lg` (32px)
- Buttons: `--space-md` horizontal, `--space-sm` vertical
- Small components: `--space-sm` (16px)

### Layout Structure

#### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
```

#### Grid
Use CSS Grid with generous gaps:
```css
.grid {
  display: grid;
  gap: var(--space-xl); /* 48px */
}
```

#### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

**Approach:** Mobile-first responsive design

---

## Components

### Buttons

#### Primary Button (Yellow)
```css
.btn-primary {
  background-color: var(--color-yellow);
  color: var(--color-black);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 9999px; /* Fully rounded pill shape */
  cursor: pointer;
  transition: all 200ms ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button (Outlined)
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-black);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border: 2px solid var(--color-black);
  border-radius: 9999px;
  cursor: pointer;
  transition: all 200ms ease;
}

.btn-secondary:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}
```

#### Button Sizes
- Small: `padding: 0.5rem 1.5rem; font-size: 0.875rem;`
- Medium (default): `padding: 0.75rem 2rem; font-size: 1rem;`
- Large: `padding: 1rem 2.5rem; font-size: 1.125rem;`

### Forms

#### Input Fields (Outlined)
```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: 'Work Sans', sans-serif;
  font-size: 1rem;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 2px solid var(--color-grey);
  border-radius: 0.5rem;
  transition: border-color 200ms ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-yellow);
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.input::placeholder {
  color: var(--color-grey);
}
```

#### Labels
```css
.label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: var(--color-black);
}
```

#### Error Messages
```css
.error-message {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #DC2626; /* Red for errors */
}
```

### Cards

```css
.card {
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: 1rem;
  padding: var(--space-xl);
  transition: all 200ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}
```

### Navigation

#### Header Navigation
```css
.nav {
  display: flex;
  gap: var(--space-lg);
  align-items: center;
}

.nav-link {
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-black);
  text-decoration: none;
  transition: color 200ms ease;
  position: relative;
}

.nav-link:hover {
  color: var(--color-yellow);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-yellow);
}
```

---

## Visual Effects

### Shadows
**Minimal and functional** - Use shadows sparingly for depth and hierarchy.

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.08);
```

**Usage:**
- Cards at rest: `--shadow-sm`
- Cards on hover: `--shadow-lg`
- Dropdowns/modals: `--shadow-lg`
- Buttons (subtle): No shadow at rest, minimal shadow on hover

### Borders

```css
--border-width: 1px;
--border-width-thick: 2px;
--border-color: var(--color-grey-light);
--border-color-dark: var(--color-grey);
```

**Border Radius:**
- Buttons: `border-radius: 9999px` (pill shape)
- Cards: `border-radius: 1rem` (16px)
- Inputs: `border-radius: 0.5rem` (8px)
- Small elements: `border-radius: 0.375rem` (6px)

### Animations & Transitions

**Minimal approach** - Use animations for feedback, not decoration.

```css
--transition-fast: 150ms ease;
--transition-normal: 200ms ease;
--transition-slow: 300ms ease;
```

**Allowed Animations:**
- Hover states (transform, colour)
- Focus indicators
- Loading states
- Page transitions (fade)
- Smooth scroll

**Avoid:**
- Excessive motion
- Distracting animations
- Auto-playing animations
- Complex keyframe animations

### Icons

**Style:** Outlined (consistent with minimal aesthetic)

**Recommended Library:** Heroicons or Feather Icons

**Sizes:**
```css
--icon-sm: 1rem;    /* 16px */
--icon-md: 1.5rem;  /* 24px */
--icon-lg: 2rem;    /* 32px */
--icon-xl: 3rem;    /* 48px */
```

**Colour:** Inherit text colour, yellow on hover/active for interactive icons

---

## Accessibility

### WCAG Compliance
**Target:** WCAG 2.1 Level AA

### Colour Contrast
- Black text on white: 21:1 (Excellent)
- Dark grey (#333333) text on white: 12.6:1 (Excellent)
- Yellow (#FFD700) with black text: 10.4:1 (Excellent)

### Focus Indicators
All interactive elements must have clear focus states:
```css
:focus-visible {
  outline: 3px solid var(--color-yellow);
  outline-offset: 2px;
}
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Logical tab order
- Skip navigation links for screen readers

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`)
- Proper ARIA labels where needed

---

## Browser Support

### Minimum Versions
- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions

### CSS Features
- **CSS Grid:** Yes, full support
- **Flexbox:** Yes, full support
- **CSS Custom Properties:** Yes, required
- **CSS Transforms:** Yes
- **CSS Transitions:** Yes

### Fallbacks
Not required for modern browsers, but ensure graceful degradation for:
- Older browsers show readable content without advanced styles
- Images have alt text
- Forms remain functional

---

## Performance

### CSS Strategy
**Traditional CSS** with custom properties (CSS variables)

**File Structure:**
```
css/
  ├── reset.css         /* CSS reset */
  ├── variables.css     /* CSS custom properties */
  ├── typography.css    /* Font styles */
  ├── components.css    /* Component styles */
  └── styles.css        /* Main stylesheet (imports others) */
```

### Font Loading
```css
@font-face {
  font-family: 'Work Sans';
  font-display: swap; /* Prevent invisible text during load */
  src: url(...);
}
```

### Image Optimization
- Use modern formats (WebP with JPG fallback)
- Lazy load images below the fold
- Responsive images with srcset

### CSS Optimization
- Minify CSS for production
- Remove unused CSS
- Critical CSS inline for above-the-fold content

---

## Implementation Checklist

- [ ] Load Work Sans font from Google Fonts
- [ ] Create CSS variables file with colour palette
- [ ] Set up spacing system with CSS custom properties
- [ ] Implement typography scale
- [ ] Create button component styles (pill-shaped)
- [ ] Style form inputs with outlined style
- [ ] Design card components with subtle borders
- [ ] Build navigation with active state indicators
- [ ] Add minimal hover animations
- [ ] Ensure WCAG AA colour contrast
- [ ] Test keyboard navigation
- [ ] Add focus indicators
- [ ] Optimise font loading strategy
- [ ] Test responsive design on all breakpoints
- [ ] Verify cross-browser compatibility

---

## Quick Reference

### Colour Variables
```css
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-grey-light: #F5F5F5;
  --color-grey: #808080;
  --color-grey-dark: #333333;
  --color-yellow: #FFD700;
}
```

### Spacing Variables
```css
:root {
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --space-4xl: 8rem;
}
```

### Typography Variables
```css
:root {
  --font-family: 'Work Sans', sans-serif;
  --font-size-base: 1rem;
  --line-height-body: 1.8;
  --line-height-heading: 1.2;
}
```

---

**Last Updated:** 14/10/2025  
**Version:** 1.0.0

