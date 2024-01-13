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
            <th className="status">Trạng thái</th>
          </tr>
          {!todos?.length ? (
            <tr>
              <td colSpan={3} className="none-todos">
                Không có công việc nào !
              </td>
            </tr>
          ) : (
            todos.map((todo, index) => (
              <tr key={todo.id}>
                <td className="numeric-order">{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
