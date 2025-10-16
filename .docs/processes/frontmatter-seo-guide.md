# Frontmatter & SEO Enhancement Guide

**Purpose:** Document how to add frontmatter metadata to case study markdown files for enhanced SEO  
**Last Updated:** 15 October 2025

---

## Overview

Case study markdown files now support YAML-style frontmatter for SEO metadata. This allows you to control:
- Page title
- Meta description
- Keywords
- Open Graph images
- Twitter card metadata

**Benefits:**
- ✅ Better SEO optimization per case study
- ✅ Custom social media sharing previews
- ✅ Targeted keyword optimization
- ✅ Professional Open Graph images
- ✅ Fallback to automatic extraction if frontmatter not provided

---

## Frontmatter Format

### Syntax

Add frontmatter at the **very top** of your markdown file:

```yaml
---
title: Your Case Study Title
description: Your SEO-optimized description (ideally 120-160 characters)
keywords: keyword1, keyword2, keyword3, service design, etc
ogImage: https://dalerogers.com.au/assets/images/case-studies/your-image.jpg
---

# Your Case Study Heading

[Content starts here...]
```

### Fields

| Field | Required | Purpose | Max Length |
|-------|----------|---------|------------|
| `title` | Optional | SEO title, overrides H1 | 60 chars |
| `description` | Optional | Meta description for search engines | 160 chars |
| `keywords` | Optional | SEO keywords (comma-separated) | N/A |
| `ogImage` | Optional | Open Graph/Twitter card image URL | N/A |

**Note:** All fields are optional. If not provided, the build script will extract from content.

---

## Example: Antarctic Case Study

```yaml
---
title: Designing Safety Protocol Delivery for Extreme Isolation
description: Service design for safety protocols in Antarctic extreme isolation—100% uptime during 6-month winter, 78% improvement in protocol adherence. User research, field testing, offline-first service model.
keywords: service design Antarctica, safety protocols extreme isolation, offline-first service design, field testing user research, Antarctic expeditioner safety, service blueprinting, critical control thinking
ogImage: https://dalerogers.com.au/assets/images/case-studies/antarctic-og.jpg
---

# Designing Safety Protocol Delivery for Extreme Isolation

**Client:** Australian Antarctic Division
```

---

## SEO Best Practices

### Title Optimization

**Good:**
- "Designing Safety Protocol Delivery for Extreme Isolation"
- "ASIC Regulatory Assessment Framework for Financial Services"
- "Border Security Digital Verification Service Design"

**Format:** Action verb + specific service + context/industry

**Bad:**
- "Case Study: Antarctic Project"
- "Our Work for ASIC"
- Generic titles without specificity

### Description Optimization

**Formula:** Service type + client/industry + key outcome + methodology

**Example:**
> "Service design for safety protocols in Antarctic extreme isolation—100% uptime during 6-month winter, 78% improvement in protocol adherence. User research, field testing, offline-first service model."

**Includes:**
- What was designed (safety protocol service)
- Context (Antarctic extreme isolation)
- Key outcomes (100% uptime, 78% improvement)
- Approach (user research, field testing)

### Keyword Selection

**Structure:** Specific to general, long-tail to short-tail

**Example:**
```
service design Antarctica,
safety protocols extreme isolation,
offline-first service design,
field testing user research,
Antarctic expeditioner safety,
service blueprinting,
critical control thinking
```

**Pattern:**
1. Ultra-specific (service design Antarctica)
2. Project-specific (safety protocols extreme isolation)
3. Methodology (offline-first service design, service blueprinting)
4. General capabilities (user research, critical control thinking)

### Open Graph Images

**Requirements:**
- Minimum: 1200x630px (Facebook/LinkedIn)
- Format: JPG or PNG
- File size: <1MB
- Aspect ratio: 1.91:1

**Recommended Path:**
`https://dalerogers.com.au/assets/images/case-studies/[project-name]-og.jpg`

**Fallback:**
If not specified, uses: `https://dalerogers.com.au/assets/images/og-image.jpg`

---

## Implementation Workflow

### Step 1: Add Frontmatter to Markdown File

Open `/case-studies/your-case-study.md` and add frontmatter at the top:

