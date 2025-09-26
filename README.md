# Trademate - Digital Solutions for Tradespeople

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS. Trademate provides digital solutions including automation, website development, SEO, and marketing services specifically tailored for tradespeople.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by TradeMore
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with SEO best practices and meta tags
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Reusable React components for maintainability

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via SVG)
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero section
│       ├── Services.tsx   # Services showcase
│       ├── Trades.tsx     # Trades grid
│       ├── Testimonials.tsx # Client testimonials
│       └── Contact.tsx    # Contact form
├── lib/
│   └── data.ts           # Static data and content
└── types/
    └── index.ts          # TypeScript type definitions
```

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradient designs for visual appeal
- **Card Hover Effects**: Interactive elements with smooth transitions
- **Mobile-First**: Responsive design starting from mobile
- **Professional Color Scheme**: Blue and purple gradients with yellow accents
- **Typography**: Clean, readable fonts with proper hierarchy

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
```bash
npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Sections

### Homepage (`/`)
- **Hero Section**: Main value proposition with CTA buttons
- **Services**: Four main service offerings with pricing
- **Trades**: Grid of supported trades with icons
- **Testimonials**: Client success stories
- **Contact**: Lead capture form with consultation request

### Services Offered
1. **Business Automation** - From £299/month
2. **Website Development** - From £1,499
3. **SEO & Marketing** - From £199/month
4. **Query Management** - From £149/month (Most Popular)

## 🎯 Target Audience

- Small to medium trade businesses (1-50 employees)
- Trades including: Plumbers, Electricians, Builders, Painters, Carpenters, Roofers, HVAC Engineers, Landscapers
- Businesses looking to digitize and automate their operations

## 📈 Business Goals

- Generate qualified leads through contact forms
- Showcase service offerings and pricing
- Build trust through testimonials and social proof
- Establish professional online presence
- Convert visitors into consultation bookings

## 🔧 Customization

### Adding New Services
1. Update `src/lib/data.ts` with new service object
2. Add service to the services array
3. Service will automatically appear on homepage

### Modifying Content
- **Text Content**: Edit component files in `src/components/sections/`
- **Data**: Update `src/lib/data.ts` for services, trades, testimonials
- **Styling**: Modify `src/app/globals.css` for global styles

### Adding New Pages
1. Create new file in `src/app/` directory
2. Export default React component
3. Add navigation links in `Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Hosting
1. Run `npm run build`
2. Deploy the generated files to your hosting provider

## 📞 Contact Information

- **Email**: hello@trademate.co.uk
- **Phone**: +44 20 1234 5678
- **Location**: London, UK

## 📄 License

© 2025 Trademate. All rights reserved.

---

Built with ❤️ for tradespeople by Trademate