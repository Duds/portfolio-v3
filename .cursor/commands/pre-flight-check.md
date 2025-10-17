---
name: Pre Flight Check
description: Complete pre-deployment checklist covering tests, linting, documentation, security, performance, and quality standards before production release
version: 1.0.0
category: checklist
last_updated: 16/10/2025
triggers: ["pre-flight", "deploy-check", "ready-check"]
---

# Pre-Flight Check

Complete pre-deployment checklist to verify the portfolio website is ready for production release. This comprehensive check ensures quality, security, and compliance standards are met.

## Overview

This checklist covers:
- Code quality and testing
- Security and compliance
- Performance and optimisation
- Content and design
- SEO and accessibility
- Documentation and deployment readiness

**Estimated Time:** 30-45 minutes

## Pre-Flight Checklist

### 1. Code Quality ✅

#### Tests
- [ ] All unit tests pass: `npm test`
- [ ] No failing tests
- [ ] Test coverage adequate (aim for 80%+)
- [ ] Edge cases covered
- [ ] No skipped or disabled tests without justification

#### Linting
- [ ] No linting errors: `npm run lint` (if configured)
- [ ] Code follows style guide
- [ ] No console.log statements in production code
- [ ] No commented-out code blocks
- [ ] No TODO comments for critical functionality

#### Build
- [ ] Build completes successfully: `node scripts/build-content.js`
- [ ] No build warnings
- [ ] All markdown case studies process correctly
- [ ] Generated HTML valid
- [ ] No broken asset references

### 2. Security & Compliance 🔒

#### Security Basics
- [ ] HTTPS enforced
- [ ] Security headers configured (run `@security-audit`)
- [ ] No hardcoded secrets or API keys
- [ ] No sensitive data in version control
- [ ] Dependencies up-to-date: `npm audit`
- [ ] No critical or high vulnerabilities

#### Privacy & Compliance
- [ ] Privacy policy up-to-date and accessible
- [ ] Cookie policy accurate (if using cookies)
- [ ] Australian Privacy Act compliance
- [ ] No unnecessary data collection
- [ ] Contact information current

### 3. Performance & Optimisation ⚡

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Test with Lighthouse or PageSpeed Insights

#### Assets
- [ ] Images optimised (compressed, appropriate formats)
- [ ] No oversized images
- [ ] Fonts loaded efficiently (font-display: swap)
- [ ] CSS and JavaScript minified for production
- [ ] No unused CSS or JavaScript

#### Loading
- [ ] Page load time < 3 seconds
- [ ] Critical resources prioritised
- [ ] Lazy loading implemented for below-fold images
- [ ] No render-blocking resources

### 4. Accessibility ♿

#### WCAG 2.1 Level AA
- [ ] Lighthouse accessibility score 100
- [ ] All images have alt text
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible (3px amber outline)
- [ ] Touch targets minimum 44x44px
- [ ] Color contrast meets 4.5:1 ratio
- [ ] Run `@accessibility-audit` for comprehensive check

#### Screen Reader Testing
- [ ] Test with VoiceOver (macOS) or NVDA (Windows)
- [ ] Page title descriptive
- [ ] Landmark regions defined
- [ ] Form labels associated with inputs

### 5. SEO & Discoverability 🔍

#### Technical SEO
- [ ] Unique title tags on all pages
- [ ] Meta descriptions present and compelling
- [ ] Structured data (Schema.org) implemented
- [ ] XML sitemap generated and accessible
- [ ] robots.txt configured correctly
- [ ] Canonical URLs specified
- [ ] Lighthouse SEO score 100

#### Content
- [ ] Content includes target keywords naturally
- [ ] URLs descriptive and SEO-friendly
- [ ] Internal linking structure logical
- [ ] No broken links (internal or external)
- [ ] Images have descriptive filenames

#### Mobile
- [ ] Mobile-friendly (responsive design)
- [ ] No horizontal scrolling on mobile
- [ ] Text readable without zooming
- [ ] Mobile navigation functional