```yaml
---
title: Your SEO-Optimized Title
description: Your compelling meta description with key outcomes and approach
keywords: specific keyword, project keyword, methodology keyword, general capability
ogImage: https://dalerogers.com.au/assets/images/case-studies/your-project.jpg
---
```

### Step 2: Rebuild HTML

Run the build command:
```bash
npm run build:content
```

### Step 3: Verify Output

Check the generated HTML file for:
- `<title>` tag uses frontmatter title
- `<meta name="description">` uses frontmatter description
- `<meta name="keywords">` includes your keywords
- OG tags use frontmatter image

---

## Frontmatter vs. Auto-Extraction

### With Frontmatter (Recommended)

**Advantages:**
- ✅ Full SEO control
- ✅ Optimized titles and descriptions
- ✅ Targeted keywords
- ✅ Custom social sharing images

**Use When:**
- Case study is important/featured
- SEO optimization desired
- Custom social media preview needed

### Without Frontmatter (Fallback)

**Auto-extraction:**
- Title: First H1 heading
- Description: **Challenge:** paragraph or first substantial text
- Keywords: Not included
- OG Image: Default site image

**Use When:**
- Quick case study addition
- SEO less critical
- Default extraction sufficient

---

## All Case Studies Template

### Antarctic Division
```yaml
---
title: Designing Safety Protocol Delivery for Extreme Isolation
description: Service design for safety protocols in Antarctic extreme isolation—100% uptime during 6-month winter, 78% improvement in protocol adherence.
keywords: service design Antarctica, safety protocols, offline-first, user research, service blueprinting
ogImage: https://dalerogers.com.au/assets/images/case-studies/antarctic-og.jpg
---
```

### ASIC
```yaml
---
title: ASIC Regulatory Assessment Framework for Financial Services
description: Regulatory service design reducing assessment time by 45% while improving compliance rates 32% and user satisfaction 78%.
keywords: regulatory service design, ASIC, financial services regulation, assessment framework, government service design
ogImage: https://dalerogers.com.au/assets/images/case-studies/asic-og.jpg
---
```

### Border Security
```yaml
---
title: Border Security Digital Verification Service Design
description: Field verification service achieving 99.9% accuracy, 60% faster processing, 85% improved satisfaction across distributed border operations.
keywords: border security service design, field operations, digital verification, government service design, PowerApps, Dynamics 365
ogImage: https://dalerogers.com.au/assets/images/case-studies/border-og.jpg
---
```

### DCCEEW
```yaml
---
title: DCCEEW Regulatory Solutions Common Framework
description: Service framework reducing procurement time 50-70% across environmental regulation programs through standardized approach and vendor panel.
keywords: regulatory framework, government procurement, service design, DCCEEW, environmental regulation, vendor panel
ogImage: https://dalerogers.com.au/assets/images/case-studies/dcceew-og.jpg
---
```

### Holden
```yaml
---
title: Error-Proof Safety System for Automotive Airbag Installation
description: Poka-yoke design achieving 100% safety compliance in airbag installation—prototype adopted globally as industry standard.
keywords: poka-yoke, error-proofing, automotive safety, airbag quality control, critical control thinking, manufacturing
ogImage: https://dalerogers.com.au/assets/images/case-studies/holden-og.jpg
---
```

### Rio Tinto
```yaml
---
title: Program Governance Framework for Multi-Site Mining Operations
description: Governance service design improving project delivery 35% and reducing timeline overruns 45% across distributed mining sites.
keywords: program governance, mining operations, multi-site coordination, service design, enterprise, Rio Tinto
ogImage: https://dalerogers.com.au/assets/images/case-studies/riotinto-og.jpg
---
```

### University of Canberra - Digital Agility
```yaml
---
title: Rapid Digital Transformation for Higher Education During COVID-19
description: Transitioned 2,200+ courses online in 4 weeks achieving 92% student satisfaction and developing capability in 800+ staff.
keywords: digital transformation, higher education, COVID response, Microsoft 365, change management, service design
ogImage: https://dalerogers.com.au/assets/images/case-studies/uc-digital-og.jpg
---
```

### University of Canberra - Travel
```yaml
---
title: Academic Travel Service Redesign for Higher Education
description: Service design reducing booking time 56% (32 to 14 minutes), improving conversion 28%, and reducing support enquiries 45%.
keywords: travel service design, higher education, PowerApps, journey mapping, service blueprinting, user experience
ogImage: https://dalerogers.com.au/assets/images/case-studies/uc-travel-og.jpg
---
```

