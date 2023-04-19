import React, { useState, useRef } from "react";
import { Remove, TodoItemBlock, Text } from "../../style/todo/todoStyle";
import { CheckButton, EditButton } from "../../style/button";
import { MdEdit, MdDelete } from "react-icons/md";
import { updateTodo, deleteTodo } from "../../lib/api";
import TodoEdit from "./TodoEdit";

function TodoItem({ content, isCompleted, id, getData }) {
  const [isEditing, setIsEdit] = useState(false);

  const editedInputRef = useRef();

  const onEditToggle = () => {
    setIsEdit(!isEditing);
  };

  const onClickSubmit = async (e) => {
    e.preventDefault();

    const currentInput = editedInputRef.current.value;

    if (currentInput.length === 0) return;

    await updateTodo({ id: id, todo: currentInput, isCompleted: isCompleted });

    getData();

    setIsEdit(!isEditing);
  };

  const onToggle = async (e) => {
    await updateTodo({ id: id, todo: content, isCompleted: !isCompleted });

    getData();
  };

  const onDelete = async (e) => {
    await deleteTodo(id);

    getData();
  };

  return (
    <TodoItemBlock>
      <CheckButton checked={isCompleted} onChange={onToggle} />

      {isEditing ? (
        <>
          <TodoEdit
            initialValue={content}
            onEditToggle={onEditToggle}
            id={id}
            inputRef={editedInputRef}
            onClickSubmit={onClickSubmit}
            onDelete={onDelete}
          />
        </>
      ) : (
        <>
          <Text checked={isCompleted}>{content}</Text>

          <EditButton data-testid="modify-button" onClick={onEditToggle}>
            <MdEdit />
          </EditButton>

          <Remove data-testid="delete-button" onClick={onDelete}>
            <MdDelete />
          </Remove>
        </>
      )}
    </TodoItemBlock>
  );
}

export default TodoItem;
