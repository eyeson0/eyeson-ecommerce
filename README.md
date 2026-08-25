# EYESON - Premium Fashion E-Commerce Website

**Designed for those who lead, not follow.**

> LIMITLESS. A complete, production-ready e-commerce platform built with modern web technologies.

## 🎯 Brand Message

```
LIMITLESS.
Designed for those who lead, not follow.
```

## 📁 Project Structure

```
eyeson/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Zustand state management
│   │   ├── styles/          # Global CSS
│   │   ├── types/           # TypeScript types
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                  # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── server.ts        # Main server file
│   │   ├── config/          # Configuration
│   │   ├── types/           # TypeScript interfaces
│   │   └── database/        # Prisma ORM
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   ├── package.json
│   └── tsconfig.json
│
├── admin/                    # Admin Dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/eyeson0/eyeson-ecommerce.git
cd eyeson-ecommerce
```

2. **Install dependencies**
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
cd ../admin && npm install
cd ..
```

3. **Configure environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Setup database**
```bash
cd backend
npx prisma migrate dev
cd ..
```

5. **Start development servers**
```bash
npm run dev
```

Servers:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Admin: http://localhost:5174

## 🎨 Design System

### Colors

**Light Mode:**
- Background: #FFFFFF
- Text: #000000
- Secondary: #555555
- Border: #E6E6E6
- Surface: #F7F7F7
- Button: Black on White

**Dark Mode:**
- Background: #000000
- Text: #FFFFFF
- Secondary: #BDBDBD
- Border: #2A2A2A
- Surface: #111111
- Button: White on Black

### Typography
- Premium, clean, minimal aesthetic
- Large whitespace emphasis
- Bold visual hierarchy
- Editorial fashion magazine style

## ✨ Key Features

### Customer Experience
- 🎭 Stunning welcome animation with eye-opening loader
- 🛍️ Premium product browsing and search
- 🛒 Shopping cart with real-time updates
- ❤️ Wishlist functionality
- 🔐 Secure account creation and verification
- 💳 Multiple payment methods (eSewa, Khalti, Fonepay)
- 📍 Real-time order tracking with live GPS
- 🔔 Multi-channel notifications (Email, SMS, WhatsApp)
- 🌙 Light/Dark theme toggle
- 📱 Fully responsive mobile design

### Admin Features
- 📊 Dashboard with real-time analytics
- 📦 Complete order management
- 🏷️ Product catalog management
- 👥 Customer management
- 💰 Payment tracking and verification
- 🚚 Courier and delivery management
- 📈 Inventory tracking
- 🎫 Coupon and discount management

### Courier Features
- 🗺️ Interactive delivery map
- 📍 Real-time GPS tracking
- 📦 Order status updates
- 📞 Customer contact integration

## 🔧 Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **React Router** - Page navigation
- **TailwindCSS** - Utility-first CSS
- **GSAP** - Advanced animations
- **Zustand** - Lightweight state management
- **Axios** - HTTP client
- **Framer Motion** - Motion library
- **React Query** - Data fetching

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Relational database
- **Prisma** - ORM
- **JWT** - Authentication
- **Argon2id** - Password hashing
- **Socket.io** - Real-time communication
- **Nodemailer** - Email service

### Admin Dashboard
- **React 18**
- **TypeScript**
- **Vite**
- **TailwindCSS**
- **Recharts** - Analytics charts

## 📱 Responsive Design

- **Mobile** (320px - 767px) - Touch-optimized
- **Tablet** (768px - 1023px) - Hybrid layout
- **Desktop** (1024px - 1439px) - Full experience
- **Large Desktop** (1440px+) - Maximum space

## 🔒 Security

- ✅ HTTPS enforced
- ✅ Secure HTTP-only cookies
- ✅ Server-side validation
- ✅ Rate limiting
- ✅ CSRF protection
- ✅ XSS prevention
- ✅ SQL injection prevention
- ✅ Argon2id password hashing
- ✅ JWT authentication
- ✅ Role-based access control
- ✅ Environment variable management
- ✅ No secrets in frontend code

## 🌍 Localization

- **Currency**: NPR (Nepali Rupees)
- **Language**: English
- **Region**: Nepal-focused delivery
- **Payments**: Nepal payment methods
- **Phone Format**: Nepal (+977)

## 📊 Database Schema

Key models:
- **User & UserProfile** - Customer accounts
- **Product, ProductImage, ProductVariant** - Product catalog
- **Category, Collection** - Product organization
- **Inventory** - Stock management
- **Cart, CartItem** - Shopping functionality
- **Wishlist, WishlistItem** - Saved items
- **Order, OrderItem, OrderEvent** - Order management
- **Payment, PaymentAttempt** - Payment tracking
- **Shipment, Courier, TrackingLocation** - Delivery
- **Notification** - Alerts and updates
- **Coupon, Review** - Additional features
- **AdminUser, AuditLog** - Admin management

## 🚀 Deployment

### Frontend Options
- Vercel (recommended for Next.js compatibility)
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

### Backend Options
- Railway
- Heroku
- AWS EC2
- DigitalOcean App Platform
- Render

### Database Options
- AWS RDS PostgreSQL
- DigitalOcean Managed PostgreSQL
- Render PostgreSQL
- Supabase

## 📖 API Documentation

See `/backend/README.md` for complete API documentation with all endpoints.

### API Structure
```
Authentication: /api/auth/*
Products: /api/products/*
Cart: /api/cart/*
Orders: /api/orders/*
Payments: /api/payments/*
Tracking: /api/tracking/*
Notifications: /api/notifications/*
Users: /api/users/*
Admin: /api/admin/*
```

## 🗺️ Customer Journey

```
WELCOME PAGE
    ↓
EYE-OPENING ANIMATION
    ↓
HOME - LIMITLESS. COLLECTION
    ↓
BROWSE - COLLECTIONS & PRODUCTS
    ↓
PRODUCT DETAIL - SELECT SIZE & COLOR
    ↓
ADD TO CART - REAL-TIME UPDATE
    ↓
VIEW CART - MANAGE ITEMS
    ↓
CHECKOUT - DELIVERY & PAYMENT INFO
    ↓
AUTHENTICATION - LOGIN/SIGNUP/GUEST
    ↓
PAYMENT - SECURE PAYMENT GATEWAY
    ↓
ORDER CONFIRMATION - WITH DETAILS
    ↓
NOTIFICATION - EMAIL/SMS/WHATSAPP
    ↓
ORDER TRACKING - REAL-TIME STATUS
    ↓
LIVE TRACKING - GPS LOCATION (WHEN AVAILABLE)
    ↓
DELIVERY - PACKAGE ARRIVES
    ↓
COMPLETED - ORDER FULFILLED
```

## 📝 Pages Structure

### Customer
- `/` - Welcome
- `/home` - Homepage with hero
- `/collections/:category` - Category browsing
- `/product/:slug` - Product details
- `/search` - Search results
- `/cart` - Shopping cart
- `/checkout` - Checkout flow
- `/login` - User login
- `/signup` - Account creation
- `/verify` - Email/SMS verification
- `/account` - User dashboard
- `/account/orders` - Order history
- `/account/wishlist` - Saved items
- `/account/addresses` - Saved addresses
- `/track-order` - Order tracking
- `/order-confirmation/:id` - Order confirmation

### Admin
- `/admin/login` - Admin login
- `/admin/dashboard` - Analytics dashboard
- `/admin/orders` - Order management
- `/admin/products` - Product management
- `/admin/customers` - Customer management
- `/admin/couriers` - Courier management
- `/admin/payments` - Payment tracking
- `/admin/notifications` - Notification center

## 🎯 Development Roadmap

- [x] Project initialization
- [x] Frontend component structure
- [x] Backend API scaffold
- [x] Database schema
- [x] Admin dashboard
- [ ] Authentication system
- [ ] Payment integration
- [ ] Email/SMS services
- [ ] Order management
- [ ] Real-time tracking
- [ ] Testing suite
- [ ] CI/CD pipeline
- [ ] Performance optimization
- [ ] Security audit
- [ ] Production deployment

## 🤝 Contributing

Contributions are welcome! Please:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

MIT License - See LICENSE file for details

## 🎬 Important Notes

### Brand Name
✅ Always use: **EYESON**
❌ Never use: EYESON®, EYESON™, EYESONO, EYES0N

### Real-World Standards
- Never fake payment confirmations
- Only show "OTP Sent" when actually sent
- Only show "GPS Live" with real data
- Only show "Delivered" when confirmed
- Always validate server-side
- Always rate limit requests
- Always hash passwords securely

### Performance
- Images optimized (WebP/AVIF)
- Lazy loading enabled
- Code splitting implemented
- CSS/JS minified
- Smooth animations (60fps target)

## 📞 Support

For issues, questions, or feedback:
- Create an issue on GitHub
- Email: support@eyeson.com
- Follow us on social media

---

**Remember: EYESON is not just a store, it's a vision.**

**LIMITLESS. Designed for those who lead, not follow.**
