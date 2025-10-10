# 🔧 Environment Variables Setup Checklist

## ✅ Step-by-Step Setup

### 1. Create `.env.local` File

In your project root (same folder as `package.json`), create a file named **exactly** `.env.local`

**Location**: `C:\Users\Shariq Computers\OneDrive\Desktop\Awab\Trademate\.env.local`

### 2. Add This Exact Content:

```env
NEXT_PUBLIC_GHL_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjBGbUwxbVpveWswUHhQd2wzZEFrIiwidmVyc2lvbiI6MSwiaWF0IjoxNzYwMTA4OTQwNTI0LCJzdWIiOiI5dGR4aGxFZFNmbHlwMmcwdVFEUyJ9.ys3VINGQMe92bwmpd-OGYdXnSCnX7dI69vjo6AHFqpY
NEXT_PUBLIC_GHL_LOCATION_ID=0FmL1mZoyk0PxPwl3dAk
```

**Important**: 
- No spaces before or after the `=`
- No quotes around the values
- No extra lines or spaces

### 3. Verify File Location

Run this command in your terminal:
```bash
dir .env.local
```

You should see the file listed.

### 4. Restart Development Server

**Critical**: You MUST restart the server after creating `.env.local`:

```bash
# Press Ctrl + C to stop the server
# Then start again:
npm run dev
```

### 5. Verify Environment Variables Are Loaded

After restarting, check if the variables are loaded by looking at the browser console when you submit the form. You should see logs showing `apiKeyExists: true` and `locationIdExists: true`.

## 🚨 Common Mistakes

❌ **Wrong file name**: `.env` instead of `.env.local`
❌ **Wrong location**: File not in project root
❌ **Not restarting server**: Environment variables only load on startup
❌ **Extra spaces**: Spaces around the values
❌ **Missing NEXT_PUBLIC_ prefix**: Must start with `NEXT_PUBLIC_`
❌ **Copy/paste issues**: API key got truncated or has line breaks

## ✅ How to Verify It Works

1. Stop dev server (Ctrl + C)
2. Start dev server (`npm run dev`)
3. Open browser console (F12)
4. Fill and submit contact form
5. Check console logs - should show:
   ```
   Sending to GHL: { ... apiKeyExists: true, locationIdExists: true }
   ```

## 📞 Still Not Working?

Check your terminal (where npm run dev is running) for error messages and share them with me!

