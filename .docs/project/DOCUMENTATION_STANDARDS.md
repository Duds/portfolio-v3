# Documentation Standards & Organization Rules

## Overview
This document outlines the organization rules, file naming conventions, and documentation standards for the Portfolio V3 project.

## Documentation Location

### Primary Documentation Directory
- **All documentation** must be placed in `/.docs/`
- No documentation files (`.md` files) should exist in the project root except `README.md`
- The `.docs/` directory should be actively maintained and organized

## Directory Structure

### /.docs/ Organization

The documentation directory should be organized using the following structure:

```
.docs/
├── architecture/          # Technical architecture and infrastructure docs
├── deployment/           # Deployment guides and procedures
├── design/              # Design guidelines, styling, and UI/UX docs
├── templates/           # Reusable templates and checklists
├── processes/           # Development processes and workflows
└── project/             # Project-specific documentation and summaries
```

### Recommended Subdirectories

1. **`/architecture/`** - Technical documentation
   - System architecture diagrams
   - Infrastructure setup
   - Technical decisions and ADRs (Architecture Decision Records)

2. **`/deployment/`** - Deployment documentation
   - Deployment procedures
   - CI/CD configuration
   - Environment setup guides

3. **`/design/`** - Design and styling
   - Styling guides
   - Component documentation
   - Design system documentation
   - Accessibility guidelines

4. **`/templates/`** - Reusable templates
   - Checklists
   - Assessment templates
   - Standard document templates

5. **`/processes/`** - Development processes
   - Contribution guidelines
   - Development workflows
   - Code review processes

6. **`/project/`** - Project management
   - Implementation summaries
   - Changelogs
   - Project details and repositioning docs

## File Naming Conventions

### General Rules

1. **Use kebab-case** for multi-word files
   - ✅ `documentation-standards.md`
   - ❌ `DocumentationStandards.md`
   - ❌ `documentation_standards.md`

2. **Use SCREAMING_SNAKE_CASE** for important/high-level docs
   - ✅ `README.md`
   - ✅ `IMPLEMENTATION_SUMMARY.md`
   - ✅ `AZURE_SETUP.md`

3. **Be descriptive and specific**
   - ✅ `digital-transformation-readiness-checklist.md`
   - ❌ `checklist.md`
   - ❌ `doc1.md`

### File Naming Patterns

| Document Type | Naming Pattern | Example |
|--------------|----------------|---------|
| Setup/Configuration | `*_SETUP.md` or `setup-*.md` | `AZURE_SETUP.md`, `setup-database.md` |
| Deployment | `DEPLOY_*.md` or `deployment-*.md` | `DEPLOY_AZURE.md`, `deployment-workflow.md` |
| Guide | `*-guide.md` | `styling-guide.md`, `contributor-guide.md` |
| Template | `*-template.md` | `service-design-assessment-template.md` |
| Checklist | `*-checklist.md` | `digital-transformation-readiness-checklist.md` |
| Summary | `*_SUMMARY.md` or `*-summary.md` | `IMPLEMENTATION_SUMMARY.md` |
| Changelog | `changelog.md` or `CHANGELOG.md` | `changelog.md` |

## Document Structure Standards

### Required Sections

Every documentation file should include:

1. **Title** (H1)
   ```markdown
   # Document Title
   ```

2. **Overview/Purpose**
   ```markdown
   ## Overview
   Brief description of what this document covers.
   ```

3. **Table of Contents** (for docs >200 lines)
   ```markdown
   ## Table of Contents
   - [Section 1](#section-1)
   - [Section 2](#section-2)
   ```

4. **Last Updated** (at bottom)
   ```markdown
   ---
   **Last Updated:** October 14, 2025
   ```

### Markdown Best Practices

1. **Use proper heading hierarchy**
   - One H1 per document
   - Don't skip heading levels (H1 → H3)

2. **Code blocks should specify language**
   ```markdown
   ```javascript
   const example = "code";
   ```
   ```

3. **Use tables for structured data**
   ```markdown
   | Header 1 | Header 2 |
   |----------|----------|
   | Data 1   | Data 2   |
   ```

4. **Use checklists for actionable items**
   ```markdown
   - [ ] Task to complete
   - [x] Completed task
   ```

5. **Link to related documentation**
   ```markdown
   See also: [Related Doc](./related-doc.md)
   ```

