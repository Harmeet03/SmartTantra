import { Routes, Route } from 'react-router-dom'

import Store from '../pages/user/store/Store'
import Order from '../pages/user/store/Order'
import Cart from '../pages/user/store/Cart.jsx'
import Profile from '../pages/user/store/Profile.jsx'

import Protected from '../components/gaurds/ProtectedRoute.jsx'
import Session from '../components/gaurds/SessionRoute.jsx'

const UserRoutes = () => {
    return(
        <>
            <Route path='/user/store' element={
                <Protected>
                    <Session>
                        <Store/>
                    </Session>
                </Protected>
            }/>

            <Route path='/user/orders' element={
                <Protected>
                    <Session>
                        <Order/>
                    </Session>
                </Protected>
            }/>

            <Route path='/user/cart' element={
                <Protected>
                    <Session>
                        <Cart/>
                    </Session>
                </Protected>
            }/>
            
            <Route path='/user/profile' element={
                <Protected>
                    <Session>
                        <Profile/>
                    </Session>
                </Protected>
            }/>
        </>
    )
}

export default UserRoutes