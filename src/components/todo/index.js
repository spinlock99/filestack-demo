import React from "react";

function Todo({ todo }) {
  if (todo.get("isDone")) {
    return <strike>{todo.get("text")}</strike>;
  } else {
    return <span>{todo.get("text")}</span>;
  }
}

export { Todo };