### 6. UX & Design 🎨

#### User Experience
- [ ] Navigation clear and intuitive
- [ ] All links work correctly
- [ ] Forms functional (if applicable)
- [ ] Error messages helpful
- [ ] Loading states appropriate
- [ ] Run `@ux-audit` for comprehensive check

#### Visual Design
- [ ] Brand colours consistent (amber, stone, charcoal)
- [ ] Typography system applied (Work Sans throughout)
- [ ] Button states clear (hover, focus, active)
- [ ] Animations smooth (200ms transitions)
- [ ] No visual bugs or misalignments
- [ ] Run `@brand-audit` for comprehensive check

#### Responsive Design
- [ ] Test at all breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- [ ] Layout adapts appropriately
- [ ] No broken layouts at any size

### 7. Content Quality 📝

#### Voice & Tone
- [ ] Content follows voice guidelines
- [ ] No banned buzzwords (synergy, leverage, etc.)
- [ ] Specific technologies named
- [ ] Measurable results included
- [ ] Australian English spelling
- [ ] Run `@voice-audit` on all content

#### Accuracy
- [ ] All information accurate and current
- [ ] Case studies reflect latest work
- [ ] Contact information correct
- [ ] Client names approved for public use
- [ ] No placeholder content or lorem ipsum

#### Readability
- [ ] Plain English used
- [ ] Sentence length reasonable (average < 25 words)
- [ ] Paragraphs well-spaced
- [ ] Headings descriptive
- [ ] Lists used appropriately

### 8. Cross-Browser Compatibility 🌐

#### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### Compatibility
- [ ] Consistent rendering across browsers
- [ ] No browser-specific bugs
- [ ] Fallbacks for unsupported features

### 9. Documentation 📚

#### Internal Documentation
- [ ] README.md updated
- [ ] Change log current
- [ ] Deployment instructions accurate
- [ ] Architecture documentation current
- [ ] Known issues documented

#### Code Documentation
- [ ] Complex logic commented
- [ ] Component usage documented
- [ ] API endpoints documented (if applicable)
- [ ] Configuration options explained

### 10. Deployment Readiness 🚀

#### Version Control
- [ ] All changes committed
- [ ] Git status clean (no uncommitted changes)
- [ ] Branch up-to-date with main/master
- [ ] No merge conflicts
- [ ] Meaningful commit messages

#### Environment
- [ ] Environment variables configured
- [ ] Production settings verified
- [ ] Database connections correct (if applicable)
- [ ] API endpoints correct for production
- [ ] Error tracking configured

#### Backup & Rollback
- [ ] Current version backed up
- [ ] Rollback procedure documented
- [ ] Database backup recent (if applicable)
- [ ] Rollback tested recently

### 11. Final Checks ✨

#### Manual Testing
- [ ] Walk through user journeys
- [ ] Test primary user flows
- [ ] Verify calls-to-action work
- [ ] Check contact forms (if applicable)
- [ ] Test error scenarios

#### Stakeholder Review
- [ ] Design sign-off obtained
- [ ] Content approval received
- [ ] Technical review complete
- [ ] Legal/compliance approved (if required)

#### Monitoring
- [ ] Analytics tracking configured
- [ ] Error monitoring enabled
- [ ] Performance monitoring set up
- [ ] Uptime monitoring configured

## Quick Pre-Flight (10-Minute Version)

If time is limited, run these essential checks:

1. **Build succeeds:** `node scripts/build-content.js`
2. **No console errors:** Open site in browser, check console
3. **Lighthouse scores:** All 90+ (Performance, Accessibility, SEO, Best Practices)
4. **Links work:** Click through main navigation
5. **Mobile responsive:** Test in DevTools device mode
6. **Security headers:** Check SecurityHeaders.com
7. **No vulnerabilities:** `npm audit`

## Pre-Flight Results

