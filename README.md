# Summerlin West Homes - Luxury Real Estate Website

A professional, modern real estate website built with Next.js 15, TypeScript, and Tailwind CSS for Summerlin West Homes in Las Vegas, Nevada.

## 🏠 Project Overview

This website showcases luxury properties in Summerlin West, providing potential buyers and sellers with:
- **Property Listings**: Beautiful, responsive property showcases
- **Advanced Search**: Filter properties by price, location, features, and more
- **Agent Profiles**: Professional agent information and contact details
- **Market Insights**: Local real estate market data and trends
- **Contact Forms**: Easy communication with real estate professionals

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Headless UI + Heroicons
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- Git
- PowerShell (for Windows users)

### Installation
```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/summerlinwesthomes.com.git
cd summerlinwesthomes.com

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run push         # Quick git push with automation
```

## 📁 Project Structure

```
summerlinwesthomes.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/             # Reusable UI components
├── types/                  # TypeScript interfaces
│   └── real-estate.ts     # Real estate data types
├── lib/                    # Utility functions
│   └── utils.ts           # Common utilities
├── scripts/                # Automation scripts
│   ├── setup-github-keys.sh    # SSH/GPG setup (Linux/macOS)
│   ├── setup-github-keys.ps1   # SSH/GPG setup (Windows)
│   ├── setup-github-keys.js    # SSH/GPG setup (Node.js)
│   └── README.md               # Script documentation
├── public/                 # Static assets
├── quick-push.ps1          # Git push automation script
└── package.json            # Dependencies and scripts
```

## 🔑 Key Features

### 1. **Professional Git Automation**
- Automated SSH and GPG key setup
- Smooth git push operations
- No more pager issues or stuck terminals

### 2. **Type-Safe Development**
- Comprehensive TypeScript interfaces
- Real estate specific data types
- Form validation with Zod

### 3. **Modern UI/UX**
- Responsive design for all devices
- Smooth animations and transitions
- Accessible components

### 4. **SEO Optimized**
- Meta tags and Open Graph
- Structured data for real estate
- Performance optimized

## 🎨 Design System

### Color Palette
- **Primary**: Professional blues and grays
- **Accent**: Warm earth tones
- **Background**: Clean whites and light grays

### Typography
- **Primary**: Geist Sans (modern, readable)
- **Monospace**: Geist Mono (for code and data)

### Components
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean, accessible input fields
- **Cards**: Property showcase layouts
- **Navigation**: Responsive header and footer

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Enhanced layouts for medium screens
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
vercel

# Deploy
vercel --prod
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://summerlinwesthomes.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🏢 About Summerlin West Homes

Summerlin West Homes is a premier real estate company serving the Summerlin area of Las Vegas, Nevada. We specialize in luxury properties and provide exceptional service to buyers and sellers in this prestigious community.

## 📞 Contact

- **Website**: [summerlinwesthomes.com](https://summerlinwesthomes.com)
- **Location**: Summerlin, Las Vegas, Nevada
- **Services**: Residential real estate, luxury properties, market analysis

---

Built with ❤️ for the Summerlin community
