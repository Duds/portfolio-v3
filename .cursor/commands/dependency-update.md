---
name: Dependency Update
description: Check and update project dependencies safely with vulnerability checks, breaking change detection, and testing before committing updates
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["update-deps", "upgrade-deps", "check-updates"]
---

# Dependency Update

Safely check and update project dependencies while testing for breaking changes and security vulnerabilities.

## Dependency Check

### Check for Outdated Packages

```bash
# List outdated packages
npm outdated

# Output shows:
# Package    Current  Wanted  Latest  Location
# marked     4.0.0    4.0.2   5.0.0   portfolio-v3
```

**Columns explained:**
- **Current:** Installed version
- **Wanted:** Max version per package.json semver
- **Latest:** Latest published version
- **Location:** Package location

### Check for Security Vulnerabilities

```bash
# Run security audit
npm audit

# Show only high/critical
npm audit --audit-level=high

# Show detailed report
npm audit --json
```

## Update Strategy

### 1. Patch Updates (Safest)

Update bug fixes only (x.x.X):

```bash
# Update to latest patch versions
npm update

# This respects semver in package.json
```

### 2. Minor Updates (Relatively Safe)

Update new features (x.X.x):

```bash
# Update specific package to minor
npm install marked@^4

# Or update all to latest minor
npm update --save
```

### 3. Major Updates (Careful)

Update with breaking changes (X.x.x):

```bash
# Update specific package to latest
npm install marked@latest

# Check changelog for breaking changes first!
```

## Safe Update Workflow

### Step 1: Check Current State

```bash
# Check what's outdated
npm outdated

# Check for vulnerabilities
npm audit

# Check current tests pass
npm test  # if tests configured
```

### Step 2: Update Patch Versions

```bash
# Update patches only
npm update

# Test everything still works
npm test
node scripts/build-content.js
# Preview site locally
```

### Step 3: Update Minor Versions

```bash
# Review what would change
npm outdated

# Update specific package
npm install package-name@wanted-version

# Test after each update
npm test
```

### Step 4: Review Major Updates

**Before updating major versions:**

1. Read changelog
2. Check for breaking changes
3. Review migration guide
4. Test in separate branch

```bash
# Create update branch
git checkout -b deps/update-marked-v5

# Update package
npm install marked@latest

# Test thoroughly
npm test
node scripts/build-content.js

# If good, commit and merge
git add package.json package-lock.json
git commit -m "chore(deps): update marked to v5"
```

## Dependency-Specific Updates

### Marked (Markdown Parser)

Current dependency for case study processing.

```bash
# Check current version
npm list marked

# Update to latest
npm install marked@latest

# Test build
node scripts/build-content.js

# Verify case studies render correctly
```

**Breaking changes to watch:**
- API changes in marked.parse()
- Option parameter changes
- Renderer modifications

## Security Updates

### Fix Vulnerabilities

```bash
# Automatically fix vulnerabilities
npm audit fix

# Fix even if it requires breaking changes (careful!)
npm audit fix --force

# Review changes
git diff package.json package-lock.json
```

### Manual Security Fixes

If auto-fix doesn't work:

1. Identify vulnerable package: `npm audit`
2. Check if parent package has update
3. Update parent: `npm install parent@latest`
4. Verify fix: `npm audit`

## Update Checklist

### Before Updating
- [ ] Check current versions: `npm list`
- [ ] Check what's outdated: `npm outdated`
- [ ] Check vulnerabilities: `npm audit`
- [ ] Commit current changes: `git status`
- [ ] All tests passing

### During Update
- [ ] Update patches: `npm update`
- [ ] Test after patches
- [ ] Update minors one-by-one
- [ ] Test after each update
- [ ] Read changelogs for majors
- [ ] Create branch for major updates

### After Updating
- [ ] Build succeeds: `node scripts/build-content.js`
- [ ] Preview site works
- [ ] No console errors
- [ ] Run security audit: `npm audit`
- [ ] Commit lock file: `git add package-lock.json`
- [ ] Update documentation if needed

## Package.json Semver

Understanding version ranges:

```json
{
  "dependencies": {
    "marked": "^4.0.0",    // ^4.0.0 ≤ version < 5.0.0
    "package": "~1.2.3",   // ~1.2.3 ≤ version < 1.3.0
    "exact": "2.0.0",      // Exactly 2.0.0
    "latest": "*"          // Latest (not recommended)
  }
}
```

**Recommended:** Use `^` (caret) for flexibility with safety.

## Automated Dependency Checks

### Dependabot (GitHub)

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
```

### Renovate Bot

Alternative to Dependabot with more options.

### npm-check-updates

For interactive updates:

```bash
# Install globally
npm install -g npm-check-updates

# Check updates
ncu

# Update package.json
ncu -u

# Install updates
npm install
```

## Rollback Dependencies

If update breaks something:

```bash
# Revert package files
git checkout package.json package-lock.json

# Reinstall previous versions
npm install

# Or revert specific package
npm install package-name@previous-version
```

## Dependency Best Practices

1. **Keep dependencies updated** - Regular small updates better than big jumps
2. **Test after updates** - Always verify functionality
3. **Read changelogs** - Understand what changed
4. **Use lock file** - Commit `package-lock.json`
5. **Update one at a time** - Easier to identify issues
6. **Security first** - Prioritize vulnerability fixes
7. **Avoid unnecessary deps** - Fewer dependencies = less maintenance

## Common Issues

### Issue: npm audit shows vulnerabilities
**Fix:** Run `npm audit fix`, test, commit

### Issue: Major version breaks build
**Fix:** Read migration guide, update code, test thoroughly

### Issue: Can't update due to peer dependency
**Fix:** Update parent package, or wait for compatibility

### Issue: Package-lock conflicts
**Fix:** Delete package-lock.json, run `npm install`, commit new lock

## Related Commands
- **@security-audit**: Security review
- **@pre-flight**: Pre-deployment checks
- **@cleanup**: Clean workspace

---

*Last Updated: 16/10/2025*

