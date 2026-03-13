import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Terms, Policy } from './pages/public/Terms'

function App() {


  return (
    <Router>
      <Routes>

        <Route path='/terms' element={
          <Terms/>
        }/>

        <Route path='/privacy-policy' element={
          <Policy/>
        }/>
        
      </Routes>
    </Router>
  )
}

export default App