### Icon Water
```yaml
---
title: Icon Water Unit Metering Regulatory Change Service Concept
description: Change management service design for regulatory transition affecting thousands of properties through multi-stakeholder engagement.
keywords: change management, utilities, service concept, regulatory change, stakeholder engagement, service blueprinting
ogImage: https://dalerogers.com.au/assets/images/case-studies/iconwater-og.jpg
---
```

### Murray Darling Basin
```yaml
---
title: Multi-Jurisdictional Service Design for Australia's Largest River System
description: Service design coordinating stakeholders across 5 states for Murray Darling Basin Plan—23 stakeholder types, 15 service interactions blueprinted.
keywords: multi-jurisdictional service design, Murray Darling Basin, water management, stakeholder coordination, MDBA, environmental regulation
ogImage: https://dalerogers.com.au/assets/images/case-studies/mdba-og.jpg
---
```

---

## Technical Details

### Frontmatter Parsing

**Parser:** Custom YAML-style parser in `/scripts/build-content.js`

**Regex:** `/^---\s*\n([\s\S]*?)\n---\s*\n/`

**Process:**
1. Match frontmatter block (between `---` delimiters)
2. Split into lines
3. Parse `key: value` pairs
4. Return frontmatter object + content without frontmatter

**Fallback:** If no frontmatter found, returns empty object and full content

### Build Script Integration

**Enhanced `extractMetadata()` function:**
1. Parses frontmatter
2. Falls back to content extraction if frontmatter missing
3. Returns all SEO metadata

**Template Usage:**
- All frontmatter fields passed to template
- Template generates appropriate meta tags
- Conditional rendering (only if field provided)

---

## Testing Frontmatter

### Test Single File

**1. Add frontmatter to markdown file**
**2. Rebuild:**
```bash
npm run build:content
```

**3. Check generated HTML:**
```bash
grep -A5 "meta name=" case-studies/your-file.html
```

**4. Verify:**
- Title in `<title>` tag
- Description in meta description
- Keywords in meta keywords
- OG image in og:image

### Test All Files

**Rebuild all:**
```bash
npm run build:content
```

**Check frontmatter parsing:**
```bash
grep -h "meta name=\"keywords\"" case-studies/*.html
```

Files with frontmatter will show keywords, others won't.

---

## Troubleshooting

### Frontmatter Not Parsed

**Issue:** Metadata not appearing in generated HTML

**Solutions:**
- Ensure frontmatter starts at **line 1** (no blank lines before `---`)
- Check YAML syntax (`:` after key, space before value)
- Verify closing `---` on its own line
- Check for special characters (escape if needed)

### Description Too Long

**Issue:** Meta description truncated

**Solution:**
- Keep descriptions under 160 characters
- Focus on key outcomes and approach
- Build script will truncate at 157 chars if longer

### Keywords Not Showing

**Issue:** Keywords meta tag not in HTML

**Solution:**
- Frontmatter must include `keywords:` field
- Auto-extraction doesn't generate keywords
- Add frontmatter for keyword support

---

## Maintenance

### When Adding New Case Study

**Option A: With Frontmatter (Recommended)**
1. Create markdown file with frontmatter block
2. Add SEO-optimized title, description, keywords
3. Run build script
4. Verify SEO tags in output

**Option B: Without Frontmatter (Quick)**
1. Create markdown file (no frontmatter)
2. Build script auto-extracts from content
3. Consider adding frontmatter later for SEO

### When Updating Existing Case Study

**If improving SEO:**
1. Add frontmatter to existing .md file
2. Optimize title/description/keywords
3. Rebuild
4. Check output

**If just updating content:**
- Edit markdown content
- Rebuild
- Frontmatter (if present) will be preserved

---

## Related Documentation

- **Build Script:** `/scripts/build-content.js` (frontmatter parser)
- **Template:** `/scripts/layout-template.js` (SEO tag generation)
- **Case Study Workflow:** `/.docs/processes/case-study-enhancement-workflow.md`
- **SEO Audit:** `/.cursor/commands/seo-audit.md` (if exists)

---

**Last Updated:** 15 October 2025  
**Status:** Production-ready  
**Build Command:** `npm run build:content`



