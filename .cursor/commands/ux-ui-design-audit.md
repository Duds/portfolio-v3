---
name: UX UI Design Audit
description: Creates usable, consistent, and accessible digital interfaces with focus on interaction design, WCAG accessibility compliance, interface consistency, and overall user experience quality
version: 1.0.0
category: audit
last_updated: 16/10/2025
triggers: ["ux-audit", "ui-audit", "design-review"]
---

# UX/UI Design Audit

## Purpose
Creates usable, consistent, and accessible digital interfaces. This audit focuses on interaction design, WCAG accessibility compliance, interface consistency, and overall user experience quality across the portfolio website.

## Pre-Audit Setup

- [ ] Review existing documentation:
  - `.docs/design/styling-guide.md`
  - `.docs/design/accessibility-review.md`
  - `.docs/voice-and-tone-guide.md`
- [ ] Set up testing environments:
  - Multiple browsers (Chrome, Firefox, Safari, Edge)
  - Multiple devices (desktop, tablet, mobile)
  - Various screen sizes and resolutions
- [ ] Install testing tools:
  - Browser developer tools
  - Lighthouse
  - axe DevTools
  - Responsive design testing tools

---

## 1. First Impressions and Clarity

### Immediate Understanding
- [ ] Purpose of site clear within 5 seconds
- [ ] Value proposition immediately apparent
- [ ] Target audience obvious
- [ ] Primary action clear
- [ ] Professional appearance establishes credibility

### Visual Hierarchy
- [ ] Most important elements stand out
- [ ] Clear reading path through page
- [ ] Secondary content appropriately de-emphasized
- [ ] Visual weight appropriate for importance

### Branding and Trust
- [ ] Professional presentation
- [ ] Consistent branding
- [ ] Credibility signals present (experience, qualifications, work)
- [ ] Contact information easy to find

---

## 2. Navigation and Findability

### Primary Navigation
- [ ] Navigation immediately visible
- [ ] Navigation labels clear and descriptive
- [ ] Current page indicated in navigation
- [ ] Navigation consistent across pages
- [ ] Navigation accessible via keyboard (Tab, Enter)
- [ ] Mobile navigation accessible and usable

### Navigation Interaction
- [ ] Hover states clear and consistent
- [ ] Active states visually distinct
- [ ] Focus states visible (3px yellow outline)
- [ ] Navigation doesn't jump or shift
- [ ] Smooth scrolling works correctly
- [ ] Hash links update URL appropriately

### Mobile Navigation
- [ ] Hamburger menu intuitive
- [ ] Menu opens/closes smoothly
- [ ] Menu accessible via keyboard
- [ ] Menu overlay doesn't obscure critical content
- [ ] Close mechanism obvious
- [ ] Menu state maintained on resize

### Skip Navigation
- [ ] Skip navigation link present
- [ ] Skip link visible on keyboard focus
- [ ] Skip link functional (jumps to main content)
- [ ] Skip link first focusable element

### Wayfinding
- [ ] User always knows where they are
- [ ] Logo links to homepage
- [ ] Clear paths to key content
- [ ] Breadcrumbs present (if applicable)
- [ ] No dead ends

---

## 3. Interaction Design

### Buttons
- [ ] All buttons look clickable
- [ ] Button variants distinct:
  - Primary (amber background, white text, shimmer effect)
  - Secondary (black border)
  - Ghost (underline on hover)
- [ ] Button states clear:
  - Default
  - Hover (translateY -2px, shimmer animation, amber shadow)
  - Focus (3px amber outline)
  - Active/pressed
  - Disabled (if applicable)
- [ ] Button size appropriate
- [ ] Button padding comfortable
- [ ] Button text clear and action-oriented
- [ ] Buttons respond immediately to interaction
- [ ] Shimmer effect enhances tactile quality

### Links
- [ ] Links visually distinguishable from text
- [ ] Link hover states clear (amber colour)
- [ ] Link focus states visible (3px amber outline)
- [ ] Link text descriptive
- [ ] External links indicated (if policy)
- [ ] Visited links styled (if applicable)

### Forms
- [ ] Form purpose clear
- [ ] Required fields indicated
- [ ] Labels visible and associated with inputs
- [ ] Input fields adequately sized
- [ ] Focus states clear on form fields
- [ ] Tab order logical through form
- [ ] Submit button clearly labeled
- [ ] Form accessible via keyboard only

### Form Validation
- [ ] Validation happens at appropriate time (on submit or blur)
- [ ] Error messages clear and specific
- [ ] Error messages associated with fields
- [ ] Errors indicated visually (not color alone)
- [ ] Success states confirmed
- [ ] Validation doesn't lose user data
- [ ] Loading states shown during submission

