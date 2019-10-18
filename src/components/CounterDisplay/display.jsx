import React from "react";

const Display = ({count}) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Counter App</h1>
        </div>
      </div>
      <p style={{fontSize: 150}}>{count}</p>
    </div>
  );
};

export default Display;
