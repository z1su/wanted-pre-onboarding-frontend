import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoHeadBlock } from "../../style/todo/todoStyle";
import { LogoutButton } from "../../style/button";

function TodoHead() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <TodoHeadBlock>
      <h1>To-do</h1>
      <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
    </TodoHeadBlock>
  );
}

export default TodoHead;
