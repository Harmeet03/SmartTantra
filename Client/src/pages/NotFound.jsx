import {Cross} from 'lucide-react'
import { useNavigate } from 'react-router'
import useTitle from '../hooks/useTitle'

const NotFound = () => {
    useTitle('Page Not Found')
    
    const navigate = useNavigate()
    
    return(
        <main className="bg-black h-screen flex flex-col items-center justify-center">
            <Cross className='text-white rotate-45 w-24 h-24' stroke='yellow'/>
            <p className="text-white text-2xl mt-4"> Oops! Page Not Found. </p>
            <button className='bg-yellow-500 px-4 py-2 rounded-lg mt-4' 
            onClick={() => {navigate('/')}}> Return! </button>
        </main>
    )
}

export default NotFound