import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Logo } from '../../../assets/images'
import { session } from '../../../services/sessionAPI'
import { useEffect } from 'react'

const EnterStore = () => {

    const [status, setStatus] = useState('loading')
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const [info, setInfo] = useState('')

    const createSession = async () => {
        try{
            const token = params.get('token')

            if(!token){
                setStatus('error')
                return
            }

            const res = await session(token)

            window.history.replaceState({}, document.title, '/enter-store')

            if(res.success){
                setStatus('success')

                setTimeout(() => {
                    navigate("/user/store")
                }, 4000)
            }
            else{
                setStatus('error')
            }
        }
        catch(e){
            console.error('Session error: ', e)
            setStatus('error')
            setInfo(e.response?.data?.message || 'Server Error!')
        }
    }

    useEffect(() => {
        createSession()
    }, [params])

    return(
        <div className='min-h-screen flex flex-col justify-center items-center bg-black text-white'>
            <div className="flex items-center gap-2 mb-4">
                <img src={Logo} width={20} className='w-8'/>
                <h1 className="text-2xl"> SmartTantra </h1>
            </div>

            {
                status === 'loading' && (
                    <>
                        <div className='w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mt-5'/>
                        <p className='text-sm mt-4'> Please wait while we verify your store session. </p>
                    </>
                )
            }

            {
                status === 'error' && (
                    <>
                        <p className='text-red-500 text-lg mt-5 text-center'> Oops! We couldn't verify your session. Please scan the <span className='text-yellow-500 border-b-3 border-red-500'> QR Code </span> again. </p>
                        {info && <p className='text-sm mt-4 text-yellow-500'> {info} </p>}
                    </>
                )
            }

            {
                status === 'success' && (
                    <>
                        <p className='text-green-500 text-lg mt-5'> Session verified! </p>
                        <p className=''> Redirecting to store... </p>
                    </>
                )
            }
            
        </div>
    )
}

export default EnterStore