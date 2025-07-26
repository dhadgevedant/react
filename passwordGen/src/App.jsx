import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [chr, setchr] = useState(false);

  const [pswd, setpswd] = useState("");

  const genPass = useCallback( () => {

    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (num) str += "123456789"
    if (chr) str += "#$%"

    for( let i = 1; i <= length; i++){

      let char = Math.floor( Math.random() * str.length + 1)

      pass+= str.charAt(char)
    }
    setpswd(pass)
  },
  [length, num, chr, setpswd])

  useEffect(()=>{
    genPass()
  },[length, num, chr, setpswd])

  const cp = () => {
    navigator.clipboard.writeText(pswd)
    .then(() => {
        
          alert('Text copied to clipboard!');
        })
    .catch(err => {
          console.error('Failed to copy text: ', err);
    });
  }
  
  return (
    <>
      <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-white font-thin' >Password Genrator</h1>

          <div className=' sm:w-1/2 w-full max-w-xl mt-10 flex flex-col justify-center items-center gap-2'>

            <span className='flex flex-row gap-2 mt-2 w-full px-10'>
              
              <input 
                type="text"
                readOnly
                value={pswd}
                className='border rounded-xl p-2  text-white text-center w-3/4 '
              />

              <button type="button" className='bg-white rounded-xl px-2 w-1/4 '
                onClick={ cp }
              >Copy</button>
            </span>  
            
              <span className=' gap-3 flex flex-row items-center sm:w-8/12 w-10/12 '>
                
                <input type="range" name="length" value={length} max={20} min={8} 
                className=' 
                 w-3/4
                appearance-none bg-white h-1 
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-5 
                [&::-webkit-slider-thumb]:w-6 
                [&::-webkit-slider-thumb]:rounded-md 
                [&::-webkit-slider-thumb]:bg-white 
                '
                  onChange={ (e) => {
                        setlength(e.target.value)
                        console.log(e.target.value)
                      }
                  }/>

                <label className='text-white w-1/4 text-justify' > Length {length} </label>
              </span>

              <span className='flex flex-row gap-2'>
                <input type="checkbox" name="Numbers" id="" onChange={ () => {
                    setnum( (prev) => !prev )
                }}/>
                <label className='text-white ' >Include Numbers</label>
              </span>

              <span className='flex flex-row gap-2'>
                <input type="checkbox" name="Numbers" id="" onChange={ () => {
                    setchr( (prev) => !prev )
                }}/>
                <label className='text-white' >Include Symbols</label>
              </span>


          </div>
      </div>
    </>
  )
}

export default App
