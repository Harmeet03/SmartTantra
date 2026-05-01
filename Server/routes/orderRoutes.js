import express from 'express'

import protect from '../middleware/userAuth.js'
import isSessionValid from '../middleware/userSession.js'

import { orderHistory } from '../controllers/historyController.js'

const orderRoute = express.Router()

orderRoute.get('/history', protect, isSessionValid, orderHistory)

export default orderRoute