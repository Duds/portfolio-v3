# Accessibility Specialist Audit

## Purpose
Ensures the portfolio website meets inclusivity and compliance standards for WCAG 2.1 Level AA and Australian Disability Discrimination Act (DDA) requirements. This audit focuses on screen reader compatibility, semantic markup, and inclusive interaction patterns.

## Pre-Audit Setup

- [ ] Install screen readers for testing:
  - NVDA (Windows) or JAWS
  - VoiceOver (macOS/iOS)
  - TalkBack (Android)
- [ ] Install browser extensions:
  - axe DevTools
  - WAVE Evaluation Tool
  - Accessibility Insights for Web
- [ ] Review existing documentation:
  - `.docs/design/accessibility-review.md`
  - WCAG 2.1 Level AA guidelines

---

## 1. Semantic HTML Structure

### Document Structure
- [ ] Verify single `<h1>` per page with clear page title
- [ ] Check heading hierarchy flows logically (no skipped levels)
- [ ] Confirm landmark regions use semantic HTML5 elements:
  - `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- [ ] Verify no presentational markup (`<b>`, `<i>`, `<center>`, etc.)
- [ ] Check lists use proper `<ul>`, `<ol>`, `<li>` structure
- [ ] Confirm data tables use `<table>`, `<th>`, `<td>` with appropriate scope

### Links and Navigation
- [ ] All links have descriptive text (no "click here" or "read more")
- [ ] Links opening new windows/tabs indicate so in text or ARIA label
- [ ] Skip navigation link present and functional
- [ ] Navigation landmarks properly labeled with `aria-label`
- [ ] Breadcrumbs use `nav` element with `aria-label="breadcrumb"`

### Forms
- [ ] All form inputs have associated `<label>` elements
- [ ] Labels use `for` attribute matching input `id`
- [ ] Required fields indicated with `required` attribute and visible indicator
- [ ] Error messages associated with inputs via `aria-describedby`
- [ ] Fieldsets group related inputs with descriptive `<legend>`
- [ ] Form validation provides clear, helpful error messages

### Images and Media
- [ ] All images have appropriate `alt` text:
  - Descriptive for informative images
  - Empty (`alt=""`) for decorative images
- [ ] Complex images (charts, diagrams) have long descriptions via `aria-describedby`
- [ ] Icon buttons have `aria-label` or visible text labels
- [ ] Video/audio has captions and transcripts
- [ ] No images of text (use actual text with CSS styling)

---

## 2. Screen Reader Testing

### VoiceOver (macOS)
- [ ] Enable VoiceOver (⌘ + F5)
- [ ] Navigate page using VO + arrow keys
- [ ] Test rotor navigation (VO + U) for headings, links, landmarks
- [ ] Verify all interactive elements are announced correctly
- [ ] Check form labels and error messages are read properly
- [ ] Test button states and purposes are clear

### NVDA (Windows)
- [ ] Enable NVDA
- [ ] Navigate by headings (H key)
- [ ] Navigate by landmarks (D key)
- [ ] Navigate by links (K key)
- [ ] Navigate by form fields (F key)
- [ ] Test browse mode vs. focus mode transitions
- [ ] Verify ARIA live regions announce updates

### General Screen Reader Checks
- [ ] Page title (`<title>`) is descriptive and unique
- [ ] Language attribute set on `<html lang="en-AU">`
- [ ] Reading order matches visual order
- [ ] Hidden content is properly hidden from screen readers
- [ ] Dynamic content updates are announced (ARIA live regions)
- [ ] Modal dialogs trap focus and have proper labels
- [ ] Loading states are announced to screen readers

---

## 3. Keyboard Navigation

### Navigation Flow
- [ ] All interactive elements reachable via Tab key
- [ ] Tab order follows logical visual flow
- [ ] Shift + Tab navigates backwards correctly
- [ ] No keyboard traps (can escape all components)
- [ ] Skip navigation link works and is first focusable element

### Focus Management
- [ ] Focus indicators visible on all interactive elements
- [ ] Focus indicators meet 3:1 contrast ratio requirement
- [ ] Focus indicator minimum 2px thick (current: 3px yellow)
- [ ] Focus doesn't disappear when interacting with elements
- [ ] Modal dialogs:
  - Focus moves to modal when opened
  - Focus trapped within modal
  - Focus returns to trigger element when closed
  - Escape key closes modal

### Interactive Components
- [ ] Buttons activate with Enter and Space keys
- [ ] Links activate with Enter key
- [ ] Form inputs follow standard keyboard patterns
- [ ] Dropdowns/selects operate with arrow keys
- [ ] Custom components follow ARIA authoring practices
- [ ] Hamburger menu keyboard accessible (mobile)

---

## 4. ARIA Implementation

### ARIA Landmarks
- [ ] Use native HTML5 landmarks where possible
- [ ] Supplement with ARIA landmarks only when needed
- [ ] Multiple landmarks of same type have unique labels
- [ ] `role="main"` on main content area
- [ ] `role="navigation"` on nav elements with `aria-label`
- [ ] `role="complementary"` for sidebars/asides
- [ ] `role="contentinfo"` for footer

### ARIA Labels and Descriptions
- [ ] Icon-only buttons have `aria-label`
- [ ] Complex interactions have `aria-describedby`
- [ ] Form hints use `aria-describedby`
- [ ] Error messages use `aria-describedby` or `aria-errormessage`
- [ ] Groups of related content use `aria-labelledby`
- [ ] Search landmarks have `aria-label="Search"`

### ARIA States and Properties
- [ ] Buttons show state with `aria-pressed` or `aria-expanded`
- [ ] Current page indicated with `aria-current="page"`
- [ ] Required fields have `aria-required="true"` or `required` attribute
- [ ] Invalid fields have `aria-invalid="true"`
- [ ] Hidden content uses `aria-hidden="true"` or `hidden` attribute
- [ ] Live regions use appropriate `aria-live` values

### ARIA Best Practices
- [ ] No redundant ARIA (don't label elements that have native labels)
- [ ] ARIA roles match element semantics
- [ ] Follow ARIA Authoring Practices Guide (APG) patterns
- [ ] Test all ARIA with actual screen readers (not just validators)
- [ ] Document any custom ARIA patterns used

---

## 5. Visual Accessibility

### Colour Contrast
- [ ] Body text meets 4.5:1 contrast ratio (WCAG AA)
- [ ] Large text (18pt+/14pt+ bold) meets 3:1 ratio
- [ ] Interactive elements meet 3:1 contrast ratio
- [ ] Focus indicators meet 3:1 contrast ratio
- [ ] Check contrast with images/backgrounds
- [ ] Test all colour combinations used

**Tools:**
- WebAIM Contrast Checker
- Colour Contrast Analyser (CCA)
- Chrome DevTools contrast checker

### Colour Independence
- [ ] Information not conveyed by colour alone
- [ ] Error states indicated by icons/text, not just colour
- [ ] Links distinguishable without relying on colour
- [ ] Charts/graphs have patterns or labels, not just colours
- [ ] Form validation shows icons and text, not just red/green

### Text and Typography
- [ ] Font size at least 16px (1rem) for body text
- [ ] Line height at least 1.5 for body text
- [ ] Paragraph spacing at least 2x font size
- [ ] Letter spacing (tracking) at least 0.12x font size
- [ ] Text can resize up to 200% without loss of content
- [ ] No horizontal scrolling at 320px width when zoomed 400%

### Visual Layout
- [ ] Touch targets minimum 44x44px (WCAG 2.1)
- [ ] Adequate spacing between interactive elements
- [ ] Content reflows at 320px viewport width
- [ ] No content loss when zoomed to 200%
- [ ] Page remains usable at 400% zoom
- [ ] No fixed viewport that prevents zooming

---

## 6. Motion and Animation

### Reduced Motion
- [ ] `prefers-reduced-motion` media query implemented
- [ ] Animations respect user's motion preferences
- [ ] Essential animations (loading spinners) remain
- [ ] Parallax effects disabled for reduced motion
- [ ] Auto-playing animations can be paused
- [ ] No flashing content (max 3 flashes per second)

### Animation Safety
- [ ] No content flashes more than 3 times per second
- [ ] No large bright flashing areas
- [ ] Animations can be paused/stopped by user
- [ ] Auto-playing carousels have pause controls
- [ ] Timeouts have option to extend time

---

## 7. Forms and Input

### Form Accessibility
- [ ] All inputs have visible, descriptive labels
- [ ] Required fields clearly indicated
- [ ] Error messages clear, specific, and helpful
- [ ] Error summary at top of form (if multiple errors)
- [ ] Errors announced to screen readers
- [ ] Success messages announced to screen readers
- [ ] Autocomplete attributes used where appropriate
- [ ] Input types match expected data (email, tel, etc.)

### Form Validation
- [ ] Inline validation provides helpful feedback
- [ ] Validation doesn't happen too early (on blur, not on keystroke)
- [ ] Error messages associated with inputs via `aria-describedby`
- [ ] Form can be submitted with keyboard
- [ ] Validation errors don't cause focus loss
- [ ] Required field indicator visible and in label

### Input Assistance
- [ ] Placeholders don't replace labels
- [ ] Help text provided for complex inputs
- [ ] Format requirements stated clearly
- [ ] Error recovery suggestions provided
- [ ] Confirmation for destructive actions

---

## 8. Automated Testing

### Run Automated Tools
- [ ] axe DevTools scan (0 violations target)
- [ ] WAVE evaluation (0 errors target)
- [ ] Lighthouse accessibility score (100 target)
- [ ] Pa11y or Axe-core CLI scan
- [ ] HTML validator (W3C)

### Review Automated Results
- [ ] Document all violations found
- [ ] Prioritise critical issues (Level A)
- [ ] Address all Level AA issues
- [ ] Review warnings for potential problems
- [ ] Verify automated findings with manual testing

---

## 9. Mobile Accessibility

### Touch and Mobile
- [ ] Touch targets minimum 44x44px
- [ ] Adequate spacing between touch targets
- [ ] Gestures have keyboard/tap alternatives
- [ ] Orientation doesn't restrict functionality
- [ ] Content accessible in portrait and landscape
- [ ] Pinch-to-zoom not disabled
- [ ] Mobile screen reader testing (VoiceOver/TalkBack)

### Mobile Interaction
- [ ] Hamburger menu keyboard and screen reader accessible
- [ ] Mobile navigation clear and discoverable
- [ ] Forms easy to complete on mobile
- [ ] Error messages visible on small screens
- [ ] No horizontal scrolling on mobile

---

## 10. Content Accessibility

### Language and Readability
- [ ] Plain English used (aim for Grade 8-10 reading level)
- [ ] Complex terms explained or avoided
- [ ] Sentences short and clear
- [ ] Active voice preferred
- [ ] Paragraphs well-spaced and scannable
- [ ] Headings descriptive and informative

### Content Structure
- [ ] Information architecture logical and clear
- [ ] Content hierarchy evident
- [ ] Related content grouped together
- [ ] White space used effectively
- [ ] Text content not too wide (max ~75 characters)

---

## 11. Compliance Checklist

### WCAG 2.1 Level A (Must Have)
- [ ] 1.1.1 Non-text Content (alt text)
- [ ] 1.3.1 Info and Relationships (semantic structure)
- [ ] 1.3.2 Meaningful Sequence (reading order)
- [ ] 1.3.3 Sensory Characteristics (not colour alone)
- [ ] 2.1.1 Keyboard (all functionality)
- [ ] 2.1.2 No Keyboard Trap
- [ ] 2.4.1 Bypass Blocks (skip navigation)
- [ ] 2.4.2 Page Titled
- [ ] 3.1.1 Language of Page
- [ ] 3.3.1 Error Identification
- [ ] 3.3.2 Labels or Instructions
- [ ] 4.1.1 Parsing (valid HTML)
- [ ] 4.1.2 Name, Role, Value (ARIA)

### WCAG 2.1 Level AA (Target)
- [ ] 1.4.3 Contrast (Minimum) - 4.5:1
- [ ] 1.4.5 Images of Text (avoid)
- [ ] 2.4.6 Headings and Labels (descriptive)
- [ ] 2.4.7 Focus Visible
- [ ] 3.2.3 Consistent Navigation
- [ ] 3.2.4 Consistent Identification
- [ ] 3.3.3 Error Suggestion
- [ ] 3.3.4 Error Prevention (legal/financial/data)
- [ ] 1.4.10 Reflow (320px responsive)
- [ ] 1.4.11 Non-text Contrast (3:1 for UI components)
- [ ] 1.4.12 Text Spacing (no loss at increased spacing)
- [ ] 1.4.13 Content on Hover or Focus
- [ ] 2.5.3 Label in Name
- [ ] 2.5.4 Motion Actuation

### Australian DDA Compliance
- [ ] Meets Web Content Accessibility Guidelines 2.1 Level AA
- [ ] Documented accessibility conformance statement
- [ ] Accessibility feedback mechanism provided
- [ ] Regular accessibility audits conducted
- [ ] Staff trained in accessibility requirements

---

## 12. Documentation and Reporting

### Audit Report Sections
1. **Executive Summary**
   - Overall compliance level
   - Critical issues found
   - Recommendations priority

2. **Detailed Findings**
   - Issue description
   - WCAG success criterion violated
   - Impact severity (Critical/High/Medium/Low)
   - Location (page, component, line number)
   - Screenshot or video evidence
   - Recommended fix

3. **Screen Reader Testing Results**
   - Screen readers tested (versions)
   - Issues encountered
   - User experience assessment

4. **Compliance Matrix**
   - WCAG 2.1 Level A compliance status
   - WCAG 2.1 Level AA compliance status
   - Individual criterion pass/fail

5. **Recommendations**
   - Priority fixes
   - Long-term improvements
   - Training needs
   - Testing procedures

### Update Documentation
- [ ] Update `.docs/design/accessibility-review.md` with findings
- [ ] Document any new accessibility patterns used
- [ ] Create issue tickets for each finding
- [ ] Set remediation timeline

---

## Testing Checklist Summary

**Quick Pass Criteria:**
- ✅ 0 axe DevTools violations
- ✅ 100 Lighthouse accessibility score
- ✅ All interactive elements keyboard accessible
- ✅ All images have appropriate alt text
- ✅ Minimum 4.5:1 contrast ratio for text
- ✅ 3px visible focus indicators on all interactive elements
- ✅ Skip navigation link functional
- ✅ Semantic HTML5 structure throughout
- ✅ All forms properly labeled
- ✅ Screen reader announces content correctly
- ✅ No keyboard traps
- ✅ Touch targets minimum 44x44px
- ✅ Reduced motion preferences respected
- ✅ Page title descriptive and unique
- ✅ Valid HTML5 markup

---

## Resources

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [NVDA Screen Reader](https://www.nvaccess.org/)

### Guidelines
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Australian Web Accessibility Guidelines](https://www.wa.gov.au/organisation/department-of-the-premier-and-cabinet/web-accessibility-guidelines)
- [WebAIM Resources](https://webaim.org/resources/)

### Internal Documentation
- `.docs/design/accessibility-review.md` - Current accessibility documentation
- `.docs/design/styling-guide.md` - Design system specifications

---

**Last Updated:** October 15, 2025  
**Version:** 1.0  
**Related:** Visual Design Audit, UX/UI Design Audit, Content Designer Audit


