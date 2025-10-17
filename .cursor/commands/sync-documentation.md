---
name: Sync Documentation
description: Ensure all documentation is current and properly organised with outdated doc detection, link validation, and timestamp updates
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["sync-docs", "doc-sync", "update-documentation"]
---

# Sync Documentation

Ensures all project documentation is current, properly organised, and follows documentation standards per the Documentation Organization Rules.

## Documentation Locations

### Primary Documentation
- `README.md` - Project root
- `/.docs/` - All other documentation

### Documentation Structure
```
/.docs/
├── architecture/         # Technical architecture
├── deployment/          # Deployment guides
├── design/              # Design guidelines
├── templates/           # Reusable templates
├── processes/           # Workflows
├── project/             # Project-specific docs
└── DOCUMENTATION_STANDARDS.md
```

## Sync Checklist

### 1. Check Documentation Organization
- [ ] No stray `.md` files in project root (except README.md)
- [ ] All docs in appropriate `/.docs/` subdirectory
- [ ] Filenames follow conventions (kebab-case or SCREAMING_SNAKE_CASE)
- [ ] Descriptive filenames (not generic)

### 2. Validate Documentation Structure
- [ ] Each doc has H1 title
- [ ] Overview/purpose section present
- [ ] Table of contents for long docs (>200 lines)
- [ ] Proper heading hierarchy (no skipped levels)
- [ ] "Last Updated" timestamp at bottom

### 3. Check for Outdated Documentation
- [ ] Documents older than 6 months reviewed
- [ ] Broken links fixed or documented
- [ ] Screenshots current
- [ ] Examples still valid
- [ ] Technology versions current

### 4. Verify Documentation Links
- [ ] Internal links work
- [ ] Cross-references accurate
- [ ] README links to main docs
- [ ] Related docs link to each other

### 5. Update Timestamps
- [ ] "Last Updated" dates current
- [ ] Version numbers accurate (if versioned)
- [ ] Change history maintained

## Automated Sync Script

```javascript
// sync-docs.js
const fs = require('fs');
const path = require('path');

const docsDir = './.docs';
const sixMonthsAgo = Date.now() - (180 * 24 * 60 * 60 * 1000);

function checkDoc(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const stats = fs.statSync(filePath);
  const warnings = [];
  
  // Check H1 title
  if (!content.match(/^#\s+.+$/m)) {
    warnings.push('Missing H1 title');
  }
  
  // Check last updated
  if (!content.match(/Last Updated:/i)) {
    warnings.push('Missing "Last Updated" timestamp');
  }
  
  // Check if old
  if (stats.mtimeMs < sixMonthsAgo) {
    warnings.push('Not updated in 6+ months');
  }
  
  // Check for broken internal links
  const links = content.match(/\[.+?\]\((.+?)\)/g) || [];
  links.forEach(link => {
    const url = link.match(/\[.+?\]\((.+?)\)/)[1];
    if (url.startsWith('/') || url.startsWith('.')) {
      const linkPath = path.resolve(path.dirname(filePath), url);
      if (!fs.existsSync(linkPath)) {
        warnings.push(`Broken link: ${url}`);
      }
    }
  });
  
  return warnings;
}

function scanDocs(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDocs(filePath);
    } else if (file.endsWith('.md')) {
      const warnings = checkDoc(filePath);
      if (warnings.length > 0) {
        console.log(`\n⚠️  ${filePath}:`);
        warnings.forEach(w => console.log(`   - ${w}`));
      }
    }
  });
}

console.log('Scanning documentation...\n');
scanDocs(docsDir);
console.log('\n✅ Documentation sync complete');
```

Run: `node sync-docs.js`

## Documentation Review Checklist

### Content Quality
- [ ] Information accurate and current
- [ ] Examples work
- [ ] Code snippets correct
- [ ] Screenshots up-to-date
- [ ] No placeholder content

### Structure & Formatting
- [ ] Consistent markdown formatting
- [ ] Proper heading hierarchy
- [ ] Code blocks have language specified
- [ ] Lists formatted consistently
- [ ] Tables formatted correctly

### Navigation
- [ ] Clear document purpose
- [ ] Related docs linked
- [ ] Breadcrumbs if applicable
- [ ] Table of contents for long docs
- [ ] Easy to find information

### Maintenance
- [ ] Last updated date current
- [ ] Deprecated info removed or marked
- [ ] Outdated sections updated
- [ ] Links verified
- [ ] Technical accuracy confirmed

## Documentation Patterns

### New Feature Documentation

When adding a feature:
1. Update relevant technical docs
2. Add to user guide if user-facing
3. Update README if significant
4. Add to command reference if applicable
5. Link from related documents

### Deprecated Feature Documentation

When deprecating:
1. Mark as deprecated with date
2. Explain why deprecated
3. Provide migration path
4. Set removal date
5. Update all references

Example:
```markdown
## Feature X

⚠️ **DEPRECATED as of 16/10/2025** - Use Feature Y instead.

This feature will be removed in v2.0. See [migration guide](./migration.md).
```

## Documentation Metrics

Track documentation health:

- **Coverage:** % of features documented
- **Freshness:** % of docs updated in last 6 months
- **Accuracy:** # of reported documentation issues
- **Usability:** User feedback on docs

## Common Documentation Issues

### Issue: Stale Documentation
**Problem:** Documentation outdated
**Fix:** Regular review schedule, automated checks

### Issue: Broken Links
**Problem:** Internal links don't work
**Fix:** Automated link checking, careful refactoring

### Issue: Missing Documentation
**Problem:** Features undocumented
**Fix:** Documentation as part of Definition of Done

### Issue: Poor Organization
**Problem:** Hard to find documentation
**Fix:** Follow `/.docs/` structure, good naming

## Quick Documentation Sync

Fast sync (10 minutes):
1. Check README.md current
2. Scan for stray .md files in root
3. Verify main docs in `/.docs/`
4. Update key document timestamps
5. Fix obvious broken links

## Comprehensive Documentation Sync

Full sync (30-45 minutes):
1. Run automated sync script
2. Review all warnings
3. Update outdated documents
4. Fix all broken links
5. Verify document structure
6. Update timestamps
7. Test all examples
8. Update screenshots if needed

## Related Commands
- **@gen-docs**: Generate documentation
- **@validate-content**: Validate content structure
- **@pre-flight**: Pre-deployment checks

---

*Last Updated: 16/10/2025*

