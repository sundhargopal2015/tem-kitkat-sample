import React, { useState } from "react";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleCounterClick = (event) => {
    let _count = count;
    if (event.target.id === "increment-count") {
      _count++;
    } else {
      _count--;
    }

    setCount(_count);
  };

  return (
    <div class="container">
      <button id="decrement-count" onClick={handleCounterClick}>
        -
      </button>
      <span id="count-val">{count}</span>
      <button id="increment-count" onClick={handleCounterClick}>
        +
      </button>
    </div>
  );
}

export default Counter;
