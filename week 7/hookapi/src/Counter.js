import React, { useState } from "react";
import "./App.css";

function Hook_ControlledButtonState() {
  // State variable to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle button clicks
  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App-header">
      <h1>Click Counts: {count}</h1>
      <button type="button" onClick={ClickHandle}>
        Click me {count}
      </button>
    </div>
  );
}

export default Hook_ControlledButtonState;
