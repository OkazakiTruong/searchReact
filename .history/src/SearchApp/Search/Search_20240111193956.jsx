import React from "react";
import "./Search.css";

export const Search = () => {
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
      <div>
        <h2>Danh sách todo</h2>
      </div>
    </div>
  );
};
