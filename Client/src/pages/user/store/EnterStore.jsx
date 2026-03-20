import Logo2 from '../../../assets/logo2.png'

const EnterStore = () => {
    const status = 'loading'

    return(
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center gap-4'>
                <img src={Logo2} className='w-30'/>
                <p className='text-2xl'> ClothTantra </p>
            </div>

            {
                status === 'loading' && (
                    <>
                        <div className='w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mt-10'/>
                        <p className='text-sm mt-4'> Please wait while we verify your store session. </p>
                    </>
                )
            }

            {
                status === 'error' && (
                    <>
                        <p className='text-red-500 text-lg mt-10 text-center'> Oops! We couldn't verify your session. Please try again. </p>
                        <button className='px-4 py-2 rounded-lg bg-yellow-500 text-black mt-4 cursor-pointer'> Retry </button>
                    </>
                )
            }

            {
                status === 'success' && (
                    <>
                        <p className='text-green-500 text-lg mt-10'> Session verified! </p>
                        <p className=''> Redirecting to store... </p>
                    </>
                )
            }
            
        </div>
    )
}

export default EnterStore