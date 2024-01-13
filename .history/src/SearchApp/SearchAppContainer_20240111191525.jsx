import React, { useCallback, useEffect, useState } from "react";
import { ListTodo } from "./Todo/ListTodo";
import { Search } from "./Search/Search";

export const SearchAppContainer = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    //fetch api
    fetch("https://jsonplaceholder.typicode.com/todos?_page=1", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        console.log(response.headers.get("x-total-count"));
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);
  return (
    <div>
      <Search />
      <ListTodo todos={todos} />
    </div>
  );
};
