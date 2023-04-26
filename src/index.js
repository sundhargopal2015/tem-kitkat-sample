import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./ToDoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDoList limit={10}>
      <h1>To Do List</h1>
    </ToDoList>
  </React.StrictMode>
);
