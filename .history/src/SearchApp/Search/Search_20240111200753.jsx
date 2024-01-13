import React, { useRef } from "react";
import "./Search.css";

export const Search = ({ todos }) => {
  const suggestRef = useRef(null);
  const handleFocus = () => {
    console.log(suggestRef.current);
    suggestRef.current.classList.add("active");
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
          />
          <button>Tìm kiếm</button>
        </div>
      </form>
      <div className="search-suggest" ref={suggestRef}>
        {todos?.map((todo) => {
          return <p className="todo-search-suggest">{todo.title}</p>;
        })}
      </div>
    </div>
  );
};
