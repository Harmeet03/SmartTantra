import api from './API'

export const getProducts = async () => {
    const res = await api.get('/products/get')
    return res.data
}
