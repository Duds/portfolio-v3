---
name: Quick Fix Commit
description: Fast commit for minor fixes like typos and formatting without full validation suitable for small changes that don't require comprehensive testing
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["quick-fix", "qf", "hotfix"]
---

# Quick Fix Commit

Fast-track commit and push for minor fixes (typos, formatting, small CSS tweaks) without running full test suite and linting. Use only for trivial changes.

## When to Use

**Appropriate for:**
- Typo corrections
- Minor formatting changes
- CSS tweaks (colour, spacing)
- Documentation updates
- Comment corrections
- Small text content changes

**NOT appropriate for:**
- Functionality changes
- New features
- Bug fixes
- Security changes
- Dependency updates
- Breaking changes

## Workflow

### 1. Verify Change is Minor
- [ ] Change doesn't affect functionality
- [ ] No code logic modified
- [ ] No breaking changes
- [ ] Low risk of introducing bugs

### 2. Stage Changes
```bash
git add -A
```

### 3. Quick Commit
```bash
git commit -m "fix: [brief description]"
```

**Commit Message Format:**
- Use "fix:" prefix for fixes
- Use "docs:" prefix for documentation
- Use "style:" prefix for formatting
- Keep description concise (<50 characters)

**Examples:**
```bash
git commit -m "fix: correct typo in case study title"
git commit -m "style: adjust button padding"
git commit -m "docs: update README deployment section"
```

### 4. Push to Remote
```bash
git push origin $(git branch --show-current)
```

## Quick Command

Run as one line:
```bash
git add -A && git commit -m "fix: [description]" && git push origin $(git branch --show-current)
```

## Safety Checks

**Before using quick-fix:**
1. Review staged changes: `git diff --cached`
2. Confirm no functional code changed
3. Verify change is truly minor
4. Check branch is correct

**If unsure, use full workflow:**
- Use `@cpp` (commit-and-push) instead
- Runs tests and linting
- Generates semantic message
- Safer for non-trivial changes

## Examples

### ✅ Good Use Cases
```bash
# Typo fix
git add -A && git commit -m "fix: correct spelling in hero section" && git push

# CSS adjustment
git add -A && git commit -m "style: increase button padding by 2px" && git push

# Documentation
git add -A && git commit -m "docs: add installation instructions" && git push

# Content
git add -A && git commit -m "fix: update case study client name" && git push
```

### ❌ Bad Use Cases (Use @cpp instead)
```bash
# New feature - NO
git commit -m "fix: add new contact form"  # Use @cpp

# Bug fix - NO
git commit -m "fix: resolve navigation issue"  # Use @cpp

# Logic change - NO
git commit -m "fix: update validation rules"  # Use @cpp
```

## Warnings

**⚠️ Use with caution:**
- Skips tests (could miss regressions)
- Skips linting (could introduce style issues)
- No quality gates
- Fast but risky for non-trivial changes

**When in doubt, use `@cpp` instead**

## Related Commands
- **@cpp** (commit-and-push-to-remote): Full workflow with tests
- **@pre-flight**: Pre-deployment checks

---

*Last Updated: 16/10/2025*

