import { useEffect, useState } from "react"
import { Navigate } from "react-router"

import { user } from "../../services/userAPI"
import Loader from "../common/Loader"

const Protected = ({ children }) => {

    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try{
                await user()
                setIsAuth(true)
            }
            catch(e){
                setIsAuth(false)
            }
        }

        checkAuth()
    }, [])

    if(isAuth === null){
        return <Loader/>
    }

    if(!isAuth){
        return <Navigate to={"/auth/sign_in"}/>
    }

    return children
}

export default Protected