### Interactive Feedback
- [ ] All interactions provide immediate feedback
- [ ] Hover effects smooth and consistent
- [ ] Click/tap feedback clear
- [ ] Loading states for asynchronous actions
- [ ] Transitions smooth (200ms)
- [ ] No lag or delay in interactions

---

## 4. Mobile and Touch UX

### Touch Targets
- [ ] Touch targets minimum 44x44px
- [ ] Adequate spacing between touch targets (8px minimum)
- [ ] No clustered small touch targets
- [ ] Buttons easy to tap with thumb
- [ ] Form inputs easy to tap

### Mobile Interactions
- [ ] No hover-dependent functionality
- [ ] Gestures intuitive
- [ ] Swipe actions work correctly (if applicable)
- [ ] Pinch-to-zoom not disabled
- [ ] Orientation changes handled gracefully
- [ ] No accidental taps

### Mobile Layout
- [ ] Content readable without zooming
- [ ] No horizontal scrolling
- [ ] Text size appropriate (minimum 16px)
- [ ] Images scale appropriately
- [ ] Forms usable on small screens
- [ ] CTAs prominent on mobile

### Mobile Navigation
- [ ] Hamburger menu easy to tap
- [ ] Menu doesn't obscure critical content
- [ ] Menu items easy to tap
- [ ] Navigation state clear
- [ ] Easy to return to menu

---

## 5. Content and Layout

### Content Hierarchy
- [ ] H1 clearly most prominent
- [ ] Headings create clear content structure
- [ ] Body text easily readable
- [ ] Important content stands out
- [ ] Supporting content recedes appropriately

### Readability
- [ ] Font size adequate (16px minimum for body)
- [ ] Line height comfortable (1.5-1.75 for body)
- [ ] Line length optimal (45-75 characters)
- [ ] Adequate contrast (4.5:1 minimum for body text)
- [ ] Text not too wide on large screens
- [ ] Paragraphs well-spaced

### White Space
- [ ] Adequate white space throughout
- [ ] Sections clearly separated (96px spacing)
- [ ] Content not cramped
- [ ] White space used intentionally
- [ ] Breathing room around important elements

### Content Layout
- [ ] Content aligned consistently
- [ ] Grid alignment consistent
- [ ] Related content grouped together
- [ ] Visual balance appropriate
- [ ] Layout supports content goals

---

## 6. Component Consistency

### UI Components
- [ ] Buttons styled consistently
- [ ] Links styled consistently
- [ ] Form inputs styled consistently
- [ ] Cards styled consistently (if applicable)
- [ ] Lists styled consistently
- [ ] Icons styled consistently

### Interaction Patterns
- [ ] Hover effects consistent across similar elements
- [ ] Focus indicators consistent (3px amber)
- [ ] Transition timing consistent (200ms)
- [ ] Interaction feedback consistent
- [ ] Loading states consistent
- [ ] Card hover effects include amber top accent and elevation
- [ ] Button hover includes shimmer animation

### Visual Consistency
- [ ] Color usage consistent
- [ ] Typography usage consistent
- [ ] Spacing usage consistent
- [ ] Border styles consistent
- [ ] Shadow usage consistent (if applicable)

---

## 7. Responsive Design

### Breakpoint Testing
- [ ] Test at all breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
  - Large: > 1280px
- [ ] Layout adapts appropriately at each breakpoint
- [ ] No awkward in-between states
- [ ] Content reflows smoothly

### Viewport Testing
- [ ] Test common device sizes:
  - iPhone SE (375px)
  - iPhone 12/13 (390px)
  - iPhone Pro Max (428px)
  - iPad (768px)
  - iPad Pro (1024px)
  - Desktop (1280px+)
- [ ] No broken layouts at any size
- [ ] Touch targets appropriate for device

### Responsive Behavior
- [ ] Images scale appropriately
- [ ] Text doesn't overflow containers
- [ ] No horizontal scrolling
- [ ] Navigation adapts appropriately
- [ ] Forms usable at all sizes
- [ ] Tables responsive (if applicable)

---

## 8. Performance and Perceived Performance

### Load Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Critical content loads first
- [ ] Images load efficiently
- [ ] Fonts load with fallback (swap)
- [ ] No render-blocking resources

### Interaction Performance
- [ ] Interactions feel instant (< 100ms)
- [ ] No janky animations
- [ ] Smooth scrolling performs well
- [ ] No layout shifts during interaction
- [ ] Keyboard interactions responsive

### Loading States
- [ ] Loading indicators present for async actions
- [ ] Skeleton screens (if used) appropriate
- [ ] Progress indication for longer waits
- [ ] Perceived performance optimized

### Lighthouse Scores
- [ ] Performance: 90+
- [ ] Accessibility: 100
- [ ] Best Practices: 100
- [ ] SEO: 100

