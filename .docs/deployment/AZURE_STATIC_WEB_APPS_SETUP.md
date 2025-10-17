# Azure Static Web Apps Setup Guide

**Purpose:** Complete guide for deploying portfolio-v3 to Azure Static Web Apps with custom domain, CI/CD, and staging environments.

**Production URL:** https://dalerogers.com.au

---

## Prerequisites

### Required Tools

1. **Azure CLI**
   ```bash
   # Install Azure CLI (macOS)
   brew update && brew install azure-cli
   
   # Verify installation
   az --version
   
   # Login to Azure
   az login
   ```

2. **Azure Account**
   - Active Azure subscription
   - Resource group created
   - Appropriate permissions

3. **Git**
   - Git installed locally
   - Repository hosted (GitHub or Azure Repos)

## Current Setup Status

### What You Have
- ✅ Custom domain: https://dalerogers.com.au
- ✅ Azure CLI for deployment
- ✅ Trunk-based development workflow
- ✅ Portfolio website ready to deploy

### What Needs Configuration
- ⚠️ Build configuration for Azure
- ⚠️ Environment variables (if any)
- ⚠️ Staging environment setup
- ⚠️ CI/CD pipeline (optional)
- ⚠️ Migration to Azure Repos (optional)

## Part 1: Azure Static Web Apps Configuration

### 1.1 Check Current Configuration

```bash
# List your static web apps
az staticwebapp list --output table

# Get specific app details
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group>
```

### 1.2 Build Configuration

Azure Static Web Apps needs to know:
- **App Location:** `.` (root directory)
- **API Location:** (not applicable for this project)
- **Output Location:** `.` (no build output folder)

**Check current configuration:**

```bash
# Get app configuration
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --query "{appLocation:buildProperties.appLocation,apiLocation:buildProperties.apiLocation,outputLocation:buildProperties.outputLocation}"
```

**Update configuration if needed:**

```bash
az staticwebapp update \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --app-location "." \
  --output-location "."
```

### 1.3 Build Command

Your portfolio needs to run the markdown build script before deployment:

**Build command:** `node scripts/build-content.js`

**Configure in Azure:**

If using GitHub Actions or Azure Pipelines, add this to your workflow:

```yaml
# In workflow file
- name: Build content
  run: node scripts/build-content.js
```

### 1.4 Environment Variables

**Check if you need any:**

Common environment variables for portfolios:
- `NODE_VERSION` (e.g., "18" or "20")
- Analytics IDs (if using)
- API keys for external services (if any)

**Add environment variables:**

```bash
# Add application settings
az staticwebapp appsettings set \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --setting-names NODE_VERSION="18"

# List current settings
az staticwebapp appsettings list \
  --name <your-app-name> \
  --resource-group <your-resource-group>
```

## Part 2: Custom Domain Setup

### 2.1 Verify Current Domain Configuration

```bash
# Check custom domain
az staticwebapp hostname list \
  --name <your-app-name> \
  --resource-group <your-resource-group>
```

### 2.2 Configure Custom Domain (if not already done)

**Step 1: Add custom domain**

```bash
az staticwebapp hostname set \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --hostname dalerogers.com.au
```

**Step 2: Get validation details**

```bash
az staticwebapp hostname show \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --hostname dalerogers.com.au
```

**Step 3: Configure DNS**

Add these DNS records with your domain registrar:

For apex domain (dalerogers.com.au):
```
Type: A
Name: @
Value: [IP address from Azure]

Type: TXT
Name: @
Value: [validation token from Azure]
```

For www subdomain:
```
Type: CNAME
Name: www
Value: <your-app-name>.azurestaticapps.net

Type: TXT
Name: www
Value: [validation token from Azure]
```

**Step 4: Verify and validate**

```bash
# Validate domain
az staticwebapp hostname validate \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --hostname dalerogers.com.au
```

## Part 3: Deployment Methods

### 3.1 Manual Deployment (Azure CLI)

**Quick deployment:**

```bash
# Deploy from current directory
az staticwebapp deploy \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --source . \
  --no-wait

# Or with deployment token
az staticwebapp deploy \
  --deployment-token <your-deployment-token> \
  --source .
```

**Get deployment token:**

```bash
az staticwebapp secrets list \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --query "properties.apiKey" -o tsv
```

### 3.2 Automated Deployment (Git Push)

#### Option A: Continue with GitHub

If currently using GitHub:

1. Azure creates GitHub Action automatically
2. Edit `.github/workflows/azure-static-web-apps-<name>.yml`
3. Add build step:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build content
        run: node scripts/build-content.js
      
      - name: Build And Deploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "."
          output_location: "."
```

#### Option B: Migrate to Azure Repos

**Benefits of Azure Repos:**
- Integrated with Azure DevOps
- Azure Pipelines for CI/CD
- All Azure ecosystem
- Free private repos

**Migration Steps:**

1. **Create Azure DevOps Organization**
   - Go to: https://dev.azure.com
   - Create new organization or use existing
   - Create new project

2. **Create Azure Repo**
   ```bash
   # Get your Azure Repo URL from Azure DevOps
   AZURE_REPO_URL="https://dev.azure.com/<org>/<project>/_git/<repo>"
   ```

3. **Mirror GitHub to Azure Repos**
   ```bash
   # Add Azure Repos as remote
   git remote add azure $AZURE_REPO_URL
   
   # Push all branches
   git push azure --all
   
   # Push all tags
   git push azure --tags
   ```

4. **Set Azure Repos as primary**
   ```bash
   # Change origin to Azure Repos
   git remote rename origin github
   git remote rename azure origin
   
   # Verify
   git remote -v
   ```

5. **Create Azure Pipeline**

Create `azure-pipelines.yml` in repository root:

```yaml
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18.x'
  displayName: 'Install Node.js'

