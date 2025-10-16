# Button Component Variants

## Overview
Complete reference for all button variants in the portfolio, including light and dark section variations.

---

## Light Section Buttons

### Primary Button (Yellow)
**Class**: `.btn .btn-primary`  
**Usage**: Main call-to-action on light backgrounds

**Default State**:
- Background: Yellow (#FFD700)
- Text: Black (#000000)
- Border: None
- Border radius: 9999px (pill shape)

**Hover State**:
- Transform: translateY(-2px) (lift effect)
- Shadow: 0 4px 12px rgba(255, 215, 0, 0.3) (yellow glow)

**Example**:
```html
<a href="#contact" class="btn btn-primary">Contact Us</a>
```

---

### Secondary Button (Black Outlined)
**Class**: `.btn .btn-secondary`  
**Usage**: Secondary actions on light backgrounds

**Default State**:
- Background: Transparent
- Text: Black (#000000)
- Border: 2px solid Black
- Border radius: 9999px (pill shape)

**Hover State**:
- Background: Black (#000000)
- Text: White (#FFFFFF)

**Example**:
```html
<a href="#about" class="btn btn-secondary">Learn More</a>
```

---

## Dark Section Buttons

### Primary Dark Button (Yellow)
**Class**: `.btn .btn-primary-dark`  
**Usage**: Main call-to-action on dark backgrounds

**Default State**:
- Background: Yellow (#FFD700)
- Text: Black (#000000)
- Border: None
- Border radius: 9999px (pill shape)

**Hover State**:
- Transform: translateY(-2px) (lift effect)
- Shadow: 0 4px 12px rgba(255, 215, 0, 0.3) (yellow glow)

**Example**:
```html
<a href="#contact" class="btn btn-primary-dark">Start a Conversation</a>
```

**Note**: Identical to `.btn-primary` but semantically named for dark sections.

---

### Secondary Dark Button (White Outlined)
**Class**: `.btn .btn-secondary-dark`  
**Usage**: Secondary actions on dark backgrounds

**Default State**:
- Background: Transparent
- Text: White (#FFFFFF)
- Border: 2px solid White
- Border radius: 9999px (pill shape)

**Hover State**:
- Background: White (#FFFFFF)
- Text: Black (#000000)

**Example**:
```html
<a href="#about" class="btn btn-secondary-dark">Learn About Us</a>
```

---

### Tertiary Dark Button (Yellow Outlined)
**Class**: `.btn .btn-tertiary-dark`  
**Usage**: Tertiary/alternative actions on dark backgrounds

**Default State**:
- Background: Transparent
- Text: Yellow (#FFD700)
- Border: 2px solid Yellow
- Border radius: 9999px (pill shape)

**Hover State**:
- Background: Yellow (#FFD700)
- Text: Black (#000000)

**Example**:
```html
<a href="#services" class="btn btn-tertiary-dark">View Services</a>
```

---

## Button Sizes

All button variants support three size modifiers:

### Small
**Class**: `.btn-small`  
**Specs**:
- Font size: 0.875rem (14px)
- Padding: 0.5rem 1.5rem (8px 24px)

**Example**:
```html
<a href="#" class="btn btn-primary btn-small">Small Button</a>
```

---

### Medium (Default)
**Class**: None required (default size)  
**Specs**:
- Font size: 1rem (16px)
- Padding: 0.75rem 2rem (12px 32px)

**Example**:
```html
<a href="#" class="btn btn-primary">Default Button</a>
```

---

### Large
**Class**: `.btn-large`  
**Specs**:
- Font size: 1.125rem (18px)
- Padding: 1rem 2.5rem (16px 40px)

**Example**:
```html
<a href="#" class="btn btn-primary btn-large">Large Button</a>
```

---

## Additional Modifiers

### Full Width Button
**Class**: `.btn-full`  
**Usage**: Makes button 100% width of container (useful for mobile)

**Example**:
```html
<button type="submit" class="btn btn-primary btn-large btn-full">Send Message</button>
```

---

### Disabled State
**Class**: `.disabled` or `disabled` attribute  
**Usage**: Indicates button is not interactive

**Visual State**:
- Opacity: 0.6
- Cursor: not-allowed
- No hover effects

**Example**:
```html
<button class="btn btn-primary" disabled>Disabled Button</button>
<a href="#" class="btn btn-primary disabled">Disabled Link</a>
```

---

## Usage Guidelines

### When to Use Each Variant

#### Light Sections
- **Primary**: Main conversion action (Contact, Sign Up, Buy Now)
- **Secondary**: Supporting actions (Learn More, View Details, Read More)

#### Dark Sections
- **Primary Dark**: Main conversion action on dark backgrounds (Hero CTAs)
- **Secondary Dark**: High-contrast alternative action (white outline stands out)
- **Tertiary Dark**: Branded alternative action (yellow outline, less prominent than secondary)

### Button Hierarchy
1. **One primary** per section (maximum)
2. **One or two secondary/tertiary** for alternative actions
3. Use button sizes to emphasise importance

### Accessibility
- All buttons maintain WCAG AA contrast ratios
- Yellow on black: 10.4:1 (exceeds AAA)
- White on black: 21:1 (maximum)
- Black on yellow: 10.4:1 (exceeds AAA)

### Examples by Section

#### Hero Section (Dark)
```html
<div class="hero-cta">
  <a href="#contact" class="btn btn-primary-dark btn-large">Start a Conversation</a>
  <a href="#about" class="btn btn-secondary-dark btn-large">Learn About Us</a>
</div>
```

#### Services Section (Light)
```html
<div class="card-service">
  <h3>Strategic Design</h3>
  <p>Description...</p>
  <a href="#contact" class="btn btn-primary">Get Started</a>
</div>
```

#### Contact Form (Light)
```html
<form>
  <!-- form fields -->
  <button type="submit" class="btn btn-primary btn-large btn-full">Send Message</button>
</form>
```

---

## CSS Reference

### Base Button Class
```css
.btn {
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 200ms ease;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  line-height: 1.5;
}
```

### All Variants
- `.btn-primary` - Yellow fill, black text
- `.btn-secondary` - Black outline, transparent bg
- `.btn-primary-dark` - Yellow fill, black text (for dark bg)
- `.btn-secondary-dark` - White outline, transparent bg
- `.btn-tertiary-dark` - Yellow outline, transparent bg

### Size Modifiers
- `.btn-small` - Smaller padding and font
- `.btn-large` - Larger padding and font
- `.btn-full` - Full width

### State Modifiers
- `.disabled` or `disabled` - Disabled state

---

**Last Updated**: 14/10/2025  
**Version**: 1.1.0

