import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {   
        image: {
            type: String,
            required: true
        },
        
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },


        rfidTag: {
            type: String,
            required: true,
            unique: true
        },

        stock: {
            type: Number,
            default: 0
        }
    },

    { 
        timestamps: true 
    }
)

export default mongoose.model("Product", productSchema)