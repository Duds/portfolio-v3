---
name: Deploy to Production
description: Full deployment workflow with pre-flight checks, build verification, deployment execution, and post-deployment validation for production releases
version: 1.0.0
category: action
last_updated: 16/10/2025
triggers: ["deploy", "deploy-prod", "publish"]
---

# Deploy to Production

Complete deployment workflow for pushing the portfolio website to production with comprehensive pre-flight checks, build verification, and post-deployment validation.

## Pre-Deployment Checklist

### 1. Run Pre-Flight Check
- [ ] Execute: `@pre-flight`
- [ ] All critical checks pass
- [ ] No high-priority issues
- [ ] Stakeholder approvals obtained

### 2. Version Control
- [ ] All changes committed
- [ ] Working directory clean
- [ ] Branch up-to-date with main
- [ ] Version tag created (if using versioning)

### 3. Build Verification
- [ ] Run: `node scripts/build-content.js`
- [ ] Build completes without errors
- [ ] All case studies processed correctly
- [ ] Preview locally to verify

## Deployment Steps

### Step 1: Final Quality Checks
```bash
# Run build
node scripts/build-content.js

# Check for errors in browser console
# Open http://localhost:8000 and verify

# Run Lighthouse
lighthouse http://localhost:8000 --view
```

### Step 2: Commit Final Changes
```bash
# If any last-minute changes
git add -A
git commit -m "chore: prepare for deployment v[X.X.X]"
git push origin main
```

### Step 3: Deploy to Hosting Platform

**Azure Static Web Apps (Your Setup):**

#### Option 1: Azure CLI Deployment (Manual)

```bash
# Login to Azure (if not already)
az login

# Deploy to Azure Static Web App
az staticwebapp deploy \
  --name <your-static-web-app-name> \
  --resource-group <your-resource-group> \
  --source .

# Or if you have the deployment token
az staticwebapp deploy \
  --app-location . \
  --deployment-token <your-deployment-token>
```

#### Option 2: Git Push (Automated - Recommended)

**Using Azure Repos (Azure DevOps Git):**
```bash
# After migrating to Azure Repos
git push origin main  # Auto-deploys via Azure Pipelines

# Check deployment status
az staticwebapp show \
  --name <your-static-web-app-name> \
  --resource-group <your-resource-group>
```

**Using GitHub (Current, if applicable):**
```bash
# Push triggers GitHub Actions workflow
git push origin main

# Azure Static Web Apps GitHub Action handles deployment
```

#### Verify Deployment Token

```bash
# Get deployment token for your Static Web App
az staticwebapp secrets list \
  --name <your-static-web-app-name> \
  --resource-group <your-resource-group>
```

### Step 4: Verify Deployment

1. **Check Deployment Status**
   - Verify deployment completed successfully
   - Check hosting platform dashboard
   - Review deployment logs

2. **Test Production Site**
   - [ ] Homepage loads correctly
   - [ ] Portfolio page displays all case studies
   - [ ] Navigation works
   - [ ] All assets load (CSS, JS, images, fonts)
   - [ ] No console errors
   - [ ] Forms work (if applicable)

3. **Run Production Tests**
   ```bash
   # Lighthouse on production URL
   lighthouse https://yourdomain.com --view
   
   # Security headers
   # Visit: https://securityheaders.com/?q=https://yourdomain.com
   
   # SSL check
   # Visit: https://www.ssllabs.com/ssltest/
   ```

### Step 5: Post-Deployment Verification

#### Functional Tests
- [ ] All pages accessible
- [ ] Links work correctly
- [ ] Images display properly
- [ ] Responsive design works
- [ ] Mobile navigation functional

#### Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Core Web Vitals passing
- [ ] Lighthouse Performance score 90+

#### SEO Verification
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Meta tags present
- [ ] Structured data valid

#### Security Checks
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] No mixed content warnings
- [ ] SSL certificate valid

## Rollback Procedure

If deployment fails or issues discovered:

### Quick Rollback (Azure Static Web Apps)

**Option 1: Git Revert**
```bash
# Revert to previous commit
git revert HEAD
git push origin main  # Triggers redeployment

# Or reset to specific commit
git reset --hard <previous-commit-hash>
git push --force origin main  # Use with caution!
```

**Option 2: Redeploy Previous Version**
```bash
# Get deployment history
az staticwebapp show \
  --name <your-static-web-app-name> \
  --resource-group <your-resource-group>

# Deploy from previous commit
git checkout <previous-commit-hash>
az staticwebapp deploy \
  --name <your-static-web-app-name> \
  --resource-group <your-resource-group> \
  --source .
git checkout main
```

