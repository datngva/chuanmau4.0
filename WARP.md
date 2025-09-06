# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is **ChuanMau 4.0**, a Vietnamese color calibration service website built with **Astro 5.0** and **Tailwind CSS**. The site provides services for monitor color calibration (cân chỉnh màu màn hình) in Hanoi, Vietnam.

### Technology Stack
- **Framework**: Astro 5.0 (Static Site Generator)
- **Styling**: Tailwind CSS with custom theming
- **Language**: TypeScript + JavaScript
- **Content**: MDX/Markdown for blog posts
- **Icons**: Astro Icon with Tabler and Flat Color Icons
- **Analytics**: Google Analytics (G-RTJ2270PK0)

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev
npm run start  # Alternative command

# Build for production
npm run build

# Preview production build
npm run preview
```

### Quality Assurance
```bash
# Run all checks (Astro, ESLint, Prettier)
npm run check

# Run individual checks
npm run check:astro     # Astro type checking
npm run check:eslint    # ESLint linting
npm run check:prettier  # Prettier formatting check

# Auto-fix issues
npm run fix             # Fix ESLint + Prettier
npm run fix:eslint      # Auto-fix ESLint issues
npm run fix:prettier    # Auto-format with Prettier
```

### Astro CLI Commands
```bash
# Run Astro CLI commands
npm run astro --help
npm run astro add [integration]
npm run astro preview
```

## Project Architecture

### Directory Structure
```
src/
├── components/          # Reusable components
│   ├── blog/           # Blog-specific components
│   ├── common/         # Shared utilities (Analytics, Meta, etc.)
│   ├── ui/             # Basic UI components (Button, Form, etc.)
│   └── widgets/        # Page sections (Hero, Pricing, FAQs, etc.)
├── content/            # Content collections configuration
├── data/post/          # Blog posts in Markdown/MDX
├── layouts/            # Page templates
├── pages/              # Route pages (.astro files)
├── assets/             # Images, styles, fonts
├── utils/              # Utility functions
└── config.yaml         # Site configuration
```

### Key Configuration Files
- **`src/config.yaml`**: Main site configuration (SEO, analytics, blog settings)
- **`astro.config.ts`**: Astro framework configuration
- **`tailwind.config.js`**: Tailwind CSS customization
- **`tsconfig.json`**: TypeScript configuration

### Content Management
- Blog posts are in `src/data/post/` as Markdown/MDX files
- Site content is managed through Astro components and config.yaml
- Navigation is defined in `src/navigation.ts`

## Important Pages
- **Home**: `/` - Main landing page
- **Pricing**: `/bang-gia` - Service pricing table  
- **Contact**: `/lien-he` - Contact form and information
- **Color Test**: `/kiem-tra-mau-sac` - Color testing tool
- **Blog**: `/blog` - Articles about color calibration

## Site Configuration

### Key Settings in `config.yaml`
- Site name: "chuanmau.com"
- Language: Vietnamese (en locale but Vietnamese content)
- Theme: Light mode only (`light:only`)
- Google Analytics: Enabled (G-RTJ2270PK0)
- Blog: Enabled with 6 posts per page

### SEO & Performance
- Optimized for PageSpeed Insights
- Open Graph meta tags configured
- Sitemap generation enabled
- Image optimization with Astro Assets and Unpic
- Compression enabled for CSS, HTML, and JavaScript

## Business Context
This is a service website for monitor color calibration services in Hanoi, targeting photographers, designers, and professionals who need accurate color reproduction. Services include:

- On-site color calibration (tại nhà)
- In-store calibration (tại cửa hàng) 
- Bulk calibration for multiple monitors
- Support for laptops, drawing tablets (Wacom, XP-Pen, Huion)
- ICC profile creation and installation guidance

### Contact Information
- Phone: 0879025858
- Service area: Hanoi, Vietnam
- Pricing: Starting from 150k VND per monitor

## Development Notes

### Custom Components
The project uses a widget-based architecture where page sections are built as reusable components in `src/components/widgets/`. Key widgets include:

- **Hero/HeroText**: Landing page headers
- **Pricing**: Service pricing tables with Vietnamese currency
- **FAQs**: Frequently asked questions
- **CallToAction**: Contact/booking buttons
- **Contact**: Contact forms and information

### Styling Approach
- Tailwind CSS with custom color scheme
- Vietnamese typography considerations
- Mobile-responsive design
- Light-only theme (no dark mode)

### Content Guidelines
- Content is in Vietnamese language
- Technical terms mixed Vietnamese/English (e.g., "ICC Profile", "sRGB")
- SEO optimized for Vietnamese search terms
- Local business focus (Hanoi area)
