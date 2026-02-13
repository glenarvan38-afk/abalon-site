# Abalon Construction Management Platform

**Heavy Equipment Marketplace** - Connect customers with verified contractors and equipment operators.

## 🚀 Features

### For Customers (Free)
- Post equipment requests with photos/videos
- Automatic matching with local contractors
- ZIP code-based search
- Direct contact with contractors

### For Contractors ($50/year)
- Unlimited job leads
- Define service area with radius
- Automatic ZIP code coverage calculation
- Verified badge
- Email/SMS notifications

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Maps**: Mapbox GL JS
- **Payments**: Stripe
- **Hosting**: Vercel
- **Email**: Resend

## 📦 Equipment Categories

1. **Earthmoving Equipment** 🚜 (Most Popular)
   - Track/Wheeled Excavators, Mini Excavators
   - Backhoe Loaders, Bulldozers, Trenchers

2. **Lifting Equipment** 🏗
   - Mobile/Tower Cranes, Loader Cranes
   - Mini Cranes, Crawler Cranes

3. **Transport Equipment** 🚚
   - Dump Trucks, Lowboy Trailers
   - Flatbed Trucks, Concrete Mixers

4. **Road Construction** 🛣
5. **Agricultural Equipment** 🌾
6. **Aerial Equipment** ⬆️
7. **Concrete Equipment** 🏗

## 🗺️ Geographic Coverage

- **Service Area**: All USA
- **ZIP Code System**: Automatic coverage calculation
- **Radius Options**: 25, 50, 75, 100, 150, 200 miles
- **Flexible Search**: Customers can expand search beyond contractor radius

## 💻 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_MAPBOX_TOKEN=your_mapbox_token
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

```bash
# Build
npm run build

# Upload dist/ folder to hosting
```

## 📊 Database Schema

### Contractors
- Profile info, equipment types
- Service area (lat/lng + radius)
- ZIP codes coverage array
- Verification status
- Subscription info

### Requests
- Customer info
- Location (ZIP + coordinates)
- Work type, equipment needed
- Photos/videos
- Matched contractors

### ZIP Codes Reference
- 42,000+ US ZIP codes
- City, state, coordinates
- Population data

## 🔐 Security & Compliance

- SSL encryption (Vercel automatic)
- PCI compliance (Stripe handled)
- Terms of Service & Privacy Policy required
- Contractor verification system

## 📈 Business Model

- **Customer Requests**: FREE
- **Contractor Subscription**: $50/year
- **Revenue Model**: Annual subscriptions
- **No transaction fees**: Direct contractor-customer contact

## 📞 Support

- Email: support@abalon-cm.com
- Website: https://abalon-cm.com

## 📄 License

© 2026 Abalon Construction Management LLC. All rights reserved.

---

**Built with ❤️ for the construction industry**


## 🔧 Backend (Vercel Functions)

This repo includes Vercel Serverless Functions under `/api`.

Required Vercel Environment Variables:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `MAPBOX_TOKEN` (server-side ZIP/address geocoding)

After setting env vars, redeploy on Vercel.
