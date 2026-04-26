import express from 'express'

import protect from '../middleware/userAuth.js'
import isSessionValid from '../middleware/userSession.js'

import { products } from '../controllers/productController.js'

const productRoute = express.Router()

productRoute.get('/get', protect, isSessionValid, products)

export default productRoute