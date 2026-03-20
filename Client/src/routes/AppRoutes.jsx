import { Routes, Route } from 'react-router-dom'

import { Terms, Policy } from '../pages/public/Terms'
import Landing from '../pages/public/Landing'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

import EnterStore from '../pages/user/store/EnterStore'

import Store from '../pages/user/store/Store'

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={
                <Landing/>
            }/>

            <Route path='/terms' element={
                <Terms/>
            }/>

            <Route path='/privacy-policy' element={
                <Policy/>
            }/>

            <Route path='/sign_in' element={
                <Login/>
            }/>

            <Route path='/sign_up' element={
                <Register/>
            }/>

            <Route path='/enter-store' element={
                <EnterStore/>
            }/>

            <Route path='/user/store' element={
                <Store/>
            }/>

      </Routes>
    )
}

export default AppRoutes