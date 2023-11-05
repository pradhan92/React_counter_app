import React, {useState} from "react";
import ReactDOM  from "react-dom";
import Button from "./components/Button";
import './style.css'

const App = () => {
  //initatilization of value in state
  const [number,setNumber] = useState(0)
  //if u like to chane number in state  use one setNumber is secornd parameter only 
  return <div className="hero">
    <h1>This is Counter Apps</h1>
    {/* pass the value as a number seted parameter */}
    <h3>{number}</h3>
    <div>
    {/* Another way to call */}
    <Button name="Add" click={()=> setNumber(number+1 )}/>
     <Button name="Less" click={()=> setNumber(number-1 )}/>
     <Button name="Reset" click={()=> setNumber(0)}/>


{/* anthor way to call */}
    {/* 
    <button className="button" onClick={()=> setNumber(number+1 )}>Add</button>
    <button className="button" onClick={()=> setNumber(number-1)}>Less</button>
    <button className="button" onClick={()=> setNumber(0)}>Reset</button>
     */}
    </div>
   </div>
}

export default App;
