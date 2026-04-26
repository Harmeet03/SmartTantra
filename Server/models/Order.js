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
                quantity: Number,
                price: Number
        }
        ],

        totalAmount: {
            type: Number,
            required: true
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "success", "failed"],
            default: "pending"
        },

        paymentId: {
            type: String // Razorpay payment id
        }
    },

    { 
        timestamps: true 
    }
)

export default mongoose.model("Order", orderSchema)