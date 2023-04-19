import React, { useState } from "react";
import { signIn } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../component/auth/AuthForm";
import AuthTemplate from "../../component/auth/AuthTemplate";
import AuthHead from "../../component/auth/AuthHead";

function SignInProvider(props) {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await signIn({ email, password });

    if (response) {
      setErrorMessage("");
      navigate("/todo");
    } else {
      setErrorMessage("비밀번호가 틀리거나 미등록 사용자입니다.");
    }
  };

  return (
    <>
      <AuthTemplate>
        <AuthHead type="login" />
        <AuthForm
          type="login"
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        />
      </AuthTemplate>
    </>
  );
}

export default SignInProvider;
