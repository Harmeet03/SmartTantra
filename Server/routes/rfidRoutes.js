import express from 'express'
import { addItemByRFID } from '../controllers/rfidController.js'

const router = express.Router()

router.post('/add-item', addItemByRFID)

export default router