import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../../services/authAPI.js'
import useTitle from '../../hooks/useTitle.jsx'

const Login = () => {
    useTitle('Sign In | SmartTantra')

    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState('')
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try{
            const res = await login(form)

            if(res.success){
                console.log('User Authenticated')
                navigate('/')
            }
            else{
                console.log('Something went wrong!')
                setInfo('Something went wrong!')
            }
        }
        catch(e){
            console.error('Login Failed: ', e)
            setInfo(e.response?.data?.message || 'Failed to login!')
        }
        finally{
            setLoading(false)
        }
    }

    const navigate = useNavigate()

    return(
        <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center gap-4 py-4">
                <h1 className="text-4xl"> SmartTantra </h1>
                <p> Sign in to your account </p>

                <div className="py-4 flex flex-col gap-4">
                    <form onSubmit={handleSubmit}>
                        <input required onChange={handleChange} value={form.email} name='email' type="text" placeholder="Email" className="bg-gray-900 p-2 rounded-lg w-3/4"/>
                        <input required onChange={handleChange} value={form.password} name='password' type="password" placeholder="Password" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/><br/><br/>
                        <input required name='checkbox' type='checkbox' required/> I agree with <span className='text-yellow-500 cursor-pointer hover:text-yellow-300 duration-200' onClick={() => {navigate('/terms')}}>Terms</span> and <span className='text-yellow-500 cursor-pointer hover:text-yellow-300 duration-200' onClick={() => {navigate('/privacy-policy')}}>Policy</span>
                        
                        {
                            loading ? (
                                <button disabled className='bg-yellow-200 text-black px-4 py-2 rounded-lg w-3/4 mt-4 cursor-not-allowed'> 
                                    Signing in... 
                                </button>
                            ) : (
                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg w-3/4 mt-4 cursor-pointer hover:bg-yellow-300 duration-200" type='submit'>
                                    Sign in
                                </button>
                            )
                        }

                        {
                            info && (
                                <p className='mt-4 text-xs text-yellow-200'> {info} </p>
                            )
                        }

                    </form>
                    <p> Don't have an account? <span onClick={() => {navigate('/auth/sign_up')}} className='cursor-pointer text-yellow-500 hover:text-yellow-300 duration-200'> Sign Up </span> </p>
                    <span className='cursor-pointer text-yellow-500 hover:text-yellow-300 duration-200' onClick={() => {navigate('/')}}> <span className="fa fa-arrow-left"/> Back to home </span>
                </div>
            </div>
        </div>
    )
}

export default Login