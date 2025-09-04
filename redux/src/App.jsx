import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo  from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    
      <div className='bg-black text-white h-screen w-screen p-4 flex flex-col items-center justify-center'>
        
        <h1 className='text-5xl font-thin italic'>Redux Toolkit ToDo</h1>
        <div className=' sm: w-8/12 gap-8'>

          <AddTodo/>
          <Todos/>
        </div>
      </div>
    </>
  )
}

export default App
