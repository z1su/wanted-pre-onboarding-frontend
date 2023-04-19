import React from "react";
import SignUpProvider from "../provider/auth/SignUpProvider";
import useAuthRedirect from "../hooks/useAuthRedirect";

export default function SignUpPage() {
  useAuthRedirect();
  return <SignUpProvider />;
}
