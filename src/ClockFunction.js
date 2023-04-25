import React, { useState, useEffect } from "react";

import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1>Current Time</h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
