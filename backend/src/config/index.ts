import dotenv from 'dotenv'

dotenv.config()

export const config = {
  app: {
    name: 'EYESON',
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your_super_secret_jwt_key',
    expiry: process.env.JWT_EXPIRY || '7d',
  },
  payment: {
    esewa: {
      merchantCode: process.env.ESEWA_MERCHANT_CODE,
      secretKey: process.env.ESEWA_SECRET_KEY,
    },
    khalti: {
      publicKey: process.env.KHALTI_PUBLIC_KEY,
      secretKey: process.env.KHALTI_SECRET_KEY,
    },
    fonepay: {
      merchantCode: process.env.FONEPAY_MERCHANT_CODE,
      secretKey: process.env.FONEPAY_SECRET_KEY,
    },
  },
  email: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    from: process.env.SMTP_FROM || 'noreply@eyeson.com',
  },
  sms: {
    apiKey: process.env.SMS_API_KEY,
    from: process.env.SMS_FROM || 'EYESON',
  },
  whatsapp: {
    phoneId: process.env.WHATSAPP_BUSINESS_PHONE_ID,
    token: process.env.WHATSAPP_BUSINESS_TOKEN,
  },
}
