import { Routes, Route } from 'react-router-dom'

import { Terms, Policy } from '../pages/public/Terms'
import Landing from '../pages/public/Landing'

const PublicRoutes = () => {
    return(
        <>
            <Route path='/' element={
                <Landing/>
            }/>

            <Route path='/terms' element={
                <Terms/>
            }/>

            <Route path='/privacy-policy' element={
                <Policy/>
            }/>

        </>
    )
}

export default PublicRoutes