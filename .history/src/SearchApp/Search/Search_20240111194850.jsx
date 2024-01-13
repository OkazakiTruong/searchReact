import React from "react";
import "./Search.css";

export const Search = ({ todos }) => {
  return (
    <div className="search-container">
      <h2>Tìm kiếm công việc</h2>
      <form action="#">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Nhập vào tên công việc cần tìm kiếm...."
          />
          <button>Tìm kiếm</button>
        </div>
      </form>
      <div className="search-suggest">
        {todos.map((todo) => {
          return <p className="todo-search-suggest">{todo.title}</p>;
        })}
      </div>
    </div>
  );
};
