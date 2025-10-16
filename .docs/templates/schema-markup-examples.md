# Schema Markup Examples

## Overview

This document provides comprehensive schema markup examples for the Dale Rogers portfolio website. All examples use JSON-LD format (recommended by Google) and follow Schema.org vocabulary standards.

**Last Updated:** 15 October 2025

---

## Table of Contents

1. [Person Schema (Homepage)](#person-schema-homepage)
2. [WebSite Schema](#website-schema)
3. [Article Schema (Case Studies)](#article-schema-case-studies)
4. [BreadcrumbList Schema](#breadcrumblist-schema)
5. [CollectionPage Schema (Portfolio)](#collectionpage-schema-portfolio)
6. [Service Schema](#service-schema)
7. [FAQPage Schema](#faqpage-schema)
8. [Review Schema (Testimonials)](#review-schema-testimonials)
9. [Organization Schema](#organization-schema)
10. [Implementation Guidelines](#implementation-guidelines)

---

## Person Schema (Homepage)

**Use Case:** Homepage - establishes Dale Rogers as an entity with expertise, credentials, and services offered.

**Location:** `index.html` within `<head>` section

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dale Rogers",
  "alternateName": ["Dale Rogers Service Design", "Dale Rogers Canberra"],
  "jobTitle": "Service Designer",
  "description": "Service designer specialising in translating strategy into executable service models for government and complex organisations. 15 years designing frameworks that work with imperfect people, processes, and technology.",
  "url": "https://dalerogers.com.au",
  "image": "https://dalerogers.com.au/assets/images/dale-rogers-profile.jpg",
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
      "Policy Translation",
      "Regulatory Service Design",
      "Stakeholder Co-Design",
      "Framework Development"
    ],
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": 180
    }
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
    },
    {
      "@type": "Thing",
      "name": "Regulatory Service Design"
    },
    {
      "@type": "Thing",
      "name": "Stakeholder Co-Design"
    },
    {
      "@type": "Thing",
      "name": "Systems Thinking"
    },
    {
      "@type": "Thing",
      "name": "Critical Control Thinking"
    },
    {
      "@type": "Thing",
      "name": "Digital Transformation"
    }
  ],
  "areaServed": [
    {
      "@type": "Place",
      "name": "Government"
    },
    {
      "@type": "Place",
      "name": "Regulated Organisations"
    },
    {
      "@type": "Place",
      "name": "Higher Education"
    },
    {
      "@type": "Place",
      "name": "Public Sector"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Experience",
      "name": "15 Years Service Design Experience"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Education",
      "name": "Bachelor of Laws",
      "educationalLevel": "Bachelor's Degree"
    }
  ],
  "workExample": [
    {
      "@type": "CreativeWork",
      "name": "Antarctic Division Safety Protocol Service",
      "url": "https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html",
      "description": "Service design for safety protocol delivery in extreme isolation. Achieved 100% uptime during 6-month Antarctic winter.",
      "datePublished": "2019",
      "creator": {
        "@type": "Person",
        "name": "Dale Rogers"
      }
    },
    {
      "@type": "CreativeWork",
      "name": "ASIC Regulatory Assessment Framework",
      "url": "https://dalerogers.com.au/case-studies/asic-fit-and-proper-person-test.html",
      "description": "Regulatory service design for compliance assessment. Reduced processing time by 45% and increased user satisfaction by 78%.",
      "datePublished": "2023",
      "creator": {
        "@type": "Person",
        "name": "Dale Rogers"
      }
    },
    {
      "@type": "CreativeWork",
      "name": "Rio Tinto Program Governance Framework",
      "url": "https://dalerogers.com.au/case-studies/rio-tinto-bespoke-pmo.html",
      "description": "Enterprise governance framework improving project delivery success by 35%.",
      "datePublished": "2020",
      "creator": {
        "@type": "Person",
        "name": "Dale Rogers"
      }
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Service Design & Strategy",
        "description": "User research, service blueprinting, journey mapping, and framework development for government and complex organisations.",
        "provider": {
          "@type": "Person",
          "name": "Dale Rogers"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Australia"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://dalerogers.com.au",
          "availableLanguage": "en-AU"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Policy Translation",
        "description": "Translating strategy, policy, and regulatory requirements into executable service models and governance frameworks.",
        "provider": {
          "@type": "Person",
          "name": "Dale Rogers"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Regulatory Service Design",
        "description": "Service frameworks for complex regulatory environments, compliance assessment, and multi-stakeholder coordination.",
        "provider": {
          "@type": "Person",
          "name": "Dale Rogers"
        }
      }
    }
  ]
}
</script>
```

---

## WebSite Schema

**Use Case:** Homepage - enables site search and establishes website entity.

**Location:** `index.html` within `<head>` section (can combine with Person schema in array)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Dale Rogers - Service Design",
  "alternateName": "Dale Rogers Portfolio",
  "url": "https://dalerogers.com.au",
  "description": "Service design for government and complex organisations. Policy translation, regulatory service design, and service frameworks.",
  "inLanguage": "en-AU",
  "author": {
    "@type": "Person",
    "name": "Dale Rogers",
    "url": "https://dalerogers.com.au"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://dalerogers.com.au/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

**Note:** Implement site search functionality if using SearchAction, or remove this property if not applicable.

---

## Article Schema (Case Studies)

**Use Case:** Case study pages - improves search appearance and enables rich results.

**Location:** Each case study HTML file within `<head>` section

### Example: Antarctic Doctrine Application

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Designing Safety Protocol Delivery for Extreme Isolation",
  "alternativeHeadline": "Antarctic Division Safety Protocol Service",
  "image": [
    "https://dalerogers.com.au/assets/images/case-studies/antarctic-cover-1x1.jpg",
    "https://dalerogers.com.au/assets/images/case-studies/antarctic-cover-4x3.jpg",
    "https://dalerogers.com.au/assets/images/case-studies/antarctic-cover-16x9.jpg"
  ],
  "author": {
    "@type": "Person",
    "name": "Dale Rogers",
    "url": "https://dalerogers.com.au",
    "sameAs": [
      "https://www.linkedin.com/in/dalerogers"
    ]
  },
  "publisher": {
    "@type": "Person",
    "name": "Dale Rogers",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dalerogers.com.au/assets/images/logo.png",
      "width": 600,
      "height": 60
    }
  },
  "datePublished": "2019-12-01",
  "dateModified": "2025-10-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html"
  },
  "description": "Service design for safety protocol delivery in extreme isolation. Research, field testing, and workflow design achieved 100% uptime during 6-month Antarctic winter with 78% improvement in protocol adherence.",
  "articleBody": "Expeditioners face unique challenges accessing safety-critical information: 6-month winter isolation with no external connectivity, extreme environment requiring immediate access to safety protocols...",
  "about": [
    {
      "@type": "Thing",
      "name": "Service Design",
      "sameAs": "https://en.wikipedia.org/wiki/Service_design"
    },
    {
      "@type": "Thing",
      "name": "User Research"
    },
    {
      "@type": "Thing",
      "name": "Safety Systems"
    },
    {
      "@type": "Thing",
      "name": "Offline-First Architecture"
    }
  ],
  "keywords": "service design, user research, Antarctic, safety protocols, government, offline applications, extreme environments, field testing, Australian Antarctic Division",
  "articleSection": "Case Study",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Dale Rogers - Service Design",
    "url": "https://dalerogers.com.au"
  },
  "mentions": [
    {
      "@type": "Organization",
      "name": "Australian Antarctic Division",
      "sameAs": "https://www.antarctica.gov.au/"
    }
  ],
  "workExample": {
    "@type": "CreativeWork",
    "name": "Antarctic Safety Protocol Application",
    "description": "Offline-first service delivery platform for extreme isolation"
  }
}
</script>
```

### Example: ASIC Regulatory Assessment

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ASIC Regulatory Assessment Framework",
  "alternativeHeadline": "AI-Powered Compliance Service Design",
  "image": "https://dalerogers.com.au/assets/images/case-studies/asic-cover.jpg",
  "author": {
    "@type": "Person",
    "name": "Dale Rogers",
    "url": "https://dalerogers.com.au"
  },
  "publisher": {
    "@type": "Person",
    "name": "Dale Rogers"
  },
  "datePublished": "2023-06-01",
  "dateModified": "2025-10-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://dalerogers.com.au/case-studies/asic-fit-and-proper-person-test.html"
  },
  "description": "Service design for regulatory compliance assessment. Process mapping and assessment framework design reduced processing time by 45% and increased user satisfaction by 78%.",
  "about": [
    {
      "@type": "Thing",
      "name": "Regulatory Service Design"
    },
    {
      "@type": "Thing",
      "name": "Government Services"
    },
    {
      "@type": "Thing",
      "name": "Compliance Framework"
    },
    {
      "@type": "Thing",
      "name": "AI Integration"
    }
  ],
  "keywords": "regulatory service design, ASIC, compliance assessment, government services, AI integration, process mapping, assessment framework",
  "articleSection": "Case Study",
  "mentions": [
    {
      "@type": "GovernmentOrganization",
      "name": "Australian Securities and Investments Commission",
      "alternateName": "ASIC",
      "sameAs": "https://asic.gov.au/"
    }
  ]
}
</script>
```

---

## BreadcrumbList Schema

**Use Case:** Case study pages and portfolio page - shows navigation hierarchy in search results.

**Location:** Case study and portfolio HTML files within `<head>` section

### Example: Case Study Page

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

### Example: Portfolio Page

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
    }
  ]
}
</script>
```

---

## CollectionPage Schema (Portfolio)

**Use Case:** Portfolio page - establishes collection of work examples.

**Location:** `portfolio.html` within `<head>` section

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Service Design Portfolio | Dale Rogers",
  "description": "Service frameworks and strategies for government, regulatory, and complex organisations. Policy translation, service blueprinting, and governance design.",
  "url": "https://dalerogers.com.au/portfolio.html",
  "inLanguage": "en-AU",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Dale Rogers - Service Design",
    "url": "https://dalerogers.com.au"
  },
  "author": {
    "@type": "Person",
    "name": "Dale Rogers",
    "url": "https://dalerogers.com.au"
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Service Design Projects",
    "numberOfItems": 10,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Antarctic Division Safety Protocol Service",
          "url": "https://dalerogers.com.au/case-studies/antarctic-doctrine-application.html",
          "description": "Service design for safety protocol delivery in extreme isolation. Achieved 100% uptime during 6-month Antarctic winter.",
          "image": "https://dalerogers.com.au/assets/images/case-studies/antarctic-thumb.jpg",
          "datePublished": "2019",
          "creator": {
            "@type": "Person",
            "name": "Dale Rogers"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "Rio Tinto Program Governance Framework",
          "url": "https://dalerogers.com.au/case-studies/rio-tinto-bespoke-pmo.html",
          "description": "Enterprise governance framework improving project delivery success by 35%.",
          "image": "https://dalerogers.com.au/assets/images/case-studies/rio-tinto-thumb.jpg",
          "datePublished": "2020"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "ASIC Regulatory Assessment Framework",
          "url": "https://dalerogers.com.au/case-studies/asic-fit-and-proper-person-test.html",
          "description": "Regulatory service design reducing processing time by 45%.",
          "image": "https://dalerogers.com.au/assets/images/case-studies/asic-thumb.jpg",
          "datePublished": "2023"
        }
      }
      // Add remaining projects...
    ]
  }
}
</script>
```

---

## Service Schema

**Use Case:** Services section - defines offered services for rich results.

**Location:** `index.html` or dedicated services page within `<head>` section

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Service Design & Strategy",
  "provider": {
    "@type": "Person",
    "name": "Dale Rogers",
    "url": "https://dalerogers.com.au",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Canberra",
      "addressRegion": "ACT",
      "addressCountry": "AU"
    }
  },
  "description": "User research, service blueprinting, journey mapping, and framework development. Translating policy intent and user needs into executable service models for government and complex organisations.",
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://dalerogers.com.au",
    "servicePhone": "+61400944492",
    "availableLanguage": "en-AU"
  },
  "category": [
    "Service Design",
    "User Research",
    "Service Blueprinting",
    "Journey Mapping",
    "Framework Development"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": [
      "Government Organisations",
      "Regulatory Bodies",
      "Complex Organisations",
      "Higher Education"
    ]
  }
}
</script>
```

