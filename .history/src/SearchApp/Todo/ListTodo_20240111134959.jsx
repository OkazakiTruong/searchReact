import React from "react";
import "./listTodo.css";

export const ListTodo = ({ todos }) => {
  return (
    <>
      <h2>Danh sách công việc</h2>
      <table>
        <tbody>
          <tr>
            <th className="numerical-order">Số thứ tự</th>
            <th className="todo-name">Tên công việc</th>
          </tr>
          {!todos
            ? "Hiện không có công việc nào!!"
            : todos.map((todo, index) => (
                <tr>
                  <td>{++index}</td>
                  <td>{todo.title}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};
