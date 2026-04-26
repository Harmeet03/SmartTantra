import { useState } from "react"
import UserLayout from "../../../layouts/UserLayout"
import ProductCard from "../../../components/cards/ProductCard"
import useTitle from "../../../hooks/useTitle"

const Order = () => {
    useTitle('My Orders | SmartTantra')

    const [history, setHistory] = useState('')
    
    return(
        <UserLayout>
            {
                history && history.length > 0 ? (
                    history.map(item => (
                        <ProductCard key={item._id} product={item} />
                    ))
                ) : (
                    <p className="text-center text-2xl py-70"> No order history yet! </p>
                )
            }
        </UserLayout>
    )
}

export default Order