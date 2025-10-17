---
name: Cleanup Workspace
description: Clean temporary files, optimize workspace, remove build artifacts, and organize project files for better maintainability
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["cleanup", "clean", "tidy"]
---

# Cleanup Workspace

Cleans temporary files, removes build artifacts, and optimizes the workspace for better maintainability and performance.

## What Gets Cleaned

### Safe to Delete
- `node_modules/` (can reinstall)
- Build artifacts
- Cache files
- Temporary files
- Log files
- System files (.DS_Store)

### Never Delete
- Source code
- Configuration files
- Documentation
- Version control (.git/)
- Case studies
- Assets/images

## Cleanup Checklist

### 1. Remove Node Modules (Optional)
```bash
# Only if you need to clean install
rm -rf node_modules/
npm install
```

### 2. Clean Build Artifacts
```bash
# Remove generated files if applicable
rm -rf dist/
rm -rf build/
rm -rf .cache/
```

### 3. Remove Temporary Files
```bash
# macOS system files
find . -name ".DS_Store" -delete

# Editor temp files
find . -name "*~" -delete
find . -name "*.swp" -delete
find . -name "*.swo" -delete

# Log files
rm -rf *.log
rm -rf npm-debug.log*
```

### 4. Clean npm Cache
```bash
npm cache clean --force
```

### 5. Remove Empty Directories
```bash
find . -type d -empty -delete
```

## Automated Cleanup Script

```bash
#!/bin/bash
# cleanup.sh

echo "🧹 Starting workspace cleanup..."

# Remove macOS system files
echo "Removing .DS_Store files..."
find . -name ".DS_Store" -delete

# Remove editor temp files
echo "Removing editor temp files..."
find . -name "*~" -delete
find . -name "*.swp" -delete

# Remove log files
echo "Removing log files..."
rm -f *.log
rm -f npm-debug.log*

# Clean npm cache
echo "Cleaning npm cache..."
npm cache clean --force

# Remove empty directories
echo "Removing empty directories..."
find . -type d -empty -delete

echo "✅ Cleanup complete!"
```

Make executable: `chmod +x cleanup.sh`
Run: `./cleanup.sh`

## Deep Cleanup

For thorough cleanup:

```bash
# Remove node_modules
rm -rf node_modules/

# Remove package-lock
rm -f package-lock.json

# Clean npm cache
npm cache clean --force

# Fresh install
npm install

echo "✅ Deep cleanup complete"
```

## Git Cleanup

### Remove Untracked Files

```bash
# See what would be removed (dry run)
git clean -n

# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd

# Remove ignored files too (careful!)
git clean -fdx
```

### Clean Git History

```bash
# Remove files from git history (careful!)
# Only if you accidentally committed large files

# For specific file
git filter-branch --tree-filter 'rm -f large-file.zip' HEAD

# Recommended: Use BFG Repo-Cleaner instead
# https://rtyley.github.io/bfg-repo-cleaner/
```

## Organize Files

### Check File Organization
- [ ] All docs in `/.docs/`
- [ ] All case studies in `/case-studies/`
- [ ] All assets in `/assets/`
- [ ] All scripts in `/scripts/`
- [ ] No loose files in root (except allowed ones)

### Allowed Root Files
- `index.html`
- `portfolio.html`
- `robots.txt`
- `sitemap.xml`
- `README.md`
- `package.json`
- `package-lock.json`
- `.gitignore`

## .gitignore Verification

Ensure `.gitignore` includes:

```gitignore
# Dependencies
node_modules/

# Logs
*.log
npm-debug.log*

# OS Files
.DS_Store
Thumbs.db

# Editor files
*.swp
*.swo
*~
.vscode/
.idea/

# Build artifacts (if applicable)
dist/
build/
.cache/

# Environment variables
.env
.env.local
```

## Disk Space Analysis

### Check Large Files

```bash
# Find large files (>1MB)
find . -type f -size +1M -exec ls -lh {} \;

# Top 10 largest files
find . -type f -exec du -h {} \; | sort -rh | head -10

# Directory sizes
du -sh */ | sort -rh
```

### Analyze Project Size

```bash
# Total project size
du -sh .

# Size by directory
du -sh * | sort -rh
```

## Maintenance Schedule

### Daily
- Remove unnecessary files created during development
- Clean up test data

### Weekly
- Review and remove obsolete files
- Check for large files
- Organize loose files

### Monthly
- Deep cleanup (node_modules, cache)
- Review .gitignore
- Archive old versions

### Quarterly
- Review entire project structure
- Remove deprecated code
- Update dependencies
- Comprehensive cleanup

## Cleanup Checklist

- [ ] No .DS_Store files
- [ ] No editor temp files
- [ ] No log files in root
- [ ] node_modules present and current
- [ ] No empty directories
- [ ] Files properly organized
- [ ] .gitignore up-to-date
- [ ] No uncommitted large files
- [ ] No unnecessary build artifacts

## Warning: Dangerous Operations

**Never run without understanding:**

```bash
# ⚠️ Removes ALL untracked files and directories
git clean -fdx

# ⚠️ Removes node_modules (need to reinstall)
rm -rf node_modules/

# ⚠️ Deletes EVERYTHING in directory
rm -rf *  # NEVER run this!
```

## Related Commands
- **@pre-flight**: Pre-deployment checks
- **@dependency-update**: Update dependencies
- **@sync-docs**: Sync documentation

---

*Last Updated: 16/10/2025*

