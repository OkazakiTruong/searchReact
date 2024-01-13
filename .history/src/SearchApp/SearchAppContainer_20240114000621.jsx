import React, { useCallback, useEffect, useState, useRef } from "react";
import { ListTodo } from "./Todo/ListTodo";
import { Search } from "./Search/Search";
import { Pagination } from "./Pagination/Pagination";
import debounce from "lodash.debounce";
export const SearchAppContainer = () => {
  const [todos, setTodos] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    title_like: "",
  });
  // const debounceDropDown = useRef(
  //   debounce((nextValue) => fetchDropdownOptions(nextValue), 1000)
  // ).current;
  useEffect(() => {
    const params = new URLSearchParams(filter).toString();
    //fetch api
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/todos?${params}&_page=${currentPage}&_limit=10`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => {
        setTotalPage(Math.ceil(+response.headers.get("x-total-count") / 10));
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setTodos(data);
      });
  }, [currentPage, filter]);
  const handlePageClick = (event) => {
    setCurrentPage(++event.selected);
  };
  const handleSearch = (event) => {
    const dataSearch = event.target.value;
    setFilter({ ...filter, title_like: `${dataSearch.trim()}` });
  };
  const handleSubmit = (title) => {
    setFilter({ ...filter, title_like: `${title.trim()}` });
  };
  return (
    <div>
      <Search
        todos={todos}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <ListTodo todos={todos} />
      <Pagination totalPage={totalPage} handlePageClick={handlePageClick} />
    </div>
  );
};
