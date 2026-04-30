import { payment, verifyPayment } from "../services/paymentAPI"

const razorpayPayment = async (navigate) => {
    const { order } = await payment()

    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "SmartTantra",
        description: "Smart Store Purchase",
        order_id: order.id,

        handler: async (response) => {
            try{
                const res = await verifyPayment(response);

                if(res.success){
                    alert("Payment Successful!")

                    navigate('/checkout/receipt', {
                        state: {
                            orderId: order.id,
                            amount: order.amount / 100,
                            receipt: order.receipt,
                            error: false,
                        }
                    })
                }
                else{
                    alert("Payment verification failed!")
                    navigate('/checkout/receipt', {
                        state: {
                            orderId: order.id,
                            amount: order.amount / 100,
                            receipt: order.receipt,
                            error: true,
                        }
                    })
                }
            }
            catch(e){
                console.error('Verification error:', e);
                navigate('/checkout/receipt', {
                    state: {
                        orderId: order.id,
                        amount: order.amount / 100,
                        receipt: order.receipt,
                        error: true,
                    }
                })
            }
        },

        theme: {
            color: "#ffd500"
        }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
}

export default razorpayPayment