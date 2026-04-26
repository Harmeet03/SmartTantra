import { Routes, Route } from 'react-router-dom'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Public from '../components/gaurds/PublicOnlyRoute'

const AuthRoutes = () => {
    return(
        <>
            <Route path='/auth/sign_in' element={
                <Public>
                    <Login/>
                </Public>
            }/>

            <Route path='/auth/sign_up' element={
                <Public>
                    <Register/>
                </Public>
            }/>
        </>
    )
}

export default AuthRoutes