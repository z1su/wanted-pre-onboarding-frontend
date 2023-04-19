/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { getTodos } from "../lib/api";

function useRefreshData() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const response = await getTodos();
    setTodos(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    todos,
    getData,
  };
  useRefreshData;
}

export default useRefreshData;
