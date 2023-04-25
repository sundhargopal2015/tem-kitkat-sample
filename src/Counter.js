import React, { useState } from "react";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="container">
      <button onClick={() => setCount((pre) => pre - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((pre) => pre + 1)}>+</button>
    </div>
  );
}

export default Counter;
