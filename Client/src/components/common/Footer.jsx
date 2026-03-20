import Logo2 from '../../assets/logo2.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

    return(
        <footer className='bg-white p-8 flex flex-col gap-8 mb-8'>
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
            <p className='text-center pt-8'>
                &copy; 2026 ClothTantra. All rights reserved.
            </p>
            <p className='text-center'> Session_id: dfdfd_SDsds_121sdsd </p>
        </footer>
    )
}

export default Footer