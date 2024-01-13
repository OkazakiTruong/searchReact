import React from "react";
import { SearchContainer } from "./Search/SearchContainer";
import { UserContainer } from "./User/UserContainer";

export const App = () => {
  return (
    <div className="app">
      <SearchContainer />
      <UserContainer />
    </div>
  );
};
