import React from "react";
import "./Refs.css";

class Refs extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef(null);
  }

  handleButtonClick = () => {
    console.log(this.inputRef.current.value);
    this.inputRef.current.focus();
  };

  handleInputChange = (event) => {
    this.inputRef.current.value = event.target.value;
  };

  render() {
    return (
      <>
        <input
          className="input-ref class"
          ref={this.inputRef}
          type="text"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleButtonClick}>Click to focus input</button>
      </>
    );
  }
}

export default Refs;
