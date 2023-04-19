import React from "react";
import { MdAdd } from "react-icons/md";
import {
  CircleButton,
  InsertFormPosition,
  InsertForm,
  Input,
} from "../../style/todo/todoStyle";

function TodoCreate({ onClickInsert, inputRef }) {
  return (
    <>
      <InsertFormPosition>
        <InsertForm>
          <Input
            autoFocus
            data-testid="new-todo-input"
            placeholder="할 일을 입력 후, 버튼을 누르세요"
            ref={inputRef}
          />

          <CircleButton
            data-testid="new-todo-add-button"
            onClick={onClickInsert}
            type="submit"
          >
            <MdAdd />
          </CircleButton>
        </InsertForm>
      </InsertFormPosition>
    </>
  );
}

export default React.memo(TodoCreate);