### Multiple Services Example

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["Service", "ItemList"],
  "name": "Service Design Services",
  "provider": {
    "@type": "Person",
    "name": "Dale Rogers"
  },
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Service Design & Strategy",
      "description": "User research, service blueprinting, journey mapping, framework development",
      "serviceType": "Consulting"
    },
    {
      "@type": "Service",
      "name": "Policy Translation",
      "description": "Translating strategy and policy into executable service models and governance frameworks",
      "serviceType": "Consulting"
    },
    {
      "@type": "Service",
      "name": "Regulatory Service Design",
      "description": "Service frameworks for complex regulatory environments and compliance assessment",
      "serviceType": "Consulting"
    }
  ]
}
</script>
```

---

## FAQPage Schema

**Use Case:** FAQ section - enables rich results in search with expandable questions.

**Location:** FAQ section of homepage or dedicated FAQ page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is service design for government organisations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Service design for government involves user research with stakeholders, policy analysis, service blueprinting, and framework development that accounts for regulatory requirements, multi-stakeholder coordination, and governance needs. It translates strategic intent into executable service models that enable consistent delivery across complex organisations."
      }
    },
    {
      "@type": "Question",
      "name": "What is policy translation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Policy translation is the process of translating strategic intent, policy requirements, and regulatory frameworks into executable service models. It bridges the gap between policy documents and operational delivery, creating governance frameworks that enable consistent implementation across complex organisations."
      }
    },
    {
      "@type": "Question",
      "name": "How do you approach service design for complex organisations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our approach follows four phases: Discover (user research and stakeholder engagement), Define (synthesise insights into strategic frameworks), Design (co-create solutions through iterative prototyping), and Deliver (implement sustainable solutions with clear governance). We design services that work with imperfect people, processes, and technology—not theoretical perfection."
      }
    },
    {
      "@type": "Question",
      "name": "What industries do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We primarily work with government departments, regulatory organisations, higher education institutions, and complex enterprises. Sectors include: federal and state government, environmental regulation, higher education, utilities, mining and resources, and infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "Where are you located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based in Canberra, Australia. Available for projects nationally and internationally, with particular focus on Australian government departments, ACT organisations, and federal regulatory bodies."
      }
    }
  ]
}
</script>
```

