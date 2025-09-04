import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();
    // const [data,setdata] = useState("");

    // useEffect( () =>{
    //     fetch('https://api.github.com/users/dhadgevedant')
    //     .then(res => res.json())
    //     .then((data) => { setdata(data) })
    // },[] )


  return (
    <>
      <div className='w-full h-screen bg-stone-800 text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-thin '> Hello {data.name} </h1>
        <img src={data.avatar_url} alt="" className='rounded-full h-64 '/>
    </div>
    </>
  )
}

export default Github


export const getGithubInfo = async () => {
    
    const response = await fetch('https://api.github.com/users/dhadgevedant')
    return response.json()
}