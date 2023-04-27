const List = ({todoList, onRemoveTodo}) => todoList.map((todo, index)=>
  <li style={{textAlign: "left", marginBottom: "15px"}}>
    {todo}{" "}
    <span id={index} style={{  color: "white", background: "red", cursor: "pointer", padding: "3px", height: "12px" }} onClick={onRemoveTodo}>
      -
    </span>
  </li>
);

export default List;