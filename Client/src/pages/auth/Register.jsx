import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()

    return(
        <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
            <div className="text-center flex flex-col items-center gap-4 py-4">
                <h1 className="text-4xl"> ClothTantra </h1>
                <p> Create your account </p>

                <div className="py-4 flex flex-col gap-4 md:w-1/2">
                    <form>
                        <input name='name' type="text" placeholder="Full Name" className="bg-gray-900 p-2 rounded-lg w-3/4"/>
                        <input name='email' type="text" placeholder="Email" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/>
                        <input name='contact' type="number" placeholder="Phone Number" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/>
                        <input name='password' type="password" placeholder="Password" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/>
                        <input name='confirmPassword' type="password" placeholder="Confirm Password" className="bg-gray-900 p-2 rounded-lg w-3/4 mt-4"/><br/><br/>
                        <input name='checkbox' type='checkbox' required/> I agree with <span className='text-yellow-500 cursor-pointer' onClick={() => {navigate('/terms')}}>Terms</span> and <span className='text-yellow-500 cursor-pointer' onClick={() => {navigate('/privacy-policy')}}>Policy</span>
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg w-3/4 mt-4 cursor-pointer">
                            Create Account
                        </button>
                    </form>
                    <p> Already have an account? <span onClick={() => {navigate('/sign_in')}} className='cursor-pointer text-yellow-500'> Sign In </span> </p>
                    <span className='cursor-pointer text-yellow-500' onClick={() => {navigate('/')}}> <span className="fa fa-arrow-left"/> Back to home </span>
                </div>
            </div>
        </div>
    )
}

export default Register