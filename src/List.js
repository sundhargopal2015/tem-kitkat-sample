const List = ({ todoList, onRemoveTodo, onCheckToDo }) =>
  todoList.map((todo, index) => (
    <li
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        marginBottom: "15px",
      }}
    >
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.isChecked}
        onChange={onCheckToDo}
      />
      <span>{todo.title}</span>
      <span
        id={index}
        style={{
          color: "white",
          background: "red",
          cursor: "pointer",
          padding: "3px",
          height: "12px",
        }}
        onClick={onRemoveTodo}
      >
        -
      </span>
    </li>
  ));

export default List;
