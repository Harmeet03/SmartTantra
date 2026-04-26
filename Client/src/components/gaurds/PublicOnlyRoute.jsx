import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

import { user } from "../../services/userAPI"
import { activeSession } from "../../services/sessionAPI"
import Loader from "../common/Loader"

const Public = ({ children }) => {
    
    const [isAuth, setIsAuth] = useState(null)
    const [isSession, setIsSession] = useState(null)
    
    useEffect(() => {
        const check = async () => {
            try{
                // Checking Auth
                await user()
                setIsAuth(true)

                // Checking Session
                const res = await activeSession()
                if(res.session){
                    setIsSession(true)
                }
                else{
                    setIsSession(false)
                }
            }
            catch(e){
                setIsAuth(false)
                setIsSession(false)
            }
        }

        check()
    }, [])

    // Although without auth no session will be created. But still just for error control in case.
    if(isAuth === null || isSession === null){
        return <Loader/>
    }

    if(isAuth){
        return <Navigate to={isSession ? '/user/store' : '/'}/>
    }

    return children
}

export default Public