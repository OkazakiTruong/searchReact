import React, { useEffect, useRef, useState } from "react";
import "./Search.css";

export const Search = ({ todos, handleSearch, handleSubmit, isLoading }) => {
  const suggestRef = useRef(null);
  const inputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const handleFocus = () => {
    console.log(suggestRef.current);
    suggestRef.current.classList.add("active");
  };
  const handleClickOutside = (event) => {
    const { target } = event;
    if (!searchContainerRef.current.contains(target)) {
      suggestRef.current.classList.remove("active");
    }
  };
  useEffect(() => {
    console.log(isLoading);
    document.addEventListener("click", handleClickOutside);
  });
  return (
    <>
      <h2>Tìm kiếm công việc</h2>
      <div className="search-container" ref={searchContainerRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            suggestRef.current.classList.remove("active");
            handleSubmit(inputRef.current.value);
          }}
        >
          <div className="search-bar">
            <input
              type="text"
              placeholder="Nhập vào tên công việc cần tìm kiếm...."
              onFocus={handleFocus}
              ref={inputRef}
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <button type="submit" className="btn-submit">
              {isLoading ? <img src="/rolling_loading.svg" /> : "Tìm kiếm"}
            </button>
          </div>
        </form>
        <div className="search-suggest" ref={suggestRef}>
          {todos === null
            ? "Không có todo nào"
            : todos?.map((todo) => {
                return (
                  <p
                    className="todo-search-suggest"
                    key={todo.id}
                    onClick={(e) => {
                      console.log(e.target.innerText);
                      inputRef.current.value += " " + e.target.innerText;
                    }}
                  >
                    {todo.title}
                  </p>
                );
              })}
        </div>
      </div>
    </>
  );
};
