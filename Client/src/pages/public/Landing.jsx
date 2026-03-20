import Logo2 from '../../assets/logo2.png'
import Sample from '../../assets/sample.webp'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const session = 'none'
    const user = 'false'

    const navigate = useNavigate()
    return(
        <div className='min-h-screen bg-black w-full overflow-x-hidden'>

            <div className='bg-blue-200 flex items-center justify-between px-10 py-2 fixed w-full top-0 left-0'>
                <div className='flex flex-col sm:flex-row items-center text-xs sm:text-3xl md:text-4xl gap-2'>
                    <img src={Logo2} width={60} className='w-8 sm:w-15'/>
                    <h1> ClothTantra </h1>
                </div>

                <div className='flex items-center gap-4'>
                    {
                        session === 'none' && user === 'false' && (
                            <>
                                <button className='border px-4 py-2 rounded-lg border-yellow-500 cursor-pointer text-sm sm:text-md' onClick={() => navigate('/sign_in')}>
                                    Login
                                </button>

                                <button className='px-4 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer text-sm sm:text-md' onClick={() => navigate('/sign_up')}>
                                    Sign Up
                                </button>
                            </>
                        )
                    }
                    {
                        session === 'active' && user === 'true' && (
                            <button className='px-4 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer'> Enter Store </button>
                        )
                    }
                </div>
            </div>

            {
                session === 'none' && user === 'false' && (
                    <div className='text-white py-40 px-10 gap-4 flex flex-col-reverse sm:flex-row items-center'>

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
                                <button className='bg-yellow-500 text-black px-4 py-2 rounded-lg cursor-pointer' onClick={() => navigate('/sign_up')}>
                                    Experience Now
                                </button>
                                <button className='bg-gray-900 px-4 py-2 rounded-lg cursor-pointer' onClick={() => navigate('/sign_in')}>
                                    I Have an Account
                                </button>
                            </div>
                        </div>

                        <div className='sm:w-1/2'>
                            <img src={Sample} className='w-full rounded-2xl'/>
                        </div>
                    </div>
                )
            }

            {
                session === 'none' && user === 'true' && (
                    <div className='pt-30 pb-10 text-white flex flex-col justify-center min-h-screen text-center items-center gap-4'>
                        <p className='text-3xl'> Welcome, Harmeet </p>
                        <p className='text-lg'> Scan the entry QR to start your store session. </p>
                        <p className='text-sm text-yellow-500'> (You have to use your default camera app to scan) </p>
                    </div>
                )
            }

            {
                session === 'active' && user === 'true' && (
                    <div className='pt-30 pb-10 text-white flex flex-col justify-center min-h-screen text-center items-center gap-4'>
                        <p className='text-4xl'> Welcome back </p>
                        <p className='text-sm'> Your store session is active. </p>
                        <button className='px-4 py-2 rounded-lg bg-yellow-500 text-black cursor-pointer'> Enter Store </button>
                    </div>
                )
            }

            <footer className='bg-white p-8 flex flex-col gap-8'>
                
                <div className='flex flex-col sm:flex-row items-center justify-around'>
                    <img src={Logo2} className='w-40'/>
                    <h1 className='text-5xl cursor-pointer' onClick={() => navigate('/')}>
                        @ClothTantra
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
                    &copy; 2026 ClothTantra. All rights reserved.
                </p>

            </footer>

        </div>
    )
}

export default Landing