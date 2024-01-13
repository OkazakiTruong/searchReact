import React, { useCallback, useEffect } from "react";
import { ListUser } from "./Users/ListUser";

export const SearchAppContainer = () => {
  useEffect(() => {
    //fetch api
  }, []);
  return (
    <div>
      SearchAppContainer
      <ListUser />
    </div>
  );
};
