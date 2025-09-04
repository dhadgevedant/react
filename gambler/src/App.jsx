import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [clr,setclr] = useState("999")
  const [red, setred] = useState(false)
  const [black, setblack] = useState(false)
  const [prog, setprog] = useState(69)

const gamble = (blackBet) => {
  const totalFlashes = 30;
  let currentDelay = 50; // Starting fast
  let delay = 0;
  let lastColor = "#000";

  for (let i = 0; i < totalFlashes; i++) {
    const cl = Math.floor(Math.random() * 2);
    const currentColor = cl === 0 ? "#000" : "#500";

    setTimeout(() => {
      setclr("#999");
      setTimeout(() => setclr(currentColor), currentDelay / 2); // quick white flash before new color

      if (i === totalFlashes - 1) {
        lastColor = currentColor;

        // After last spin, do flashing and update score
        setTimeout(() => {
          // Flash final color 3 times
          for (let j = 0; j < 5; j++) {
            setTimeout(() => setclr("#fff"), j * 200);
            setTimeout(() => setclr(lastColor), j * 200 + 100);
          }

          // Update bank after the flash
          setTimeout(() => {
            if (lastColor === "#000") {
              if (blackBet) setprog(prev => prev * 2);
              else setprog(prev => prev / 4);
            } else {
              if (blackBet) setprog(prev => prev / 4);
              else setprog(prev => prev * 2);
            }
          }, 0); // after flashing
        }, 500); // delay before flash starts
      }
    }, delay);

    delay += currentDelay;
    currentDelay += 20; // increase delay each step to slow down
  }
};





  return (
    <>
      <div className='w-screen h-screen bg-white text-black flex flex-col items-center p-12 '>

        <h1 className='text-4xl font-thin text-center' >Gamble your life savings away</h1>
        <div className='m-8 bg-neutral-400 h-60 w-3xs rounded-xl flex items-center justify-center'>
            <div className='rounded-xl w-40 h-40' style={ {backgroundColor: clr}}></div>
        </div>


        <div className='flex flex-row p-2 gap-4 text-white sm:w-1/2 w-full'>
          <button type="button" className='p-2 bg-red-900 rounded-lg italic w-1/2'
            onClick={()=>{
              setred(true)
              setblack(false)
              gamble(false)
            }}
          >RED</button>

          <button type="button" className='p-2 bg-black rounded-lg italic w-1/2'
            onClick={()=>{
              setred(false)
              setblack(true)
              gamble(true)
            }}
          >BLACK</button>
        </div>

        
        <h1 className='text-3xl font-thin mt-10'>Bank Balance</h1>
        <div className=' bg-neutral-400 h-60 w-3xs rounded-xl  flex flex-col items-center justify-center p-2 '>
          <h1 className='text-5xl text-black font-extrabold font-stretch-ultra-condensed'>{prog} $</h1>
        </div>

      </div>
      
    </>
  )
}

export default App
