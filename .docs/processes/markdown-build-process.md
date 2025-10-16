# Markdown Build Process

## Overview

This portfolio uses a build-time markdown-to-HTML conversion process for case studies. Case studies are authored in markdown (`.md`) files and converted to static HTML pages using a Node.js build script.

**Key principle:** Markdown files are the source of truth. HTML files are generated artifacts that should not be manually edited.

## Quick Start

```bash
# Install dependencies (first time only)
npm install

# Build all case studies
npm run build:content
```

## How It Works

### Architecture

1. **Source files:** Case studies written in markdown (`/case-studies/*.md`)
2. **Build script:** Node.js script using marked.js library (`scripts/build-content.js`)
3. **Template:** Reusable HTML layout with header/footer (`scripts/layout-template.js`)
4. **Output:** Static HTML files (`/case-studies/*.html`)

### Build Process

When you run `npm run build:content`:

1. Script reads all `.md` files from `/case-studies/`
2. Extracts metadata (title, description) from markdown content
3. Converts markdown to HTML using marked.js
4. Wraps HTML in layout template (header, nav, footer, breadcrumbs)
5. Writes complete HTML files to same directory
6. Reports success/errors to console

### File Structure

```
/case-studies/
  ├── antarctic-doctrine-application.md       (source, git tracked)
  ├── antarctic-doctrine-application.html     (generated, git ignored)
  ├── rio-tinto-bespoke-pmo.md               (source, git tracked)
  ├── rio-tinto-bespoke-pmo.html             (generated, git ignored)
  └── ... (8 more pairs)
```

## When to Run the Build

Run `npm run build:content` after:

- Creating a new case study markdown file
- Editing an existing case study
- Updating the layout template
- Before deploying to production

**Note:** Generated HTML files are gitignored, so you'll need to rebuild after pulling changes or on deployment.

## Workflow

### Creating a New Case Study

1. Create markdown file in `/case-studies/` (e.g., `new-case-study.md`)
2. Write content using markdown syntax
3. Run `npm run build:content`
4. Open generated HTML in browser to preview
5. Add link to `portfolio.html` (use `.html` extension)
6. Commit the `.md` file only

### Editing an Existing Case Study

1. Edit the `.md` file in `/case-studies/`
2. Run `npm run build:content`
3. Preview changes in browser
4. Commit the updated `.md` file

### Template Changes

If you update `scripts/layout-template.js`:

1. Make your changes
2. Run `npm run build:content` to rebuild all pages
3. Verify changes across multiple case studies
4. Commit template changes

## Technical Details

### Markdown Parser

Uses **marked.js** with these settings:

- GitHub Flavored Markdown (GFM) enabled
- Automatic heading IDs for anchor links
- Safe HTML rendering
- No syntax highlighting (case studies are prose)

### Metadata Extraction

The build script automatically extracts:

- **Title:** First H1 heading (`# Title`)
- **Description:** Text after `**Challenge:**` or first substantial paragraph
- Used for page `<title>` and meta description tags

### Template Features

Generated HTML pages include:

- Simplified navigation (Home, Portfolio, Contact)
- Breadcrumb navigation
- "Back to Portfolio" buttons (top and bottom)
- Consistent header/footer matching main site
- Responsive design (inherits from site CSS)
- SEO meta tags (title, description, Open Graph)
- Proper semantic HTML structure

## Troubleshooting

### Problem: "marked is not installed"

**Solution:**
```bash
npm install
```

### Problem: Build fails on specific file

**Solution:**

1. Check console error message for details
2. Verify markdown syntax in the problematic file
3. Ensure file is valid UTF-8 encoding
4. Check for special characters that might break parsing

### Problem: Generated HTML looks wrong

**Solution:**

1. Check that CSS file path is correct: `../css/styles.css`
2. Verify template in `scripts/layout-template.js`
3. Clear browser cache
4. Check console for CSS/JS errors

### Problem: Links don't work in case studies

**Solution:**

- External links: Use full URLs with `https://`
- Internal links to portfolio: Use `../portfolio.html`
- Internal links to homepage sections: Use `../index.html#section`

### Problem: New case study not appearing

**Solution:**

1. Ensure you ran `npm run build:content`
2. Check that HTML file was generated
3. Add link to `portfolio.html` pointing to `.html` file
4. Clear browser cache

## File Requirements

### Case Study Markdown Format

Expected structure:

```markdown
# Case Study Title

**Client:** Client Name
**Industry:** Industry Type
**Duration:** X months
**Year:** 20XX
**Type:** Project Type

**Challenge:** Brief description of the challenge...

**Results:**
- Result 1
- Result 2
- Result 3

---

## Section Heading

Content here...
```

### Required Files

- `package.json` - Dependencies and scripts
- `scripts/build-content.js` - Build script
- `scripts/layout-template.js` - HTML template
- `/case-studies/*.md` - Source markdown files

## Deployment

### Option 1: Build Locally

```bash
# Build before deploying
npm run build:content

# Deploy both .md and .html files
# (Include node_modules/ in .gitignore)
```

### Option 2: Build in CI/CD

Add to deployment pipeline:

```yaml
# Example for GitHub Actions
- name: Install dependencies
  run: npm install

- name: Build case studies
  run: npm run build:content

- name: Deploy
  # Your deployment step here
```

## Best Practices

### ✓ Do

- Keep markdown files as source of truth
- Run build after every content change
- Preview generated HTML before committing
- Use semantic markdown (proper headings, lists, etc.)
- Test responsive layout on mobile
- Verify links work in generated pages

### ✗ Don't

- Edit `.html` files directly (they'll be overwritten)
- Commit generated `.html` files to git (they're ignored)
- Use complex HTML in markdown (keep it simple)
- Forget to rebuild after template changes
- Link to `.md` files in portfolio (use `.html`)

## Dependencies

### Production

**None** - Generated HTML files are pure vanilla HTML/CSS/JS with zero runtime dependencies.

### Development

- **Node.js** - Runtime for build script (v14+ recommended)
- **marked** - Markdown parser (~12.0.0)

## Related Documentation

- Technology Stack Rule: `/.cursor/rules/technology-stack.mdc`
- Documentation Standards: `/.docs/DOCUMENTATION_STANDARDS.md`
- Styling Guide: `/.docs/design/styling-guide.md`

## Support

For issues with the build process:

1. Check this documentation
2. Review error messages in console
3. Verify file structure matches expected layout
4. Check that Node.js and npm are installed
5. Try deleting `node_modules/` and running `npm install` again

---

**Last Updated:** 15 October 2025  
**Process Type:** Build-time content generation  
**Technology:** Node.js, marked.js, vanilla HTML/CSS/JS output

