# Azure Deployment Quick Reference

Quick commands and checklist for deploying your portfolio to Azure.

## Prerequisites

- Azure account with active subscription
- GitHub repository with your code
- Azure CLI installed (optional, for command-line deployment)

## Deployment Options

### Option 1: Azure Portal + GitHub (Easiest)

**Time: ~10 minutes**

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Create Static Web App in Azure Portal**
   - Go to portal.azure.com
   - Create resource → Static Web App
   - Connect GitHub repo
   - Azure auto-deploys on push

3. **Set up Logic App for contact form**
   - See [AZURE_SETUP.md](../architecture/AZURE_SETUP.md) for detailed steps
   - Takes ~10 minutes
   - Free tier available

### Option 2: Azure CLI

**Time: ~5 minutes**

```bash
# Login
az login

# Create resource group
az group create --name portfolio-rg --location australiaeast

# Create static web app with GitHub integration
az staticwebapp create \
  --name your-portfolio-name \
  --resource-group portfolio-rg \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location australiaeast \
  --branch main \
  --app-location "/" \
  --login-with-github

# Get the URL
az staticwebapp show \
  --name your-portfolio-name \
  --resource-group portfolio-rg \
  --query "defaultHostname" -o tsv
```

### Option 3: VS Code Extension

1. Install **Azure Static Web Apps** extension
2. Right-click project folder → Deploy to Static Web Apps
3. Follow prompts

## Pre-Deployment Checklist

Before deploying, ensure you've configured:

### Critical (Required)
- [ ] Azure Logic App created and configured
- [ ] Logic App URL added to `index.html` (line 301)
- [ ] Contact email addresses updated (replace `hello@example.com`)
- [ ] Phone numbers updated (replace `+61 400 000 000`)
- [ ] All `https://yourwebsite.com` URLs replaced with actual domain

### Important (Recommended)
- [ ] Calendly link configured or removed
- [ ] Open Graph images created (`/assets/images/og-image.jpg`)
- [ ] About section personalized with your details
- [ ] Case study metrics verified
- [ ] Schema.org data updated with real information

### Optional (Can Do Post-Launch)
- [ ] Custom domain configured
- [ ] Google Analytics added
- [ ] SSL certificate (automatic with Azure, just verify)
- [ ] Project images replaced

## Post-Deployment Steps

### 1. Verify Deployment

```bash
# Check deployment status
az staticwebapp show \
  --name your-portfolio-name \
  --resource-group portfolio-rg
```

Or visit Azure Portal → Static Web Apps → Your App → Deployment History

### 2. Test Contact Form

1. Visit your deployed site
2. Fill out contact form
3. Submit and verify:
   - Success message appears
   - Email received
   - Check Logic App run history in Azure Portal

### 3. Check Logic App

Azure Portal → Logic Apps → your-logic-app → Overview → Run history

### 4. Configure Custom Domain (Optional)

```bash
# Add custom domain
az staticwebapp hostname set \
  --name your-portfolio-name \
  --resource-group portfolio-rg \
  --hostname www.yourdomain.com
```

Then add CNAME record in your DNS:
```
CNAME  www  your-app.azurestaticapps.net
```

## Monitoring & Maintenance

### Check Application Health

```bash
# View recent runs
az staticwebapp show \
  --name your-portfolio-name \
  --resource-group portfolio-rg

# View Logic App runs
az logic workflow show \
  --name portfolio-contact-form \
  --resource-group portfolio-rg
```

### View Logs

Azure Portal → Static Web App → Logs → Application Insights

### Update Deployment

Just push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Azure auto-deploys within 2-3 minutes.

## Cost Monitoring

```bash
# View current costs
az consumption usage list \
  --start-date 2025-10-01 \
  --end-date 2025-10-31

# Set budget alert (optional)
az consumption budget create \
  --budget-name portfolio-budget \
  --amount 10 \
  --time-grain Monthly \
  --start-date 2025-10-01
```

**Expected monthly cost:** $0-$5 (typically $0 with free tiers)

## Troubleshooting

### Issue: Site not deploying

**Solution:**
1. Check GitHub Actions workflow status
2. View workflow logs in GitHub repo → Actions tab
3. Ensure build completes successfully

