import './App.css'
import {ThemeProvider} from '../context/theme'
import { useState } from 'react'
import { useEffect } from 'react';
import Card from '../components/card';
import Btn from '../components/button';

function App() {

  const [themeMode, setThemeMode] = useState('light');
  
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // now useEffect to handle changes in themeMode
useEffect(() => {
  document.documentElement.classList.toggle(
    'dark',
    themeMode === 'dark'
  );
}, [themeMode]);

  return (
    
    <>

      <ThemeProvider value = {{themeMode, lightTheme, darkTheme}}>

        <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <Btn />
                  </div>

                  <div className="w-full max-w-sm mx-auto">
                      <Card />
                  </div>
              </div>
        </div>

      </ThemeProvider> 
      

    </>
  )
}

export default App
