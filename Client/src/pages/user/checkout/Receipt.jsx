import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useTitle from "../../../hooks/useTitle"

const Receipt = () => {

    const navigate = useNavigate()
    const location = useLocation()

    useTitle('Your Receipt | SmartTantra')

    const { orderId, amount, receipt, error } = location.state || {}

    const isEmpty = !orderId || !amount

    if(isEmpty){
        return(
            <main>
                <p> No order details found! </p>
                <button onClick={() => navigate('/')}> Go to Home </button>
            </main>
        )
    }

    if(error){
        return(
            <main>
                <p> Payment failed! </p>
                <button onClick={() => navigate('/cart')}> Go to Cart </button>
            </main>
        )
    }
    
    
    return(
        <main>
            <p> {orderId} </p>
            <p> ₹{amount} </p>
            <p> {receipt} </p>
        </main>
    )
}

export default Receipt