import React, { useState } from "react";

const styles = {
  container: {
    margin: "30px",
    padding: "30px",
    textAlign: "center",
  },
};

const ToDoList = (props) => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleToDoChange = (event) => {
    setToDo(event.target.value);
  };

  const handleAddTDo = () => {
    setToDoList((pre) => [...pre, toDo]);
    setToDo("");
  };
  
  return (
    <div style={styles.container}>
      <div>{props.children}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <section>
          <input type="text" value={toDo} onChange={handleToDoChange} />
          <button style={{ marginLeft: "10px" }} onClick={handleAddTDo}>
            Add To Do List
          </button>
        </section>
        <section>
          <ul>
            {toDoList.map((toDo) => (
              <li>{toDo}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ToDoList;
