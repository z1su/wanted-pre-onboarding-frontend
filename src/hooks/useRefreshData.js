/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { getTodo } from "../lib/api";

function useRefreshData() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    const response = await getTodo();
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
