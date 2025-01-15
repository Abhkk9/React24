import { useState } from 'react'

function App() {
let [count, setState] = useState(0);
function increase(){
  setState(count+1);
  console.log("plus clicked",count);
}
function decreament(){
  if(count <=0)
  { 
    setState(0);
  }else
  setState(count-1);
  console.log("minus clicked",count);
}
  return (
    <>
      <h1>Counter is {count}</h1>
      <button onClick={increase}>Plus</button>
      <br></br>
      <button onClick={decreament}>Minus</button>

    </>
  )
  
}

export default App
