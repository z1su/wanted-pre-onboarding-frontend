import React from "react";
import { TodoListBlock } from "../../style/todo/todoStyle";

function TodoList({ children }) {
  return <TodoListBlock>{children}</TodoListBlock>;
}

export default TodoList;
