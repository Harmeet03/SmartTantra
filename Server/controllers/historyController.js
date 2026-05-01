import path from "node:path"
import Order from "../models/Order.js"

export const orderHistory = async (req, res) => {
    try{
        const orders = await Order.find({
            userId: req.user.id
        })
        .select('items amount razorpayOrderId status createdAt')
        .populate({
            path: 'items.productId',
            select: 'image'
        })

        const formattedOrders = orders.map(order => ({
            items: order.items.map(item => ({
                image: item.productId.image,
                name: item.name,
                quantity: item.quantity
            })),

            orderId: order.razorpayOrderId,
            amountPaid: order.amount,
            status: order.status,
            createdAt: order.createdAt
        }))

        if(orders.length === 0){
            console.log('No order history yet.')

            return res.json({
                success: true,
                message: 'You must buy something to see your order history!',
                orders: []
            })
        }

        console.log('Order history loaded.')
        return res.json({
            success: true,
            orders: formattedOrders
        })
    }
    catch(e){
        console.log('Unable to load order history')

        return res.status(500).json({
            success: false,
            message: 'Unable to load order history!'
        })
    }
}