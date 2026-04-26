import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/
        },

        contact: {
            type: String,
            required: true,
            unique: true
        },
        
        password: {
            type: String,
            required: true
        },

        since: {
            type: Date,
            default: null
        }
    }, 
    
    {
        timestamps: true 
    }
);

export default mongoose.model("User", userSchema);