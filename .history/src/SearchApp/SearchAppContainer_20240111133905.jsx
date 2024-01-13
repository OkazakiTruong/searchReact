import React, { useCallback, useEffect, useState } from "react";
import { ListTodo } from "./Todo/ListTodo";

export const SearchAppContainer = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    //fetch api
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);
  return (
    <div>
      <ListTodo todos={todos} />
    </div>
  );
};
