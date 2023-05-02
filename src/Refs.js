import React, { useRef } from "react";
import "./Refs.css";

const Refs = () => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    inputRef.current.value = event.target.value;
  };

  return (
    <React.Fragment>
      <input
        className="input-ref fn"
        ref={inputRef}
        type="text"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Click to focus input</button>
    </React.Fragment>
  );
};

export default Refs;
