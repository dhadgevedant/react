import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  
    const {user} = useContext(UserContext)

    if(!user) return <div>Pleae Login</div>

    
    return (
        <div className=' bg-black text-white flex flex-col items-center justify-center h-screen'>
            <h1
                className='text-4xl'
            >Hello {user.username}</h1>
        </div>
)


}

export default Profile
