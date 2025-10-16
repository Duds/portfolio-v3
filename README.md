# Strategic & Service Design Portfolio

A professional portfolio website for a Strategic and Service Design practice, built with vanilla HTML, CSS, and JavaScript. Features a pragmatic, minimal aesthetic with Work Sans typography, yellow accent colours, and spacious layout optimised for showcasing expertise and generating consulting enquiries.

## Overview

This portfolio website demonstrates strategic and service design capabilities through a clean, accessible, and professional presentation. Built with modern web standards and WCAG 2.1 Level AA accessibility compliance.

## Project Structure

```
portfolio-v3/
├── .docs/                                  # Documentation
│   ├── design/
│   │   ├── styling-guide.md                # Complete styling system reference
│   │   ├── styling-design-questionnaire.md # Design requirements
│   │   └── accessibility-review.md         # WCAG AA compliance audit
│   └── project/
│       └── IMPLEMENTATION_SUMMARY.md       # Implementation documentation
├── .cursor/                                # Development commands
│   └── commands/
│       ├── code-review-checklist.md
│       ├── security-audit.md
│       └── setup-new-feature.md
├── assets/
│   └── images/                             # Image assets (ready for content)
├── css/
│   ├── variables.css                       # CSS custom properties
│   ├── reset.css                           # Modern CSS reset
│   ├── typography.css                      # Work Sans typography system
│   ├── components.css                      # Reusable UI components
│   └── styles.css                          # Main stylesheet (imports)
├── js/
│   └── main.js                             # JavaScript functionality
├── index.html                              # Main landing page
└── README.md                               # This file
```

## Features

### Design System
- **Colour Palette**: Black, white, grey scale with yellow (#FFD700) accent
- **Typography**: Work Sans font family (weights: 300-700)
- **Layout**: Spacious design with 96px section spacing
- **Components**: Buttons (pill-shaped), forms, cards, navigation
- **Responsive**: Mobile-first with breakpoints at 640px, 768px, 1024px, 1280px

### Landing Page Sections
1. **Hero Section** - Value proposition with dual CTAs
2. **Service Offerings** - 3 key service areas
3. **Featured Work** - Case study showcases
4. **Approach/Methodology** - 4-phase design process
5. **Client Testimonials** - Social proof
6. **About** - Practice background and expertise
7. **Contact Form** - Client enquiry form with validation

### Accessibility Features
- ✅ WCAG 2.1 Level AA compliant
- ✅ Full keyboard navigation
- ✅ Screen reader optimised with ARIA labels
- ✅ Skip navigation link
- ✅ Visible focus indicators (3px yellow outline)
- ✅ Semantic HTML5 structure
- ✅ Reduced motion support
- ✅ Responsive touch targets (44x44px minimum)

### Interactive Features
- Smooth scrolling navigation
- Active navigation state tracking
- Mobile-responsive hamburger menu
- Form validation with user feedback
- Hover effects on cards and buttons
- Minimal animations (200ms transitions)

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge - latest 2 versions)
- Text editor for customisation
- Optional: Local development server

### Quick Start

1. **Clone or download this repository**

2. **View the site**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **For development with live reload**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Navigate to** `http://localhost:8000`

## Customisation

### Update Content

Edit `index.html` to customise:
- Hero headline and subheading
- Service offerings descriptions
- Case studies and project details
- About section copy
- Testimonials
- Contact form fields

### Modify Styling

All styling is controlled through CSS custom properties in `css/variables.css`:

```css
/* Example: Change accent colour */
--color-yellow: #FFD700;  /* Update to your brand colour */

/* Example: Adjust spacing */
--space-3xl: 6rem;  /* Section spacing */
```

See `.docs/design/styling-guide.md` for complete styling system documentation.

### Extend Functionality

JavaScript features are in `js/main.js`:
- `initNavigation()` - Smooth scrolling
- `initMobileMenu()` - Mobile menu toggle
- `initActiveNavStates()` - Scroll-based active states
- `initFormHandling()` - Form validation

## Documentation

Comprehensive documentation is available in the `.docs/` directory:

- **`design/styling-guide.md`** - Complete design system reference
- **`design/accessibility-review.md`** - WCAG AA compliance documentation
- **`project/IMPLEMENTATION_SUMMARY.md`** - Implementation details and guidelines
- **`design/styling-design-questionnaire.md`** - Original design requirements

## Development Guidelines

### Code Quality
- Follow semantic HTML5 best practices
- Use Australian English spelling
- Maintain WCAG AA accessibility standards
- Keep CSS organised with clear comments
- Write clean, modular JavaScript
- Test across browsers and devices

### Before Deployment
- [ ] Replace placeholder text with real content
- [ ] Add professional photography
- [ ] Write compelling case studies
- [ ] Test contact form submission
- [ ] Minify CSS and JavaScript
- [ ] Optimize images (WebP with fallbacks)
- [ ] Test with screen readers
- [ ] Verify mobile responsiveness
- [ ] Check colour contrast with final images
- [ ] Add analytics tracking

See `.docs/project/IMPLEMENTATION_SUMMARY.md` for complete deployment checklist.

## Browser Support

### Minimum Versions
- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions

### CSS Features Used
- CSS Custom Properties (variables)
- CSS Grid
- Flexbox
- CSS Transitions
- Focus-visible pseudo-class

## Performance

### Optimizations Implemented
- Preconnect to Google Fonts
- Font display: swap (prevents invisible text)
- Minimal CSS imports (4 files)
- Single JavaScript file
- No external dependencies (except fonts)

### Recommended Production Optimizations
- Minify CSS and JavaScript
- Optimize and lazy-load images
- Implement critical CSS inlining
- Consider self-hosting fonts

## Accessibility

This portfolio is built to WCAG 2.1 Level AA standards:

- Full keyboard navigation support
- Screen reader compatible with ARIA labels
- High contrast colour ratios (exceed AA requirements)
- Semantic HTML structure
- Reduced motion preferences respected

For detailed accessibility audit, see `.docs/design/accessibility-review.md`

## Future Enhancements

### High Priority
- Add real project content and photography
- Connect contact form to backend service
- Implement analytics tracking
- Create individual case study pages

### Medium Priority
- Add blog/insights section for thought leadership
- Implement newsletter signup
- Add FAQ section
- Include client logos and certifications

### Low Priority
- Add dark mode toggle
- Implement scroll-triggered animations
- Add multi-language support
- Create interactive process visualization

See `.docs/project/IMPLEMENTATION_SUMMARY.md` for detailed enhancement roadmap.

## Licence

All rights reserved.

## Contact

Use the contact form on the website to get in touch regarding strategic and service design enquiries.

---

**Version**: 1.0.0  
**Last Updated**: 14/10/2025  
**Built With**: HTML5, CSS3, JavaScript (ES6+)
