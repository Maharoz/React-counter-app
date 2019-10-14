import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <div>
        <button 
        type="button" 
        className="btn btn-primary"
        style={{marginRight:20}}>
          Primary
        </button>
        <button type="button" className="btn btn-warning">Warning</button>
        
      </div>
    );
  }
}

export default Controls;
