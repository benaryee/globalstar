# Global Star - FinTech Solutions

Modern fintech landing website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Company Information

**Global Star Solutions Ltd**
- Company No. 14596390
- Registered in England
- Registered Office: 181a North End, Croydon, CR0 1TP, England
- Incorporated: 16 January 2023

## Features

- ✨ Modern, responsive design
- 🎨 Dark mode support
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- ♿ SEO optimized
- 🚀 Fast performance with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server (default port)
- `npm run start:prod` - Start production server on port 3300
- `npm run deploy` - Build and start on port 3300
- `npm run lint` - Run ESLint

## Project Structure

```
globalstar/
├── app/
│   ├── layout.tsx        # Root layout with navigation and footer
│   ├── page.tsx          # Main page
│   ├── globals.css       # Global styles
│   └── providers.tsx     # Theme provider
├── components/
│   ├── Navigation.tsx    # Sticky navigation with dark mode
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services section
│   ├── WhyChooseUs.tsx   # Why choose us section
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer with company details
│   └── BackToTop.tsx     # Back to top button
└── ...
```

## Sections

1. **Hero** - Landing section with animated star logo
2. **About** - Company overview with Vision, Mission, Values
3. **Services** - Four core fintech services
4. **Why Choose Us** - Six key value propositions
5. **Contact** - Contact form with animations
6. **Footer** - Company details and social links

## Customization

### Colors

The primary color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Customize your brand colors here
  }
}
```

### Animations

All animations are customizable in individual components using Framer Motion properties.

## SEO

The site includes comprehensive SEO metadata in `app/layout.tsx`:
- Title and description
- Keywords
- Open Graph tags
- Proper semantic HTML

## Deployment

### Quick Deploy to Port 3300

**Option 1: Simple deployment**
```bash
./deploy.sh
```

**Option 2: PM2 deployment (recommended for production)**
```bash
./deploy-pm2.sh
```

**Option 3: Manual deployment**
```bash
npm install
npm run build
npm run start:prod
```

### Other Platforms

- **Vercel**: `vercel --prod`
- **Docker**: See `DEPLOYMENT.md` for Docker configuration
- **Custom Server**: Configure reverse proxy (nginx/apache)

For detailed deployment instructions, troubleshooting, and production checklist, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**

## License

© 2026 Global Star Solutions Ltd. All rights reserved.
