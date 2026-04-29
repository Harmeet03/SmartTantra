import mongoose from "mongoose"

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        sessionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Session"
        },

        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },

                name: {
                    type: String,
                },

                quantity: {
                    type: Number,
                },
                
                price: {
                    type: Number,
                }
            }
        ],

        amount: {
            type: Number,
            required: true
        },

        razorpayOrderId: {
            type: String // Razorpay order id
        },

        razorpayPaymentId: {
            type: String // Razorpay payment id
        },

        status: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending"
        }
    },

    { 
        timestamps: true 
    }
)

export default mongoose.model("Order", orderSchema)