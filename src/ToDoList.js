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
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [listSpaceError, setListSpaceError] = useState(false);
  const [todoEmptyError, setTodoEmptyError] = useState(false);
  const [showCompletedTodoList, setShowCompletedTodoList] = useState(false);

  const handleToDoChange = (event) => {
    setToDoInput(event.target.value);
  };

  const handleAddTDo = () => {
    if (!toDoInput) {
      setTodoEmptyError(true);
    } else {
      setTodoEmptyError(false);
      if (toDoList.length === props.limit) {
        setListSpaceError(true);
        return;
      }
      const toDo = {
        id: toDoList.length,
        title: toDoInput,
        isChecked: false,
      };
      setToDoList((pre) => [...pre, toDo]);
      setToDoInput("");
    }
  };

  const handleRemoveTodo = (event) => {
    const filterTodo = [];

    toDoList.forEach((todo, index) => {
      if (parseInt(event.target.id) !== index) {
        if (todo.id > parseInt(event.target.id)) {
          filterTodo.push({
            id: todo.id - 1,
            title: todo.title,
            isChecked: todo.isChecked,
          });
        } else {
          filterTodo.push(todo);
        }
      }
    });

    setToDoList(filterTodo);
  };

  const handleReset = () => {
    setToDoList([]);
  };

  const handleTodoCheck = (event) => {
    setToDoList((pre) =>
      pre.map((todo, index) => {
        if (parseInt(event.target.id) === index) {
          return {
            id: todo.id,
            title: todo.title,
            isChecked: !todo.isChecked,
          };
        } else {
          return todo;
        }
      })
    );
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
            value={toDoInput}
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
          {showCompletedTodoList && (
            <div className="comp-list-cont">
              <ul>
                {toDoList
                  .filter((todo) => todo.isChecked)
                  .map((todo) => (
                    <li>{todo.title}</li>
                  ))}
              </ul>
            </div>
          )}
        </section>
        <section>
          <ul>
            {
              <List
                todoList={toDoList}
                onRemoveTodo={handleRemoveTodo}
                onCheckToDo={handleTodoCheck}
              />
            }
          </ul>
          {listSpaceError && (
            <div style={styles.error}>There is no space in the todo list</div>
          )}
          {toDoList.length > 0 && (
            <div>
              {toDoList.filter((todo) => todo.isChecked).length > 0 && (
                <button onClick={() => setShowCompletedTodoList((pre) => !pre)}>
                  {showCompletedTodoList ? "Hide list" : "show list"}
                </button>
              )}
              <button
                style={{
                  background: "orange",
                  padding: "5px",
                  color: "white",
                  outline: "none",
                  border: "1px solid black",
                }}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ToDoList;
