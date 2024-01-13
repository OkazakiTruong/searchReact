import React, { useCallback, useEffect, useState } from "react";
import { ListTodo } from "./Todo/ListTodo";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";

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
      .then((response) => response.json())
      .then(({ data, pagination }) => {
        setTodos(data);
      });
  }, []);
  return (
    <div>
      <Search />
      <ListTodo todos={todos} />
      <Pagination />
    </div>
  );
};
