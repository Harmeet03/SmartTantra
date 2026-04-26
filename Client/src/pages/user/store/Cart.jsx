import { useEffect, useState } from "react"

import ProductCard from "../../../components/cards/ProductCard"
import UserLayout from "../../../layouts/UserLayout"
import { activeSession } from "../../../services/sessionAPI"
import useTitle from "../../../hooks/useTitle"
import Loader from "../../../components/common/Loader"

const Cart = () => {
    useTitle('My Cart | SmartTantra')

    const [cart, setCart] = useState([])
    const [info, setInfo] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const [prevTotal, setPrevTotal] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchCart = async () => {
            try{
                const res = await activeSession()

                if(res.success){
                    const cartData = res.session.cart || []
                    setCart(cartData)
                    
                    const totalAmount = cartData.reduce((acc, item) => {
                        return acc + (item.productId.price * item.quantity)
                    }, 0)
                    
                    setPrevTotal(total)
                    setTotal(totalAmount)
                    setError(false)
                }
            }
            catch(e){
                console.error('Error fetching active session: ', e)
                setInfo(e.response?.data?.message || 'Something went wrong!')
                setError(true)
            }
            finally{
                setLoading(false)
            }
        }

        fetchCart()

        const interval = setInterval(fetchCart, 2000)

        return () => clearInterval(interval)
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
            {
                cart && cart.length > 0 ? (
                    cart.map(item => (
                        <ProductCard key={item.productId._id} product={item.productId} quantity={item.quantity}/>
                    ))
                ) : (
                    <p className="text-center py-70 text-2xl"> No items scanned yet! </p>
                )
            }

            {
                total && (
                    <div className="flex justify-around text-black bg-yellow-500 fixed w-full left-0 bottom-12 sm:bottom-9 items-center">
                        <p className="text-sm sm:text-lg"> Total Amount: ₹{total} </p>
                        <button className="bg-blue-500 px-2 sm:px-4 rounded-full text-black cursor-pointer"> Checkout </button>
                    </div>
                )
            }

        </UserLayout>
    )
}

export default Cart