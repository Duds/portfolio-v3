---
name: Cross Browser Test
description: Test site across multiple browsers and devices with manual testing procedures, automated tools, and compatibility verification for Chrome, Firefox, Safari, Edge, and mobile browsers
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["browser-test", "cross-browser", "compatibility"]
---

# Cross-Browser Test

Systematically test the portfolio website across multiple browsers, devices, and screen sizes to ensure consistent rendering and functionality.

## Browser Testing Matrix

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest - macOS)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Safari (iOS - iPhone)
- [ ] Safari (iOS - iPad)
- [ ] Chrome (Android)
- [ ] Samsung Internet (Android)

### Testing Priorities
1. **Primary:** Chrome, Safari (both desktop and mobile)
2. **Secondary:** Firefox, Edge
3. **Tertiary:** Samsung Internet, older versions

## Manual Testing Procedure

### For Each Browser:

#### 1. Homepage
- [ ] Page loads correctly
- [ ] Hero section displays properly
- [ ] Navigation works
- [ ] Buttons clickable and styled correctly
- [ ] Images load and display
- [ ] Fonts render correctly
- [ ] Animations smooth
- [ ] Footer displays

#### 2. Portfolio Page
- [ ] All case studies visible
- [ ] Card layout correct
- [ ] Hover effects work (desktop)
- [ ] Images load
- [ ] Links functional
- [ ] Filtering works (if applicable)

#### 3. Navigation
- [ ] Menu opens/closes (mobile)
- [ ] All links work
- [ ] Active state correct
- [ ] Smooth scrolling works
- [ ] Skip link functional

#### 4. Interactive Elements
- [ ] Buttons respond to clicks
- [ ] Hover states work (desktop)
- [ ] Focus indicators visible
- [ ] Forms functional (if applicable)
- [ ] Modals work (if applicable)

#### 5. Responsive Design
- [ ] Mobile layout (< 640px)
- [ ] Tablet layout (640px - 1024px)
- [ ] Desktop layout (> 1024px)
- [ ] No horizontal scrolling
- [ ] Touch targets adequate (mobile)

## Device Testing

### Physical Devices (Ideal)
- iPhone (latest)
- iPad
- Android phone
- Android tablet
- Various laptops

### Browser DevTools (Fallback)
- Chrome DevTools Device Mode
- Firefox Responsive Design Mode
- Safari Responsive Design Mode

### Common Screen Sizes
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] iPhone Pro Max (428px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1280px, 1920px)

## Automated Browser Testing

### Using BrowserStack (Commercial)
```bash
# If you have BrowserStack account
# Configure and run automated tests
```

### Using Playwright (Free)
```javascript
// test.js
const { chromium, firefox, webkit } = require('playwright');

(async () => {
  for (const browserType of [chromium, firefox, webkit]) {
    const browser = await browserType.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8000');
    await page.screenshot({ path: `screenshot-${browserType.name()}.png` });
    await browser.close();
  }
})();
```

## Compatibility Checklist

### CSS Features
- [ ] Flexbox works in all browsers
- [ ] Grid layout works
- [ ] Custom properties (CSS variables)
- [ ] Transforms and transitions
- [ ] Media queries
- [ ] Font loading

### JavaScript Features
- [ ] ES6+ features supported (or transpiled)
- [ ] Event listeners work
- [ ] DOM manipulation works
- [ ] Async/await functions
- [ ] No console errors

### Modern Web Features
- [ ] WebP images with fallbacks
- [ ] Service workers (if used)
- [ ] Local storage (if used)
- [ ] Intersection Observer (if used)

## Browser-Specific Issues

### Safari-Specific
- [ ] Date inputs work
- [ ] Flexbox bugs addressed
- [ ] Smooth scrolling works
- [ ] Font rendering acceptable
- [ ] iOS safe areas respected

### Firefox-Specific
- [ ] Flexbox rendering correct
- [ ] Form styling consistent
- [ ] Animations smooth
- [ ] Scroll behaviour works

### Edge-Specific
- [ ] CSS Grid works
- [ ] Modern CSS features work
- [ ] JavaScript features work

## Testing Tools

### Free Tools
- Browser DevTools
- BrowserStack Free Trial
- LambdaTest Free Tier
- Responsively App (local)

### Paid Tools
- BrowserStack
- Sauce Labs
- LambdaTest

## Issue Documentation

When you find a browser issue:

```markdown
### Issue: [Brief Description]

**Browser:** [Browser name and version]
**Device/OS:** [Device type and OS]
**Severity:** [Critical/High/Medium/Low]

**Description:**
[Detailed description of the issue]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Screenshot:**
[Attach screenshot if helpful]

**Workaround:**
[Temporary fix if any]

**Fix:**
[Permanent solution]
```

## Quick Browser Test

For rapid testing (10 minutes):

1. **Chrome:** Full functionality test
2. **Safari:** Visual and interaction test
3. **Firefox:** Quick visual check
4. **Mobile (DevTools):** Responsive test at 3 sizes

## Comprehensive Browser Test

For thorough testing (1 hour):

1. Test all browsers systematically
2. Test on real devices if available
3. Document all issues found
4. Create fixes for critical issues
5. Retest after fixes applied

## Related Commands
- **@ux-audit**: User experience review
- **@accessibility-audit**: Accessibility testing
- **@pre-flight**: Pre-deployment checks

---

*Last Updated: 16/10/2025*

