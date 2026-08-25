import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { Server as SocketIOServer } from 'socket.io'
import { createServer } from 'http'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  },
})

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})
app.use(limiter)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'EYESON API is running' })
})

// API Routes placeholder
app.get('/api', (req, res) => {
  res.json({ message: 'EYESON API v1.0' })
})

// WebSocket events
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id)

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

const PORT = process.env.PORT || 3000

httpServer.listen(PORT, () => {
  console.log(`\n🚀 EYESON API running on http://localhost:${PORT}`)
  console.log('✨ Designed for those who lead, not follow.\n')
})