---

## 9. Accessibility (UX Perspective)

### Keyboard Navigation
- [ ] All functionality accessible via keyboard
- [ ] Tab order logical
- [ ] Focus indicators always visible
- [ ] No keyboard traps
- [ ] Shortcut keys don't conflict (if applicable)

### Screen Reader Experience
- [ ] Page title descriptive
- [ ] Headings structure page logically
- [ ] Landmark regions defined
- [ ] Images have alt text
- [ ] Form labels associated with inputs
- [ ] Error messages announced
- [ ] Dynamic content updates announced

### Visual Accessibility
- [ ] Sufficient color contrast
- [ ] Information not conveyed by color alone
- [ ] Focus indicators meet 3:1 contrast
- [ ] Text resizes to 200% without loss
- [ ] Content reflows at 320px width

### Motor Accessibility
- [ ] Touch targets large enough (44x44px)
- [ ] No precise mouse movements required
- [ ] Adequate time for interactions
- [ ] No time limits (or extendable)
- [ ] Buttons easy to click/tap

---

## 10. Error Prevention and Recovery

### Error Prevention
- [ ] Form validation prevents errors
- [ ] Input types prevent invalid data (email, tel, etc.)
- [ ] Constraints clear before submission
- [ ] Confirmation for destructive actions
- [ ] Auto-save for long forms (if applicable)

### Error Handling
- [ ] Error messages clear and helpful
- [ ] Errors suggest solutions
- [ ] User data preserved on error
- [ ] Errors easy to fix
- [ ] Multiple error handling graceful

### Success Confirmation
- [ ] Success messages clear
- [ ] Next steps provided
- [ ] User not confused about state
- [ ] Confirmation not too aggressive

---

## 11. Micro-interactions and Delight

### Hover Effects
- [ ] Hover effects enhance usability
- [ ] Hover transitions smooth (200ms)
- [ ] Hover effects consistent
- [ ] Hover effects subtle and professional
- [ ] No hover effects on mobile (touch)

### Transitions and Animation
- [ ] Animations purposeful, not decorative only
- [ ] Animation timing appropriate
- [ ] Animations enhance understanding
- [ ] Reduced motion respected
- [ ] Animations don't distract

### Feedback and Response
- [ ] All actions acknowledged
- [ ] Feedback immediate
- [ ] State changes clear
- [ ] User always informed of system status

---

## 12. Content UX

### Scannability
- [ ] Content easy to scan
- [ ] Key points stand out
- [ ] Headings descriptive
- [ ] Lists used appropriately
- [ ] White space aids scanning

### Calls-to-Action
- [ ] Primary CTA obvious
- [ ] CTA copy action-oriented
- [ ] CTAs at logical points
- [ ] Multiple CTAs don't compete
- [ ] CTA buttons appropriately prominent

### Content Length
- [ ] Content length appropriate for context
- [ ] No walls of text
- [ ] Long content broken into sections
- [ ] Complex content structured clearly

---

## 13. Cross-browser Compatibility

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Compatibility Issues
- [ ] Consistent rendering across browsers
- [ ] Fallbacks for unsupported features
- [ ] Vendor prefixes where needed
- [ ] No browser-specific bugs

---

## 14. Edge Cases and States

### Empty States
- [ ] Empty states designed (if applicable)
- [ ] Empty states helpful and clear
- [ ] Empty states guide next action

### Error States
- [ ] 404 page designed
- [ ] Error pages helpful
- [ ] Errors provide recovery path
- [ ] Errors maintain branding

### Loading States
- [ ] Loading states clear
- [ ] Loading doesn't block interaction unnecessarily
- [ ] Long loads show progress

### Disabled States
- [ ] Disabled states clearly indicated
- [ ] Disabled elements not confusing
- [ ] Reason for disable communicated (if possible)

---

## 15. User Task Completion

### Primary Tasks
- [ ] Primary tasks easily discoverable
- [ ] Task flows logical and efficient
- [ ] No unnecessary steps
- [ ] Progress clear for multi-step tasks
- [ ] Completion obvious

### Secondary Tasks
- [ ] Secondary tasks accessible
- [ ] Paths to secondary content clear
- [ ] Supporting information easy to find

### Task Friction Points
- [ ] No confusing interactions
- [ ] No misleading labels
- [ ] No unexpected behavior
- [ ] No unnecessary cognitive load

---

## 16. Cognitive Load

### Simplicity
- [ ] Interface as simple as possible
- [ ] No unnecessary elements
- [ ] Clear information hierarchy
- [ ] Consistent patterns reduce learning

### Mental Models
- [ ] Interactions match user expectations
- [ ] Familiar patterns used
- [ ] Metaphors clear and helpful
- [ ] No confusing abstractions

