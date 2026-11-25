import { useState } from "react";
import "./App.css";

function App() {
  const Increase = () =>{
    if(count < 20){
     setCount(count+1)
    }
    };

  const Decrease = () =>{
  if(count > 0){
    setCount(count-1)
  }
  else{
    setCount(0);
  }
  };
  const Reset = () =>{
     setCount(0)
  };
  
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>My Counter App</h1>
      <h2 style={{color:count === 0 ? 'Red' : 'Black'}}>{count}</h2>
      <button onClick={Increase}>Increse</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;