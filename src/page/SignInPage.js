import React from "react";
import useAuthRedirect from "../hooks/useAuthRedirect";
import SignInProvider from "../provider/auth/SignInProvider";

function SignInPage() {
  useAuthRedirect();
  return <SignInProvider />;
}

export default SignInPage;
