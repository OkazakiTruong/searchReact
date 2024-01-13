import React from "react";

export const ListTodo = ({ todos }) => {
  return (
    <>
      <h2>Danh sách công việc</h2>
      {!todos
        ? "Hiện không có công việc nào!!"
        : todos.map((todo) => <h3>todo.title</h3>)}
    </>
  );
};
