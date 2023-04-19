import React from "react";
import { TodoTemplateBlock } from "../../style/todo/todoStyle";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
