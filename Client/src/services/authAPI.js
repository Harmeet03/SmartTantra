import api from './API'

export const register = async (formData) => {
    const res = await api.post('/auth/register', formData)
    return res.data
}

export const login = async (formData) => {
    const res = await api.post('/auth/login', formData)
    return res.data
}

export const logout = async () => {
    const res = await api.post('/auth/logout')
    return res.data
}