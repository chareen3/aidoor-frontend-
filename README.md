# AIDoor — Ideas with AI

Premium modern landing page for AIDoor — AI Influencer workflows, built to scale.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v3 (stable)
- Framer Motion (animations)
- Lucide React (icons)
- clsx + tailwind-merge (class utilities)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm start
```

## Features

✅ **Light & Dark Mode** - Complete theme support with smooth transitions
✅ **Responsive Design** - Mobile-first, works on all screen sizes
✅ **Smooth Animations** - Powered by Framer Motion
✅ **SEO Metadata** - Title, description, and open graph support
✅ **Production Ready** - Builds and exports static pages
✅ **Vercel Optimized** - Ready for one-click deployment

## Project Structure

```
aidoor-frontend/
├── app/
│   ├── globals.css       # Global styles & design system
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── logo.tsx          # Custom SVG AIDoor logo
│   ├── theme-toggle.tsx  # Light/Dark mode toggle
│   ├── header.tsx        # Fixed header w/ navigation
│   ├── hero.tsx          # Hero section w/ product showcase
│   ├── trust-strip.tsx   # Social proof strip
│   ├── features.tsx      # Narrative features (alternating layouts)
│   ├── workflow.tsx      # 4-step workflow section
│   ├── use-cases.tsx     # Creators/Agencies/Brands use cases
│   ├── cta.tsx           # Final CTA section
│   └── footer.tsx        # Footer w/ links
├── lib/
│   └── utils.ts          # cn() utility for class merging
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

## Design System

- **Background**: Warm neutral (light mode) / rich charcoal (dark mode)
- **Accent Color**: Deep teal (#1A6B6B)
- **Typography**: Distinct display font + clean body font
- **Spacings**: Generous whitespace, asymmetrical compositions
- **Corners**: Subtle rounded corners (not bubbly)

## Page Sections

1. Header (logo + nav + theme toggle + CTA)
2. Hero ("Ideas with AI" + AI Influencer focus + product showcase)
3. Social Proof / Trust Strip
4. Narrative Features (4 alternating layouts)
5. Workflow (4 steps)
6. Use Cases (creators, agencies, brands)
7. Final CTA
8. Footer

## Deployment (Vercel)

1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Deploy! 🚀

(No additional config needed - Vercel auto-detects Next.js)