## Documentation Maintenance

### Regular Reviews

- Review documentation **monthly** for accuracy
- Update timestamps when making changes
- Archive outdated documentation to `/archive/` subdirectory

### Changelog Management

- Maintain `changelog.md` with project changes
- Follow [Keep a Changelog](https://keepachangelog.com/) format
- Include version numbers and dates

### Version Control

- Commit documentation changes with descriptive messages
- Keep documentation in sync with code changes
- Tag major documentation updates

## Content Guidelines

### Writing Style

1. **Be concise and clear**
   - Use short sentences
   - Avoid jargon unless necessary
   - Define technical terms on first use

2. **Use active voice**
   - ✅ "Run the deployment script"
   - ❌ "The deployment script should be run"

3. **Include examples**
   - Code examples
   - Command-line examples
   - Screenshots when helpful

4. **Be consistent**
   - Use consistent terminology
   - Follow the same structure across similar docs
   - Use the same code formatting

### Documentation Types

#### Setup/Installation Guides
- Prerequisites section
- Step-by-step instructions
- Verification steps
- Troubleshooting section

#### API/Component Documentation
- Purpose and description
- Parameters/props
- Return values/outputs
- Usage examples
- Related components

#### Process Documentation
- Overview of the process
- Prerequisites
- Detailed steps
- Expected outcomes
- Common issues and solutions

## Special Files

### README.md (Root)
- The **only** markdown file allowed in project root
- Project overview and quick start
- Links to detailed documentation in `.docs/`

### IMPLEMENTATION_SUMMARY.md
- High-level overview of implementation
- Key decisions and rationale
- Major components and features

### CHANGELOG.md
- All notable changes to the project
- Semantic versioning
- Dates and version numbers

## Migration Guide

If moving existing documentation to this structure:

1. **Audit current documentation**
   - List all existing `.md` files
   - Identify their purpose and category

2. **Create subdirectories**
   - Create necessary subdirectories in `.docs/`
   - Follow the structure outlined above

3. **Move and rename files**
   - Move files to appropriate subdirectories
   - Rename following naming conventions

4. **Update links**
   - Update all internal documentation links
   - Update README.md links

5. **Verify**
   - Check all links work
   - Ensure no broken references

## Tools and Automation

### Recommended Tools
- **Markdown linter**: markdownlint
- **Link checker**: markdown-link-check
- **Diagram tools**: Mermaid (in markdown), draw.io

### Automated Checks
- Run markdown linters in CI/CD
- Check for broken links
- Validate document structure

## Current Documentation Inventory

### Root Level
- `DOCUMENTATION_STANDARDS.md` - Documentation organization standards and guidelines
- `voice-and-tone-guide.md` - Voice and tone guide for all content

### Architecture & Infrastructure (`/architecture/`)
- `AZURE_SETUP.md` - Azure hosting setup and configuration

### Deployment (`/deployment/`)
- `DEPLOY_AZURE.md` - Azure deployment procedures and guide

### Design & Styling (`/design/`)
- `styling-guide.md` - Complete styling guidelines and design system
- `styling-design-questionnaire.md` - Design requirements questionnaire
- `button-variants.md` - Button component variants and usage
- `accessibility-review.md` - WCAG AA accessibility guidelines and audit

### Project Management (`/project/`)
- `IMPLEMENTATION_SUMMARY.md` - Implementation overview and details
- `IMPLEMENTATION_COMPLETE.md` - Project completion documentation
- `REPOSITIONING_COMPLETE.md` - Project repositioning documentation
- `PORTFOLIO_DETAILS.md` - Portfolio information and content
- `changelog.md` - Project changelog and version history

### Processes (`/processes/`)
- `markdown-build-process.md` - Markdown build and processing workflow

### Templates & Tools (`/templates/`)
- `digital-transformation-readiness-checklist.md` - Digital transformation readiness assessment
- `service-design-assessment-template.md` - Service design assessment template

### Completed Organization Tasks
- [x] Create subdirectories in `.docs/`
- [x] Reorganize existing documentation
- [x] Consolidate duplicate files (removed `implementation-summary.md`)
- [x] Update all internal links (README.md updated)
- [ ] Add missing timestamps (to be completed as docs are updated)

---

**Last Updated:** October 14, 2025  
**Version:** 1.0  
**Maintained By:** Portfolio V3 Team

