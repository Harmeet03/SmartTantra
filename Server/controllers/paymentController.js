import crypto from "crypto"

import Order from "../models/Order.js";
import Session from "../models/Session.js"
import getRazorpay from "../config/razorpay.js";

export const createOrder = async (req, res) => {
    const razorpay = getRazorpay()
    try{
        const user = req.user
        const session = req.session 

        await session.populate('cart.productId')

        const items = session.cart.map(item => ({
            productId: item.productId._id,
            name: item.productId.name,
            quantity: item.quantity,
            price: item.productId.price
        }))

        const totalAmount = items.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)

        const options = {
            amount: totalAmount * 100,
            currency: "INR",
            receipt: `s_t_receipt_${new Date().getTime()}`,

            notes: {
                name: user.name,
                phone: user.contact,
                userId: user.id
            }
        }

        const razorpayOrder = await razorpay.orders.create(options)

        const order = await Order.create({
            userId: user._id,
            sessionId: session._id,
            items,
            amount: totalAmount,
            razorpayOrderId: razorpayOrder.id,
            status: "pending"
        })

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            order: {
                id: razorpayOrder.id,
                amount: razorpayOrder.amount,
                receipt: razorpayOrder.receipt
            }
        })
    }
    catch(e){
        console.error('Order creation error: ', e)
        return res.status(500).json({ 
            success: false, 
            message: "Failed to create order!"
        })
    }
}

export const verifyPayment = async (req, res) => {
    try{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

        const body = razorpay_order_id + "|" + razorpay_payment_id

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex")

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ 
                success: false,
                message: "Invalid payment signature!"
            })
        } 

        const order = await Order.findOne({
            razorpayOrderId: razorpay_order_id
        })

        if (!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found!"
            })
        }

        if (order.status === "paid") {
            return res.json({
                success: true,
                message: "Already processed"
            })
        }

        order.razorpayPaymentId = razorpay_payment_id
        order.status = "paid"
        await order.save()

        const updated = await Session.findByIdAndUpdate(order.sessionId, 
            {
                status:  "completed"
            },

            {
                new: true
            }
        )

        return res.json({ 
            success: true,
            message: "Payment verified!" 
        })

        
    }
    catch(e){
        return res.status(500).json({
            success: false,
            message: "Payment verification failed!"
        })
    }
}
