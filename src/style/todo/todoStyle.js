import styled, { css } from "styled-components";

export const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
`;

// TodoCreate
export const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
`;

export const InsertFormPosition = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

// TodoEdit
export const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  font-size: 21px;
  // padding: 0.5rem;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 300px;
  padding-top: 12px;
  padding-bottom: 12px;

  &:focus {
    border: 1px solid black;
  }
`;

// TodoItems
export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

export const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  padding-top: 12px;
  padding-bottom: 12px;
  ${(props) =>
    props.checked &&
    css`
      color: #ced4da;
    `}
`;

// TodoList
export const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

// TodoTemplate
export const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 800px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
