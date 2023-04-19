import React from "react";
import { AuthTemplateBlock } from "../../style/auth/authStyle";

function AuthTemplate({ children }) {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
}

export default AuthTemplate;
