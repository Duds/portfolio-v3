---
name: Run All Audits
description: Execute all audit commands in sequence for comprehensive quality review covering accessibility, security, SEO, UX UI, content, branding, and voice and tone
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["audit-all", "full-audit", "complete-audit"]
---

# Run All Audits

This command executes all available audit commands in sequence to provide a comprehensive quality assessment of the portfolio website. Use this before major releases or when performing a complete quality review.

## Overview

This meta-command runs the following audits:

1. **Accessibility Specialist Audit** - WCAG 2.1 AA compliance
2. **Security Audit** - Security architecture and compliance
3. **SEO Specialist Audit** - Search engine and AI optimisation
4. **UX/UI Design Audit** - User experience and interface quality
5. **Visual Brand Design Audit** - Brand consistency and design systems
6. **Content Designer / UX Writer Audit** - Content quality and structure
7. **Voice & Tone Audit** - Brand voice compliance

## Audit Execution Sequence

### Phase 1: Technical Foundation (30-45 minutes)

#### 1. Accessibility Audit
**Run:** `@accessibility-audit`

**Focus Areas:**
- WCAG 2.1 Level AA compliance
- Screen reader compatibility
- Keyboard navigation
- Semantic HTML structure
- Focus indicators
- Touch targets (44x44px minimum)

**Pass Criteria:**
- Lighthouse accessibility score 100
- 0 axe DevTools violations
- All interactive elements keyboard accessible
- Proper ARIA implementation

#### 2. Security Audit
**Run:** `@security-audit`

**Focus Areas:**
- HTTPS enforcement
- Security headers configuration
- Dependency vulnerabilities
- Privacy compliance
- ISM/Essential Eight alignment

**Pass Criteria:**
- SecurityHeaders.com grade A+
- No critical or high vulnerabilities
- Privacy policy accurate
- OWASP Top 10 risks mitigated

#### 3. SEO Audit
**Run:** `@seo-audit`

**Focus Areas:**
- Technical SEO foundation
- Core Web Vitals
- Structured data (Schema.org)
- Mobile optimisation
- AI-SEO readiness

**Pass Criteria:**
- Lighthouse SEO score 100
- Core Web Vitals passing
- Valid structured data
- Mobile-friendly

### Phase 2: Design and UX (30-45 minutes)

#### 4. UX/UI Design Audit
**Run:** `@ux-audit`

**Focus Areas:**
- Interaction design quality
- Navigation and findability
- Mobile and touch UX
- Component consistency
- Performance and perceived performance

**Pass Criteria:**
- All interactions keyboard accessible
- Touch targets 44x44px minimum
- Consistent interaction patterns
- No visual bugs

#### 5. Visual Brand Design Audit
**Run:** `@brand-audit`

**Focus Areas:**
- Brand alignment
- Typography system (Work Sans)
- Colour system (amber, stone, charcoal)
- Responsive design
- Animation and motion

**Pass Criteria:**
- Brand colours consistent
- Typography hierarchy clear
- Responsive at all breakpoints
- Animations smooth (200ms)

### Phase 3: Content Quality (20-30 minutes)

#### 6. Content Designer / UX Writer Audit
**Run:** `@content-audit`

**Focus Areas:**
- Plain English principles
- Information architecture
- Readability and scannability
- Content structure
- Australian English

**Pass Criteria:**
- Flesch Reading Ease 60+
- Clear heading hierarchy
- No jargon or buzzwords
- Australian spelling throughout

#### 7. Voice & Tone Audit
**Run:** `@voice-audit`

**Focus Areas:**
- Brand voice consistency
- Banned words check
- Technical credibility
- Measurable results
- Evidence and proof

**Pass Criteria:**
- No banned buzzwords
- Specific technologies named
- Measurable outcomes included
- Voice pillars present

## Total Estimated Time

**Full audit suite:** 1.5 - 2 hours

**Individual audit durations:**
- Accessibility: 30-40 minutes
- Security: 20-30 minutes
- SEO: 25-35 minutes
- UX/UI: 20-30 minutes
- Visual Brand: 20-30 minutes
- Content: 15-20 minutes
- Voice & Tone: 10-15 minutes

## Audit Report Generation

