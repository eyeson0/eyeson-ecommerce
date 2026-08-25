# EYESON Development Guide

## 🏗️ Project Architecture

### Frontend Architecture

**Stack:** React 18 + TypeScript + Vite + TailwindCSS

**File Structure:**
```
frontend/src/
├── components/        # Reusable components
│   ├── Header.tsx    # Navigation header
│   ├── ThemeToggle.tsx
│   └── EyeLoader.tsx
├── pages/            # Page components
│   ├── Welcome.tsx
│   ├── Home.tsx
│   ├── Product.tsx
│   └── ...
├── store/            # Zustand state management
│   ├── themeStore.ts
│   └── cartStore.ts
├── styles/           # Global CSS
└── types/            # TypeScript interfaces
```

**State Management:**
- **Zustand** for global state (cart, theme, wishlist)
- **React Context** for smaller features
- **Local Storage** for persistence

**Styling:**
- TailwindCSS for utility classes
- CSS variables for theme switching
- GSAP for complex animations

### Backend Architecture

**Stack:** Node.js + Express + TypeScript + Prisma + PostgreSQL

**File Structure:**
```
backend/
├── src/
│   ├── server.ts          # Express app
│   ├── config/            # Configuration
│   ├── types/             # TypeScript interfaces
│   ├── controllers/       # Request handlers
│   ├── routes/            # API routes
│   ├── middleware/        # Express middleware
│   ├── services/          # Business logic
│   ├── auth/              # Authentication
│   ├── payments/          # Payment logic
│   └── database/          # DB utilities
├── prisma/
│   └── schema.prisma      # Database schema
└── migrations/            # Database migrations
```

**API Organization:**
- RESTful endpoints
- JWT authentication
- Error handling middleware
- Rate limiting
- Request validation

### Admin Architecture

**Stack:** React 18 + TypeScript + Vite + TailwindCSS + Recharts

**Features:**
- Dashboard with analytics
- Order management
- Product management
- Customer management
- Courier tracking

---

## 🔐 Authentication Flow

```
USER SIGNS UP
    ↓
VALIDATE EMAIL/PHONE
    ↓
SEND OTP (Real - Email/SMS/WhatsApp)
    ↓
USER ENTERS OTP
    ↓
VERIFY OTP ON SERVER
    ↓
CREATE USER & PASSWORD HASH
    ↓
GENERATE JWT TOKEN
    ↓
RETURN TOKEN TO FRONTEND
    ↓
FRONTEND STORES IN localStorage
    ↓
USER LOGGED IN
```

### Backend Auth Middleware

```typescript
// Verify JWT token
export async function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  
  if (!token) return res.status(401).json({ error: 'No token' })
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}
```

### Frontend Token Usage

```typescript
// Store token
localStorage.setItem('authToken', token)

// Send with requests
const headers = {
  Authorization: `Bearer ${localStorage.getItem('authToken')}`
}
```

---

## 🛒 Cart & Order Flow

```
ADD TO CART (Frontend)
    ↓
UPDATE ZUSTAND STORE
    ↓
DISPLAY CONFIRMATION
    ↓
--- LATER ---
    ↓
CHECKOUT BUTTON
    ↓
SEND CART DATA TO BACKEND
    ↓
CREATE ORDER IN DATABASE
    ↓
RESERVE INVENTORY
    ↓
RETURN ORDER SUMMARY
    ↓
PROCEED TO PAYMENT
```

### Database Flow

```prisma
// When creating order
const order = await prisma.order.create({
  data: {
    userId: user.id,
    addressId: address.id,
    items: {
      create: cartItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color,
      }))
    },
    paymentMethod: paymentMethod,
    total: calculateTotal(cartItems),
  },
  include: { items: true }
})
```

---

## 💳 Payment Integration

### Payment Flow

