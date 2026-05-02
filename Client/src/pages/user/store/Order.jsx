import { useEffect, useState } from "react"

import useTitle from "../../../hooks/useTitle"
import UserLayout from "../../../layouts/UserLayout"
import { getOrders } from "../../../services/ordersAPI"
import ProductCard from "../../../components/cards/ProductCard"
import OrderCard from "../../../components/cards/OrderCard"
import Loader from '../../../components/common/Loader'

const Order = () => {
    useTitle('My Orders | SmartTantra')
    const [orders, setOrders] = useState('')
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const res = await getOrders()

                if(res.success){
                    if(res.orders.length === 0){
                        setInfo(res.message)
                        console.log('Orders are loaded but empty.')
                        setError(true)
                    }
                    else{
                        console.log('Orders are loaded.')
                        setOrders(res.orders)
                        setError(false)
                    }
                }
            }
            catch(e){
                console.error('Unable to fetch orders: ', e)
                setInfo(e.response?.data?.message || 'Unable to load orders!')
                setError(true)
            }
            finally{
                setLoading(false)
            }
        }

        fetchOrders()
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
                orders && orders.length > 0 ? (
                    orders.map(order => (
                        <OrderCard key={order.orderId} order={order}/>
                    ))
                ) : (
                    <p className="text-center text-2xl py-70"> No order history yet! </p>
                )
            }
        </UserLayout>
    )
}

export default Order