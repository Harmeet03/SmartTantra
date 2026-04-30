import { useEffect, useState } from 'react'
import { Intro, Logo, QR } from '../../assets/images'
import { useNavigate } from 'react-router-dom'

import { user } from "../../services/userAPI"
import { logout } from '../../services/authAPI'
import { activeSession } from '../../services/sessionAPI'
import Loader from '../../components/common/Loader'
import useTitle from '../../hooks/useTitle'

const Landing = () => {
    useTitle('SmartTantra | Revolutionizing Retail with RFID-Powered Smart Store Solutions')

    const [isAuth, setIsAuth] = useState(false)
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const check = async () => {
            try{
                // Checking user
                const userRes = await user()
                setData(userRes)
                setIsAuth(true)

                // Checking session
                const sessionRes = await activeSession()
                if(sessionRes.session){
                    setSession('active')
                }
                else{
                    setSession('none')
                }
            }
            catch(e){
                setIsAuth(false)
                setSession('none')
            }
            finally{
                setLoading(false)
            }
        }

        check()
    }, [])

    if(loading){
        return <Loader/>
    }

    const handleLogout = async () => {
        try{
            const res = await logout()
            if(res.success){
                console.log('User Logout!')
                navigate('/auth/sign_in')
            }
        }
        catch(e){
            console.error('Unable to logout: ', e)
        }
    }

    return(
        <div className='min-h-screen bg-black w-full overflow-x-hidden'>

            <nav className='bg-gray-300 flex items-center rounded-b-xl sm:rounded-b-3xl justify-between px-10 py-2 fixed w-full top-0 left-0'>
                <div className='flex flex-col sm:flex-row items-center text-xs sm:text-3xl md:text-4xl gap-2'>
                    <img src={Logo} width={60} className='w-6 sm:w-12'/>
                    <h1> SmartTantra </h1>
                </div>

                <div className='flex items-center gap-4'>
                    {
                        session === 'none' && !isAuth && (
                            <>
                                <button className='border hover:bg-yellow-500 duration-300 px-4 py-2 rounded-lg border-yellow-500 cursor-pointer text-sm sm:text-md' 
                                onClick={() => navigate('/auth/sign_in')}>
                                    Login
                                </button>

                                <button className='px-4 hover:bg-transparent border border-transparent hover:border-yellow-500 duration-300 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer text-sm sm:text-md' 
                                onClick={() => navigate('/auth/sign_up')}>
                                    Sign Up
                                </button>
                            </>
                        )
                    }
                    {
                        session === 'active' && isAuth && (
                            <button className='px-4 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer' onClick={() => {navigate('/user/store')}}> Enter Store </button>
                        )
                    }
                    {
                        session === 'none' && isAuth && (
                            <button onClick={handleLogout} className='px-4 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer'> Logout </button>
                        )
                    }
                </div>
            </nav>

            {
                session === 'none' && !isAuth && (
                    <div className='text-white py-40 px-10 gap-4 flex flex-col-reverse sm:flex-row items-center max-w-7xl m-auto'>

                        <div className='sm:w-1/2 flex flex-col gap-8'>
                            <div className='text-black bg-yellow-500 p-2 rounded-full text-xs w-44'>
                                <span className='fa fa-star'/> RFID-Powered Shopping
                            </div>
                            <h1 className='text-5xl lg:text-7xl'>
                                Shopping <span className='text-yellow-500'>Reimagined</span>
                            </h1>
                            <p>
                                Step into the future of retail. Just grab what you love and walk out. Our smart RFID system handles everything else - no scanning, no queues, no hassle.
                            </p>
                            <div className='flex gap-4'>
                                <button className='bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-yellow-400 transition duration-200' onClick={() => navigate('/auth/sign_up')}>
                                    Experience Now
                                </button>
                                <button className='bg-gray-900 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 transition duration-200' onClick={() => navigate('/auth/sign_in')}>
                                    I Have an Account
                                </button>
                            </div>
                        </div>

                        <div className='sm:w-1/2'>
                            <img src={Intro} className='w-full h-80 sm:h-125 rounded-2xl'/>
                        </div>
                    </div>
                )
            }

            {
                session === 'none' && isAuth && (
                    <div className='pt-30 pb-10 text-white flex flex-col justify-center min-h-screen text-center items-center gap-4'>
                        <p className='text-3xl'> Welcome, {data.name} </p>
                        <p className='text-lg'> Scan the entry QR to start your store session. </p>
                        {/* <img src={QR} className='w-40 h-40'/> */}
                        <p className='text-sm text-yellow-500'> Scan the QR Code at the store's entrance. </p>
                    </div>
                )
            }

            {
                session === 'active' && isAuth && (
                    <div className='pt-30 pb-10 text-white flex flex-col justify-center min-h-screen text-center items-center gap-4'>
                        <p className='text-4xl'> Welcome back </p>
                        <p className='text-sm'> Your store session is active. </p>
                        <button className='px-4 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer' onClick={() => {navigate('/user/store')}}> Enter Store </button>
                    </div>
                )
            }

            <footer className='bg-gray-300 p-8 flex flex-col gap-8 rounded-t-xl sm:rounded-t-3xl'>
                
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <img src={Logo} className='w-20 mb-4 sm:mb-0'/>
                    <h1 className='text-5xl cursor-pointer' onClick={() => navigate('/')}>
                        SmartTantra
                    </h1>
                </div>
                <div className='flex justify-around text-xs sm:text-lg'>
                    <p className='cursor-pointer' onClick={() => navigate('/terms')}>
                        Terms & Conditions
                    </p>
                    <p className='cursor-pointer' onClick={() => navigate('/privacy-policy')}>
                        Privacy Policy
                    </p>
                    <p className='cursor-pointer'>
                        <a href='mailto:hsdhanjal2003@gmail.com'> Contact Us </a>
                    </p>
                </div>
                <p className='text-center py-8'>
                    &copy; 2026 SmartTantra. All rights reserved.
                </p>
            </footer>

        </div>
    )
}

export default Landing