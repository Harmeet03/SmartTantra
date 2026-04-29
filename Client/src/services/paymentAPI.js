import api from './API'

export const payment = async () => {
    const res = await api.post('/payment/create-order')
    return res.data
}

export const verifyPayment = async (response) => {
    const res = await api.post('/payment/verify', response)
    return res.data
}