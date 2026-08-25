# EYESON Backend API

Premium Fashion E-Commerce Backend

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
cd backend
npm install
```

### Environment Setup

```bash
cp ../.env.example .env
```

### Database Setup

```bash
npx prisma migrate dev
npm run seed
```

### Running the Server

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

## 📚 API Documentation

### Authentication Endpoints

#### POST /api/auth/signup
Create a new account

#### POST /api/auth/login
Login with email and password

#### POST /api/auth/verify
Verify account with OTP

#### POST /api/auth/logout
Logout and invalidate session

### Product Endpoints

#### GET /api/products
Get all products with pagination

#### GET /api/products/:slug
Get product by slug

#### GET /api/categories
Get all categories

#### GET /api/collections
Get all collections

### Cart Endpoints

#### GET /api/cart
Get user's cart

#### POST /api/cart/items
Add item to cart

#### PATCH /api/cart/items/:id
Update cart item quantity

#### DELETE /api/cart/items/:id
Remove item from cart

### Order Endpoints

#### POST /api/orders
Create a new order

#### GET /api/orders
Get user's orders

#### GET /api/orders/:id
Get order details

### Payment Endpoints

#### POST /api/payments/esewa/initiate
Initiate eSewa payment

#### POST /api/payments/khalti/initiate
Initiate Khalti payment

#### POST /api/payments/fonepay/initiate
Initiate Fonepay payment

### Tracking Endpoints

#### GET /api/tracking/:orderId
Get order tracking status

#### GET /api/tracking/:orderId/live
Get live tracking with GPS (WebSocket)

## 🗄️ Database Models

See `prisma/schema.prisma` for complete database schema

## 🔐 Security

- JWT Authentication
- Argon2id Password Hashing
- Rate Limiting
- CORS Protection
- Helmet Security Headers
- Server-side Validation

## 🔌 Real-time Features

- WebSocket with Socket.io
- Live order tracking
- Real-time GPS updates
- Order status notifications

## 📝 License

MIT
