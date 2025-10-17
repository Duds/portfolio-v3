# Azure Deployment Quick Start

**Quick guide to get your portfolio deployed to Azure Static Web Apps**

---

## Step 1: Verify Your Azure Setup (2 minutes)

Run the verification script:

```bash
./scripts/verify-azure-setup.sh
```

This script will:
- ✅ Check Azure CLI is installed and logged in
- ✅ List your Static Web Apps
- ✅ Verify app configuration
- ✅ Check custom domain setup
- ✅ Retrieve deployment token
- ✅ Test local build

**What you'll need:**
- Your Static Web App name
- Your resource group name

## Step 2: Configure Azure Pipeline (5 minutes)

### A. Add Deployment Token to Azure DevOps

1. **Get your deployment token** (from verification script output)

2. **Add to Azure Pipelines:**
   - Go to: https://dev.azure.com
   - Navigate to your project
   - Go to: Pipelines → Library → Variable groups
   - Create new variable group (or edit existing)
   - Name: "Portfolio Deployment"
   - Add variable:
     - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
     - Value: [paste your deployment token]
     - ✅ Keep this value secret

3. **Link variable group to pipeline:**
   - In `azure-pipelines.yml`, add at top of variables section:
     ```yaml
     variables:
       - group: 'Portfolio Deployment'
       nodeVersion: '18.x'
     ```

### B. Push Pipeline Configuration

```bash
# Add the Azure Pipeline file
git add azure-pipelines.yml

# Commit
git commit -m "ci: add Azure Pipelines configuration"

# Push to main (triggers deployment!)
git push origin main
```

## Step 3: Set Up Staging (5 minutes)

**We recommend PR-Based Staging** (automatic with every PR):

### A. Test PR-Based Staging

```bash
# 1. Create feature branch
git checkout -b test/staging-setup

# 2. Make small change (add comment to file)
echo "<!-- Test staging -->" >> index.html

# 3. Commit and push
git add index.html
git commit -m "test: verify staging deployment"
git push origin test/staging-setup

# 4. Create Pull Request in Azure DevOps
# - Go to Repos → Pull Requests
# - Click "New Pull Request"
# - Select: test/staging-setup → main
# - Create PR

# 5. Watch pipeline deploy to staging
# - Go to Pipelines
# - Click running pipeline
# - Find staging URL in "Deploy to Staging" stage

# 6. Review staging, then merge or close PR
```

Full staging setup guide: `.docs/deployment/STAGING_ENVIRONMENT_SETUP.md`

## Step 4: Deploy to Production (First Time)

### Option A: Manual Deployment (Quick)

```bash
# Deploy now via Azure CLI
az staticwebapp deploy \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --source .
```

### Option B: Git Push (Automated)

```bash
# Simply push to main branch
git push origin main

# Pipeline automatically:
# 1. Builds content
# 2. Runs security audit
# 3. Deploys to production
# 4. Available at https://dalerogers.com.au
```

## Step 5: Verify Production (2 minutes)

```bash
# Check production site
open https://dalerogers.com.au

# Run quick checks
lighthouse https://dalerogers.com.au --view

# Verify in Azure Portal
# - Portal: https://portal.azure.com
# - Navigate to your Static Web App
# - Check "Deployment History"
```

## That's It! 🚀

Your portfolio is now:
- ✅ Deployed to Azure Static Web Apps
- ✅ Available at https://dalerogers.com.au
- ✅ Auto-deploys on push to main
- ✅ Creates staging environments for PRs
- ✅ Builds content from markdown automatically

## Common Next Steps

### Update Content

```bash
# Use the create case study command
@create-case-study

# Or edit existing case studies
# Files in: /case-studies/*.md

# Build and preview locally
@build

# Commit and push (triggers deployment)
@cpp
```

### Run Quality Checks

```bash
# Before deploying
@pre-flight

# Run all audits
@audit-all
```

### Troubleshooting

**Pipeline fails on first run:**
- Check deployment token is correct
- Verify variable group is linked
- Check build script runs locally: `node scripts/build-content.js`

**Staging not creating:**
- Verify PR trigger in `azure-pipelines.yml`
- Check PR targets `main` branch
- Review pipeline run logs

**Production not updating:**
- Check deployment logs in Azure DevOps
- Verify push went to `main` branch
- Check Azure Portal deployment history

## Quick Reference

```bash
# Verify setup
./scripts/verify-azure-setup.sh

# Manual deploy
az staticwebapp deploy --name <app-name> --resource-group <rg> --source .

# Check status
az staticwebapp show --name <app-name> --resource-group <rg>

# Build locally
node scripts/build-content.js

# Preview locally
@build

# Deploy via git
git push origin main
```

## Documentation

- **Full Azure Setup:** `.docs/deployment/AZURE_STATIC_WEB_APPS_SETUP.md`
- **Staging Setup:** `.docs/deployment/STAGING_ENVIRONMENT_SETUP.md`
- **Deploy Command:** `.cursor/commands/deploy-to-production.md`
- **Pre-Flight Check:** `.cursor/commands/pre-flight-check.md`

---

**Last Updated:** 16/10/2025

