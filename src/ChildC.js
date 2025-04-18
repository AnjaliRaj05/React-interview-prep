import React, { useState } from "react";

const ChildC = () => {
  const [color, setColor] = useState("Red");

  const clickMe = () => {
    setColor("green");
    setTimeout(() => {
      setColor("red");
    }, 5000);
    setTimeout(() => {
      setColor("yellow");
    }, 2000);
  };

  return (
    <div>
      <h2>This is ChildC Component</h2>
      <button
        onClick={clickMe}
        style={{ backgroundColor: color, color: "white", padding: "10px" }}
      >
        Initial Color is: {color}
      </button>
    </div>
  );
};

export default ChildC;
