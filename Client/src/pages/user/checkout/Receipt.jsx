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
        <main className="h-screen flex flex-col items-center pt-16 gap-8">
            <div className="flex items-center gap-2">
                <img src={Logo} width={20} className='w-8'/>
                <h1 className="text-2xl"> SmartTantra </h1>
            </div>
            
            <div className="max-w-md mx-auto bg-white text-black p-6 rounded-xl shadow-lg">
                <ReceiptIndianRupee className="w-12 h-12 mx-auto" stroke="green"/>
                <h2 className="text-green-600 text-xl text-center"> 
                    Thank you for shopping with us. 
                </h2>

                <hr className="my-4 border-gray-300" />

                <div className="w-full my-4 borde">
                    <div className="flex justify-between py-2">
                        <span className="text-gray-500 text-sm">Order ID</span>
                        <span className="font-medium text-sm">{orderId}</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <p className="text-gray-500 text-sm"> Receipt </p>
                        <p className="font-medium text-sm"> {receipt} </p>
                    </div>
                    
                    <hr className="my-4 border-gray-300" />

                    <div className="text-center mt-2">
                        <p className="text-sm text-gray-500">Total Paid</p>
                        <p className="text-4xl font-bold text-yellow-500 mt-1">
                            ₹{amount}
                        </p>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-4">
                        {new Date().toLocaleString()}
                    </p>
                </div>

                <div>
                    <button className='bg-yellow-500 px-4 py-2 rounded-lg cursor-pointer text-black flex print:hidden' onClick={handleDownload}> Download <ArrowDown/> </button>
                </div>
            </div>


            <div className="fixed bottom-5 text-center">
                {
                    !isEmpty && !error && 
                    <p className="print:hidden"> 
                        Your <span className="text-yellow-500"> current session </span> has been <span className="text-red-600"> completed. </span> 
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