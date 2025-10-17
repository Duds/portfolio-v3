#!/bin/bash

# Azure Static Web Apps Setup Verification Script
# This script checks your current Azure configuration and verifies deployment readiness

set -e

echo "======================================"
echo "Azure Static Web Apps Setup Verification"
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if Azure CLI is installed
echo "1. Checking Azure CLI installation..."
if command -v az &> /dev/null; then
    echo -e "${GREEN}✓${NC} Azure CLI is installed"
    az version --output json | grep "azure-cli" | head -1
else
    echo -e "${RED}✗${NC} Azure CLI is not installed"
    echo "   Install: brew install azure-cli"
    exit 1
fi
echo ""

# Check if logged in
echo "2. Checking Azure login status..."
if az account show &> /dev/null; then
    echo -e "${GREEN}✓${NC} Logged in to Azure"
    ACCOUNT=$(az account show --query "name" -o tsv)
    echo "   Account: $ACCOUNT"
else
    echo -e "${RED}✗${NC} Not logged in to Azure"
    echo "   Run: az login"
    exit 1
fi
echo ""

# List Static Web Apps
echo "3. Listing your Azure Static Web Apps..."
APPS=$(az staticwebapp list --output table)
if [ -z "$APPS" ]; then
    echo -e "${YELLOW}⚠${NC}  No Static Web Apps found"
    echo "   You may need to create one first"
else
    echo "$APPS"
fi
echo ""

# Prompt for app details
echo "4. Enter your Static Web App details:"
read -p "   App name: " APP_NAME
read -p "   Resource group: " RESOURCE_GROUP
echo ""

if [ -z "$APP_NAME" ] || [ -z "$RESOURCE_GROUP" ]; then
    echo -e "${RED}✗${NC} App name and resource group are required"
    exit 1
fi

# Check if app exists
echo "5. Verifying Static Web App exists..."
if az staticwebapp show --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" &> /dev/null; then
    echo -e "${GREEN}✓${NC} Static Web App found: $APP_NAME"
else
    echo -e "${RED}✗${NC} Static Web App not found: $APP_NAME"
    echo "   Check app name and resource group"
    exit 1
fi
echo ""

# Get app details
echo "6. Retrieving app configuration..."
APP_DETAILS=$(az staticwebapp show \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --output json)

DEFAULT_HOSTNAME=$(echo "$APP_DETAILS" | grep -o '"defaultHostname": *"[^"]*"' | cut -d'"' -f4)
echo -e "${GREEN}✓${NC} Default hostname: https://$DEFAULT_HOSTNAME"
echo ""

# Check custom domains
echo "7. Checking custom domains..."
CUSTOM_DOMAINS=$(az staticwebapp hostname list \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --output table)

if echo "$CUSTOM_DOMAINS" | grep -q "dalerogers.com.au"; then
    echo -e "${GREEN}✓${NC} Custom domain configured: dalerogers.com.au"
else
    echo -e "${YELLOW}⚠${NC}  Custom domain not found: dalerogers.com.au"
    echo "   You may need to configure it"
fi
echo ""

# Check app settings
echo "8. Checking application settings..."
APP_SETTINGS=$(az staticwebapp appsettings list \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --output table)

if [ -z "$APP_SETTINGS" ]; then
    echo -e "${YELLOW}⚠${NC}  No application settings configured"
else
    echo "$APP_SETTINGS"
fi
echo ""

# Get deployment token
echo "9. Retrieving deployment token..."
DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --query "properties.apiKey" -o tsv)

if [ -n "$DEPLOYMENT_TOKEN" ]; then
    echo -e "${GREEN}✓${NC} Deployment token retrieved"
    echo "   Token (first 20 chars): ${DEPLOYMENT_TOKEN:0:20}..."
    echo ""
    echo "   ${YELLOW}IMPORTANT:${NC} Save this token for Azure Pipelines!"
    echo "   Add as secret variable: AZURE_STATIC_WEB_APPS_API_TOKEN"
else
    echo -e "${RED}✗${NC} Could not retrieve deployment token"
fi
echo ""

# Check build properties
echo "10. Checking build configuration..."
APP_LOCATION=$(echo "$APP_DETAILS" | grep -o '"appLocation": *"[^"]*"' | cut -d'"' -f4)
OUTPUT_LOCATION=$(echo "$APP_DETAILS" | grep -o '"outputLocation": *"[^"]*"' | cut -d'"' -f4)

echo "   App location: ${APP_LOCATION:-.}"
echo "   Output location: ${OUTPUT_LOCATION:-.}"

if [ "$APP_LOCATION" = "." ] || [ -z "$APP_LOCATION" ]; then
    echo -e "${GREEN}✓${NC} App location is correctly set to root"
else
    echo -e "${YELLOW}⚠${NC}  App location may need adjustment"
fi
echo ""

# Check Node.js
echo "11. Checking local development tools..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓${NC} Node.js installed: $NODE_VERSION"
else
    echo -e "${RED}✗${NC} Node.js not installed"
fi

if [ -f "package.json" ]; then
    echo -e "${GREEN}✓${NC} package.json found"
else
    echo -e "${YELLOW}⚠${NC}  package.json not found"
fi

if [ -f "scripts/build-content.js" ]; then
    echo -e "${GREEN}✓${NC} Build script found"
else
    echo -e "${RED}✗${NC} Build script not found at scripts/build-content.js"
fi
echo ""

# Test build locally
echo "12. Testing local build..."
if [ -f "scripts/build-content.js" ]; then
    if node scripts/build-content.js; then
        echo -e "${GREEN}✓${NC} Build script executed successfully"
    else
        echo -e "${RED}✗${NC} Build script failed"
    fi
else
    echo -e "${YELLOW}⚠${NC}  Skipping build test (script not found)"
fi
echo ""

# Summary
echo "======================================"
echo "Verification Summary"
echo "======================================"
echo ""
echo "App Name: $APP_NAME"
echo "Resource Group: $RESOURCE_GROUP"
echo "Default URL: https://$DEFAULT_HOSTNAME"
echo "Custom Domain: dalerogers.com.au"
echo ""

# Deployment test command
echo "Next Steps:"
echo ""
echo "1. Test deployment with Azure CLI:"
echo "   ${GREEN}az staticwebapp deploy \\${NC}"
echo "     ${GREEN}--name $APP_NAME \\${NC}"
echo "     ${GREEN}--resource-group $RESOURCE_GROUP \\${NC}"
echo "     ${GREEN}--source .${NC}"
echo ""

echo "2. Add deployment token to Azure Pipelines:"
echo "   - Go to: https://dev.azure.com"
echo "   - Navigate to: Pipelines → Library → Variable groups"
echo "   - Create/Edit variable group"
echo "   - Add variable: ${GREEN}AZURE_STATIC_WEB_APPS_API_TOKEN${NC}"
echo "   - Value: [paste token from step 9 above]"
echo "   - Mark as secret: ✓"
echo ""

echo "3. Push azure-pipelines.yml to trigger deployment:"
echo "   ${GREEN}git add azure-pipelines.yml${NC}"
echo "   ${GREEN}git commit -m \"ci: add Azure Pipelines configuration\"${NC}"
echo "   ${GREEN}git push origin main${NC}"
echo ""

echo "======================================"
echo "Verification Complete"
echo "======================================"