### Pass Criteria

**Ready to Deploy** if:
- ✅ All critical checks pass
- ✅ No high-priority issues
- ✅ Lighthouse scores 90+
- ✅ No security vulnerabilities
- ✅ Stakeholder approval received

**Hold Deployment** if:
- ❌ Any critical check fails
- ❌ High-priority security issues
- ❌ Accessibility score < 90
- ❌ Broken core functionality
- ❌ Missing stakeholder approval

### Results Template

```markdown
## Pre-Flight Check Results

**Date:** [Current Date]
**Version:** [Version Number]
**Checked By:** [Name/Team]

### Summary
- **Status:** ✅ READY TO DEPLOY / ⚠️ ISSUES FOUND / ❌ NOT READY
- **Critical Issues:** [Count]
- **High Priority Issues:** [Count]
- **Medium Priority Issues:** [Count]

### Lighthouse Scores
- Performance: [Score]/100
- Accessibility: [Score]/100
- Best Practices: [Score]/100
- SEO: [Score]/100

### Security
- Security Headers Grade: [A+/A/B/C]
- Vulnerabilities: [Count] (Critical: 0, High: 0)

### Browser Compatibility
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile

### Outstanding Items
1. [Issue description] - [Priority] - [Assigned to]
2. [Issue description] - [Priority] - [Assigned to]

### Approval
- Design: ✅ Approved
- Content: ✅ Approved
- Technical: ✅ Approved
- Legal: ✅ Approved (if required)

**Deployment Authorised By:** [Name]
**Deployment Time:** [Scheduled Date/Time]
```

## Integration with Other Commands

**Before Pre-Flight:**
1. Run `@audit-all` for comprehensive quality check
2. Fix any critical or high-priority issues found
3. Update documentation as needed

**During Pre-Flight:**
1. Work through this checklist systematically
2. Document any issues or exceptions
3. Get necessary approvals

**After Pre-Flight:**
1. If passed: Proceed with `@deploy`
2. If failed: Fix issues and re-run pre-flight
3. Document deployment in change log

## Automated Pre-Flight Script

For a partially automated check, create a script:

```bash
#!/bin/bash
# pre-flight.sh

echo "=== Running Pre-Flight Checks ==="

# Build
echo "1. Building..."
node scripts/build-content.js || exit 1

# Dependencies
echo "2. Checking dependencies..."
npm audit --audit-level=high || echo "⚠️ Vulnerabilities found"

# Linting (if configured)
# npm run lint || echo "⚠️ Linting issues found"

# Lighthouse
echo "3. Running Lighthouse..."
lighthouse http://localhost:8000 --quiet --chrome-flags="--headless"

echo "=== Pre-Flight Complete ==="
echo "Review results and complete manual checks"
```

## Common Issues and Solutions

### Build Fails
**Issue:** `node scripts/build-content.js` errors
**Fix:** Check markdown syntax in case studies, verify dependencies installed

### Low Lighthouse Scores
**Issue:** Performance, Accessibility, or SEO score < 90
**Fix:** Run specific audit (`@accessibility-audit`, `@seo-audit`), address findings

### Security Vulnerabilities
**Issue:** `npm audit` shows vulnerabilities
**Fix:** Run `npm audit fix`, update dependencies, review breaking changes

### Broken Links
**Issue:** 404 errors on links
**Fix:** Update incorrect URLs, ensure all pages exist, check relative paths

### Mobile Issues
**Issue:** Layout breaks on mobile
**Fix:** Test at all breakpoints, fix responsive CSS, ensure touch targets adequate

## Related Commands

- **@audit-all**: Run all quality audits
- **@deploy**: Deploy to production after pre-flight passes
- **@build**: Build and preview locally
- **@accessibility-audit**: Detailed accessibility check
- **@security-audit**: Detailed security check
- **@seo-audit**: Detailed SEO check

---

*Last Updated: 16/10/2025*

