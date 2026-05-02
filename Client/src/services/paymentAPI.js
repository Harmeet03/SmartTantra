import api from './API'

export const payment = async () => {
    const res = await api.post('/payment/create-order')
    return res.data
}

export const verifyPayment = async (response) => {
    const res = await api.post('/payment/verify', response)
    return res.data
}

export const markFailed = async (razorpay_order_id) => {
    const res = await api.post('/payment/mark-failed', { razorpay_order_id })
    return res.data
}