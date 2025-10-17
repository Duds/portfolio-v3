---
name: Validate Content Structure
description: Verify all content files follow proper structure and metadata requirements with front matter validation, link checking, and image verification
version: 1.0.0
category: checklist
last_updated: 16/10/2025
triggers: ["validate-content", "check-content", "content-check"]
---

# Validate Content Structure

Verifies that all content files (case studies, pages) follow proper structure, have complete metadata, and meet quality standards.

## Case Study Validation

### Front Matter (YAML)
- [ ] All case studies have front matter
- [ ] Required fields present:
  - `title`
  - `client`
  - `industry`
  - `duration`
  - `technologies`
  - `featured` (true/false)
  - `order` (number)
- [ ] YAML syntax valid (no parsing errors)
- [ ] Values appropriate for field types

### Content Structure
- [ ] H1 heading matches title
- [ ] Challenge section present
- [ ] Solution section present
- [ ] Results section present
- [ ] Technologies section present
- [ ] All sections have content (not empty)

### Content Quality
- [ ] No placeholder text (lorem ipsum)
- [ ] No [TODO] markers
- [ ] Specific technologies named
- [ ] Measurable results included
- [ ] Australian English spelling
- [ ] No banned buzzwords

### File Naming
- [ ] Filename in kebab-case
- [ ] Descriptive filename
- [ ] .md extension
- [ ] Located in `/case-studies/` directory

## Link Validation

### Internal Links
- [ ] All internal links valid
- [ ] No broken anchor links
- [ ] Navigation links work
- [ ] Case study links correct
- [ ] No 404 errors

### External Links
- [ ] External links accessible
- [ ] No broken external links
- [ ] HTTPS used where possible
- [ ] Links open in new tab (if policy)

## Image Validation

### Image Files
- [ ] All referenced images exist
- [ ] Image paths correct
- [ ] Appropriate formats (WebP, JPEG, SVG)
- [ ] Images optimised (< 200KB ideally)
- [ ] Descriptive filenames

### Image Attributes
- [ ] Alt text present and descriptive
- [ ] Width and height specified
- [ ] Loading attribute set (lazy for below-fold)
- [ ] No broken image references

## Page Structure Validation

### HTML Structure
- [ ] Valid HTML5 markup
- [ ] Proper heading hierarchy
- [ ] Semantic elements used
- [ ] No deprecated tags
- [ ] Proper nesting

### Metadata
- [ ] Title tags unique per page
- [ ] Meta descriptions present
- [ ] Open Graph tags configured
- [ ] Structured data present

## Build Validation

### Build Process
- [ ] Build script runs without errors
- [ ] All markdown processed correctly
- [ ] Generated HTML valid
- [ ] No missing files after build

### Generated Content
- [ ] Case study cards generated
- [ ] Portfolio page populated
- [ ] Navigation updated
- [ ] Sitemap includes new content

## Validation Script

Create a validation script:

```javascript
// validate-content.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const caseStudiesDir = './case-studies';
const requiredFields = ['title', 'client', 'industry', 'duration', 'technologies', 'featured', 'order'];

let errors = [];

// Read all markdown files
const files = fs.readdirSync(caseStudiesDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(caseStudiesDir, file), 'utf8');
  
  try {
    const { data, content: markdown } = matter(content);
    
    // Check required fields
    requiredFields.forEach(field => {
      if (!data[field]) {
        errors.push(`${file}: Missing required field '${field}'`);
      }
    });
    
    // Check content sections
    if (!markdown.includes('## Challenge')) {
      errors.push(`${file}: Missing Challenge section`);
    }
    if (!markdown.includes('## Solution')) {
      errors.push(`${file}: Missing Solution section`);
    }
    if (!markdown.includes('## Results')) {
      errors.push(`${file}: Missing Results section`);
    }
    
    // Check for placeholders
    if (markdown.includes('lorem ipsum') || markdown.includes('[TODO]')) {
      errors.push(`${file}: Contains placeholder text`);
    }
    
  } catch (err) {
    errors.push(`${file}: YAML parsing error - ${err.message}`);
  }
});

if (errors.length > 0) {
  console.error('❌ Content validation failed:\n');
  errors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log('✅ Content validation passed');
}
```

## Manual Checks

### Content Review
1. Read through each case study
2. Verify technical accuracy
3. Check client names approved
4. Ensure outcomes measurable
5. Validate voice and tone compliance

### Visual Review
1. Preview in browser
2. Check layout rendering
3. Verify images display
4. Test responsive design
5. Check for visual bugs

## Automated Checks

Run these automated tools:

```bash
# HTML validation
npx html-validator --file=index.html

# Link checking
npx broken-link-checker http://localhost:8000

# Markdown linting
npx markdownlint case-studies/*.md
```

## Validation Checklist

**Quick validation:**
- [ ] Run build script successfully
- [ ] No console errors
- [ ] All case studies visible in portfolio
- [ ] Links work when clicked
- [ ] Images display correctly

**Comprehensive validation:**
- [ ] Run validation script
- [ ] Check all front matter
- [ ] Validate all links
- [ ] Verify all images
- [ ] Run voice audit on new content
- [ ] Build and preview

## Related Commands
- **@create-case-study**: Create properly structured case studies
- **@voice-audit**: Check content voice compliance
- **@build**: Build and preview to verify
- **@pre-flight**: Pre-deployment validation

---

*Last Updated: 16/10/2025*

