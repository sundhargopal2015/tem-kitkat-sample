import React, { useState } from "react";
import "./ToDoList.css";
import List from "./List";

const styles = {
  container: {
    margin: "30px",
    padding: "30px",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "left",
  },
};

const ToDoList = (props) => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [listSpaceError, setListSpaceError] = useState(false);
  const [todoEmptyError, setTodoEmptyError] = useState(false);

  const handleToDoChange = (event) => {
    setToDo(event.target.value);
  };

  const handleAddTDo = () => {
    if (!toDo) {
      setTodoEmptyError(true);
    } else {
      setTodoEmptyError(false);
      if (toDoList.length === props.limit) {
        setListSpaceError(true);
        return;
      }
      setToDoList((pre) => [...pre, toDo]);
      setToDo("");
    }
  };

  const handleRemoveTodo = (event) => {
    const filterTodo = toDoList.filter(
      (todo, index) => event.target.id !== index
    );
    console.log(filterTodo);
    setToDoList(filterTodo);
  };

  return (
    <div style={styles.container}>
      <div>{props.children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <section>
          {todoEmptyError && (
            <span style={styles.error}>Todo can not be empty</span>
          )}
          {/* <input type="text" style={{border: `2px solid ${todoEmptyError ? "red" : "black"}`}} value={toDo} onChange={handleToDoChange} /> */}
          <input
            type="text"
            className={`todo-input ${todoEmptyError ? "error" : ""}`}
            value={toDo}
            onChange={handleToDoChange}
          />
          <button
            style={{
              marginLeft: "10px",
              background: "green",
              color: "white",
              padding: "3px",
              cursor: todoEmptyError ? "not-allowed" : "pointer",
            }}
            onClick={handleAddTDo}
          >
            Add To Do List
          </button>
        </section>
        <section>
          <ul>
            {<List todoList={toDoList} onRemoveTodo={handleRemoveTodo} />}
          </ul>
          {listSpaceError && (
            <div style={styles.error}>There is no space in the todo list</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ToDoList;
