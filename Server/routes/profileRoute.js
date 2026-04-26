import express from 'express'

import protect from '../middleware/userAuth.js'
import { profile } from '../controllers/profileController.js'

const profileRoute = express.Router()

profileRoute.get('/profile', protect, profile)

export default profileRoute