import Session from "../models/Session.js"

const isSessionValid = async (req, res, next) => {
    try{
        const session = await Session.findOne({
            userId: req.user.id,
            status: 'active'
        })

        if(!session){
            console.log('No active session found!')

            return res.json({
                success: true,
                message: 'No active session found! Please scan the QR code again.',
                session: null
            })
        }

        if(Date.now() > session.expiresAt){
            session.status = 'expired'
            await session.save()

            console.log('Session Expired!')
            
            return res.json({
                success: true,
                message: 'Session Expired! Please scan the QR code again.',
                session: null
            })
        }

        req.session = session
        next()
    }
    catch(e){
        return res.status(500).json({
            success: false,
            message: "Session validation failed!"
        })
    }
}

export default isSessionValid
