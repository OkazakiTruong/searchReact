import React from "react";
import { SearchContainer } from "./Search/SearchContainer";
import { ListUser } from "./User/ListUser";
import { UserContainer } from "./User/UserContainer";

export const App = () => {
  return (
    <div>
      <SearchContainer />
      <UserContainer />
    </div>
  );
};
