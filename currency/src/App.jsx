import { useState } from 'react'
import useCurrInfo from '../hooks/useCurrInfo'
import './App.css'
import useCurrInfo from '../hooks/useCurrInfo'
import {InputBox} from '../components/InputBox'
 

function App() {

  const [amt, setamt] = useState(0);
  


  return (
    <>
      <div className='bg-black h-screen w-screen flex flex-col items-center justify-center text-white p-12'>
        <h1 className='text-4xl font-thin '>Currency Converter</h1>

        <div className=' border rounded-xl flex flex-col items-center w-full sm:w-3/4 md:w-1/2'>

        </div>
      </div>
    </>
  )
}

export default App
