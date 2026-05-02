import api from './API'

export const getOrders = async () => {
    const res = await api.get('/orders/history')
    return res.data
}