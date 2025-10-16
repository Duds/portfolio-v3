# Azure Hosting & Contact Form Setup Guide

This guide walks you through hosting your portfolio on Azure and setting up the contact form using Azure Logic Apps.

## Table of Contents
1. [Azure Static Web Apps Hosting](#1-azure-static-web-apps-hosting)
2. [Azure Logic Apps - Contact Form](#2-azure-logic-apps---contact-form)
3. [Alternative: Azure Functions](#3-alternative-azure-functions)
4. [Alternative: Azure Communication Services](#4-alternative-azure-communication-services)
5. [Testing & Troubleshooting](#5-testing--troubleshooting)

---

## 1. Azure Static Web Apps Hosting

### Option A: Using Azure Portal (Recommended for Beginners)

**Step 1: Create Azure Static Web App**

1. Sign in to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"**
3. Search for **"Static Web App"**
4. Click **Create**

**Step 2: Configure Basic Settings**

- **Subscription:** Select your Azure subscription
- **Resource Group:** Create new or use existing
- **Name:** `portfolio-v3` (or your choice)
- **Plan type:** Free (perfect for portfolio sites)
- **Region:** Choose closest to your target audience
- **Deployment source:** Choose based on your setup:
  - **GitHub** (recommended) - Auto-deploys on push
  - **Azure DevOps**
  - **Other** - Manual upload

**Step 3: GitHub Integration (Recommended)**

1. Click **"Sign in with GitHub"**
2. Authorize Azure Static Web Apps
3. Select your repository and branch
4. **Build Details:**
   - Build presets: **Custom**
   - App location: `/` (root)
   - Api location: *(leave empty)*
   - Output location: *(leave empty)*

5. Click **Review + Create**
6. Click **Create**

**Step 4: GitHub Actions Workflow**

Azure automatically creates a GitHub Actions workflow (`.github/workflows/azure-static-web-apps-*.yml`).

For this simple HTML/CSS/JS site, the default workflow works perfectly. Your site will auto-deploy on every push to main branch.

**Your Site URL:**
- Will be: `https://<random-name>.azurestaticapps.net`
- Add custom domain later if needed

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name portfolio-rg --location australiaeast

# Create static web app with GitHub integration
az staticwebapp create \
  --name portfolio-v3 \
  --resource-group portfolio-rg \
  --source https://github.com/YOUR_USERNAME/portfolio-v3 \
  --location australiaeast \
  --branch main \
  --app-location "/" \
  --login-with-github
```

### Custom Domain Setup (Optional)

1. In Azure Portal, go to your Static Web App
2. Click **Custom domains**
3. Click **Add**
4. Choose **Custom domain on other DNS**
5. Add CNAME record to your DNS:
   - Type: `CNAME`
   - Name: `www` or `@`
   - Value: `<your-site>.azurestaticapps.net`
6. Click **Validate**

---

## 2. Azure Logic Apps - Contact Form

Azure Logic Apps is the **easiest** solution for form handling. No code required, serverless, pay-per-execution (very cheap for portfolio sites).

### Step-by-Step Setup

**Step 1: Create Logic App**

1. In Azure Portal, click **Create a resource**
2. Search for **Logic App**
3. Click **Create**
4. **Basic settings:**
   - **Subscription:** Your subscription
   - **Resource Group:** Same as your site (`portfolio-rg`)
   - **Logic app name:** `portfolio-contact-form`
   - **Region:** Same as your site
   - **Plan type:** **Consumption** (pay per execution, cheapest)
5. Click **Review + Create**
6. Click **Create**

**Step 2: Design the Logic App Workflow**

1. Open your new Logic App
2. Click **Logic app designer** in left menu
3. Start with **blank Logic App**

**Step 3: Add HTTP Request Trigger**

1. Search for **"Request"**
2. Select **"When a HTTP request is received"**
3. Click **Use sample payload to generate schema**
4. Paste this JSON schema:

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "organisation": "Acme Corp",
    "message": "I'm interested in your services"
}
```

5. Click **Done**
6. **Enable CORS:**
   - At the top of the trigger card, click the three dots `...`
   - Select **Settings**
   - Under **CORS**, add your website URL: `https://your-site.azurestaticapps.net`
   - Also add `*` for testing (remove in production)

**Step 4: Add Email Action (Option 1 - Office 365)**

If you have Office 365 / Microsoft 365:

1. Click **+ New step**
2. Search for **"Office 365 Outlook"**
3. Select **"Send an email (V2)"**
4. Click **Sign in** and authenticate with your Office 365 account
5. Configure email:
   - **To:** Your email (e.g., `hello@yourdomain.com`)
   - **Subject:** Click in field, then click **Add dynamic content**
     - Type: `New Contact Form Submission from ` 
     - Add dynamic content: **name**
   - **Body:** Build the email body with dynamic content:
   
```
New contact form submission:

Name: [name]
Email: [email]
Organisation: [organisation]

Message:
[message]

---
Submitted: [utcNow]
```

Use the **Add dynamic content** button to insert the bracketed fields.

**Step 4: Add Email Action (Option 2 - Gmail)**

If using Gmail:

1. Click **+ New step**
2. Search for **"Gmail"**
3. Select **"Send email (V2)"**
4. Sign in with your Gmail account
5. Configure similarly to Office 365 above

**Step 4: Add Email Action (Option 3 - SendGrid)**

If using SendGrid (recommended for production):

1. Create free SendGrid account: [sendgrid.com](https://sendgrid.com)
2. Get API key from SendGrid dashboard
3. In Logic App, click **+ New step**
4. Search for **"SendGrid"**
5. Select **"Send email (V2)"**
6. Create connection:
   - **Connection name:** `SendGrid`
   - **API Key:** Paste your SendGrid API key
7. Configure email:
   - **From:** Your verified sender email
   - **To:** Your email
   - **Subject:** Build with dynamic content
   - **Email Body:** Build with dynamic content

**Step 5: Add Response Action**

1. Click **+ New step**
2. Search for **"Response"**
3. Select **"Response"**
4. Configure:
   - **Status Code:** `200`
   - **Headers:** 
     - Key: `Content-Type`, Value: `application/json`
     - Key: `Access-Control-Allow-Origin`, Value: `*` (or your domain)
   - **Body:**
   
```json
{
    "success": true,
    "message": "Form submitted successfully"
}
```

**Step 6: Save and Get URL**

1. Click **Save** at the top
2. Expand the **HTTP Request** trigger
3. Copy the **HTTP POST URL** - this is your Logic App endpoint
4. It will look like: `https://prod-XX.australiaeast.logic.azure.com:443/workflows/.../triggers/manual/paths/invoke?...`

**Step 7: Configure CORS (Important!)**

1. In Logic App, go to **Settings** → **CORS**
2. Add allowed origins:
   - Your Azure Static Web App URL: `https://your-site.azurestaticapps.net`
   - Your custom domain if you have one
   - For testing: `http://localhost:8000` or `http://127.0.0.1:8000`

**Step 8: Update Your Website**

1. Open `index.html`
2. Find line 301:
   ```html
   <form class="contact-form" action="YOUR_AZURE_LOGIC_APP_URL" method="POST">
   ```
3. Replace `YOUR_AZURE_LOGIC_APP_URL` with the HTTP POST URL from Step 6

**Step 9: Test the Form**

1. Deploy your updated site to Azure
2. Visit your site and fill out the contact form
3. Submit the form
4. Check:
   - You should see success message on site
   - You should receive email with form data
   - In Azure Portal → Logic App → Overview, you'll see run history

---

## 3. Alternative: Azure Functions

If you need more control or custom logic, use Azure Functions (requires some code).

### Quick Setup

1. Create Azure Function App (Python or Node.js)
2. Create HTTP-triggered function
3. Example Python code:

```python
import logging
import json
import azure.functions as func
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Contact form submission received')
    
    try:
        req_body = req.get_json()
        name = req_body.get('name')
        email = req_body.get('email')
        organisation = req_body.get('organisation', 'N/A')
        message = req_body.get('message')
        
        # Send email via SendGrid
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        mail = Mail(
            from_email='noreply@yourdomain.com',
            to_emails='hello@yourdomain.com',
            subject=f'Contact Form: {name}',
            html_content=f'''
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Organisation:</strong> {organisation}</p>
                <p><strong>Message:</strong></p>
                <p>{message}</p>
            '''
        )
        
        response = sg.send(mail)
        
        return func.HttpResponse(
            json.dumps({"success": True, "message": "Form submitted"}),
            mimetype="application/json",
            status_code=200
        )
        
    except Exception as e:
        logging.error(f'Error: {str(e)}')
        return func.HttpResponse(
            json.dumps({"success": False, "message": str(e)}),
            mimetype="application/json",
            status_code=500
        )
```

---

## 4. Alternative: Azure Communication Services

Azure's purpose-built email service (preview).

### Setup

1. Create Azure Communication Services resource
2. Get connection string
3. Configure email domain
4. Use Azure Functions or Logic Apps to send via Communication Services

**Note:** As of Oct 2025, this is still in preview and may require additional setup.

---

## 5. Testing & Troubleshooting

### Local Testing

Before deploying, test locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` and test the form.

### Troubleshooting CORS Issues

If you see CORS errors in browser console:

**Fix 1: Logic App CORS Settings**
1. Go to Logic App → Settings → CORS
2. Add your domain
3. Save and test

**Fix 2: Add Response Headers**
In Logic App Response action, add headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### Check Logic App Runs

1. Go to Logic App in Azure Portal
2. Click **Overview**
3. View **Run history**
4. Click failed run to see error details
5. Expand each action to see inputs/outputs

### Test Logic App Directly

Use Postman or curl:

```bash
curl -X POST \
  'YOUR_LOGIC_APP_URL' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "organisation": "Test Org",
    "message": "This is a test message"
  }'
```

---

## Cost Estimate

### Azure Static Web Apps
- **Free tier:** Free forever
- Includes:
  - 100 GB bandwidth/month
  - Custom domains
  - SSL certificates
  - GitHub Actions integration

### Azure Logic Apps (Consumption Plan)
- **Pricing:** Pay per execution
- **First 4,000 executions:** Free/month
- **After that:** ~$0.000025 per execution
- **Example:** 100 form submissions/month = **FREE**
- **Example:** 10,000 submissions/month = ~$0.15

### SendGrid (if used)
- **Free tier:** 100 emails/day forever
- Perfect for contact form usage

**Total Monthly Cost for Portfolio:** $0 - $5 (typically $0)

---

## Production Checklist

Before launching:

- [ ] Logic App HTTP trigger URL configured in `index.html`
- [ ] CORS properly configured in Logic App
- [ ] Email sender verified (if using SendGrid/Gmail)
- [ ] Test form submission end-to-end
- [ ] Add retry logic in Logic App (for email failures)
- [ ] Set up monitoring/alerts in Azure
- [ ] Update all placeholder URLs in site
- [ ] Configure custom domain (optional)
- [ ] Enable Azure Static Web Apps authentication (if needed)
- [ ] Set up Application Insights for monitoring
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

---

## Security Best Practices

### 1. Rate Limiting

Add rate limiting in Logic App:

1. After HTTP trigger, add **Control** → **Until**
2. Check request count from IP address
3. Reject if > 10 requests/hour

### 2. Input Validation

In Logic App, after HTTP trigger, add **Condition**:
- Check required fields exist
- Validate email format
- Check message length

### 3. Honeypot Field

Add hidden field to HTML form (spam bots fill this):

```html
<input type="text" name="website" style="display:none" tabindex="-1">
```

In Logic App, reject if `website` field has value.

### 4. API Key Security

- Never expose Logic App URL in client-side code (it's okay, it's in form action)
- Store SendGrid API keys in **Azure Key Vault**
- Use managed identities where possible

---

## Advanced: Monitoring & Alerts

### Application Insights

1. Create Application Insights resource
2. Connect to Logic App
3. View:
   - Success/failure rates
   - Response times
   - Error details

### Email Alerts

Set up alerts for:
- Logic App failures
- High execution count (potential spam)
- High error rate

---

## Support & Resources

- **Azure Static Web Apps docs:** [docs.microsoft.com/azure/static-web-apps](https://docs.microsoft.com/azure/static-web-apps/)
- **Azure Logic Apps docs:** [docs.microsoft.com/azure/logic-apps](https://docs.microsoft.com/azure/logic-apps/)
- **SendGrid docs:** [docs.sendgrid.com](https://docs.sendgrid.com/)
- **Azure Support:** Use Azure Portal support chat

---

## Quick Start Summary

**Fastest path to deployment:**

1. ✅ Push code to GitHub
2. ✅ Create Azure Static Web App (links to GitHub)
3. ✅ Create Logic App with HTTP trigger
4. ✅ Add Office 365/Gmail connector
5. ✅ Copy Logic App URL to form action
6. ✅ Test!

**Total setup time:** ~20 minutes

---

**Need help?** Check the troubleshooting section or Azure documentation linked above.

