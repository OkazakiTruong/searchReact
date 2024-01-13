import React from "react";
import "./Search.css";

export const Search = () => {
  return (
    <div>
      <form action="#">
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm" />
          <button>Tìm kiếm</button>
        </div>
      </form>
    </div>
  );
};
