import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

const UserLayout = ({children}) => {
    return (
        <div className="bg-black">
            <Navbar/>

            <main className="min-h-screen pt-24 pb-6 px-8 text-white">
                {children}
            </main>

            <div className="text-white px-4 text-xs sm:text-sm flex justify-between lg:px-16 py-2 fixed bottom-0 left-0 w-full bg-gray-800">
                <p> RFID Scanner : <span className="text-green-500"> Active </span> </p>
                <p> <span className="text-yellow-500"> Proceed to Counter </span> and scan items for <span className="text-blue-500"> payment </span> </p>
            </div>

            <Footer/>
        </div>
    )
}

export default UserLayout