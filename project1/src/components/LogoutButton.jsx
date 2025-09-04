import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/authSlice' 

function LogoutButton() {

    //to dispatch the data that user has logged out
    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
        .catch(error => {
            console.log("LogoutButton :: logoutHandler :: error", error);
        });
    }

  return (
    <button className='bg-black text-white dark:bg-white dark:text-black dark:border-white border-black px-3 py-1 rounded-md border-2 hover:bg-gray-800 hover:text-white hover:dark:bg-gray-800 hover:dark:text-white'>
        Logout
    </button>
  )
}

export default LogoutButton
