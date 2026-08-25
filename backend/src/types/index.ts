// Auth types
export interface AuthPayload {
  userId: string
  email: string
  isVerified: boolean
}

export interface JWTPayload extends AuthPayload {
  iat: number
  exp: number
}

// Product types
export interface ProductResponse {
  id: string
  slug: string
  name: string
  price: number
  salePrice?: number
  isNew: boolean
  isFeatured: boolean
  images: string[]
}

// Order types
export interface OrderResponse {
  id: string
  orderNumber: string
  status: string
  total: number
  createdAt: string
}

// Payment types
export interface PaymentResponse {
  status: string
  transactionId?: string
  message: string
}
