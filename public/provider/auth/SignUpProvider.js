import React, { useState } from "react";
import { signUp } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../component/auth/AuthForm";
import AuthTemplate from "../../component/auth/AuthTemplate";
import AuthHead from "../../component/auth/AuthHead";

function SignupProvider() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await signUp({ email, password });

    if (response) {
      setErrorMessage("");
    } else {
      setErrorMessage("동일한 이메일이 이미 존재합니다.");
      navigate("/signin");
    }
  };

  return (
    <>
      <AuthTemplate>
        <AuthHead type="register" />
        <AuthForm
          type="register"
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        />
      </AuthTemplate>
    </>
  );
}

export default SignupProvider;
