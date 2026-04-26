import bcrypt from 'bcryptjs'

import generateToken from '../utils/generateToken.js'
import User from '../models/User.js'
import Session from '../models/Session.js'

export const register = async (req, res) => {
    let { name, email, contact, password } = req.body

    try{
        const existingUser = await User.findOne({ email });
                
        if(existingUser){
            console.log('User already exists')

            return res.status(400).json({ 
                message: 'User already exists.', 
                success: false
            })
        }

        const safePassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            name,
            email,
            contact,
            since: new Date(),
            password: safePassword
        })

        generateToken(res, user._id);
        
        console.log('User registered successfully:', user.name, '\nEmail:', user.email);

        return res.status(201).json({
            name: user.name,
            email: user.email,
            success: true
        })

    }
    catch(e){
        console.error('Registration error:', e);
        
        return res.status(500).json({ 
            message: 'Server error during registration.',
            success: false
        });
    }
}

export const login = async (req, res) => {
    let {email, password} = req.body

    try{
        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({
                message: 'No user exists.',
                success: false
            })
        }

        let isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({
                message: 'Invalid Password.',
                success: false
            })
        }

        generateToken(res, user._id);

        console.log('User logged in successfully:', user.name, '\nEmail:', user.email);

        return res.status(200).json({
            user: user.name,
            email: user.email,
            success: true
        })
    }
    catch(e){
        console.error('Login error: ', e)

        return res.status(500).json({
            message: 'Server error during login.',
            success: false
        })
    }
}

export const logout = async (req, res) => {
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax'
        });

        await Session.findOneAndUpdate(
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
        
        console.log('User logout successfully!')
        return res.status(200).json({
            message: 'User logout successfully!',
            success: true
        })
    }
    catch(e){
        console.error('Logout error:', e);
        return res.status(500).json({ 
            message: 'Server error during logout.',
            success: false
        });
    }
}