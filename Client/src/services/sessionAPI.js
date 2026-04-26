import api from './API'

export const session = async (token) => {
    const res = await api.post('/session/create', {token})
    return res.data
}

export const activeSession = async () => {
    const res = await api.get('/session/current')
    return res.data
}
