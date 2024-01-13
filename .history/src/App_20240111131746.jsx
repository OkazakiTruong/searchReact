import React from "react";
import { SearchContainer } from "./Search/SearchContainer";
import { ListUser } from "./User/ListUser";

export const App = () => {
  return (
    <div>
      <SearchContainer />
      <ListUser />
    </div>
  );
};
