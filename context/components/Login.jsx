import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password});

        navigate('/profile')
        
    }
 

  return (
    <div className='w-screen bg-black text-white h-screen flex flex-col items-center  justify-center'>
      <h2 className='text-4xl mb-4'>Login</h2>

      <div className=' border p-8 flex flex-col rounded-lg items-center'>
        <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username' 
          className='border border-white rounded-lg p-2 mb-2 h-12'
          />
        
        <input type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password' 
          className='border border-white rounded-lg p-2 mb-2 h-12'
          />
          

          <button type="button" onClick={handleSubmit}
          className=' rounded-lg bg-white text-black px-2 mb-2 w-full h-8'
          >Submit</button>

      </div>  
    </div>
  )

}

export default Login
