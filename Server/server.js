import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import database from './config/database.js'
import { corsOptions } from './config/cors.js'

import authRoutes from './routes/authRoutes.js'
import profileRoute from './routes/profileRoute.js'
import sessionRoute from './routes/sessionRoutes.js'
import productRoute from './routes/productRoutes.js'
import rfidRoutes from './routes/rfidRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'

dotenv.config();

console.log('Connecting MongoDB...')
database()

const app = express()
const PORT = process.env.PORT

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Welcome to ClothTantra API.')
})

app.listen(PORT, () => {
    console.log('Server is running now!')
    console.log(`Visit http://localhost:${PORT}`)
})

app.use('/auth', authRoutes)
app.use('/user', profileRoute)
app.use('/session', sessionRoute)
app.use('/products', productRoute)
app.use('/rfid', rfidRoutes)
app.use('/payment', paymentRoutes)