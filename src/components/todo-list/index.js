import React from "react";
import { Todo } from "../todo";

function TodoList(props) {
  const { todos } = props;
  console.log("todos: ", todos);

  return (
    <div className="todo">
      <input type="text" placeholder="Add Todo" />
      <ul>
        {todos.map(todo => <li key={todo.get("id")}><Todo todo={todo} /></li>)}
      </ul>
    </div>
  );
}

export { TodoList }
