import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement} style={{ margin: "0 10px" }}>decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
