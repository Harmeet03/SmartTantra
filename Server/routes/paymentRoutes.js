import express from 'express'

import { createOrder, verifyPayment, markPaymentFailed } from '../controllers/paymentController.js'
import protect from '../middleware/userAuth.js'
import isSessionValid from '../middleware/userSession.js'

const router = express.Router()

router.post('/create-order', protect, isSessionValid, createOrder)
router.post('/verify', protect, verifyPayment)

router.post('/mark-failed', protect, markPaymentFailed)

export default router