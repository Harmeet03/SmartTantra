import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import UserLayout from "../../../layouts/UserLayout"
import { logout } from "../../../services/authAPI"
import { user } from "../../../services/userAPI"
import Loader from "../../../components/common/Loader"
import useTitle from "../../../hooks/useTitle"

const Profile = () => {
    useTitle('My Profile | SmartTantra')

    const [profile, setProfile] = useState('')
    const [info, setInfo] = useState('')
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const getProfile = async () => {
            try{
                const res = await user()
                if(res.success){
                    setProfile(res)
                }
            }
            catch(e){
                console.error('Unable to fetch users: ', e)
                setInfo(e.response?.data?.message || 'Failed to fetch. No connection to server!')
            }
            finally{
                setLoading(false)
            }
        }

        getProfile()
    }, [])

    if(loading){
        return(
            <UserLayout>
                <Loader/>
            </UserLayout>
        )
    }

    const handleLogout = async () => {
        try{
            const res = await logout()
            if(res.success){
                console.log('User Logout!')
                navigate('/auth/sign_in')
            }
        }
        catch(e){
            console.error('Unable to logout: ', e)
        }
    }   

    return(
        <UserLayout>
            <div className="m-auto max-w-7xl">
                <div className="py-20 rounded-4xl">
                    <h1 className="text-5xl md:text-7xl text-center"> {profile.name} </h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
                    <div className="bg-white/10 rounded-4xl py-20 px-10 flex flex-col gap-10">
                        <h2 className="text-5xl border-b text-yellow-500"> Email: </h2>
                        <p className="text-lg"> {profile.email} </p>
                    </div>
                    <div className="bg-yellow-500 text-black rounded-4xl py-20 px-10 flex flex-col gap-10">
                        <h2 className="text-5xl border-b"> Contact: </h2>
                        <p className="text-2xl"> {profile.contact} </p>
                    </div>
                    <div className="bg-white/10 rounded-4xl py-20 px-10 flex flex-col gap-10">
                        <h2 className="text-5xl border-b text-yellow-500"> User since: </h2>
                        <p className="text-lg"> {new Date(profile.since).toLocaleDateString()} ({new Date(profile.since).toLocaleTimeString()}) </p>
                    </div>
                </div>

                <div className="text-right">
                    <p> Want to Log out? <button className="bg-yellow-500 text-black px-2 py-1 rounded-lg cursor-pointer " onClick={handleLogout}> Click here </button> </p>
                </div>
            </div>
        </UserLayout>
    )
}

export default Profile