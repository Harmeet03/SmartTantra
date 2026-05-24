import api from './API'

export const fetchHealth = async () => {
    const res = await api.get('/health')
    return res.data
}