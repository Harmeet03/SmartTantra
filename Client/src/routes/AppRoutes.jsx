import { Routes, Route } from 'react-router-dom'

import PublicRoutes from './PublicRoutes'
import UserRoutes from './UserRoutes'
import AuthRoutes from './AuthRoutes'

import EnterStore from '../pages/user/store/EnterStore'
import Protected from '../components/gaurds/ProtectedRoute'
import NotFound from '../pages/NotFound.jsx'

const AppRoutes = () => {
    return(
        <Routes>
           
            { PublicRoutes() }

            { AuthRoutes() }

            { UserRoutes() }

            <Route path='/enter-store' element={
                <Protected>
                    <EnterStore/>
                </Protected>
            }/>

            <Route path='*' element={
                <NotFound/>
            }/>
            
      </Routes>
    )
}

export default AppRoutes