After running all audits, compile findings into a comprehensive report:

### Report Structure

```markdown
# Portfolio Quality Audit Report

**Date:** [Current Date]
**Auditor:** [Name/AI Agent]
**Version:** [Site Version]

## Executive Summary

[High-level overview of findings]
[Critical issues count]
[Overall quality score]

## Audit Results Summary

| Audit | Status | Score | Critical | High | Medium | Low |
|-------|--------|-------|----------|------|--------|-----|
| Accessibility | ✅ Pass | 100/100 | 0 | 0 | 2 | 5 |
| Security | ✅ Pass | A+ | 0 | 0 | 1 | 3 |
| SEO | ⚠️ Review | 95/100 | 0 | 1 | 3 | 4 |
| UX/UI | ✅ Pass | 98/100 | 0 | 0 | 2 | 6 |
| Brand Design | ✅ Pass | 97/100 | 0 | 0 | 3 | 4 |
| Content | ⚠️ Review | 92/100 | 0 | 1 | 2 | 3 |
| Voice & Tone | ✅ Pass | 96/100 | 0 | 0 | 1 | 2 |

**Overall Quality Score:** 96.7/100

## Critical Issues (Must Fix Before Release)

[List any critical issues found]
[Empty if none - this is ideal]

## High Priority Issues (Fix Soon)

1. [Issue description]
   - **Audit:** [Which audit found it]
   - **Location:** [Where the issue is]
   - **Impact:** [Why it matters]
   - **Fix:** [How to resolve]

## Medium Priority Issues (Plan to Fix)

[Similar format to high priority]

## Low Priority Issues (Nice to Have)

[Similar format to medium priority]

## Recommendations

### Immediate Actions
[Things to fix right away]

### Short-term Improvements (Next Sprint)
[Things to address soon]

### Long-term Enhancements
[Strategic improvements]

## Compliance Status

- ✅ WCAG 2.1 Level AA
- ✅ Australian DDA
- ✅ Australian Privacy Act
- ✅ ISM/Essential Eight (applicable controls)
- ✅ OWASP Top 10 mitigation

## Next Steps

1. [Prioritised action items]
2. [Responsibility assignments]
3. [Target completion dates]

---

**Report Generated:** [Timestamp]
**Next Audit Due:** [Date]
```

### Audit Report Best Practices

1. **Be specific** - Don't just say "fix accessibility", say "add alt text to hero image"
2. **Prioritise correctly** - Critical means blocks release, High means fix within days
3. **Provide context** - Explain why each issue matters
4. **Suggest solutions** - Don't just identify problems, offer fixes
5. **Track progress** - Create issues/tickets for each finding

## Quick Audit Mode

For faster checks, run selective audits:

### Pre-Deployment Quick Check (15 minutes)
```bash
@accessibility-audit  # Critical for compliance
@security-audit       # Critical for trust
@seo-audit            # Critical for discoverability
```

### Design Quality Check (20 minutes)
```bash
@brand-audit          # Visual consistency
@ux-audit             # User experience
@content-audit        # Content quality
```

### Content Publishing Check (10 minutes)
```bash
@content-audit        # Content structure
@voice-audit          # Brand voice
```

## Automated vs Manual Checks

### Automated (Tools)
- Lighthouse (accessibility, SEO, performance)
- axe DevTools (accessibility)
- SecurityHeaders.com (security headers)
- WAVE (accessibility)
- W3C Validator (HTML validity)

### Manual (Human Review)
- Screen reader testing
- Cross-browser compatibility
- Content voice and tone
- Brand consistency
- User flow testing
- Edge case scenarios

## Audit Frequency Recommendations

### Continuous (Automated in CI/CD)
- Lighthouse checks
- Dependency vulnerability scanning
- Linting
- Unit tests

### Weekly (Development)
- Quick accessibility check
- Security header check
- Content voice audit (new content)

### Monthly (Quality Review)
- Full accessibility audit
- SEO performance review
- UX/UI consistency check

### Quarterly (Comprehensive)
- Complete audit suite
- Security penetration testing
- Content strategy review
- Design system evolution

### Annually (Strategic)
- Complete security audit
- Brand refresh review
- Architecture review
- Competitive analysis

