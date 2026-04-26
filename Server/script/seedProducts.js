import mongoose from "mongoose"
import dotenv from "dotenv"
import Product from "../models/Product.js"

dotenv.config()


const products = [
    {
        image: 'sandisk.png',
        name: "SanDisk Pendrive",
        description: "50GB USB 3.0",
        price: 799,
        rfidTag: "42572EA9F1C90", // Anubhab's tag
        stock: 10
    },
    {
        image: 'boat.png',
        name: "boAt Earbuds",
        description: "Premium sound quality.",
        price: 1499,
        rfidTag: "66478A3F", // Kit's tag
        stock: 10
    },
    {
        image: 'tshirt.png',
        name: "Park Avenue Tshirt",
        description: "Premium quality. A product of Raymond Ltd.",
        price: 999,
        rfidTag: "332271E2", //White card's tag
        stock: 10
    },
    {
        image: 'perfume.png',
        name: "Body Cupid's Perfume",
        description: "Premium quality perfume.",
        price: 2000,
        rfidTag: "332271E2sdsdsd",  // No tag.
        stock: 0
    }
]

try{
    await mongoose.connect(process.env.MONGODB_URL)
    await Product.deleteMany()
    await Product.insertMany(products)
    
    console.log("Products seeded!")
    process.exit()
}
catch(e){
    console.error('Seeding error: ', e)
    process.exit(1)    
}