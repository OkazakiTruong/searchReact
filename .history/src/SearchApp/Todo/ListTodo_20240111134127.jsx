import React from "react";

export const ListTodo = ({ todos }) => {
  return (
    <>
      <h2>Danh sách công việc</h2>
      <table>
        <tbody>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên công việc</th>
          </tr>
        </tbody>
      </table>
      {!todos
        ? "Hiện không có công việc nào!!"
        : todos.map((todo) => <h3>{todo.title}</h3>)}
    </>
  );
};
