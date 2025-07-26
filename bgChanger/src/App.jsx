import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [bg, setbg] = useState("black")
  const colors =  [ 'black', 'green', 'blue', 'red' ];
  


  return (
    <>
      <div className=' h-screen w-screen  flex flex-col justify-center items-center' style={{backgroundColor : bg}}>
          <h1 className='text-white text-5xl font-thin'>Backgroud Changer</h1>
          
          <div className=' flex flex-row p-2 text-white mt-10 border border-white rounded-xl bg-black'>
            {
              colors.map( (clr) => (
                <button type="button" key={clr} className='border rounded-lg p-2 m-2 bg-white text-black'
                onClick={ () => {setbg(clr)}}> {clr} </button>
                ))
            }
          </div>
      </div>
    </>
  )
}

export default App
