import {
    AuthFormBlock,
    StyledInput,
    Register,
    ErrorMessage,
  } from "../../style/auth/authStyle";
  import Button from "../../style/button";
  import useAuthInput from "../../hooks/useAuthInput";
  
  const textMap = {
    login: "로그인",
    register: "회원가입",
  };
  
  function AuthForm({ type, onSubmit, errorMessage }) {
    const text = textMap[type];
  
    const {
      onChangeAuthInput,
      email,
      isValidatedEmail,
      password,
      isValidatedPassword,
    } = useAuthInput();
  
    return (
      <AuthFormBlock>
        <form onSubmit={onSubmit}>
          <div className="input">
            <StyledInput
              data-testid="email-input"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={onChangeAuthInput}
            />
          </div>
          <div className="input">
            <StyledInput
              data-testid="password-input"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={password}
              onChange={onChangeAuthInput}
            />
          </div>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <Button
            data-testid={type === "register" ? "signup-button" : "signin-button"}
            disabled={isValidatedEmail && isValidatedPassword ? false : true}
          >
            {text}
          </Button>
        </form>
        <Register>
          {type === "register" ? (
            <a href="/signin">이미 계정이 있다면?</a>
          ) : (
            <a href="/signup">아직 회원이 아니라면?</a>
          )}
        </Register>
      </AuthFormBlock>
    );
  }
  
  export default AuthForm;
  