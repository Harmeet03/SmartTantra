import Product from '../models/Product.js'
import Session from '../models/Session.js'

export const addItemByRFID = async (req, res) => {
  try {
    const { rfidTag, counterId } = req.body

    // 1) Find product by RFID
    const product = await Product.findOne({ rfidTag })

    if (!product) {
        return res.status(404).json({ 
          success: false, 
          message: 'Cart is empty!' 
        })
    }

    // 2) Find active session for this device (recommended)
    const session = await Session.findOne({
      counterId,        
      status: 'active'
    })

    if (!session) {
        return res.status(403).json({ 
          success: false, 
          message: 'No active session for device' 
        })
    }

    // 3) Update cart (increment or add)
    const existing = session.cart.find(
      item => item.productId.toString() === product._id.toString()
    )

    if (existing) {
        existing.quantity += 1
    } 
    else {
        session.cart.push({ 
            productId: product._id, 
            quantity: 1 
        })
    }

    await session.save()

    return res.json({ 
        success: true, 
        product 
    })
  } 
  catch (e) {
    console.error(e)
    return res.status(500).json({ 
        success: false, 
        message: 'RFID processing failed',
    })
  }
}