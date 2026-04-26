import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { register } from '../../services/authAPI.js'
import useTitle from '../../hooks/useTitle.jsx'

const Register = () => {
    useTitle("Sign Up | SmartTantra")

    const navigate = useNavigate()
    
    const [mismatch, setMismatch] = useState('')
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState('')

    const [form, setForm] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
    })

    useEffect(() => {
        if(!form.confirmPassword) return

        if(form.confirmPassword !== form.password){
            setMismatch("Passwords do not match!")
            return
        }
        else{
            setMismatch('')
        }
    }, [form.password, form.confirmPassword])

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
            const res = await register(form)

            if(res.success){
                console.log('Data Registered')
                setInfo('Account created!')
                navigate('/')
            }
            else{
                console.log('Unable to fetch data')
                setInfo('Something went wrong!')
            }
        }
        catch(e){
            console.error('Registration Failed: ', e)
            setInfo(e.response?.data?.message || 'Failed to create!')
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center gap-4 py-4">
                <h1 className="text-4xl"> SmartTantra </h1>
                <p> Create your account </p>

                <div className="py-4 flex flex-col gap-4 max-w-lg">
                    <form onSubmit={handleSubmit}>
                        <input required onChange={handleChange} value={form.name} name='name' type="text" placeholder="Full Name" className="bg-gray-900 p-2 rounded-lg w-3/4"/>
                        <input required onChange={handleChange} value={form.email} name='email' type="email" placeholder="Email" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/>
                        <input required onChange={handleChange} value={form.contact} name='contact' type="tel" placeholder="Phone Number" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/>
                        <input required onChange={handleChange} value={form.password} name='password' type="password" placeholder="Password" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/>
                        
                        <input required onChange={handleChange} value={form.confirmPassword} name='confirmPassword' type="password" placeholder="Confirm Password" className="bg-gray-900 
                        p-2 rounded-lg w-3/4 mt-4"/><br/><br/>

                        <input name='checkbox' type='checkbox' required/> I agree with <span className='text-yellow-500 cursor-pointer hover:text-yellow-300 duration-200' 
                               onClick={() => {navigate('/terms')}}>Terms </span> 
                               and <span className='text-yellow-500 cursor-pointer hover:text-yellow-300 duration-200' 
                               onClick={() => {navigate('/privacy-policy')}}>Policy</span><br/>

                        
                        {
                            loading ? (
                                <button className='text-black px-4 bg-yellow-200 py-2 rounded-lg w-3/4 mt-4'>
                                    Creating...
                                </button>
                            ) : (
                                <button disabled={form.password !== form.confirmPassword} className={`text-black px-4 
                                        ${form.password !== form.confirmPassword ? 'cursor-not-allowed bg-yellow-200': 'bg-yellow-500 cursor-pointer hover:bg-yellow-300 duration-200'} 
                                        py-2 rounded-lg w-3/4 mt-4`}>
                                    Create Account
                                </button>
                            )
                        }

                        {
                            mismatch && (
                                <p className='mt-4 text-xs text-red-500'> {mismatch} </p>
                            )
                        }
                        {
                            info && (
                                <p className='mt-4 text-xs text-yellow-200'> {info} </p>
                            )
                        }
                    </form>
                    <p> Already have an account? <span onClick={() => {navigate('/auth/sign_in')}} className='cursor-pointer text-yellow-500 hover:text-yellow-300 duration-200'> Sign In </span> </p>
                    <span className='cursor-pointer text-yellow-500 hover:text-yellow-300 duration-200' onClick={() => {navigate('/')}}> <span className="fa fa-arrow-left"/> Back to home </span>
                </div>
            </div>
        </div>
    )
}

export default Register