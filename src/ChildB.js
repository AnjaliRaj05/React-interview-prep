import React, { useRef, useState } from "react";

const ChildB = () => {
  const countRef = useRef(0); // Initially 0
  const [, forceRender] = useState(0);

  const increment = () => {
    countRef.current += 1;
    forceRender((n) => n + 1);
  };

  const decrement = () => {
    countRef.current -= 1;
    forceRender((n) => n + 1);
  };

  return (
    <div>
      <h2>This is ChildB Component</h2>
      <p>Current Count: {countRef.current}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ChildB;
