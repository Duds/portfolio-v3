---
name: Performance Audit
description: Analyze site performance, Core Web Vitals, load times, and optimisation opportunities with focus on speed, responsiveness, and user experience
version: 1.0.0
category: audit
last_updated: 16/10/2025
triggers: ["performance-audit", "perf-audit", "speed-test"]
---

# Performance Audit

Analyzes website performance, Core Web Vitals, load times, asset optimisation, and identifies opportunities for speed improvements.

## Core Web Vitals

### Largest Contentful Paint (LCP)
- [ ] LCP < 2.5 seconds (Good)
- [ ] LCP 2.5-4.0 seconds (Needs Improvement)
- [ ] LCP > 4.0 seconds (Poor)
- [ ] Largest element identified and optimised
- [ ] Images preloaded if above fold
- [ ] Server response time optimised

### First Input Delay (FID)
- [ ] FID < 100ms (Good)
- [ ] FID 100-300ms (Needs Improvement)
- [ ] FID > 300ms (Poor)
- [ ] JavaScript execution optimised
- [ ] Long tasks broken up (<50ms)
- [ ] Third-party scripts deferred

### Cumulative Layout Shift (CLS)
- [ ] CLS < 0.1 (Good)
- [ ] CLS 0.1-0.25 (Needs Improvement)
- [ ] CLS > 0.25 (Poor)
- [ ] Image dimensions specified
- [ ] Font loading optimised
- [ ] No injected content causing shifts

## Performance Metrics

### Page Load
- [ ] Time to First Byte (TTFB) < 600ms
- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Speed Index < 3.4s
- [ ] Time to Interactive (TTI) < 3.8s
- [ ] Total Blocking Time (TBT) < 200ms

### Resource Sizes
- [ ] Total page size < 1MB (compressed)
- [ ] HTML size < 50KB
- [ ] CSS size < 100KB
- [ ] JavaScript size < 200KB
- [ ] Images optimised (WebP with fallbacks)

### Network
- [ ] HTTP requests < 50
- [ ] DNS lookups minimised
- [ ] Keep-alive connections enabled
- [ ] Compression enabled (gzip/brotli)
- [ ] CDN utilised for static assets

## Asset Optimisation

### Images
- [ ] Images compressed (TinyPNG, ImageOptim)
- [ ] Appropriate formats (WebP, JPEG, SVG)
- [ ] Responsive images with srcset
- [ ] Lazy loading for below-fold images
- [ ] No oversized images
- [ ] Dimensions specified in HTML

### Fonts
- [ ] Font files optimised (WOFF2)
- [ ] Font loading strategy (font-display: swap)
- [ ] Preconnect to font CDNs
- [ ] Subset fonts if possible
- [ ] Limit number of font weights

### CSS
- [ ] Critical CSS inlined
- [ ] CSS minified
- [ ] Unused CSS removed
- [ ] CSS loaded non-blocking
- [ ] CSS variables used efficiently

### JavaScript
- [ ] JavaScript minified
- [ ] Code splitting implemented
- [ ] Defer non-critical JavaScript
- [ ] Remove unused code
- [ ] Tree-shaking enabled

## Caching Strategy
- [ ] Browser caching configured
- [ ] Cache headers set appropriately
- [ ] Service worker for offline (if applicable)
- [ ] Static assets versioned
- [ ] CDN caching configured

## Testing Tools

**Run these tests:**
- Lighthouse: `lighthouse https://yoursite.com`
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://webpagetest.org/
- Chrome DevTools Performance panel

**Target Scores:**
- Lighthouse Performance: 90+
- PageSpeed Insights: 90+ (mobile and desktop)

## Optimisation Checklist

- [ ] Images compressed and optimised
- [ ] Fonts loaded efficiently
- [ ] Critical CSS inlined
- [ ] JavaScript deferred
- [ ] Resources minified
- [ ] Caching configured
- [ ] CDN utilised
- [ ] Lazy loading implemented
- [ ] No render-blocking resources
- [ ] Server response time < 600ms

## Related Commands
- **@accessibility-audit**: Accessibility review
- **@seo-audit**: SEO optimisation
- **@pre-flight**: Pre-deployment check

---

*Last Updated: 16/10/2025*

