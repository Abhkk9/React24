import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

function increase(){

  setCount(count+1);
  setCount(count+1);
  setCount(count+1);
  setCount(count+1);
  setCount(count+1);

}

function decrease(){
  if(count<=0)
  {
    console.log("no negative counter");
    return;
  }
    
  setCount(count-1)

}

  return (
    <>
      <p1>Counter is= {count}</p1>
      <br></br>
     <button onClick={increase}> increase </button>
     <br></br>
     <button onClick={decrease}> Decrease </button>
    </>
  )
}

export default App
