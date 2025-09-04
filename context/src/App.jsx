import UserContextProvider from '../context/UserContextProvider';
import './App.css'
import Login from '../components/Login';
import Profile from '../components/Profile';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';


function App() {


  return (
    
    <UserContextProvider >
      
      
      <Outlet />

    </UserContextProvider>

  
  )
}

export default App
