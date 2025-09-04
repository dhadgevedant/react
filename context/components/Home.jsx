import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

  return (
        <div className=' bg-black h-screen w-screen flex flex-col items-center justify-around'>
          <button className='bg-white text-black p-2 rounded-lg'
          onClick={()=>{navigate('/login')}}>Login</button>

          
        </div>

        
  )
}

export default Home
