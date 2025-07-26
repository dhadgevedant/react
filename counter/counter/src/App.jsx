import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const AddValue = () => {

      if(count<20)setCount(count+1)
      
      else alert("Value cannot exeed 20")
  }


  const RemValue = () => {
      
    if (count > 1)setCount(count-1)

  }

  return (
    <>
      <div>
          <h1>Count {count}</h1>
          <br />
          <button type="button" onClick={AddValue} >Add</button>
          <button type="button" onClick={RemValue} >Subtract</button>
      </div>
     
    </>
  )
}

export default App
