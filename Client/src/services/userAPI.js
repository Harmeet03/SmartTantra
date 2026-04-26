import api from './API'

export const user = async () => {
    const res = await api.get('/user/profile')
    return res.data
}
