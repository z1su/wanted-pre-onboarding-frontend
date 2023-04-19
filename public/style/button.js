import styled, { css } from "styled-components";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  padding: 0.5vh 1vw;
  color: black;
  outline: none;
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  &:hover {x
    color: #20c997;
    &:disabled {
      cursor: not-allowed;
    }
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 20px;
  cursor: pointer;
  width: 40px;
  &:hover {
    color: #38d9a9;
  }
`;

export const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #38d9a9;
  }
`;

export const CancleButton = styled.div`
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: #38d9a9;
  }
`;

export const CheckButton = styled.input.attrs({ type: "checkbox" })`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const LogoutButton = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
  cursor: pointer;
`;

export default Button;