### Issue: Form not working

**Solution:**
1. Verify Logic App URL in HTML
2. Check CORS settings in Logic App
3. View Logic App run history for errors
4. Test Logic App directly with curl (see AZURE_SETUP.md)

### Issue: 404 errors

**Solution:**
1. Verify file structure in repo
2. Check App Location setting in Static Web App configuration
3. Ensure index.html is in root directory

### Issue: Custom domain not working

**Solution:**
1. Verify CNAME record propagation (use nslookup or dig)
2. Wait up to 48 hours for DNS propagation
3. Check Azure Portal → Custom domains for validation status

## Useful Azure CLI Commands

```bash
# List all static web apps
az staticwebapp list --output table

# Get app details
az staticwebapp show --name APP_NAME --resource-group RG_NAME

# List custom domains
az staticwebapp hostname list --name APP_NAME --resource-group RG_NAME

# View deployment history
az staticwebapp show --name APP_NAME --resource-group RG_NAME --query "buildProperties"

# Delete app (careful!)
az staticwebapp delete --name APP_NAME --resource-group RG_NAME

# List Logic Apps
az logic workflow list --resource-group RG_NAME --output table

# Show Logic App runs
az logic workflow show --name LOGIC_APP_NAME --resource-group RG_NAME
```

## Environment Variables (If Needed Later)

```bash
# Add app setting (for future use with API)
az staticwebapp appsettings set \
  --name your-portfolio-name \
  --resource-group portfolio-rg \
  --setting-names KEY1=VALUE1 KEY2=VALUE2
```

## Rollback Deployment

If something goes wrong:

1. **Via GitHub:**
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Via Azure Portal:**
   - Go to Static Web App → Deployment History
   - Select previous successful deployment
   - Click "Redeploy"

## Security Checklist

Post-deployment security:

- [ ] HTTPS enabled (automatic with Azure)
- [ ] CORS configured in Logic App
- [ ] No API keys exposed in client code
- [ ] Logic App URL is specific (not guessable)
- [ ] Rate limiting considered for Logic App
- [ ] Input validation in Logic App workflow
- [ ] Honeypot field added to form (optional)

## Performance Optimization

Once deployed, optimize:

- [ ] Compress images (use WebP format)
- [ ] Enable CDN in Azure Static Web Apps settings
- [ ] Minify CSS/JS for production
- [ ] Test with Google PageSpeed Insights
- [ ] Add Application Insights for monitoring

## Backup Strategy

Your code is backed up in GitHub, but also:

```bash
# Export resource group template
az group export \
  --name portfolio-rg \
  --include-parameter-default-value \
  --output json > azure-backup.json
```

## Support Resources

- **Azure Status:** status.azure.com
- **Azure Support:** portal.azure.com → Support
- **GitHub Actions Docs:** docs.github.com/actions
- **Community:** stackoverflow.com (tag: azure-static-web-apps)

---

## Quick Deploy Script

Save this as `deploy.sh`:

```bash
#!/bin/bash

# Quick deploy script for Azure Static Web Apps

echo "🚀 Deploying Portfolio to Azure..."

# Check if changes exist
if [[ -z $(git status -s) ]]; then
  echo "No changes to deploy"
  exit 0
fi

# Commit and push
git add .
echo "Enter commit message:"
read commit_message
git commit -m "$commit_message"
git push origin main

echo "✅ Pushed to GitHub - Azure will auto-deploy in ~2 minutes"
echo "📊 View deployment: https://github.com/YOUR_USERNAME/YOUR_REPO/actions"
```

Make executable: `chmod +x deploy.sh`

Run: `./deploy.sh`

---

## Next Steps After Deployment

1. ✅ Test all functionality
2. ✅ Submit sitemap to Google Search Console
3. ✅ Set up monitoring alerts
4. ✅ Share with colleagues for feedback
5. ✅ Update LinkedIn with portfolio link
6. ✅ Add to email signature
7. ✅ Begin content marketing (blog posts)

---

**Need help?** See [AZURE_SETUP.md](../architecture/AZURE_SETUP.md) for detailed configuration guide.

