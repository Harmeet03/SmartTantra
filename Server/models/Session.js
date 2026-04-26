import mongoose, { mongo } from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        counterId: {
            type: String,
            default: null
        },

        cart: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },

                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ],

        status: {
            type: String,
            enum: ['active', 'completed', 'expired'],
            default: 'expired'
        },

        expiresAt: {
            type: Date,
            required: true
        }
    }, 
    
    {
        timestamps: true 
    }
);

export default mongoose.model("Session", sessionSchema);