---

## Review Schema (Testimonials)

**Use Case:** Client testimonials - enables review stars in search results.

**Location:** Testimonials/results section

**Note:** Only use if you have actual client reviews/testimonials with permission.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Service Design & Strategy",
    "provider": {
      "@type": "Person",
      "name": "Dale Rogers"
    }
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "Australian Antarctic Division"
  },
  "reviewBody": "Dale's service design work for our safety protocol delivery achieved exceptional results—100% availability during 6-month Antarctic winter isolation with significant improvement in protocol adherence.",
  "datePublished": "2019-12-15"
}
</script>
```

---

## Organization Schema

**Use Case:** If operating as business entity (alternative to Person schema).

**Location:** Homepage within `<head>` section

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dale Rogers Service Design",
  "alternateName": "Dale Rogers Consulting",
  "url": "https://dalerogers.com.au",
  "logo": "https://dalerogers.com.au/assets/images/logo.png",
  "description": "Service design for government and complex organisations. Policy translation, regulatory service design, and service frameworks.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Canberra",
    "addressRegion": "ACT",
    "addressCountry": "AU"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61400944492",
    "contactType": "customer service",
    "email": "hello@dalerogers.com.au",
    "availableLanguage": "en-AU",
    "areaServed": "AU"
  },
  "sameAs": [
    "https://www.linkedin.com/in/dalerogers"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dale Rogers"
  },
  "knowsAbout": [
    "Service Design",
    "Policy Translation",
    "Regulatory Service Design",
    "Service Blueprinting",
    "User Research"
  ]
}
</script>
```