```
CUSTOMER SELECTS PAYMENT METHOD
    ↓
FRONTEND SENDS ORDER DATA
    ↓
BACKEND CREATES PAYMENT RECORD
    ↓
BACKEND INITIATES PAYMENT GATEWAY
    ↓
REDIRECT TO PAYMENT PROVIDER (eSewa/Khalti/Fonepay)
    ↓
CUSTOMER COMPLETES PAYMENT
    ↓
PAYMENT PROVIDER SENDS CALLBACK
    ↓
BACKEND VERIFIES PAYMENT
    ↓
UPDATE ORDER STATUS
    ↓
SEND CONFIRMATION EMAIL/SMS
    ↓
REDIRECT TO SUCCESS PAGE
```

### Example: eSewa Integration

```typescript
// Backend
export async function initiateEsewaPayment(req, res) {
  const { orderId, amount } = req.body
  
  const esewaSignature = generateSignature(amount, orderId)
  
  return res.json({
    merchantCode: ESEWA_MERCHANT_CODE,
    amount: amount,
    orderId: orderId,
    signature: esewaSignature,
    redirectUrl: 'http://localhost:3000/api/payments/esewa/verify'
  })
}

export async function verifyEsewaPayment(req, res) {
  const { data } = req.body
  
  // Verify signature from eSewa
  const isValid = verifySignature(data)
  
  if (isValid) {
    // Update order status
    await prisma.order.update({
      where: { id: data.orderId },
      data: { paymentStatus: 'CONFIRMED' }
    })
    
    res.redirect('/order-confirmation/' + data.orderId)
  }
}
```

---

## 📍 Real-time Tracking

### WebSocket Setup

```typescript
// Backend
const io = new SocketIOServer(httpServer)

io.on('connection', (socket) => {
  socket.on('subscribe-tracking', (orderId) => {
    socket.join(`order-${orderId}`)
  })
  
  socket.on('update-location', async (data) => {
    // Verify courier
    // Save location
    io.to(`order-${data.orderId}`).emit('location-update', data)
  })
})
```

### Frontend Listener

```typescript
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.emit('subscribe-tracking', orderId)

socket.on('location-update', (location) => {
  // Update map with new courier location
  updateMapMarker(location)
})
```

---

## 🔔 Notifications

### Email Notifications

```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD
  }
})

export async function sendOrderConfirmation(email, orderData) {
  await transporter.sendMail({
    from: SMTP_FROM,
    to: email,
    subject: `Order Confirmed - ${orderData.orderNumber}`,
    html: renderOrderTemplate(orderData)
  })
}
```

### SMS Notifications (Sparrow SMS)

```typescript
export async function sendSMS(phone, message) {
  const response = await axios.post(
    'https://api.sparrowsms.com/v2/sms/',
    {
      to: phone,
      message: message,
      token: SMS_API_KEY
    }
  )
  return response.data
}
```

---

## 🧪 Testing

### Frontend Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

### Backend Testing

```bash
# Run tests
npm run test

# With coverage
npm run test:coverage
```

---

## 🔍 Debugging

### Frontend Debugging

- React DevTools browser extension
- Console for errors
- Network tab for API calls
- Application tab for localStorage

### Backend Debugging

```typescript
// Add logging
console.log('Order created:', order.id)

// Use debugger
debuger

// Start with inspect
node --inspect dist/server.js
```

---

## 📊 Performance Tips

### Frontend
- Code splitting by route
- Image lazy loading
- CSS minification
- JS minification
- Caching strategies

### Backend
- Database query optimization
- Connection pooling
- Response caching
- Rate limiting
- Compression middleware

---

## 🚀 Deployment Checklist

- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] HTTPS certificate installed
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Error logging setup
- [ ] Monitoring configured
- [ ] Security headers set
- [ ] Database migrations run
- [ ] Assets optimized

---

## 📚 Additional Resources

- React Documentation: https://react.dev
- Express Documentation: https://expressjs.com
- Prisma Documentation: https://www.prisma.io/docs/
- TailwindCSS Documentation: https://tailwindcss.com/docs
- GSAP Documentation: https://gsap.com/docs/

---

**Happy Coding!** 🚀
