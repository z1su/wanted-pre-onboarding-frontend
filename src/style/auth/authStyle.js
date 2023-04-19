import styled from "styled-components";

export const AuthFormBlock = styled.div`
  .title {
    font-size: 1.2rem;
    text-align: center;
    margin-top: 20px;
    color: black;
    margin-bottom: 1rem;
  }
  .input {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  outline: none;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 300px;
  &:focus {
    border: 1px solid black;
  }
`;

export const Register = styled.div`
  font-size: 0.85rem;
  margin-top: 1.5rem;
  text-align: center;
  a {
    color: black;

    &:hover {
      color: lightslategray;
    }
  }
`;

export const AuthTemplateBlock = styled.div`
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
