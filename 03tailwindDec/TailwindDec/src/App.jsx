import { useState } from 'react'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj={a:1};
  return (
    <>
      


      <p1 className='bg-green-400  text-black'>Hello</p1> 
      {/* <p1 className='bg-red-400 text-green-50 align-bottom'> world</p1> */}
      <Card  var1="sdasd" var2="dfsdff" a={obj} numv='23' />
      <br/> 
      <Card/>
      <br/> 
      <Card/>
    </>
  )
}

export default App
