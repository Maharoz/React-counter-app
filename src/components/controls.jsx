import React from "react";

const Controls = ({handleIncrement }) => {
    return (
      <div>
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={() => handleIncrement()}
        style={{marginRight:20}}>
          Increment
        </button>
        <button type="button" className="btn btn-warning">Decrement</button>
        
      </div>
    );
  }


export default Controls;
