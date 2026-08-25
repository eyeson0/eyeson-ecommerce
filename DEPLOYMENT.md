# EYESON - Deployment Guide

This guide walks you through deploying EYESON to production.

## Prerequisites

- GitHub account
- Vercel or Netlify account (for frontend)
- Railway or Heroku account (for backend)
- PostgreSQL database (AWS RDS, DigitalOcean, or Supabase)
- Payment provider accounts (eSewa, Khalti, Fonepay)

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Connect repository**
   - Go to vercel.com
   - Import your GitHub repository
   - Select `frontend` as root directory

2. **Configure environment variables**
   ```
   VITE_API_URL=https://api.eyeson.com/api
   VITE_APP_NAME=EYESON
   ```

3. **Deploy**
   - Vercel automatically deploys on push to main
   - Custom domain: Settings → Domains

### Option 2: Netlify

1. **Connect repository**
   - Go to netlify.com
   - Connect GitHub account
   - Select repository

2. **Build settings**
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/dist`

3. **Environment variables**
   - Site settings → Build & deploy → Environment
   - Add `VITE_API_URL` and `VITE_APP_NAME`

## Backend Deployment

### Option 1: Railway

1. **Connect repository**
   - Go to railway.app
   - Create new project
   - Import GitHub repository

2. **Configure**
   - Root directory: `backend`
   - Environment variables:
     ```
     NODE_ENV=production
     DATABASE_URL=postgresql://...
     JWT_SECRET=generate_strong_secret
     PORT=3000
     ```

3. **Database**
   - Railway → Plugins → PostgreSQL
   - Configure connection

### Option 2: Heroku

1. **Login and create app**
   ```bash
   heroku login
   heroku create eyeson-api
   ```

2. **Add PostgreSQL**
   ```bash
   heroku addons:create heroku-postgresql:standard-0
   ```

3. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set JWT_SECRET=your_secret_key
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## Database Setup

### AWS RDS

1. **Create PostgreSQL database**
   - AWS Console → RDS → Create database
   - Engine: PostgreSQL 14+
   - Multi-AZ: Yes (for production)
   - Storage: 100+ GB

2. **Configure security group**
   - Allow inbound traffic on port 5432
   - From your backend server IP

3. **Connection string**
   ```
   postgresql://user:password@endpoint:5432/eyeson_db
   ```

### Supabase (Easier)

1. **Sign up at supabase.com**
2. **Create new project**
3. **Get connection string from Settings → Database**

## Environment Variables

### Production Setup

```bash
# Backend
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@host:5432/db
JWT_SECRET=long_random_string_change_this
JWT_EXPIRY=7d

# Payment Providers
ESEWA_MERCHANT_CODE=your_code
ESEWA_SECRET_KEY=your_key
KHALTI_PUBLIC_KEY=your_key
KHALTI_SECRET_KEY=your_key
FONEPAY_MERCHANT_CODE=your_code
FONEPAY_SECRET_KEY=your_key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_app_password
SMTP_FROM=noreply@eyeson.com

# SMS
SMS_API_KEY=your_sparrow_api_key
SMS_FROM=EYESON

# WhatsApp Business
WHATSAPP_BUSINESS_PHONE_ID=your_phone_id
WHATSAPP_BUSINESS_TOKEN=your_token

# Maps
MAPS_API_KEY=your_maps_api_key
```

## Migrations

### Running Migrations

```bash
# Local
cd backend
npx prisma migrate dev

# Production
PRISMA_SKIP_ENGINE_CHECK=1 npx prisma migrate deploy
```

## Domain Configuration

### Frontend Domain

1. **DNS Records** (in your domain registrar)
   ```
   CNAME  eyeson.com  -> vercel-dns.com
   ```

2. **Vercel/Netlify Settings**
   - Add custom domain
   - Verify ownership
   - Enable SSL/TLS

### Backend Domain

```
CNAME  api.eyeson.com  -> railway-endpoint.app
```

## Security Checklist

- [ ] Set strong JWT secret (32+ characters)
- [ ] Enable HTTPS everywhere
- [ ] Configure CORS properly
- [ ] Set rate limiting
- [ ] Enable database backups
- [ ] Use environment variables (never hardcode secrets)
- [ ] Enable SSL/TLS certificates
- [ ] Configure firewall rules
- [ ] Set up monitoring and alerts
- [ ] Regular security audits

## Monitoring

### Logging

```bash
# Railway
railway logs

# Heroku
heroku logs --tail

# Vercel
vercel logs
```

### Error Tracking
- Sentry integration
- LogRocket for frontend
- Custom error logging

### Performance Monitoring
- Google Analytics
- New Relic
- DataDog

## Backup Strategy

```bash
# Daily automated backups
# Retention: 30 days
# Geo-redundant storage
```

## CI/CD Pipeline

### GitHub Actions

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run build
      - run: npm run deploy
```

## Troubleshooting

### Common Issues

1. **Database connection failed**
   - Check DATABASE_URL format
   - Verify network access
   - Check credentials

2. **Payment gateway not working**
   - Verify merchant credentials
   - Check API endpoints
   - Review logs for errors

3. **Email/SMS not sending**
   - Verify API keys
   - Check email template
   - Review rate limits

## Support

For deployment issues:
- Check documentation
- Review logs
- Contact provider support
- Post in GitHub issues

---

**Remember: Never skip security in production!**
