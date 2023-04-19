import React, { useRef } from "react";
import TodoTemplate from "../../component/todo/TodoTemplate";
import TodoHead from "../../component/todo/TodoHead";
import TodoList from "../../component/todo/TodoList";
import TodoCreate from "../../component/todo/TodoCreate";
import useRefreshData from "../../hooks/useRefreshData";
import { createTodo } from "../../lib/api";
import TodoItems from "../../component/todo/TodoItems";

function TodoProvider() {
  const { todos, getData } = useRefreshData();
  const inputRef = useRef();

  const onClickInsert = async (e) => {
    e.preventDefault();

    const currentInput = inputRef.current.value;

    if (currentInput.length === 0) return;

    await createTodo(currentInput);

    getData();

    inputRef.current.value = "";
  };

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoList>
          {todos &&
            todos.map((todo) => (
              <TodoItems
                key={todo.id}
                id={todo.id}
                content={todo.todo}
                isCompleted={todo.isCompleted}
                getData={getData}
              />
            ))}
        </TodoList>
        <TodoCreate onClickInsert={onClickInsert} inputRef={inputRef} />
      </TodoTemplate>
    </>
  );
}

export default TodoProvider;
