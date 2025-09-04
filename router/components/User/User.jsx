import React from 'react'
import { Router } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function User() {

    const {id} = useParams();
  return (
    <div className='w-full h-full bg-stone-800 text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-thin '> Hello {id}</h1>
    </div>
  )
}

export default User
