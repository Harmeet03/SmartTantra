import express from 'express'

import protect from '../middleware/userAuth.js'
import isSessionValid from '../middleware/userSession.js'

import { createSession, getCurrentSession, endSession } from '../controllers/sessionController.js'

const sessionRoute = express.Router()

sessionRoute.post('/create', protect, createSession)
sessionRoute.get('/current', protect, isSessionValid, getCurrentSession)
sessionRoute.post('/end', protect, endSession)

export default sessionRoute