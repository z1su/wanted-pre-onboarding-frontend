import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./page/TodoPage";
import SignUpPage from "./page/SignUpPage";
import SignInPage from "./page/SignInPage";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
