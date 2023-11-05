import React from "react";
import  ReactDOM  from "react-dom";


// recallable button

const Button = ({name,click})  => {
    //pass the value as parametor
    return <a>
        <button  className="button" onClick={click}>{name}</button>
    </a>
}

export default Button;