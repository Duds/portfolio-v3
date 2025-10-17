---
name: Generate Documentation
description: Auto-generate or update project documentation including architecture diagrams, dependency graphs, and API documentation following docs-as-code practices
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["gen-docs", "update-docs", "document"]
---

# Generate Documentation

Auto-generates or updates project documentation following documentation-as-code practices as per Write the Docs guidelines (https://www.writethedocs.org/guide/docs-as-code/).

## Documentation Types

### Technical Documentation
- Architecture documentation
- Dependency documentation
- Configuration documentation
- Deployment guides

### User Documentation
- README files
- Usage guides
- Case study templates
- Command documentation

### Process Documentation
- Development workflows
- Quality standards
- Contribution guidelines

## Documentation Location

All documentation in `/.docs/` directory structure:

```
/.docs/
├── architecture/         # Technical architecture
├── deployment/          # Deployment guides
├── design/              # Design guidelines
├── templates/           # Reusable templates
├── processes/           # Workflows
└── project/             # Project-specific docs
```

## Auto-Generate Documentation

### Project README

```bash
# Generate README with project info
cat > README.md << 'EOF'
# Portfolio v3

Modern portfolio website for Dale Rogers showcasing service design and technical implementation expertise.

## Tech Stack
- HTML5, CSS3, JavaScript (vanilla)
- Markdown for case studies
- Node.js build scripts

## Quick Start
\`\`\`bash
npm install
node scripts/build-content.js
python3 -m http.server 8000
\`\`\`

## Commands
See `.cursor/commands/` for available workflow commands.

## Documentation
See `/.docs/` for comprehensive documentation.
EOF
```

### Dependency Documentation

```javascript
// generate-dependency-docs.js
const fs = require('fs');
const packageJson = require('./package.json');

const deps = Object.entries(packageJson.dependencies || {});
const devDeps = Object.entries(packageJson.devDependencies || {});

let doc = `# Dependencies\n\n`;
doc += `**Last Updated:** ${new Date().toISOString().split('T')[0]}\n\n`;

doc += `## Production Dependencies\n\n`;
deps.forEach(([name, version]) => {
  doc += `- **${name}** (${version})\n`;
});

doc += `\n## Development Dependencies\n\n`;
devDeps.forEach(([name, version]) => {
  doc += `- **${name}** (${version})\n`;
});

fs.writeFileSync('.docs/project/dependencies.md', doc);
console.log('✅ Dependencies documented');
```

### Architecture Diagram (Mermaid)

```markdown
# Architecture

\`\`\`mermaid
graph TD
    A[User] -->|HTTP| B[Static Host]
    B -->|Serves| C[HTML/CSS/JS]
    B -->|Serves| D[Case Studies]
    E[Build Script] -->|Processes| D
    E -->|Generates| C
\`\`\`

## Components

- **Static Host**: Netlify/Vercel/GitHub Pages
- **Build Script**: Markdown to HTML converter
- **Case Studies**: Markdown files in `/case-studies/`
```

### Command Documentation Index

Generate index of all commands:

```javascript
// generate-command-index.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const commandsDir = './.cursor/commands';
const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.md'));

let index = `# Command Reference\n\n`;
index += `**Total Commands:** ${files.length}\n\n`;

const categories = { audit: [], action: [], checklist: [] };

files.forEach(file => {
  const content = fs.readFileSync(path.join(commandsDir, file), 'utf8');
  const { data } = matter(content);
  
  if (data.category) {
    categories[data.category].push({
      name: data.name,
      description: data.description,
      triggers: data.triggers,
      file: file
    });
  }
});

Object.entries(categories).forEach(([category, commands]) => {
  index += `## ${category.charAt(0).toUpperCase() + category.slice(1)} Commands\n\n`;
  commands.forEach(cmd => {
    index += `### ${cmd.name}\n`;
    index += `${cmd.description}\n\n`;
    index += `**Triggers:** ${cmd.triggers.map(t => `\`@${t}\``).join(', ')}\n\n`;
  });
});

fs.writeFileSync('.docs/project/command-reference.md', index);
console.log('✅ Command reference generated');
```

## Documentation Standards

### File Naming
- Use **kebab-case** for general docs
- Use **SCREAMING_SNAKE_CASE** for important docs
- Be descriptive: `styling-guide.md` not `guide.md`

### Document Structure
```markdown
# Document Title

**Purpose:** [One sentence purpose]  
**Audience:** [Who this is for]  
**Last Updated:** DD/MM/YYYY

## Overview
[Brief overview]

## Main Content
[Detailed content with sections]

## Related Documentation
- [Link to related doc 1]
- [Link to related doc 2]

---

*Last Updated: DD/MM/YYYY*
```

### Markdown Best Practices
- Use ATX-style headers (`#`)
- Include table of contents for long docs (>200 lines)
- Use code fences with language specified
- Include examples
- Link between related documents

## Documentation Checklist

### Before Creating New Documentation
- [ ] Check if documentation already exists
- [ ] Determine correct location in `/.docs/`
- [ ] Choose appropriate filename
- [ ] Follow naming conventions

### Creating Documentation
- [ ] Include clear title (H1)
- [ ] Add purpose statement
- [ ] Include last updated date
- [ ] Use proper heading hierarchy
- [ ] Add examples where helpful
- [ ] Link to related documentation
- [ ] Include footer with date

### After Creating Documentation
- [ ] Add to relevant index
- [ ] Link from related docs
- [ ] Update README if major doc
- [ ] Commit with descriptive message

## Documentation Maintenance

### Regular Updates
- Review quarterly for accuracy
- Update after major changes
- Fix broken links
- Update screenshots/diagrams
- Refresh examples

### Documentation Debt
- Mark outdated sections with `⚠️ OUTDATED`
- Schedule updates
- Deprecate old documents
- Archive superseded docs

## Related Commands
- **@sync-docs**: Ensure documentation current
- **@validate-content**: Check documentation structure
- **@pre-flight**: Pre-deployment documentation check

---

*Last Updated: 16/10/2025*

