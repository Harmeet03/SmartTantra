import Product from '../models/Product.js'

export const products = async (req, res) => {
    try{
        // VALIDATING PRODUCTS
        const products = await Product.find()

        if(products.length === 0){
            console.log('No items available right now!')

            return res.json({
                success: true,
                message: 'No items available right now!',
                products: []
            })
        }

        return res.json({
            success:true,
            products
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            message: "Failed to fetch products!"
        })
    }
}