- script: |
    npm install
  displayName: 'Install dependencies'

- script: |
    node scripts/build-content.js
  displayName: 'Build content'

- task: AzureStaticWebApp@0
  inputs:
    app_location: '.'
    output_location: '.'
    azure_static_web_apps_api_token: $(deployment_token)
  displayName: 'Deploy to Azure Static Web Apps'
```

6. **Configure Pipeline**
   - In Azure DevOps, go to Pipelines
   - Create new pipeline
   - Select Azure Repos
   - Select your repository
   - Review pipeline YAML
   - Add secret variable `deployment_token`
   - Run pipeline

## Part 4: Staging Environment Setup

### Option 1: PR-Based Staging (Automatic)

Azure Static Web Apps automatically creates staging environments for pull requests.

**Workflow:**
1. Create feature branch
2. Push to repository
3. Create Pull Request
4. Azure deploys to staging URL: `https://<unique-id>.azurestaticapps.net`
5. Review and test staging
6. Merge PR → Deploys to production

**Configure PR environments:**

```bash
# Check staging environments
az staticwebapp environment list \
  --name <your-app-name> \
  --resource-group <your-resource-group>
```

### Option 2: Separate Staging Static Web App

Create dedicated staging app:

```bash
# Create staging static web app
az staticwebapp create \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --location australiaeast \
  --sku Free

# Deploy to staging
az staticwebapp deploy \
  --name portfolio-staging \
  --resource-group <your-resource-group> \
  --source .
```

## Part 5: Monitoring and Logging

### 5.1 View Deployment Logs

```bash
# List deployments
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --query "repositoryUrl"
```

**In Azure Portal:**
1. Navigate to your Static Web App
2. Click "Deployment History"
3. View build logs for each deployment

### 5.2 Application Insights (Optional)

Enable monitoring:

```bash
# Create Application Insights
az monitor app-insights component create \
  --app portfolio-insights \
  --location australiaeast \
  --resource-group <your-resource-group>

# Link to Static Web App
az staticwebapp appsettings set \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --setting-names APPLICATIONINSIGHTS_CONNECTION_STRING="<connection-string>"
```

## Part 6: Verification Checklist

### Post-Setup Verification

- [ ] Can deploy via Azure CLI: `az staticwebapp deploy`
- [ ] Build script runs: `node scripts/build-content.js`
- [ ] Production URL works: https://dalerogers.com.au
- [ ] HTTPS enforced (no HTTP access)
- [ ] Custom domain DNS configured correctly
- [ ] SSL certificate valid
- [ ] Staging environment functional (if set up)
- [ ] CI/CD pipeline works (if configured)
- [ ] Environment variables set (if needed)
- [ ] Deployment logs accessible

### Troubleshooting Commands

```bash
# Check app status
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --query "{status:defaultHostname,domain:customDomains}"

# Test deployment token
az staticwebapp secrets list \
  --name <your-app-name> \
  --resource-group <your-resource-group>

# Check recent deployments
az staticwebapp show \
  --name <your-app-name> \
  --resource-group <your-resource-group> \
  --query "latestBuildId"
```

## Quick Reference

### Essential Commands

```bash
# Deploy
az staticwebapp deploy --name <app-name> --resource-group <rg> --source .

# Check status
az staticwebapp show --name <app-name> --resource-group <rg>

# List domains
az staticwebapp hostname list --name <app-name> --resource-group <rg>

# View settings
az staticwebapp appsettings list --name <app-name> --resource-group <rg>

# Get deployment token
az staticwebapp secrets list --name <app-name> --resource-group <rg>
```

### Useful Links

- **Azure Portal:** https://portal.azure.com
- **Azure Static Web Apps Docs:** https://docs.microsoft.com/azure/static-web-apps/
- **Azure DevOps:** https://dev.azure.com
- **Your Production Site:** https://dalerogers.com.au

## Next Steps

1. **Verify current Azure setup:**
   - Run: `az staticwebapp show --name <your-app-name> --resource-group <your-resource-group>`
   - Note app name and resource group

2. **Test deployment:**
   - Run: `@deploy` command
   - Verify site updates

3. **Set up staging (optional):**
   - Choose PR-based or separate app
   - Configure as needed

4. **Migrate to Azure Repos (optional):**
   - Follow migration steps above
   - Set up Azure Pipeline
   - Test automated deployment

5. **Configure monitoring (optional):**
   - Set up Application Insights
   - Configure alerts

---

**Last Updated:** 16/10/2025  
**Related Documentation:** 
- [Deploy to Production Command](/.cursor/commands/deploy-to-production.md)
- [Pre-Flight Check](/.cursor/commands/pre-flight-check.md)

