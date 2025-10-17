---
name: Commit and Push to Remote
description: Stages all changes, generates semantic commit message, runs tests/linting, commits and pushes to current branch following trunk-based development practices
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["commit-and-push-to-remote", "cpp", "push"]
---

# Commit and Push to Remote

This command automates the complete git commit and push workflow with quality gates and intelligent commit message generation.

## Workflow

### Phase 1: Pre-Commit Checks

1. **Check Git Status**
   - Run `git status` to detect if there are any changes
   - If no changes detected, inform user and exit
   - Check if we're in a git repository

2. **Stage All Changes**
   - Execute `git add -A` to stage all changes (new, modified, deleted files)
   - Confirm staging was successful

3. **Analyze Changes**
   - Run `git diff --cached --stat` to get a summary of staged changes
   - Run `git diff --cached` to get detailed changes for message generation
   - Identify which files and what types of changes were made

### Phase 2: Generate Commit Message

**Analyze the staged changes and generate a semantic commit message following Conventional Commits format:**

**Message Format:** `type(scope): description`

**Types:**
- `feat`: New feature or functionality
- `fix`: Bug fix
- `docs`: Documentation changes only
- `style`: Code style/formatting changes (CSS updates, whitespace, etc.)
- `refactor`: Code refactoring without changing behavior
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config, etc.)
- `perf`: Performance improvements

**Scope (optional but recommended):**
- Component or area affected (e.g., `portfolio`, `css`, `js`, `build`)
- Keep scope concise and lowercase

**Description:**
- Use imperative mood ("add" not "added" or "adds")
- Don't capitalise first letter
- No period at the end
- Be specific and concise (max 72 characters)

**Examples:**
```
feat(portfolio): add antarctic doctrine case study
fix(css): resolve grid layout overlap on mobile
docs(readme): update deployment instructions
refactor(js): simplify masonry layout calculations
style(css): improve button hover transitions
test(build): add unit tests for content builder
chore(deps): update marked to version 12.0.0
perf(js): optimise scroll effect performance
```

**Message Generation Guidelines:**
1. Analyze file paths and changes to determine the type
2. If multiple types apply, choose the most significant
3. Group related changes under one logical commit message
4. If changes span multiple unrelated areas, inform user to commit separately
5. Keep the description focused on "what" and "why" not "how"

### Phase 3: Validation (Quality Gates)

**Run pre-push validation checks. Both must pass before committing.**

1. **Linting Checks**
   - Check if linting is configured (look for `.eslintrc`, `package.json` scripts)
   - If configured, run: `npm run lint` or equivalent
   - If linting fails:
     - Show the errors
     - Ask user if they want to fix automatically or abort
     - Do NOT proceed until linting passes

2. **Test Suite**
   - Check if tests are configured (look for test scripts in `package.json`)
   - If configured, run: `npm test` or equivalent
   - If tests fail:
     - Show which tests failed
     - **ABORT the commit** (user preference: do not commit until tests pass)
     - Inform user they need to fix tests before committing
     - Exit the workflow

3. **If No Tests/Linting**
   - If neither is configured, warn user but proceed
   - Suggest setting up testing/linting for future commits

### Phase 4: Commit and Push

1. **Commit Changes**
   - Execute: `git commit -m "[generated message]"`
   - Confirm commit was successful
   - Show commit hash and message

2. **Identify Current Branch**
   - Run: `git branch --show-current`
   - Confirm the branch name

3. **Push to Remote**
   - Execute: `git push origin [current-branch]`
   - For trunk-based development:
     - If on `main`, push directly to `main`
     - If on feature branch, push to that branch
     - Short-lived feature branches should be merged back to main quickly

4. **Confirm Success**
   - Show push result
   - Display commit hash, message, and branch pushed to
   - Confirm changes are now on remote

## Error Handling

### Common Scenarios:

**No Changes to Commit:**
```
✗ No changes detected. Working tree is clean.
Nothing to commit.
```

**Linting Failures:**
```
✗ Linting failed with errors:
  - [list errors]

Options:
  1. Fix linting errors automatically (run npm run lint --fix)
  2. Abort and fix manually
```

**Test Failures:**
```
✗ Tests failed. Cannot commit until tests pass.

Failed tests:
  - [list failed tests]

Please fix the failing tests and run the command again.
COMMIT ABORTED.
```

**Merge Conflicts:**
```
✗ Cannot push. Remote has changes you don't have.

Run: git pull --rebase origin [branch]
Then run this command again.
```

**No Remote Branch:**
```
✗ No remote branch found.

Creating remote branch and pushing...
Run: git push -u origin [branch]
```

**Not a Git Repository:**
```
✗ Not a git repository.
Please run: git init
```

## Usage Examples

### Scenario 1: Feature Addition
**Changes:** Added new case study HTML file, updated portfolio page
**Generated Message:** `feat(portfolio): add border security case study`

### Scenario 2: Bug Fix
**Changes:** Fixed CSS grid overlap issue in mobile view
**Generated Message:** `fix(css): resolve grid layout overlap on mobile`

### Scenario 3: Multiple File Updates
**Changes:** Updated styles.css, variables.css, components.css
**Generated Message:** `style(css): refine colour palette and spacing`

### Scenario 4: Documentation
**Changes:** Updated README.md with new deployment steps
**Generated Message:** `docs(readme): update deployment instructions`

### Scenario 5: Refactoring
**Changes:** Reorganised masonry.js without changing functionality
**Generated Message:** `refactor(js): simplify masonry layout logic`

## Trunk-Based Development Notes

**Key Principles:**
1. Work on `main` branch for small changes
2. Use short-lived feature branches (< 1-2 days) for larger features
3. Push frequently to keep branches in sync
4. Merge back to main quickly
5. Keep main branch always deployable (hence the quality gates)

**Branch Strategy:**
- **main**: Always deployable, protected
- **feature/[name]**: Short-lived feature branches
- No long-running development branches
- No release branches (continuous deployment)

## Best Practices

1. **Commit Frequently:** Small, atomic commits are better than large ones
2. **Quality First:** Never skip tests or linting
3. **Clear Messages:** Future you will thank present you for clear commit messages
4. **Stay Synced:** Pull regularly to avoid conflicts
5. **Review Before Push:** Glance at the diff before confirming

## Quick Reference

**Command Triggers:**
- `@commit-and-push-to-remote`
- `@cpp`
- `@push`

**Workflow Summary:**
1. Stage all changes (`git add -A`)
2. Generate semantic commit message
3. Run linting (must pass)
4. Run tests (must pass)
5. Commit with generated message
6. Push to current branch

---

*Last Updated: 16/10/2025*

