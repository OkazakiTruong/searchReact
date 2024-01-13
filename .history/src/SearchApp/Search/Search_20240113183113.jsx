import React, { useRef } from "react";
import "./Search.css";

export const Search = ({ todos, handleSearch }) => {
  const suggestRef = useRef(null);
  const inputRef = inputRef(null);
  const handleFocus = () => {
    console.log(suggestRef.current);
    suggestRef.current.classList.add("active");
  };
  const handleBlur = () => {
    suggestRef.current.classList.remove("active");
  };
  return (
    <div className="search-container">
      <h2>Tìm kiếm công việc</h2>
      <form action="#">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Nhập vào tên công việc cần tìm kiếm...."
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <button>Tìm kiếm</button>
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
                  }}
                >
                  {todo.title}
                </p>
              );
            })}
      </div>
    </div>
  );
};
