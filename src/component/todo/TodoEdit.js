import { TodoItemBlock, StyledInput } from "../../style/todo/todoStyle";
import { SubmitButton, CancleButton } from "../../style/button";
import { MdCheck, MdCancel } from "react-icons/md";

function TodoEdit({ onEditToggle, initialValue, id, inputRef, onClickSubmit }) {
  return (
    <TodoItemBlock>
      <StyledInput
        className="InputBox"
        data-testid="modify-input"
        defaultValue={initialValue}
        ref={inputRef}
      />
      {/* <div className="buttons"> */}
      <SubmitButton id={id} data-testid="submit-button" onClick={onClickSubmit}>
        <MdCheck />
      </SubmitButton>
      <CancleButton data-testid="cancel-button" onClick={onEditToggle}>
        <MdCancel />
      </CancleButton>
      {/* </div> */}
    </TodoItemBlock>
  );
}

export default TodoEdit;
