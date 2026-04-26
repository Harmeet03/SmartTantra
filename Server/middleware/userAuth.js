import User from "../models/User.js";
import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
    const token = req.cookies?.token;

    if(!token){
        return res.status(401).json({
            message: 'Denied! You dont have a token.',
            success: false
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        if(!req.user){
            return res.status(404).json({
                message: 'User not found.',
                success: false
            })
        }

        next();
    }
    catch(e){
        console.error('Token validation error: ', e)

        return res.status(401).json({
            message: 'Token is not valid',
            success: false
        })
    }
}

export default protect