# 🔐 GoHighLevel Setup Instructions

## ✅ Your GHL Credentials

Your GoHighLevel API credentials are ready to be configured.

## 📝 Step 1: Create Environment Variables File

Create a file named `.env.local` in the root of your project (same level as `package.json`) with the following content:

```env
# GoHighLevel API Configuration
NEXT_PUBLIC_GHL_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjBGbUwxbVpveWswUHhQd2wzZEFrIiwidmVyc2lvbiI6MSwiaWF0IjoxNzYwMTA4OTQwNTI0LCJzdWIiOiI5dGR4aGxFZFNmbHlwMmcwdVFEUyJ9.ys3VINGQMe92bwmpd-OGYdXnSCnX7dI69vjo6AHFqpY
NEXT_PUBLIC_GHL_LOCATION_ID=0FmL1mZoyk0PxPwl3dAk

# Optional: Add your GHL Workflow ID here when you create one
# GHL_WORKFLOW_ID=your_workflow_id_here
```

## 🚀 Step 2: Restart Your Development Server

After creating `.env.local`, restart your dev server:

```bash
# Stop the current server (Ctrl + C)
# Then restart:
npm run dev
```

## 🧪 Step 3: Test the Contact Form

1. Go to your local site: `http://localhost:3000`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check your **GoHighLevel dashboard** for the new contact

## 🌐 Step 4: Add to Vercel (For Production)

### In Vercel Dashboard:
1. Go to your project
2. Click **Settings** → **Environment Variables**
3. Add these variables:
   - **Name**: `NEXT_PUBLIC_GHL_API_KEY`
   - **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjBGbUwxbVpveWswUHhQd2wzZEFrIiwidmVyc2lvbiI6MSwiaWF0IjoxNzYwMTA4OTQwNTI0LCJzdWIiOiI5dGR4aGxFZFNmbHlwMmcwdVFEUyJ9.ys3VINGQMe92bwmpd-OGYdXnSCnX7dI69vjo6AHFqpY`
   - **Environment**: All (Production, Preview, Development)

   - **Name**: `NEXT_PUBLIC_GHL_LOCATION_ID`
   - **Value**: `0FmL1mZoyk0PxPwl3dAk`
   - **Environment**: All (Production, Preview, Development)

4. **Redeploy** your project for changes to take effect

## 📊 Step 5: Create a Workflow (Optional but Recommended)

### In GoHighLevel:
1. Go to **Marketing** → **Workflows**
2. Click **Create Workflow**
3. Set up your automation:
   - **Trigger**: Contact Added
   - **Filter**: Source = "Trademate Website Contact Form"
   - **Actions**: 
     - Send notification email to you
     - Send welcome email to customer
     - Add to follow-up sequence
     - Assign to team member
     - Create opportunity
     - etc.

4. **Publish the workflow**
5. Copy the **Workflow ID** from the URL
6. Add to your environment variables:
   ```
   GHL_WORKFLOW_ID=your_workflow_id_here
   ```

## ✅ What Happens When Someone Submits the Form:

1. **Form Data Collected**: Name, email, phone, company, trade, service, message
2. **Contact Created in GHL**: With all the data + custom fields
3. **Tags Applied**: `website-lead`, `trade-{tradetype}`
4. **Source Set**: "Trademate Website Contact Form"
5. **Workflow Triggered**: (if configured)
6. **User Sees**: Success message
7. **Form Resets**: Ready for next submission

## 🔍 How to Verify It's Working:

### Local Testing:
1. Open browser console (F12)
2. Submit the contact form
3. Check console for any errors
4. Check GHL dashboard for new contact

### Production Testing:
1. Submit form on live site
2. Check GHL dashboard
3. Verify workflow triggered
4. Check contact has correct tags and source

## 🚨 Troubleshooting:

### Issue: "API Key Invalid"
- **Solution**: Verify API key is copied correctly (no extra spaces)
- **Solution**: Check API key has correct permissions in GHL

### Issue: "Location ID Not Found"
- **Solution**: Verify Location ID from GHL settings
- **Solution**: Ensure you're using the correct GHL account

### Issue: "Contact Not Created"
- **Solution**: Check Vercel function logs for errors
- **Solution**: Verify environment variables are set in Vercel
- **Solution**: Redeploy after adding environment variables

### Issue: "Workflow Not Triggering"
- **Solution**: Ensure workflow is published
- **Solution**: Add workflow ID to environment variables
- **Solution**: Check workflow filter matches the source

## 📞 Next Steps:

1. ✅ Create `.env.local` file with credentials
2. ✅ Restart development server
3. ✅ Test contact form locally
4. ✅ Add credentials to Vercel
5. ✅ Deploy to production
6. ✅ Create GHL workflow
7. ✅ Test on live site
8. ✅ Monitor GHL dashboard

## 🎉 You're All Set!

Your contact form is now fully integrated with GoHighLevel. Every submission will automatically create a contact in your GHL account and trigger your automation workflows!

---

**Need Help?** Check the logs in:
- Local: Browser console (F12)
- Production: Vercel Dashboard → Functions → Logs

