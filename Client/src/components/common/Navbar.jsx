import { Logo } from '../../assets/images'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { X, Menu } from "lucide-react"
import { useEffect, useState } from 'react'

const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : 'auto'
    }, [open])

    return(
        <nav className="bg-gray-300 rounded-b-xl sm:rounded-b-3xl flex items-center justify-between px-10 py-2 fixed w-full top-0 left-0 z-40">
            <div className='flex items-center text-xl md:text-4xl gap-2 cursor-pointer' onClick={() => navigate('/user/store')}>
                <img src={Logo} width={60} className='w-8 sm:w-15'/>
                <h1> SmartTantra </h1>
            </div>

            <div className='hidden sm:flex items-center gap-3 sm:gap-4 lg:gap-8'>
                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-yellow-500' : 'hover:border-b-2'} to="/user/store"> <span className='fa fa-home'/> Store </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-yellow-500' : 'hover:border-b-2'} to="/user/orders"> <span className='fa fa-cube'/> Orders </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-yellow-500' : 'hover:border-b-2'} to="/user/cart"> <span className='fa fa-cart-shopping'/> Cart </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-yellow-500' : 'hover:border-b-2'} to="/user/profile"> <span className='fa fa-user'/> Profile </NavLink>
            </div>

            <button onClick={() => setOpen(!open)} className='sm:hidden z-50'>
                {
                    open ? <X/> : <Menu/>
                }
            </button>

            <div className={`flex fixed top-11.5 left-0 bg-white/80 font-bold h-screen pt-8 px-8 w-full gap-12 text-2xl flex-col sm:hidden
                 duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <NavLink className={({ isActive }) => isActive ? 'border-b border-b-4 border-yellow-500' : ''} to="/user/store"> <span className='fa fa-home'/> Store </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'border-b border-b-4 border-yellow-500' : ''} to="/user/orders"> <span className='fa fa-cube'/> Orders </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'border-b border-b-4 border-yellow-500' : ''} to="/user/cart"> <span className='fa fa-cart-shopping'/> Cart </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-yellow-500' : 'hover:border-b-2'} to="/user/profile"> <span className='fa fa-user'/> Profile </NavLink>
            </div>
        </nav>
    )
}

export default Navbar