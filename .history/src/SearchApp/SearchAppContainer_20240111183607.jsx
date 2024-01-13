import React, { useCallback, useEffect, useState } from "react";
import { ListTodo } from "./Todo/ListTodo";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";
import ReactPaginate from "react-paginate";

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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
