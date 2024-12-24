import React, { useState } from "react";
import Love from "./Love.png";
import Like from "./Like.png";
import Sad from "./Sad.png";

function EmojiCounter(props) {
  const [count, setCount] = useState(0);

  // Function to handle clicks and increment count
  const handleClick = () => {
    setCount(count + 1);
  };

  // Dynamically set the emoji based on props
  const getImage = () => {
    if (props.type === "Love") return Love;
    if (props.type === "Like") return Like;
    if (props.type === "Sad") return Sad;
  };

  return (
    <div className="App">
      <button onClick={handleClick} style={{ margin: "10px" }}>
        <img src={getImage()} alt={props.type} style={{ width: "50px" }} />
        {count}
      </button>
    </div>
  );
}

export default EmojiCounter;





















































































