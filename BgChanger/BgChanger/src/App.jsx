import { useState } from 'react'
import Buttons  from './Components/Button' 
import './App.css'

function App() {
  const [color, setColor] = useState("grey");

  function changeColor(){
    console.log(this);
    setColor()
    
  }
  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>

      <div className="fixed flex-wrap">
        <button className='Red' onClick={changeColor}>Red</button>
        <button className='blue' onClick={changeColor}>blue</button>
        <button className='yellow' onClick={changeColor}>yellow</button>
        <button className='green' onClick={changeColor}>green</button>
        <button className='white' onClick={changeColor}>white</button>
        <button className='grey' onClick={changeColor}>grey</button>
        <button className='blue' onClick={changeColor}>blue</button>
        <button className='black' onClick={changeColor}>black</button>
      </div>
    
    </div>
  )
}

export default App
