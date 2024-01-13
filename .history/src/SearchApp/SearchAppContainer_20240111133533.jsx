import React, { useCallback, useEffect, useState } from "react";

export const SearchAppContainer = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    //fetch api
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json)
      .then((data) => {
        console.log(data[0]);
      });
  }, []);
  return <div>SearchAppContainer</div>;
};