---

## Implementation Guidelines

### General Best Practices

1. **JSON-LD Format**
   - Always use JSON-LD (not Microdata or RDFa)
   - Place in `<head>` section or end of `<body>`
   - Use `<script type="application/ld+json">` tags

2. **Multiple Schema Types**
   - Can include multiple schema blocks per page
   - Related schemas can reference each other
   - Use consistent naming and URLs

3. **Required vs. Recommended Properties**
   - Always include required properties
   - Include recommended properties for better rich results
   - Test with Google Rich Results Test

4. **Image Requirements**
   - Provide multiple image sizes for Article schema
   - Images must be crawlable (not blocked in robots.txt)
   - Use absolute URLs
   - Image dimensions: 1200px minimum width

### Validation Process

**Before Deploying:**

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Paste HTML or enter live URL
   - Check for errors and warnings
   - Verify eligible for rich results

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates syntax and structure
   - Identifies missing recommended properties

3. **Google Search Console**
   - Submit sitemap after adding schema
   - Monitor "Enhancements" report
   - Check for schema-related errors
   - Request indexing for updated pages

### Common Errors to Avoid

❌ **Don't:**
- Use relative URLs (always absolute)
- Forget datePublished/dateModified
- Use placeholder content in schema
- Mix different schema formats on same page
- Block schema-marked images in robots.txt
- Use schema for content not visible on page

