import Session from "../models/Session.js";

export const createSession =  async (req, res) => {
    try{
        const userId = req.user.id
        const { token } = req.body

        // VALIDATING SESSION TOKEN
        if(token !== process.env.STORE_TOKEN){
            console.log('Invalid QR Token')

            return res.status(403).json({
                message: 'Invalid QR!',
                success: false
            })
        }
        
        await Session.updateMany(
            {
                counterId: 'COUNTER_1',
                status: 'active'
            },
            {
                status: 'expired',
                expiresAt: new Date()
            }
        )
        
        // CREATING NEW SESSION
        const session = await Session.create({
            userId,
            counterId: 'COUNTER_1',
            status: 'active',
            expiresAt: Date.now() +  20 * 60 * 1000 // 20 minutes validity
        })

        console.log('New Session Created!')

        return res.json({
            success: true,
            message: 'Session created!',
            session
        })
    }
    catch(e){
        console.error('Session error: ', e)

        return res.status(500).json({
            message: 'Session Error!',
            success: false
        })
    }
}

export const getCurrentSession = async (req, res) => {
    try{
        const session = req.session

        await session.populate('cart.productId')

        const totalAmount = session.cart.reduce((acc, item) => {
            return acc + (item.productId.price * item.quantity)
        }, 0)

        return res.json({
            success: true,
            session,
            totalAmount
        })
    }
    catch(e){
        return res.status(500).json({
            success: false,
            message: 'Error fetching current session!'
        })
    }
}

export const endSession = async (req, res) => {
    try{
        const session = await Session.findOneAndUpdate(
            {
                counterId: 'COUNTER_1',
                status: 'active'
            },
            
            {
                status: 'completed',
                expiresAt: new Date()
            },

            {
                new: true
            }
        )

        if(!session){
            console.log('No active session found!')

            return res.status(404).json({
                success: false,
                message: 'No active session found!'
            })
        }

        console.log('Session Ended!')

        return res.json({
            success: true,
            message: 'Session Ended!',
            session
        })
    }
    catch(e){
        console.error('Error ending session: ', e)
        return res.status(500).json({
            success: false,
            message: 'Error ending session!'
        })
    }
}