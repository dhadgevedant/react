import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from '../components/Login.jsx'
import Profile from '../components/Profile.jsx'
import Home from '../components/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import UserContextProvider from '../context/UserContextProvider';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<UserContextProvider > <App/> </UserContextProvider>}>
      <Route path='' element = {<UserContextProvider><Home/></UserContextProvider>}/>
      <Route path='login' element = {<UserContextProvider > <Login/> </UserContextProvider>} />
      <Route path='profile' element = {<UserContextProvider > <Profile/> </UserContextProvider>} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router = {router} />
    
  </StrictMode>,
)
