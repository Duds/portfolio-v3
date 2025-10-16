# SEO Implementation Guide

## Overview

This guide provides comprehensive SEO implementation guidelines for the Dale Rogers portfolio website, covering technical SEO, AI-SEO optimisation, structured data, and content intelligence strategies. It serves as the companion documentation to the `.cursor/commands/seo-specialist-audit.md` audit checklist.

**Target Audience:** Developers, content creators, and SEO specialists implementing or maintaining the portfolio website.

**Last Updated:** 15 October 2025

---

## Table of Contents

1. [Technical SEO Implementation](#technical-seo-implementation)
2. [On-Page SEO Optimisation](#on-page-seo-optimisation)
3. [Structured Data & Schema Markup](#structured-data--schema-markup)
4. [AI-SEO & Semantic Optimisation](#ai-seo--semantic-optimisation)
5. [Image & Media SEO](#image--media-seo)
6. [Performance Optimisation](#performance-optimisation)
7. [Content Strategy](#content-strategy)
8. [Analytics & Monitoring](#analytics--monitoring)
9. [Maintenance Procedures](#maintenance-procedures)

---

## Technical SEO Implementation

### Meta Tags Structure

Every page MUST include comprehensive meta tags in the `<head>` section:

```html
<!DOCTYPE html>
<html lang="en-AU">
<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[150-160 character compelling description]">
    <meta name="author" content="Dale Rogers">
    <meta name="keywords" content="[target keywords, comma-separated]">
    
    <!-- Title (50-60 characters optimal) -->
    <title>[Primary Keyword] | Dale Rogers</title>
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://dalerogers.com.au/[page-path]">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://dalerogers.com.au/[page-path]">
    <meta property="og:title" content="[Title for social sharing]">
    <meta property="og:description" content="[Description for social sharing]">
    <meta property="og:image" content="https://dalerogers.com.au/assets/images/og-image.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://dalerogers.com.au/[page-path]">
    <meta property="twitter:title" content="[Title for Twitter]">
    <meta property="twitter:description" content="[Description for Twitter]">
    <meta property="twitter:image" content="https://dalerogers.com.au/assets/images/twitter-image.jpg">
</head>
```

**Implementation Checklist:**
- ✅ Title tags 50-60 characters
- ✅ Meta descriptions 150-160 characters
- ✅ Keywords naturally integrated
- ✅ Open Graph images 1200x630px
- ✅ Twitter Card images 1200x600px
- ✅ Canonical URLs specified
- ✅ Language attribute `lang="en-AU"`

### URL Structure

**Best Practices:**
- Use descriptive, keyword-rich URLs
- Use hyphens (not underscores) as separators
- Keep URLs lowercase
- Keep length under 100 characters
- Maintain logical hierarchy

**Examples:**
```
✅ Good:
https://dalerogers.com.au/
https://dalerogers.com.au/portfolio.html
https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html
https://dalerogers.com.au/case-studies/asic-regulatory-assessment.html

❌ Avoid:
https://dalerogers.com.au/page?id=123
https://dalerogers.com.au/case_studies/ASIC_Project.HTML
https://dalerogers.com.au/p/cs/very-long-url-with-many-words-that-makes-it-difficult-to-read.html
```

### Robots.txt Configuration

**Current Status:** ✅ Implemented

**Review Recommendations:**

```txt
# robots.txt for Dale Rogers - Service Design Practice
# Allow all crawlers access to public content

User-agent: *
Allow: /

# Sitemap location
Sitemap: https://dalerogers.com.au/sitemap.xml

# Disallow admin/private paths
Disallow: /admin/
Disallow: /private/
Disallow: /.git/
Disallow: /.docs/
Disallow: /.cursor/

# Allow CSS and JS (critical for rendering)
Allow: /css/
Allow: /js/

# Disallow query parameters (if not generating unique content)
Disallow: /*?*sort=
Disallow: /*?*filter=

# Rate limiting for specific bots (if needed)
# User-agent: AhrefsBot
# Crawl-delay: 10
```

**Actions Required:**
1. ✅ Add `/admin/` if admin section exists
2. ✅ Add `/.cursor/` to disallow list
3. ✅ Explicitly allow `/css/` and `/js/`
4. ✅ Update domain from `yourwebsite.com` to `dalerogers.com.au`

### XML Sitemap Implementation

**Current Status:** ⚠️ Needs Update

**Issues Identified:**
1. Uses placeholder domain `yourwebsite.com`
2. Includes hash fragments (`#services`, `#work`) which shouldn't be in sitemap
3. Missing case study pages
4. Missing portfolio page
5. Missing `<image:image>` tags for images

**Recommended Sitemap Structure:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    
    <!-- Homepage -->
    <url>
        <loc>https://dalerogers.com.au/</loc>
        <lastmod>2025-10-15</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    
    <!-- Portfolio Page -->
    <url>
        <loc>https://dalerogers.com.au/portfolio.html</loc>
        <lastmod>2025-10-15</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    
    <!-- Case Studies (high priority content) -->
    <url>
        <loc>https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html</loc>
        <lastmod>2025-10-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <url>
        <loc>https://dalerogers.com.au/case-studies/asic-fit-and-proper-person-test.html</loc>
        <lastmod>2025-10-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    
    <!-- Additional case studies... -->
    
</urlset>
```

**Actions Required:**
1. ❌ Remove hash fragments (`#services`, `#work`, etc.) - these aren't indexable
2. ✅ Add all case study pages
3. ✅ Add portfolio.html page
4. ✅ Update domain to `dalerogers.com.au`
5. ✅ Update lastmod dates to reflect actual modification dates
6. ✅ Consider image sitemap for case study images

**Note:** Hash fragments (`#section`) are used for client-side navigation within a single-page app. Search engines index the base URL, not the fragments. Only include full page URLs in sitemap.

---

## On-Page SEO Optimisation

### Heading Hierarchy

**Rules:**
1. Single `<h1>` per page containing primary keyword
2. Logical heading structure (H1 → H2 → H3, no skips)
3. Headings contain semantic keywords
4. Headings are descriptive and meaningful

**Current Homepage Structure:**

```html
<h1>Translating strategy into executable service models...</h1>
<h2>Service Design Capabilities</h2>
<h2>What I Do</h2>
  <h3>Service Design & Strategy</h3>
  <h3>Policy Translation</h3>
  <h3>Systems Thinking</h3>
<h2>Featured Frameworks</h2>
  <h3>[Case Study Title]</h3>
<h2>Our Approach</h2>
  <h3>Discover</h3>
  <h3>Define</h3>
  <h3>Design</h3>
  <h3>Deliver</h3>
```

**Optimisation:**
- ✅ H1 contains primary keyword phrase
- ✅ H2s section the page logically
- ✅ H3s provide detail within sections
- ✅ No heading levels skipped

### Keyword Implementation

**Primary Keyword Locations:**
1. **Title tag** - Natural inclusion at beginning
2. **H1** - Primary keyword phrase
3. **First 100 words** - Early mention
4. **URL** - If practical (service-design, portfolio)
5. **Meta description** - Natural inclusion
6. **Image alt text** - Descriptive with keywords
7. **Subheadings (H2, H3)** - Semantic variations

**Keyword Density Guidelines:**
- Primary keyword: 1-2% density
- Natural language priority
- Use LSI (Latent Semantic Indexing) keywords
- Include long-tail variations

**Example - Homepage Keywords:**
- **Primary:** service design government complex organisations
- **Secondary:** policy translation, regulatory service design, service frameworks
- **Long-tail:** translating strategy into executable service models
- **LSI:** user research, service blueprinting, journey mapping, stakeholder engagement

### Internal Linking Strategy

**Best Practices:**
1. Link to important pages from multiple locations
2. Use descriptive anchor text (no "click here")
3. Maintain reasonable link equity distribution
4. Ensure all pages accessible within 3 clicks from homepage

**Homepage Internal Links:**
```html
<!-- Navigation Links -->
<a href="index.html#services">Services</a>
<a href="portfolio.html">Portfolio</a>
<a href="index.html#approach">Approach</a>
<a href="index.html#resources">Resources</a>
<a href="index.html#about">About</a>
<a href="index.html#contact">Contact</a>

<!-- Contextual Links -->
<a href="portfolio.html">View All Frameworks</a>
<a href="case-studies/antarctic-doctrine-application.html">View Case Study</a>
<a href="index.html#contact">Discuss Your Project</a>

<!-- Footer Links -->
<a href="index.html">Home</a>
<a href="portfolio.html">Portfolio</a>
<a href="index.html#services">Services</a>
```

**Recommendations:**
1. Add "View Portfolio" link from homepage to portfolio.html
2. Add "View Case Study" links to all featured frameworks
3. Add breadcrumb navigation to case studies
4. Add "Related Projects" section within case studies

---

## Structured Data & Schema Markup

### Person Schema (Homepage)

**Current Status:** ✅ Implemented

**Recommendations:**
- Expand `knowsAbout` with more specific skills
- Add `award` if applicable
- Add `workExample` linking to case studies
- Add `hasOccupation` with structured data

**Enhanced Person Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dale Rogers",
  "jobTitle": "Service Designer",
  "description": "Service designer specialising in translating strategy into executable service models for government and complex organisations. 15 years designing frameworks that work with imperfect people, processes, and technology.",
  "url": "https://dalerogers.com.au",
  "image": "https://dalerogers.com.au/assets/images/dale-rogers.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Canberra",
    "addressRegion": "ACT",
    "addressCountry": "AU"
  },
  "email": "hello@dalerogers.com.au",
  "telephone": "+61400944492",
  "sameAs": [
    "https://www.linkedin.com/in/dalerogers"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Monash University",
    "sameAs": "https://www.monash.edu/"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Service Designer",
    "occupationalCategory": "15-1299.09",
    "skills": [
      "Service Design",
      "Service Blueprinting",
      "User Research",
      "Journey Mapping",
      "Policy Translation"
    ]
  },
  "knowsAbout": [
    {
      "@type": "Thing",
      "name": "Service Design",
      "sameAs": "https://en.wikipedia.org/wiki/Service_design"
    },
    {
      "@type": "Thing",
      "name": "Service Blueprinting"
    },
    {
      "@type": "Thing",
      "name": "User Research"
    },
    {
      "@type": "Thing",
      "name": "Journey Mapping"
    },
    {
      "@type": "Thing",
      "name": "Policy Translation"
    }
  ],
  "workExample": [
    {
      "@type": "CreativeWork",
      "name": "Antarctic Division Safety Protocol Service",
      "url": "https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html",
      "description": "Service design for safety protocol delivery in extreme isolation"
    },
    {
      "@type": "CreativeWork",
      "name": "ASIC Regulatory Assessment Framework",
      "url": "https://dalerogers.com.au/case-studies/asic-fit-and-proper-person-test.html",
      "description": "Regulatory service design for compliance assessment"
    }
  ]
}
```

### Case Study Schema Markup

**Add to each case study page:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Designing Safety Protocol Delivery for Extreme Isolation",
  "alternativeHeadline": "Antarctic Division Safety Protocol Service",
  "image": "https://dalerogers.com.au/assets/images/case-studies/antarctic-cover.jpg",
  "author": {
    "@type": "Person",
    "name": "Dale Rogers",
    "url": "https://dalerogers.com.au"
  },
  "publisher": {
    "@type": "Person",
    "name": "Dale Rogers",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dalerogers.com.au/assets/images/logo.png"
    }
  },
  "datePublished": "2019-12-01",
  "dateModified": "2025-10-15",
  "description": "Service design for safety protocol delivery in extreme isolation. Research, field testing, and workflow design achieved 100% uptime during 6-month Antarctic winter with 78% improvement in protocol adherence.",
  "articleBody": "[First 200 words of case study content]",
  "about": [
    {
      "@type": "Thing",
      "name": "Service Design"
    },
    {
      "@type": "Thing",
      "name": "User Research"
    },
    {
      "@type": "Thing",
      "name": "Safety Systems"
    }
  ],
  "keywords": "service design, user research, Antarctic, safety protocols, government, offline applications",
  "articleSection": "Case Study"
}
</script>
```

### Portfolio Page Schema

**Add to portfolio.html:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Service Design Portfolio | Dale Rogers",
  "description": "Service frameworks and strategies for government, regulatory, and complex organisations. Policy translation, service blueprinting, and governance design.",
  "url": "https://dalerogers.com.au/portfolio.html",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Antarctic Division Safety Protocol Service",
          "url": "https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html",
          "description": "Service design for safety protocol delivery in extreme isolation"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Rio Tinto Program Governance Framework",
          "url": "https://dalerogers.com.au/case-studies/rio-tinto-bespoke-pmo.html",
          "description": "Service design for multi-site program coordination"
        }
      }
    ]
  }
}
</script>
```

### BreadcrumbList Schema

**Add to case study pages:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://dalerogers.com.au/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Portfolio",
      "item": "https://dalerogers.com.au/portfolio.html"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Antarctic Division Safety Protocol Service",
      "item": "https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html"
    }
  ]
}
</script>
```

---

## AI-SEO & Semantic Optimisation

### Entity-Based Optimisation

**Key Entities to Establish:**
1. **Dale Rogers** (Person)
2. **Service Design** (Concept)
3. **Policy Translation** (Concept)
4. **Regulatory Service Design** (Concept)
5. **Canberra, Australia** (Place)

**Entity Salience Strategy:**
- Mention key entities early and often
- Use consistent entity names across content
- Link entities to authoritative sources (Wikipedia, etc.)
- Define entities clearly in content
- Use structured data to reinforce entities

### Topic Clustering Architecture

**Pillar Content (Comprehensive Pages):**
1. **Homepage** - Service design for government and complex organisations
2. **Portfolio Page** - Service design frameworks and case studies
3. **About Section** - Dale Rogers expertise and background

**Cluster Content (Supporting Pages):**
- Case studies (each focused on specific service design application)
- Resources (technical guides, methodologies)
- Service descriptions (service design, policy translation, systems thinking)

**Internal Linking Strategy:**
- Link from clusters (case studies) to pillar (portfolio page)
- Link related clusters together (similar case studies)
- Use descriptive anchor text with semantic keywords

### LLM-Friendly Content Structure

**Guidelines for AI-Readable Content:**

1. **Front-Load Key Information**
```html
<section id="services">
  <h2>What I Do</h2>
  <p>Service design for complex organisations—translating strategy into 
     frameworks that enable consistent delivery</p>
  <!-- Immediate context setting -->
</section>
```

2. **Use Declarative Statements**
```
✅ Good: "Achieved 100% availability during 6-month Antarctic winter isolation."
❌ Avoid: "We somehow managed to keep things running pretty well."
```

3. **Structure for Extraction**
```html
<div class="results-callout">
  <h3>Impact</h3>
  <div class="results-grid">
    <div class="result-item">
      <span class="result-number">78%</span>
      <span class="result-label">Improvement in safety protocol adherence</span>
    </div>
  </div>
</div>
```

4. **Provide Context Within Sections**
- Each section should be relatively self-contained
- Define acronyms at first use in each major section
- Include relevant background inline

5. **Use Semantic HTML**
```html
<article> for main content
<section> for distinct sections
<aside> for related but tangential content
<figure> and <figcaption> for images with context
```

### Content Vectorisation Best Practices

**For Semantic Search and AI Retrieval:**

1. **Logical Content Chunking**
   - Break content into logical sections (300-500 words)
   - Each chunk addresses a specific subtopic
   - Use headings to clearly label chunks

2. **Semantic Keyword Distribution**
   - Distribute related concepts throughout content
   - Use co-occurring terms naturally
   - Include synonyms and variations

3. **Fact Density**
   - Prioritise substantive content over fluff
   - Include specific metrics and data
   - Provide concrete examples

4. **Clear Topic Boundaries**
   - Use headings to separate topics
   - Don't blend unrelated concepts
   - Transition smoothly between sections

---

## Image & Media SEO

### Image Optimisation Checklist

**Every image must have:**
1. ✅ Descriptive file name (not IMG_1234.jpg)
2. ✅ Alt text (descriptive, 125 characters or fewer)
3. ✅ Appropriate format (WebP with fallbacks)
4. ✅ Compressed file size
5. ✅ Specified dimensions (width/height in HTML)
6. ✅ Lazy loading (for below-fold images)

**File Naming Convention:**

```
✅ Good:
antarctic-station-safety-protocol.webp
asic-regulatory-framework-diagram.webp
dale-rogers-service-design-blueprint.webp

❌ Avoid:
IMG_1234.jpg
image-final-v2.png
photo.jpg
```

### Alt Text Best Practices

**Guidelines:**
1. Describe what the image shows
2. Include target keywords naturally
3. Keep under 125 characters
4. Don't start with "Image of" or "Picture of"
5. Be specific and descriptive

**Examples:**

```html
<!-- Hero section illustration -->
<img src="service-design-framework.webp" 
     alt="Service design framework diagram showing policy translation to implementation"
     width="600" height="400">

<!-- Case study image -->
<img src="antarctic-station-research.webp" 
     alt="Australian Antarctic Division research station in winter isolation"
     width="800" height="450">

<!-- Decorative images -->
<img src="decorative-pattern.svg" 
     alt=""
     role="presentation">
```

### Image File Optimisation

**Target Specifications:**
- **Hero images:** Max 200KB (WebP), 1920px width
- **Case study covers:** Max 150KB (WebP), 1200px width
- **Thumbnails:** Max 50KB (WebP), 600px width
- **OG images:** 1200x630px, under 300KB
- **Twitter Card images:** 1200x600px, under 200KB

**Optimisation Tools:**
- TinyPNG / TinyJPG
- ImageOptim (macOS)
- Squoosh.app
- Adobe Photoshop Export for Web

**Implementation:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" 
       alt="Descriptive alt text"
       width="800" 
       height="450"
       loading="lazy">
</picture>
```

---

## Performance Optimisation

### Core Web Vitals Targets

**Target Metrics:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Current Implementation:**
✅ Font loading optimised (`font-display: swap`)
✅ Images have dimensions specified
✅ Minimal JavaScript
✅ CSS organised and modular

**Optimisation Checklist:**
- [ ] Implement lazy loading for below-fold images
- [ ] Inline critical CSS
- [ ] Defer non-critical JavaScript
- [ ] Optimise image formats (WebP with fallbacks)
- [ ] Implement resource hints (preconnect, preload)
- [ ] Minimise third-party scripts

### Resource Hints

**Add to `<head>` section:**

```html
<!-- DNS Prefetch for external resources -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">

<!-- Preconnect for critical external resources -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload critical resources -->
<link rel="preload" href="/css/styles.css" as="style">
<link rel="preload" href="/js/main.js" as="script">
<link rel="preload" href="/assets/images/hero-bg.webp" as="image">
```

### Lazy Loading Implementation

**For below-fold images:**

```html
<!-- Native lazy loading -->
<img src="case-study-image.webp" 
     alt="Descriptive alt text"
     loading="lazy"
     width="800"
     height="450">

<!-- Multiple case study images -->
<div class="grid grid-3">
  <img src="project1.webp" alt="Project 1" loading="lazy">
  <img src="project2.webp" alt="Project 2" loading="lazy">
  <img src="project3.webp" alt="Project 3" loading="lazy">
</div>
```

---

## Content Strategy

### Keyword Strategy by Page

See `.docs/templates/keyword-strategy-template.md` for detailed keyword mapping template.

**Homepage Target Keywords:**
- Primary: service design government complex organisations
- Secondary: policy translation, regulatory service design, service frameworks
- Long-tail: translating strategy into executable service models

**Portfolio Page Target Keywords:**
- Primary: service design portfolio, government frameworks
- Secondary: regulatory frameworks, policy implementation
- Long-tail: service design case studies government

**Case Study Pages Target Keywords:**
- Primary: [specific project + service type]
- Secondary: [industry + service design approach]
- Long-tail: [specific problem + solution + outcome]

### Content Freshness Strategy

**Update Frequency:**
- Homepage: Weekly review, update as needed
- Portfolio page: Monthly review, add new projects
- Case studies: Quarterly review, update metrics
- About section: Quarterly review
- Resources: Add new content monthly

**Freshness Signals:**
- Add "Last Updated" dates to case studies
- Update statistics and metrics regularly
- Add recent projects to portfolio
- Publish new technical resources

### E-E-A-T Signals

**Experience:**
- Specific project details and outcomes
- First-hand accounts of challenges and solutions
- Real metrics and data from projects
- Field testing and user research descriptions

**Expertise:**
- 15 years experience prominently displayed
- Detailed methodology descriptions
- Technical depth in case studies
- Specific tools and techniques mentioned

**Authoritativeness:**
- Client names and logos (with permission)
- Specific government departments and organisations
- Industry recognition (if applicable)
- LinkedIn profile linked

**Trustworthiness:**
- Contact information easily accessible
- Professional email address
- About page with background
- Clear privacy policy
- HTTPS throughout site
- Consistent branding and design

---

## Analytics & Monitoring

### Google Search Console Setup

**Setup Steps:**
1. Verify property ownership
2. Submit XML sitemap
3. Set up email notifications
4. Configure URL parameters (if applicable)

**Regular Monitoring Tasks:**
- **Weekly:** Check coverage report for indexation issues
- **Weekly:** Review performance report for ranking changes
- **Monthly:** Analyse search queries and click-through rates
- **Monthly:** Check Core Web Vitals report
- **Quarterly:** Review mobile usability issues

**Key Metrics to Track:**
- Total clicks from organic search
- Average position for target keywords
- Click-through rate (CTR)
- Impressions for brand and non-brand queries
- Coverage status (indexed pages)
- Core Web Vitals status

### Google Analytics 4 Setup

**Implementation:**

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Events to Track:**
- Form submissions (contact form)
- Portfolio filter interactions
- Case study views
- Resource downloads
- External link clicks (LinkedIn, email)
- Scroll depth on key pages

**Custom Dimensions:**
- User type (new vs. returning)
- Case study category viewed
- Portfolio filter used
- Page section engaged with

### Rank Tracking

**Target Keywords to Track:**

**Brand Keywords:**
- Dale Rogers
- Dale Rogers service design
- Dale Rogers Canberra

**Non-Brand Keywords:**
- service design government Australia
- service design Canberra
- policy translation service design
- regulatory service design
- service design consultant government
- government service frameworks
- service blueprinting consultant
- Antarctic service design (niche)

**Local Keywords:**
- service design Canberra
- service designer ACT
- government consultant Canberra

**Tools:**
- Google Search Console (free)
- Ahrefs Rank Tracker
- SEMrush Position Tracking
- Moz Rank Tracker

---

## Maintenance Procedures

### Monthly SEO Maintenance

**Content Updates:**
- [ ] Review and update homepage content
- [ ] Check for broken links (internal and external)
- [ ] Update case study metrics if new data available
- [ ] Review meta descriptions for click-through optimisation
- [ ] Add new case studies or projects

**Technical Checks:**
- [ ] Run Lighthouse audit (aim for 90+ in all categories)
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Review coverage report for indexation issues
- [ ] Verify sitemap.xml is current and submitted
- [ ] Check for 404 errors and fix/redirect

**Analytics Review:**
- [ ] Analyse top-performing pages
- [ ] Identify low-performing content for improvement
- [ ] Review search queries driving traffic
- [ ] Check bounce rate and average session duration
- [ ] Analyse conversion rates from organic traffic

### Quarterly SEO Audit

**Comprehensive Review:**
1. Run full technical SEO audit (use audit command)
2. Competitor analysis (rankings, content, backlinks)
3. Content gap analysis
4. Backlink profile review
5. Schema markup validation
6. Mobile usability testing
7. Page speed optimisation review
8. Local SEO optimisation (if applicable)

**Documentation Updates:**
- Update keyword strategy based on performance
- Document ranking changes and SEO actions taken
- Update this implementation guide as needed
- Create quarterly SEO report

### Schema Markup Validation

**Tools:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console) - Enhancements report

**Validation Schedule:**
- After any schema markup changes
- Monthly validation check
- After major content updates

---

## Quick Reference

### SEO Implementation Priority

**P0 (Critical - Implement Immediately):**
1. Update sitemap.xml with correct domain and pages
2. Update robots.txt with correct domain
3. Add case study pages to sitemap
4. Implement lazy loading for images
5. Add schema markup to case study pages

**P1 (High Priority - Within 1 Week):**
1. Optimise all image alt text
2. Add breadcrumb schema to case studies
3. Enhance Person schema with workExample
4. Implement resource hints (preconnect, dns-prefetch)
5. Create image sitemap

**P2 (Medium Priority - Within 1 Month):**
1. Create keyword strategy document
2. Optimise meta descriptions for CTR
3. Add "Related Projects" internal links
4. Implement Google Analytics 4 with event tracking
5. Set up Google Search Console monitoring

**P3 (Lower Priority - Ongoing):**
1. Content expansion (blog, resources)
2. Backlink building strategy
3. Social media integration
4. Video content creation
5. FAQ schema implementation

### Common SEO Tasks

**Adding a New Case Study:**
1. Create case study HTML file
2. Add Article schema markup
3. Add Breadcrumb schema markup
4. Optimise images (WebP, alt text, file names)
5. Add to sitemap.xml
6. Update lastmod date
7. Add internal links from portfolio page
8. Update homepage featured projects (if hero project)
9. Test with Google Rich Results Test
10. Submit sitemap to Google Search Console

**Updating an Existing Page:**
1. Make content changes
2. Update `lastmod` date in sitemap.xml
3. Update meta description if needed
4. Check for broken links
5. Validate schema markup (if changed)
6. Test Core Web Vitals
7. Submit URL for re-indexing in Google Search Console

---

## Resources

### Tools

**SEO Analysis:**
- [Google Search Console](https://search.google.com/search-console/)
- [Google Analytics 4](https://analytics.google.com/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)

**Schema Markup:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Markup Generator](https://technicalseo.com/tools/schema-markup-generator/)
- [JSON-LD Playground](https://json-ld.org/playground/)

**Image Optimisation:**
- [TinyPNG](https://tinypng.com/)
- [Squoosh.app](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/) (macOS)

**Performance:**
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

### Related Documentation

- `.cursor/commands/seo-specialist-audit.md` - Comprehensive SEO audit checklist
- `.docs/templates/keyword-strategy-template.md` - Keyword mapping template
- `.docs/templates/schema-markup-examples.md` - Schema markup code examples
- `.docs/deployment/DEPLOY_AZURE.md` - Deployment procedures
- `.docs/design/styling-guide.md` - Design system specifications

---

**Last Updated:** 15 October 2025  
**Version:** 1.0  
**Maintained By:** Development Team  
**Review Schedule:** Quarterly


