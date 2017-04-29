import React from "react";
import { Toggle } from "material-ui";

export function Todo({ todo, handleClick }) {
  return(
    <Toggle
      onClick={handleClick}
      label={text(todo)}
      defaultToggled={todo.get("isDone")}
    />
  );
}

function text(todo) {
  const text = todo.get("text");
  return todo.get("isDone") ? <strike>{text}</strike> : <span>{text}</span>;
}
