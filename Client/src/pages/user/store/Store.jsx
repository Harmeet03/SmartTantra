import { useState, useEffect } from "react"

import UserLayout from "../../../layouts/UserLayout"
import ProductCard from "../../../components/cards/ProductCard"
import Loader from '../../../components/common/Loader'
import { getProducts } from '../../../services/productsAPI'
import useTitle from "../../../hooks/useTitle"
import { all } from "axios"

const Store = () => {
    useTitle('Smart Store | SmartTantra')

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState('')
    const [error, setError] = useState(false)
    const [search, setSearch] = useState('')

    const filteredProducts = products.filter((product) => 
        `${product.name} ${product.description} ${product.price}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await getProducts()
                if(res.session === null){
                    setInfo(res.message)
                    setError(true)
                }
                else{
                    setProducts(res.products)
                    setError(false)
                }
            }
            catch(e){
                console.error('Unable to fetch products: ', e)
                setInfo(e.response?.data?.message || 'Unable to fetch products!')
                setError(true)
            }
            finally{
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if(loading){
        return(
            <UserLayout>
                <Loader/>
            </UserLayout>
        )
    }

    if(error){
        return(
            <UserLayout>
                <p className="text-center py-70 text-2xl"> {info} </p>
            </UserLayout>
        )
    }

    return(
        <UserLayout>
            <div className="bg-green-600 p-2 text-sm rounded-lg text-center">
                <p> <span className="fa fa-connect"/> RFID Scanner Active - Items will be automatically detected <span className="px-2 py-1 bg-yellow-500 text-xs rounded-full"> Live </span> </p>
            </div>

            <div className="flex items-center justify-between p-8 my-4 rounded-2xl bg-gray-400 text-black">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-4xl"> Smart Shopping Experience </h1>
                    <p className="text-sm"> Browse our collection - RFID will auto-scan your picks. </p>
                </div>
                <span className="fa fa-bag-shopping text-6xl"/>
            </div> 

            {/* Product Searching OR Filtering */}
            <div className="bg-yellow-500 p-2 text-sm rounded-lg text-center">
                <input 
                    type="text"
                    placeholder="Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-yellow-300 text-black"    
                />
            </div> 

            {filteredProducts.length > 0 ? ( 
                <h1 className="text-4xl pt-4"> Trending Products: </h1> 
            ): null}

            {
                products.length === 0 ? (
                    <p className="text-center py-40 text-2xl"> No items available right now! </p>
                ) : 
                filteredProducts.length === 0 ? (
                    <p className="text-center py-40 text-2xl"> No matching products found for <i className="text-yellow-500">{search}</i> ! </p>
                ) : 
                (
                    filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    ))
                )
            }

        </UserLayout>
    )
}

export default Store