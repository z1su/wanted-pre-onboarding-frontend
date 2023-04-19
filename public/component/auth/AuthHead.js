import React from "react";
import { HeadBlock } from "../../style/globalStyle";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

function AuthHead({ type }) {
  const text = textMap[type];

  return (
    <HeadBlock>
      <h1>
        {text}
      </h1>
    </HeadBlock>
  );
}

export default AuthHead;
