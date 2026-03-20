import Logo2 from '../../assets/logo2.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return(
        <div className="bg-blue-200 flex items-center justify-between px-10 py-2 fixed w-full top-0 left-0">
            <div className='flex flex-col sm:flex-row items-center text-xs sm:text-3xl md:text-4xl gap-2 cursor-pointer' onClick={() => navigate('/store')}>
                <img src={Logo2} width={60} className='w-8 sm:w-15'/>
                <h1> ClothTantra </h1>
            </div>

            <div className='flex items-center gap-3 sm:gap-8'>
                <p className='cursor-pointer'> <span className='fa fa-user'/> Harmeet </p>
                <p className='cursor-pointer' onClick={() => {navigate('/orders')}}> <span className='fa fa-cube'/> Orders </p>
                <p className='cursor-pointer' onClick={() => {navigate('/cart')}}> <span className='fa fa-cart-shopping'/> </p>
            </div>
        </div>
    )
}

export default Navbar