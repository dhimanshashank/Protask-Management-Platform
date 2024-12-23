import React from 'react'
import Dashboard from './Dashboard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        <Link to="/dashboard" element={<Dashboard />}>Dashboard</Link>
      </button>
    </div>
    
  )
}

export default Home
