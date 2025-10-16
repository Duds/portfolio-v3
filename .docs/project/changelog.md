# Changelog

All notable changes to the portfolio project will be documented in this file.

## [1.1.0] - 14/10/2025

### Changed - Header & Hero Section Redesign

#### Header
- Changed header background from white to black with background image support
- Updated navigation text from black to white
- Removed bottom border, replaced with semi-transparent overlay
- Header now uses same background image as hero section
- Mobile menu updated to black background with white text

#### Hero Section
- Changed hero from 70vh to 100vh (full viewport height)
- Changed alignment from center to left for all content
- Updated hero background to black with gradient overlay
- Gradient overlay: 80% opacity (left) to 40% opacity (right)
- Hero title colour changed to white
- Hero subtitle colour changed to white with 90% opacity
- Updated CTA button layout from centered to left-aligned flex row
- Fixed secondary button link: now points to #about instead of #work
- Changed button text from "View Our Work" to "Learn About Us"

#### Button Variants
- Created `.btn-primary-dark` - Yellow button for dark backgrounds (same as default primary)
- Created `.btn-secondary-dark` - White outlined button that fills white on hover
- Created `.btn-tertiary-dark` - Yellow outlined button that fills yellow on hover
- Applied dark button variants to hero CTAs

#### Background Image
- Added support for `hero-background.jpg` in `/assets/images/`
- Image requirements documented in `/assets/images/README.md`
- Recommended scenes: City skyline at night, night sky with stars, dark ocean at dusk, or abstract dark gradient

### Files Modified
- `css/components.css` - Header, hero, navigation, and button styling
- `index.html` - Hero section structure and button classes
- `assets/images/README.md` - New file with image requirements

### Notes
- Background image file needs to be added by user
- Until image is added, sections will show black background
- All changes maintain WCAG AA accessibility compliance
- White text on dark background maintains contrast ratio > 15:1

---

## [1.0.0] - 14/10/2025

### Added - Initial Portfolio Release

#### Design System
- Complete CSS architecture with variables, reset, typography, and components
- Work Sans typography system with 5 font weights
- Colour palette: Black, white, grey scale, yellow (#FFD700) accent
- Spacious layout with 8px base spacing unit
- Responsive breakpoints at 640px, 768px, 1024px, 1280px

#### Landing Page Sections
1. Hero section with value proposition and dual CTAs
2. Service offerings with 3 service cards
3. Featured work with 2 case study cards
4. Approach/methodology with 4-phase process
5. Client testimonials with 2 testimonial cards
6. About section with practice background
7. Contact form with validation

#### Components
- Pill-shaped buttons (primary yellow, secondary outlined)
- Outlined form inputs with yellow focus states
- Card components with hover effects
- Sticky navigation with active state tracking
- Mobile hamburger menu with smooth transitions

#### Accessibility
- WCAG 2.1 Level AA compliant
- Full keyboard navigation support
- Screen reader optimised with ARIA labels
- Skip navigation link
- Visible focus indicators (3px yellow outline)
- Semantic HTML5 structure
- Reduced motion support

#### Interactive Features
- Smooth scrolling navigation
- Active navigation state based on scroll position
- Mobile menu with click-outside and Escape key support
- Form validation with error/success messages
- Card and button hover effects

#### Documentation
- Complete styling guide (`styling-guide.md`)
- Accessibility review (`accessibility-review.md`)
- Implementation summary (`implementation-summary.md`)
- Design questionnaire (`styling-design-questionnaire.md`)
- Comprehensive README.md

#### Files Created
- CSS: variables.css, reset.css, typography.css, components.css, styles.css
- HTML: index.html
- JavaScript: main.js
- Documentation: 4 files in .docs/
- Project: README.md

---

## Format
Changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.

Version numbering uses [Semantic Versioning](https://semver.org/):
- MAJOR version for incompatible changes
- MINOR version for new functionality (backwards compatible)
- PATCH version for backwards compatible bug fixes