**Option 3: Azure Portal**
- Navigate to Azure Portal → Static Web Apps
- Select your app
- Go to "Deployment history"
- Select previous successful deployment
- Click "Redeploy"

### Identify Issue
1. Check deployment logs
2. Review error messages
3. Test locally to reproduce
4. Document the issue

### Fix and Redeploy
1. Fix the issue locally
2. Test thoroughly
3. Commit fix
4. Redeploy following procedure

## Deployment Environments

### Staging (Azure Static Web Apps)

**Option 1: Staging Environment Setup**

Azure Static Web Apps automatically creates staging environments for pull requests.

```bash
# Create feature branch
git checkout -b feature/new-update

# Make changes and commit
git add -A
git commit -m "feat: add new feature"

# Push to trigger staging deployment
git push origin feature/new-update

# Create PR - Azure automatically deploys staging URL
# Review at: https://<staging-url>.azurestaticapps.net
```

**Option 2: Separate Staging Static Web App**

Create a dedicated staging Static Web App:

```bash
# Deploy to staging app
az staticwebapp deploy \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --source .

# After testing, deploy to production
az staticwebapp deploy \
  --name portfolio-production \
  --resource-group <your-resource-group> \
  --source .
```

### Production
- Production URL: https://dalerogers.com.au
- Deploy from main branch (trunk-based development)
- Ensure all tests pass
- Get stakeholder sign-off
- Verify custom domain configuration

## Monitoring Post-Deployment

### Immediate (First Hour)
- [ ] Monitor error logs
- [ ] Check analytics for traffic
- [ ] Verify Core Web Vitals
- [ ] Watch for 404 errors

### First 24 Hours
- [ ] Monitor user behaviour
- [ ] Check search console for errors
- [ ] Verify search rankings maintained
- [ ] Review performance metrics

### First Week
- [ ] Analyze user feedback
- [ ] Review analytics trends
- [ ] Monitor conversion rates
- [ ] Check for any reported issues

## Deployment Checklist Template

```markdown
## Deployment Record

**Date:** [DD/MM/YYYY]
**Time:** [HH:MM AEST/AEDT]
**Version:** [X.X.X]
**Deployed By:** [Name]

### Pre-Deployment
- [x] Pre-flight check passed
- [x] All tests passing
- [x] Build successful
- [x] Stakeholder approval obtained

### Deployment
- [x] Committed to main branch
- [x] Deployed to production
- [x] Deployment verified successful
- [x] Production site tested

### Post-Deployment
- [x] All pages accessible
- [x] Performance verified
- [x] No console errors
- [x] Mobile responsive working

### Lighthouse Scores (Production)
- Performance: [Score]/100
- Accessibility: [Score]/100
- Best Practices: [Score]/100
- SEO: [Score]/100

### Issues/Notes
[Any issues encountered or notes]

**Deployment Status:** ✅ SUCCESS / ⚠️ WITH ISSUES / ❌ FAILED
```

## Common Deployment Issues

### Build Fails
**Issue:** Build script errors during deployment
**Fix:** Test build locally first, check dependencies, verify markdown syntax

### Assets Not Loading
**Issue:** CSS, JS, or images don't load in production
**Fix:** Check asset paths (relative vs absolute), verify CDN configuration

### Slow Performance
**Issue:** Site slower in production than locally
**Fix:** Enable compression, configure caching, optimize images, use CDN

### HTTPS Issues
**Issue:** Mixed content warnings or certificate errors
**Fix:** Ensure all resources use HTTPS, verify SSL certificate configured

### 404 Errors
**Issue:** Pages not found after deployment
**Fix:** Check routing configuration, verify all files deployed, check .htaccess/redirects

## Azure-Specific Setup

**For detailed Azure Static Web Apps configuration, see:**
- [Azure Static Web Apps Setup Guide](/.docs/deployment/AZURE_STATIC_WEB_APPS_SETUP.md)

This guide covers:
- Azure CLI deployment
- Build configuration
- Custom domain setup (dalerogers.com.au)
- Staging environments
- Migration to Azure Repos
- CI/CD with Azure Pipelines
- Environment variables

## Related Commands
- **@pre-flight**: Pre-deployment checklist
- **@build**: Build and preview locally
- **@audit-all**: Run all quality audits
- **@cpp**: Commit and push changes

---

*Last Updated: 16/10/2025*

