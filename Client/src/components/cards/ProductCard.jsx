import { SanDisk, boAt, Tshirt, Perfume } from '../../assets/images'
import { motion } from "framer-motion"

const ProductCard = ({ product, quantity }) => {
    const imageMap = {
        'sandisk.png': SanDisk,
        'boat.png': boAt,
        'tshirt.png': Tshirt,
        'perfume.png': Perfume
    }
    
    return(
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row gap-16 p-8 border-b max-w-7xl m-auto">
                <div className="md:w-1/3 flex justify-center">
                    <img src={imageMap[product.image]} className="w-full rounded-2xl"/>
                </div>
                <div className="flex flex-col gap-4 sm:gap-8 justify-center">
                    <span className="bg-yellow-500 w-24 px-2 py-1 rounded-full text-xs text-black"> High demand </span>
                    <h1 className="text-3xl sm:text-5xl"> {product.name} </h1>
                    <p className="text-sm sm:text-xl"> {product.description} </p>
                    <p className="text-4xl sm:text-6xl"> ₹{product.price} </p>
                    {
                        quantity && ( <p className="text-sm sm:text-lg"> Quantity: <span className='ml-2 bg-yellow-500 
                        text-black rounded-full px-2'> 
                            {quantity} 
                        </span> </p> )
                    }
                    { product.stock === 0 && ( <p className="text-sm sm:text-lg text-red-500"> Currently out Of stock! </p> ) }
                </div>
            </div>
        </motion.div>
    )
}
export default ProductCard