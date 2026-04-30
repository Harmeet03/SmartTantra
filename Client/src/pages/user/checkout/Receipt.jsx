import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {ArrowDown, ArrowUpDown, ArrowUpRight, CornerDownLeft, CornerLeftUpIcon, Cross, ReceiptIndianRupee, WifiCog} from 'lucide-react'
import { Logo } from '../../../assets/images'

import useTitle from "../../../hooks/useTitle"

const Receipt = () => {

    const navigate = useNavigate()
    const location = useLocation()

    useTitle('Your Receipt | SmartTantra')

    const { orderId, amount, receipt, error } = location.state || {}

    const isEmpty = !orderId || !amount

    if(isEmpty){
        return(
            <main className="bg-black h-screen flex flex-col items-center justify-center text-white">
                <div className="flex items-center gap-2 mb-4">
                    <img src={Logo} width={20} className='w-8'/>
                    <h1 className="text-2xl"> SmartTantra </h1>
                </div>

                <Cross className="rotate-45 w-16 h-16" stroke="red"/>
                <p> No order details found! </p>
                <button className='bg-red-600 px-4 py-2 rounded-lg mt-4 cursor-pointer' onClick={() => {navigate('/')}}> Return! </button>
            </main>
        )
    }

    if(error){
        return(
            <main className="bg-black h-screen flex flex-col items-center justify-center text-white">
                <div className="flex items-center gap-2 mb-4">
                    <img src={Logo} width={20} className='w-8'/>
                    <h1 className="text-2xl"> SmartTantra </h1>
                </div>
                
                <WifiCog className="rotate-45 w-16 h-16" stroke="red"/>
                <p> Payment failed! </p>
                <button className='bg-red-600 px-4 py-2 rounded-lg mt-4 cursor-pointer' onClick={() => {navigate('/')}}> Return! </button>
            </main>
        )
    }

    const handleDownload = () => {
        window.print()
    }
    
    
    return(
        <main className="h-screen flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-2">
                <img src={Logo} width={20} className='w-8'/>
                <h1 className="text-2xl"> SmartTantra </h1>
            </div>
            
            <div>
                <ReceiptIndianRupee className="w-12 h-12 mx-auto" stroke="green"/>
                <h2 className="text-green-600 text-xl"> Thankyou for shopping with us. </h2>

                <div className="w-full my-4 border">
                    <div className="border flex p-1 items-center">
                        <p className="w-1/4 border-r text-sm"> Order_id </p>
                        <p className="w-3/4 ml-1 text-right text-sm"> {orderId} dfdf </p>
                    </div>
                    <div className="border flex p-1 items-center">
                        <p className="w-1/4 border-r text-sm"> Receipt </p>
                        <p className="w-3/4 ml-1 text-right text-sm"> {receipt} ssd </p>
                    </div>
                    <div className="border flex p-1 items-center">
                        <p className="w-1/4 border-r text-sm"> Amount </p>
                        <p className="w-3/4 ml-1 text-right text-sm"> ₹{amount} 123 </p>
                    </div>
                </div>

                <div>
                    <button className='bg-yellow-500 px-4 py-2 rounded-lg cursor-pointer text-black flex print:hidden' onClick={handleDownload}> Download <ArrowDown/> </button>
                </div>
            </div>


            <div className="fixed bottom-5 text-center">
                {
                    !isEmpty && !error && 
                    <p className="print:hidden"> 
                        Your <span className="text-yellow-500"> current session </span> has been <span className="text-red-600"> terminated. </span> 
                        <span className="text-yellow-500"> Visit us again! </span> Bye.
                    </p>
                }
            </div>

            <div className="fixed top-5 left-10 print:hidden">
                <button className="flex items-center cursor-pointer" onClick={() => navigate('/')}> <CornerDownLeft/> Home </button>
            </div>
        </main>
    )
}

export default Receipt