---
name: Update Sitemap
description: Regenerate sitemap.xml with current content including all pages, case studies, and static assets with proper priority and change frequency
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["update-sitemap", "sitemap", "regen-sitemap"]
---

# Update Sitemap

Regenerates the sitemap.xml file with current site content for search engine crawling and indexation.

## Sitemap Purpose

- Helps search engines discover all pages
- Indicates page priority and update frequency
- Improves SEO and indexation
- Required for Google Search Console

## Manual Sitemap Creation

### Basic Sitemap Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-10-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/portfolio.html</loc>
    <lastmod>2025-10-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

### Priority Guidelines

- **1.0** - Homepage
- **0.8** - Main pages (Portfolio, About)
- **0.6** - Case studies
- **0.4** - Supporting pages

### Change Frequency

- **daily** - News/blog (if applicable)
- **weekly** - Portfolio, actively updated pages
- **monthly** - Homepage, about
- **yearly** - Static content

## Automated Sitemap Generation

### Option 1: Node.js Script

```javascript
// generate-sitemap.js
const fs = require('fs');
const path = require('path');

const domain = 'https://yourdomain.com';
const pages = [
  { url: '/', priority: 1.0, changefreq: 'monthly' },
  { url: '/portfolio.html', priority: 0.8, changefreq: 'weekly' }
];

// Add case studies
const caseStudiesDir = './case-studies';
const files = fs.readdirSync(caseStudiesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const slug = file.replace('.md', '');
  pages.push({
    url: `/case-study/${slug}.html`,
    priority: 0.6,
    changefreq: 'monthly'
  });
});

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('sitemap.xml', xml);
console.log('✅ Sitemap generated successfully');
```

Run: `node generate-sitemap.js`

### Option 2: Online Generator

Use: https://www.xml-sitemaps.com/
- Enter your domain
- Let it crawl your site
- Download generated sitemap.xml
- Place in project root

## Sitemap Validation

### Check Sitemap Validity

1. **XML Syntax**
   - Use online validator: https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - Or XML editor with validation

2. **Sitemap Requirements**
   - [ ] Valid XML format
   - [ ] All URLs absolute (full domain)
   - [ ] All URLs accessible (200 status)
   - [ ] File size < 50MB
   - [ ] Max 50,000 URLs

3. **Test Sitemap**
   ```bash
   # Check sitemap accessible
   curl https://yourdomain.com/sitemap.xml
   
   # Validate with xmllint
   xmllint --noout sitemap.xml
   ```

## Submit to Search Engines

### Google Search Console

1. Go to: https://search.google.com/search-console
2. Select your property
3. Navigate to: Sitemaps
4. Enter: `sitemap.xml`
5. Click Submit

### Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Select your site
3. Navigate to: Sitemaps
4. Enter: `https://yourdomain.com/sitemap.xml`
5. Click Submit

### robots.txt Reference

Add sitemap location to robots.txt:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## Update Frequency

**When to regenerate:**
- After adding new case studies
- After adding new pages
- After major content updates
- Monthly as routine maintenance

**Automated updates:**
- Run as part of build process
- Trigger on content changes
- Include in deployment workflow

## Sitemap Checklist

- [ ] Sitemap includes all public pages
- [ ] All URLs absolute (with domain)
- [ ] All URLs return 200 status
- [ ] Priorities assigned appropriately
- [ ] Change frequencies set correctly
- [ ] Last modified dates current
- [ ] XML syntax valid
- [ ] File accessible at /sitemap.xml
- [ ] Referenced in robots.txt
- [ ] Submitted to search engines

## Advanced: Sitemap Index

For large sites with multiple sitemaps:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://yourdomain.com/sitemap-pages.xml</loc>
    <lastmod>2025-10-16</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://yourdomain.com/sitemap-case-studies.xml</loc>
    <lastmod>2025-10-16</lastmod>
  </sitemap>
</sitemapindex>
```

## Related Commands
- **@seo-audit**: SEO optimization check
- **@deploy**: Deployment workflow
- **@validate-content**: Content structure validation

---

*Last Updated: 16/10/2025*