✅ **Do:**
- Use absolute URLs (https://dalerogers.com.au/...)
- Update dateModified when content changes
- Use real, accurate data only
- Maintain consistency across pages
- Keep schema in sync with visible content
- Validate before deploying

### Schema Priority by Page

| Page | Schema Types | Priority |
|------|--------------|----------|
| Homepage | Person, WebSite | P0 |
| Portfolio | CollectionPage, BreadcrumbList | P1 |
| Case Studies | Article, BreadcrumbList | P1 |
| Services Section | Service (multiple) | P2 |
| FAQ Section | FAQPage | P2 |
| Testimonials | Review (if applicable) | P3 |

---

## Testing Checklist

### Before Publishing:

- [ ] **Syntax Valid**
  - [ ] Valid JSON format
  - [ ] Proper quotes and commas
  - [ ] No trailing commas

- [ ] **Data Accurate**
  - [ ] All URLs absolute and correct
  - [ ] Dates in ISO 8601 format (YYYY-MM-DD)
  - [ ] Email and phone correct
  - [ ] Image URLs accessible

- [ ] **Schema Valid**
  - [ ] Tested in Google Rich Results Test
  - [ ] Zero errors
  - [ ] Warnings addressed or justified
  - [ ] Eligible for rich results (if applicable)

- [ ] **Content Sync**
  - [ ] Schema data matches visible content
  - [ ] Descriptions accurate
  - [ ] No placeholder content
  - [ ] Author/publisher information correct

### Post-Publishing:

- [ ] **Search Console**
  - [ ] Submitted sitemap
  - [ ] Requested indexing
  - [ ] Monitored "Enhancements" report
  - [ ] No schema errors reported

- [ ] **Live Testing**
  - [ ] Test live URL in Rich Results Test
  - [ ] Verify schema appears in page source
  - [ ] Check for console errors
  - [ ] Validate on actual devices

---

## Maintenance Schedule

### Monthly:
- [ ] Validate schema on all pages
- [ ] Update dateModified dates on changed pages
- [ ] Check for schema errors in Search Console

### Quarterly:
- [ ] Review and update workExample items
- [ ] Add new case studies to schema
- [ ] Update stats and metrics in descriptions
- [ ] Test for new schema opportunities

### Annually:
- [ ] Comprehensive schema audit
- [ ] Update experience/credential years
- [ ] Review schema.org for new types
- [ ] Competitor schema analysis

---

## Quick Reference: Schema by Page Type

### Homepage (index.html)
```
Required: Person, WebSite
Optional: Service, FAQPage, BreadcrumbList
```

### Portfolio Page (portfolio.html)
```
Required: CollectionPage, BreadcrumbList
Optional: ItemList
```

### Case Study Pages
```
Required: Article, BreadcrumbList
Optional: Review (if testimonials)
```

### Resources Section
```
Optional: HowTo, TechArticle, DownloadAction
```

---

## Related Documentation

- `.docs/deployment/seo-implementation-guide.md` - Full SEO implementation procedures
- `.cursor/commands/seo-specialist-audit.md` - SEO audit checklist
- `.docs/templates/keyword-strategy-template.md` - Keyword research and mapping

---

**Last Updated:** 15 October 2025  
**Maintained By:** Development & SEO Team  
**Review Schedule:** Quarterly (with monthly validation checks)