### Memory Requirements
- [ ] No need to remember info between pages
- [ ] Context maintained
- [ ] Progress visible
- [ ] Confirmation for memory-dependent tasks

---

## 17. Quality Assurance

### Visual QA
- [ ] No visual bugs or glitches
- [ ] No misaligned elements
- [ ] No overlapping text
- [ ] No cut-off content
- [ ] Images load correctly
- [ ] No broken images

### Functional QA
- [ ] All links work
- [ ] All buttons functional
- [ ] Forms submit correctly
- [ ] Navigation works correctly
- [ ] No console errors
- [ ] No 404 errors

### Content QA
- [ ] No placeholder content
- [ ] No lorem ipsum
- [ ] No "Coming Soon" without reason
- [ ] Content accurate and current
- [ ] No typos

---

## Documentation and Reporting

### Audit Report Sections
1. **Executive Summary**
   - Overall UX/UI quality assessment
   - Critical issues found
   - Usability score/rating
   - Priority recommendations

2. **Interaction Design Assessment**
   - Navigation and findability
   - Interactive component evaluation
   - Feedback and response quality
   - Mobile and touch interactions

3. **Accessibility Compliance**
   - WCAG 2.1 Level AA compliance status
   - Keyboard navigation assessment
   - Screen reader compatibility
   - Visual accessibility

4. **Responsive Design Evaluation**
   - Breakpoint testing results
   - Device compatibility
   - Touch target adequacy
   - Layout adaptation quality

5. **Performance and Perceived Performance**
   - Load performance metrics
   - Interaction responsiveness
   - Animation performance
   - Lighthouse scores

6. **Usability Issues**
   - Critical usability problems
   - Medium priority issues
   - Minor issues and polish items
   - Edge cases and error states

7. **Recommendations**
   - Priority fixes
   - Quick wins
   - Long-term UX improvements
   - Design system enhancements

### Update Documentation
- [ ] Update `.docs/design/styling-guide.md` with new patterns
- [ ] Document new UI components
- [ ] Update accessibility documentation
- [ ] Create issue tickets for each finding
- [ ] Provide screenshots/videos of issues
- [ ] Create design mockups for improvements

---

## Testing Checklist Summary

**Quick Pass Criteria (Updated October 2025 - Corrected):**
- ✅ Purpose clear within 5 seconds
- ✅ Hero section elevates "From Policy to Practice" with animation
- ✅ "Hello 👋" logo consistent across all pages
- ✅ All interactive elements keyboard accessible
- ✅ Tab order logical
- ✅ Focus indicators visible (3px amber)
- ✅ Touch targets minimum 44x44px
- ✅ No horizontal scrolling at any viewport
- ✅ Lighthouse accessibility score 100
- ✅ All forms have associated labels
- ✅ Error messages clear and helpful
- ✅ Mobile navigation functional
- ✅ Smooth scrolling works correctly
- ✅ Buttons have clear hover/focus/active states (with shimmer effect)
- ✅ Cards have amber top accent on hover
- ✅ Transitions smooth (200ms)
- ✅ No visual bugs or misalignments
- ✅ All links functional (amber hover colour)
- ✅ Responsive at all breakpoints
- ✅ Consistent interaction patterns
- ✅ No keyboard traps
- ✅ Loading states for async actions
- ✅ Professional, credible first impression
- ✅ Case studies use section labels and results callouts
- ✅ Typography hierarchy clear (Work Sans throughout, hierarchy through weight/size/colour)
- ✅ Generative art system for project images (domain-coded patterns)
- ✅ Modern service design aesthetic (aligns with IDEO, Future Friendly, Folk, Local Peoples)

---

## Resources

### UX Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance and accessibility
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging and testing
- [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/) - Responsive design mode
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation

### Design Tools
- [Figma](https://www.figma.com/) - Design and prototyping
- [Sketch](https://www.sketch.com/) - UI design
- [Adobe XD](https://www.adobe.com/products/xd.html) - Design and prototyping
- [InVision](https://www.invisionapp.com/) - Prototyping and collaboration

### UX Guidelines
- [Nielsen Norman Group](https://www.nngroup.com/) - UX research and guidelines
- [Material Design](https://material.io/design) - Design system principles
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Laws of UX](https://lawsofux.com/) - Psychology and UX principles

### Internal Documentation
- `.docs/design/styling-guide.md` - Complete design system
- `.docs/design/accessibility-review.md` - Accessibility guidelines
- `.docs/design/button-variants.md` - Button specifications
- `.docs/voice-and-tone-guide.md` - Content guidelines

---

**Last Updated:** October 15, 2025  
**Version:** 1.0  
**Related:** Accessibility Specialist Audit, Visual Brand Design Audit, Content Designer Audit


