import './App.css'
import React,{ useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  //setting up loading icon
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
 
  //whenever this app loads, then take a useEffect
  //and in that ask to service if use is logged in or not
  useEffect(() => {
    
    authService.getCurrentUser()
      .then( (userData) => {
        
        if(userData) dispatch(login({userData})) 

        else dispatch(logout())  
      })
      .catch( (error) => {
        console.log("App :: useEffect :: error", error);
        dispatch(logout());
      })
      .finally(setLoading(false));
  
  },[]);
  
  return !loading ?(
    <div className='h-screen w-screen
     dark:bg-black dark:text-white 
     justify-center items-center'>
      
      <div className='w-full block'>
        <Header/>
          <main>
            {/* <Outler/> */}
          </main>
        <Footer/>

      </div>
    </div>
  ):(
    <div className='h-screen w-screen
     dark:bg-black dark:text-white 
     justify-center items-center'>Loading...
    </div>
  )

}

export default App
