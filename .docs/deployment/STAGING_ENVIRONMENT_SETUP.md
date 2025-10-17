# Staging Environment Setup

**Purpose:** Configure staging environments for the portfolio website to test changes before production deployment.

**Production URL:** https://dalerogers.com.au

---

## Staging Strategy Overview

Azure Static Web Apps provides two staging approaches:

1. **PR-Based Staging** (Automatic) - Recommended
   - Creates temporary staging URL for each pull request
   - Automatic cleanup when PR is merged/closed
   - No additional cost
   - Built into Azure Static Web Apps

2. **Dedicated Staging App** (Manual)
   - Separate Static Web App for staging
   - Persistent staging URL
   - More control
   - Additional resource (still free tier available)

## Option 1: PR-Based Staging (Recommended)

### How It Works

1. Developer creates feature branch
2. Developer pushes commits to branch
3. Developer creates Pull Request to `main`
4. Azure automatically deploys to staging URL
5. Team reviews at staging URL
6. When PR merged → Deploys to production
7. Staging environment automatically cleaned up

### Configuration

**Already Configured If:**
- Using Azure Pipelines with the provided `azure-pipelines.yml`
- PR trigger is enabled in pipeline

**Verify PR Staging Is Enabled:**

```bash
# Check if PR deployments are enabled
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --query "stagingEnvironmentPolicy"
```

**Enable PR-Based Staging:**

Azure Static Web Apps enables this by default. The `azure-pipelines.yml` file includes:

```yaml
pr:
  branches:
    include:
      - main
```

### Using PR-Based Staging

**Workflow:**

```bash
# 1. Create feature branch
git checkout -b feature/new-case-study

# 2. Make changes
# Edit files, add new case study, etc.

# 3. Commit changes
git add -A
git commit -m "feat: add new mining case study"

# 4. Push to Azure Repos
git push origin feature/new-case-study

# 5. Create Pull Request
# In Azure DevOps:
# - Go to Repos → Pull Requests
# - Click "New Pull Request"
# - Source: feature/new-case-study
# - Target: main
# - Create PR

# 6. Azure automatically deploys to staging
# Check pipeline for staging URL
# URL format: https://[unique-hash].[region].azurestaticapps.net
```

**Find Staging URL:**

1. In Azure DevOps, go to Pipelines
2. Click on the PR pipeline run
3. Look for "Deploy to Staging" stage
4. Staging URL shown in deployment logs

Or via CLI:

```bash
# List all environments for your app
az staticwebapp environment list \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --output table
```

**Test Staging Environment:**

```bash
# Get staging URL from Azure DevOps pipeline
STAGING_URL="https://[unique-hash].[region].azurestaticapps.net"

# Open in browser
open $STAGING_URL  # macOS
# or manually visit URL

# Run audits on staging
lighthouse $STAGING_URL
```

**Approve and Merge:**

After testing staging:

```bash
# In Azure DevOps:
# 1. Review changes
# 2. Approve pull request
# 3. Complete (merge) PR

# Automatic:
# - Staging environment cleaned up
# - Production deployment triggered
# - Production updated with changes
```

### Staging Checklist

For each PR staging review:

- [ ] Staging URL accessible
- [ ] New content displays correctly
- [ ] No console errors
- [ ] All links work
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Performance acceptable (quick Lighthouse)
- [ ] No broken functionality

## Option 2: Dedicated Staging App

### When to Use

- Need persistent staging URL
- Multiple team members testing concurrently
- Want to test without creating PRs
- Need staging for demonstrations

### Setup Dedicated Staging App

**Step 1: Create Staging Static Web App**

```bash
# Create new Static Web App for staging
az staticwebapp create \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --location australiaeast \
  --source https://github.com/your-org/portfolio-v3 \
  --branch staging \
  --app-location "." \
  --output-location "." \
  --sku Free

# Note: Adjust --source to your repo URL
# If using Azure Repos, format: https://dev.azure.com/org/project/_git/repo
```

**Step 2: Create Staging Branch**

```bash
# Create staging branch from main
git checkout main
git pull
git checkout -b staging
git push origin staging
```

**Step 3: Get Staging Deployment Token**

```bash
# Get deployment token for staging app
az staticwebapp secrets list \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --query "properties.apiKey" -o tsv
```

**Step 4: Configure Staging Pipeline**

Create `.azure/pipelines/staging-deploy.yml`:

