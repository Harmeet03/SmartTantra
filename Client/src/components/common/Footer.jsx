import { Logo } from '../../assets/images'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    return(
        <footer className='bg-gray-300 rounded-t-xl sm:rounded-t-3xl p-8 flex flex-col gap-8 mb-8 z-40'>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <img src={Logo} className='w-20 mb-4 sm:mb-0'/>
                <h1 className='text-5xl cursor-pointer' onClick={() => navigate('/')}>
                    ClothTantra
                </h1>
            </div>
            <div className='flex justify-around text-xs sm:text-lg'>
                <p className='cursor-pointer hover:border-b-3 duration-100 border-yellow-500' onClick={() => navigate('/terms')}>
                    Terms & Conditions
                </p>
                <p className='cursor-pointer hover:border-b-3 duration-100 border-yellow-500' onClick={() => navigate('/privacy-policy')}>
                    Privacy Policy
                </p>
                <p className='cursor-pointer hover:border-b-3 duration-100 border-yellow-500'>
                    <a href='mailto:hsdhanjal2003@gmail.com'> Contact Us </a>
                </p>
            </div>
            <p className='text-center py-8'>
                &copy; 2026 ClothTantra. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer