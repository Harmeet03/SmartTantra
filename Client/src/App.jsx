import { Analytics } from "@vercel/analytics/react"

import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import {useEffect, useState} from 'react'

import { fetchHealth } from './services/healthAPI'

function App() {
  const [health, setHealth] = useState('Loading...')

  useEffect(() => {
    let interval;

    const healthCheck = async () => {
      try{
        const res = await fetchHealth()
        if(res){
          setHealth('Connected')
        }
      }
      catch(e){
        console.error('Health check failed:', e)
        setHealth('Disconnected')
      }
      finally{
        setTimeout(healthCheck, 30000) // Check every 30 seconds
      }
    }

    healthCheck()

    interval = setInterval(healthCheck, 30000)

    return () => clearInterval(interval)
  }, [])


  return (
    <Router>
      <AppRoutes/>

      <p className='fixed text-center bottom-13 sm:bottom-10 bg-yellow-500 px-2 py-1 rounded-lg mx-2'> Server Status: 
        <span className={`italic font-medium ${health === 'Connected' ? 'text-green-700' : health === 'Disconnected' ? 'text-red-700' : 'text-orange-700'}`}> {health} </span> 
      </p>

      <Analytics />
    </Router>
  )
}

export default App