```yaml
trigger:
  branches:
    include:
      - staging

pool:
  vmImage: 'ubuntu-latest'

variables:
  nodeVersion: '18.x'

steps:
  - task: NodeTool@0
    displayName: 'Install Node.js'
    inputs:
      versionSpec: '$(nodeVersion)'

  - script: npm install
    displayName: 'Install dependencies'

  - script: node scripts/build-content.js
    displayName: 'Build content'

  - task: AzureStaticWebApp@0
    displayName: 'Deploy to Staging'
    inputs:
      app_location: '.'
      output_location: '.'
      azure_static_web_apps_api_token: $(AZURE_STAGING_TOKEN)
      skip_app_build: true
```

**Step 5: Configure Custom Domain for Staging (Optional)**

```bash
# Add staging subdomain
az staticwebapp hostname set \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --hostname staging.dalerogers.com.au
```

**DNS Configuration:**

Add CNAME record:
```
Type: CNAME
Name: staging
Value: portfolio-staging.azurestaticapps.net
TTL: 3600
```

### Using Dedicated Staging

**Deploy to Staging:**

```bash
# Push to staging branch
git checkout staging
git merge main
git push origin staging

# Or deploy directly via CLI
az staticwebapp deploy \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --source .
```

**Access Staging:**

- Default URL: `https://portfolio-staging.azurestaticapps.net`
- Custom URL: `https://staging.dalerogers.com.au` (if configured)

**Promote Staging to Production:**

After testing on staging:

```bash
# Merge staging to main
git checkout main
git merge staging
git push origin main

# This triggers production deployment
```

## Staging Environment Variables

If staging needs different configuration:

```bash
# Set staging-specific variables
az staticwebapp appsettings set \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --setting-names \
    NODE_ENV="staging" \
    ANALYTICS_ID="staging-analytics-id"
```

## Staging Workflow Comparison

### PR-Based Staging

**Pros:**
- ✅ Automatic (no manual setup per feature)
- ✅ Clean URLs per PR
- ✅ Automatic cleanup
- ✅ Free (no additional resources)
- ✅ Integrated with code review

**Cons:**
- ❌ Temporary URLs
- ❌ Only available during PR
- ❌ URL changes between PRs

**Best for:**
- Trunk-based development
- Rapid feature development
- Small teams
- Cost-conscious projects

### Dedicated Staging

**Pros:**
- ✅ Persistent URL
- ✅ Available anytime
- ✅ Can demo without PR
- ✅ Custom domain option

**Cons:**
- ❌ Additional resource to manage
- ❌ Manual promotion to production
- ❌ Can drift from main if not careful

**Best for:**
- Client demonstrations
- Extended testing periods
- Multiple concurrent tests
- External stakeholder reviews

## Recommended: Hybrid Approach

**Use both staging strategies:**

1. **PR-Based Staging**: For development and code review
   - Quick feature testing
   - Automatic with every PR
   - Review before merge

2. **Dedicated Staging**: For stakeholder demos
   - Client previews
   - Extended testing
   - Pre-production verification

## Staging Checklist Template

Use this for staging reviews:

```markdown
## Staging Review: [Feature Name]

**Staging URL:** [URL]
**Reviewer:** [Name]
**Date:** DD/MM/YYYY

### Functionality
- [ ] New features work as expected
- [ ] Existing features still work
- [ ] No console errors
- [ ] No broken links

### Content
- [ ] New case studies display correctly
- [ ] Text content accurate
- [ ] Images load and display
- [ ] Formatting correct

### Performance
- [ ] Page load time acceptable
- [ ] No performance regressions
- [ ] Lighthouse score maintained

### Compatibility
- [ ] Works on Chrome
- [ ] Works on Safari
- [ ] Works on Firefox
- [ ] Mobile responsive

### Security
- [ ] HTTPS enforced
- [ ] No security warnings
- [ ] No exposed sensitive data

**Approval:** ✅ Approved / ❌ Changes Needed

**Notes:**
[Any additional comments or issues]
```

## Troubleshooting Staging

### Issue: Staging URL Not Generated

**Check:**
```bash
# Verify PR deployment enabled
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group>
```

**Fix:** Ensure PR trigger in `azure-pipelines.yml`

### Issue: Staging Shows Old Content

**Clear cache:**
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Check deployment completed successfully
- Verify correct branch deployed

### Issue: Staging Not Cleaning Up

**Manual cleanup:**
```bash
# List environments
az staticwebapp environment list \
  --name <your-app-name> \
  --resource-group <your-resource-group>

# Delete specific environment
az staticwebapp environment delete \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --environment-name <environment-name>
```

## Related Documentation

- [Azure Static Web Apps Setup](./AZURE_STATIC_WEB_APPS_SETUP.md)
- [Deploy to Production Command](/.cursor/commands/deploy-to-production.md)
- [Pre-Flight Check](/.cursor/commands/pre-flight-check.md)

---

**Last Updated:** 16/10/2025

