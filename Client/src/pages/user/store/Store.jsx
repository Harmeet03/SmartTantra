import UserLayout from "../../../layouts/UserLayout"
import Sample from '../../../assets/sample.webp'

const Store = () => {
    return(
        <UserLayout>
            <div className="bg-green-600 p-2 text-sm rounded-lg text-center">
                <p> <span className="fa fa-connect"/> RFID Scanner Active - Items will be automatically detected <span className="px-2 py-1 bg-yellow-500 text-xs rounded-full"> Live </span> </p>
            </div>

            <div className="flex items-center justify-between p-8 my-4 rounded-2xl bg-gray-400 text-black">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl sm:text-4xl"> Smart Shopping Experience </h1>
                    <p className="text-sm"> Browse our collection - RFID will auto-scan your picks. </p>
                </div>
                <span className="fa fa-bag-shopping text-6xl"/>
            </div>

            <div className="flex flex-col md:flex-row gap-16 p-8 border-b">
                <div className="md:w-1/3 flex justify-center">
                    <img src={Sample} className="w-full"/>
                </div>
                <div className="flex flex-col gap-4 sm:gap-8 justify-center">
                    <span className="bg-yellow-500 w-24 px-2 py-1 rounded-full text-xs"> High demand </span>
                    <h1 className="text-3xl sm:text-5xl"> Product Name </h1>
                    <p className="text-sm sm:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            
        </UserLayout>
    )
}

export default Store