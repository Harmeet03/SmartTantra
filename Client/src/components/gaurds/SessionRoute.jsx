import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import { activeSession } from "../../services/sessionAPI"
import Loader from "../common/Loader"

const Session = ({ children }) => {
    const [isSession, setIsSession] = useState(null)

    useEffect(() => {
        const checkSession = async () => {
            try{
                const res = await activeSession()
                if(res.session){
                    setIsSession(true)
                }
                else{
                    setIsSession(false)
                }
            }
            catch(e){
                setIsSession(false)
            }
        }
        checkSession()
    }, [])

    if(isSession === null){
        return <Loader/>
    }

    if(!isSession){
        return <Navigate to={"/"}/>
    }
    return children
}

export default Session