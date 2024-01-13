import React, { useCallback, useEffect, useState } from "react";
import { ListTodo } from "./Todo/ListTodo";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";

export const SearchAppContainer = () => {
  const [todos, setTodos] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    title_like: "",
  });
  useEffect(() => {
    //fetch api
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10${filter}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        // console.log(response);
        // setTotalTodos(+response.headers.get("x-total-count"));
        setTotalPage(Math.ceil(+response.headers.get("x-total-count") / 10));
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, [currentPage]);
  const handlePageClick = (event) => {
    setCurrentPage(++event.selected);
  };
  return (
    <div>
      <Search todos={todos} />
      <ListTodo todos={todos} />
      <Pagination totalPage={totalPage} handlePageClick={handlePageClick} />
    </div>
  );
};
