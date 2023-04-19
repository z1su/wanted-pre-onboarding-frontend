import React from "react";
import TodoProvider from "../provider/todo/TodoProvider";
import useAuthRedirect from "../hooks/useAuthRedirect";

export default function TodoPage(props) {
  useAuthRedirect();
  return <TodoProvider />;
}
