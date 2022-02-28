import React from "react";
import Todo from "./Todo";

function ToDoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          console.log(todo);
          return (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              text={todo.text}
              id={todo.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