## Integration with Development Workflow

### Before Starting Feature
1. Review relevant audits
2. Understand quality standards
3. Plan implementation with standards in mind

### During Development
1. Run quick checks frequently
2. Address issues as you go
3. Don't accumulate technical/design debt

### Before Pull Request
1. Run relevant audits
2. Fix any critical or high issues
3. Document any accepted trade-offs

### Before Deployment
1. Run full audit suite
2. Verify no critical issues
3. Document any warnings
4. Get stakeholder sign-off

## Audit Tools Setup

### Required Tools

1. **Browser Extensions**
   - axe DevTools (Chrome/Firefox/Edge)
   - WAVE Evaluation Tool
   - Lighthouse (built into Chrome DevTools)

2. **Command Line Tools**
   - Node.js and npm (for build scripts)
   - Lighthouse CLI: `npm install -g lighthouse`
   - Pa11y: `npm install -g pa11y`

3. **Online Services**
   - SecurityHeaders.com
   - SSL Labs
   - Google Search Console
   - PageSpeed Insights

4. **Screen Readers**
   - VoiceOver (macOS - built-in)
   - NVDA (Windows - free)
   - JAWS (Windows - commercial)
   - TalkBack (Android - built-in)

### Optional Tools

- Screaming Frog SEO Spider
- Ahrefs/SEMrush (SEO analysis)
- BrowserStack (cross-browser testing)
- Figma (design comparison)

## Common Issues and Fixes

### Accessibility
**Issue:** Missing alt text
**Fix:** Add descriptive alt attributes to all images

**Issue:** Keyboard trap
**Fix:** Ensure all modals/overlays can be exited with keyboard

**Issue:** Insufficient colour contrast
**Fix:** Use colour combinations that meet 4.5:1 ratio

### Security
**Issue:** Missing security headers
**Fix:** Configure headers in hosting platform

**Issue:** Vulnerable dependencies
**Fix:** Run `npm audit fix` and update packages

### SEO
**Issue:** Missing meta descriptions
**Fix:** Add unique, compelling meta descriptions to all pages

**Issue:** Slow Core Web Vitals
**Fix:** Optimise images, reduce JavaScript, improve server response time

### UX/UI
**Issue:** Touch targets too small
**Fix:** Ensure all interactive elements are minimum 44x44px

**Issue:** Inconsistent button styles
**Fix:** Apply standardised button component styles

### Content
**Issue:** Buzzwords present
**Fix:** Replace with specific, plain language alternatives

**Issue:** No measurable results
**Fix:** Add specific numbers and percentages

## Troubleshooting Audit Runs

### Audit Takes Too Long

**Problem:** Individual audits taking excessive time

**Solutions:**
1. Focus on critical sections first
2. Use automated tools for initial pass
3. Manual review only for flagged issues
4. Split large audits across team members

### Conflicting Recommendations

**Problem:** Different audits suggest contradictory changes

**Solutions:**
1. Prioritise by business impact
2. Find balanced solution
3. Document trade-off decision
4. Seek stakeholder input

### Too Many Issues

**Problem:** Overwhelming number of findings

**Solutions:**
1. Triage by severity
2. Address critical issues first
3. Create remediation roadmap
4. Set realistic timeline
5. Consider phased approach

## Success Metrics

Track audit performance over time:

### Quality Scores
- Lighthouse scores (Performance, Accessibility, SEO, Best Practices)
- SecurityHeaders.com grade
- WAVE error count
- Voice & Tone compliance percentage

### Issue Trends
- Critical issues found per audit
- Average time to fix by severity
- Recurring issue patterns
- Quality improvement trajectory

### Compliance Status
- WCAG 2.1 AA compliance maintained
- Security audit findings resolved
- Zero critical vulnerabilities
- Content quality standards met

## Related Commands

- **@pre-flight**: Pre-deployment comprehensive check
- **@accessibility-audit**: Individual accessibility review
- **@security-audit**: Individual security review
- **@seo-audit**: Individual SEO review
- **@ux-audit**: Individual UX review
- **@brand-audit**: Individual brand review
- **@content-audit**: Individual content review
- **@voice-audit**: Individual voice review

---

*Last Updated: 16/10/2025*

