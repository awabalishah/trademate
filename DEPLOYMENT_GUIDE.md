# 🚀 Trademate Deployment Guide

## 📋 GoHighLevel Integration & Domain Setup

### 1. 🔧 GoHighLevel Setup

#### Step 1: Get Your GHL API Credentials
1. **Login to GoHighLevel** → Settings → API
2. **Create API Key** with these permissions:
   - `contacts.write` - Create/update contacts
   - `workflows.write` - Trigger workflows
   - `opportunities.write` - Create opportunities

#### Step 2: Get Location ID
1. Go to **Settings → Company Settings**
2. Copy your **Location ID** from the URL or settings

#### Step 3: Create Workflow
1. Go to **Marketing → Workflows**
2. **Create New Workflow**:
   - Trigger: "Contact Added" 
   - Source: "Website Lead"
   - Actions: Add your automation steps
3. Copy the **Workflow ID**

#### Step 4: Set Environment Variables
Add these to your Vercel project settings:

```bash
NEXT_PUBLIC_GHL_API_KEY=your_api_key_here
NEXT_PUBLIC_GHL_LOCATION_ID=your_location_id_here
GHL_WORKFLOW_ID=your_workflow_id_here
```

### 2. 🌐 Domain Setup on GoDaddy

#### Option A: Connect Existing Domain (Recommended)

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add your domain (e.g., `yourdomain.com`)
   - Copy the DNS records provided

2. **In GoDaddy DNS Management**:
   - Login to GoDaddy → My Products → DNS
   - **Delete existing A records** pointing to old hosting
   - **Add these records**:
     ```
     Type: A
     Name: @
     Value: 76.76.19.61
     TTL: 1 Hour
     
     Type: CNAME  
     Name: www
     Value: cname.vercel-dns.com
     TTL: 1 Hour
     ```

3. **Wait for Propagation** (5-60 minutes)
4. **Verify in Vercel** - should show "Valid Configuration"

#### Option B: Transfer Domain (Advanced)
- Transfer domain to Vercel for easier management
- Costs: $12/year + transfer fees

### 3. 🔒 SSL & Security

Vercel automatically provides:
- ✅ **Free SSL certificates**
- ✅ **HTTPS redirect**
- ✅ **CDN optimization**
- ✅ **Global edge caching**

### 4. 🧪 Testing Your Setup

#### Test Contact Form:
1. Fill out contact form on your live site
2. Check **GoHighLevel Contacts** - should see new contact
3. Check **GHL Workflows** - automation should trigger
4. Verify **email notifications** work

#### Test Domain:
```bash
# Check DNS propagation
nslookup yourdomain.com
dig yourdomain.com

# Test HTTPS
curl -I https://yourdomain.com
```

### 5. 📊 Analytics & Monitoring

#### Add to Vercel:
- **Vercel Analytics** (free)
- **Google Analytics** (if needed)

#### Monitor GHL:
- **Contact creation rate**
- **Workflow completion rate**
- **Lead quality scores**

### 6. 🚨 Troubleshooting

#### Contact Form Not Working:
```bash
# Check Vercel logs
vercel logs your-project-url

# Common issues:
- Wrong API key
- Missing location ID
- Workflow not published
```

#### Domain Not Loading:
```bash
# Check DNS propagation
https://dnschecker.org

# Common fixes:
- Wait 24 hours for full propagation
- Clear browser cache
- Try different DNS servers
```

#### GHL Integration Issues:
- **API Limits**: Check rate limits (1000/hour)
- **Permissions**: Verify API key permissions
- **Webhook**: Ensure workflow is published

### 7. 🔄 Backup Plan

If GHL fails, the form still:
- ✅ **Shows success message** to user
- ✅ **Logs error** for debugging
- ✅ **Doesn't break** user experience

### 8. 📈 Next Steps

After deployment:
1. **Monitor performance** for 48 hours
2. **Test all form submissions**
3. **Verify automation workflows**
4. **Set up monitoring alerts**
5. **Document any customizations**

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GHL API Docs**: https://highlevel.stoplight.io/docs/integrations
- **GoDaddy DNS Help**: https://www.godaddy.com/help

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify GHL API credentials
3. Test DNS propagation
4. Contact support with specific error messages
