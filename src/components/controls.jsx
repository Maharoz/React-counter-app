import React from "react";

const Controls = ({count,handleIncrement ,handleDecrement}) => {
    return (
        
      <div>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={() => handleIncrement()}
        style={{marginRight:20}}>
          Increment
        </button>
        <button 
        type="button" 
        className="btn btn-warning"
        disabled={count===0?true:false}
        onClick={() => handleDecrement()}
        >Decrement</button>
        
      </div>
    );
  }


export default Controls;
