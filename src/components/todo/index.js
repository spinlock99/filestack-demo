import React from "react";
import { Toggle } from "material-ui";

export function Todo({ todo, handleClick }) {
  const [text, isDone] = ["text", "isDone"].map(param => todo.get(param));
  const label = isDone ? <strike>{text}</strike> : <span>{text}</span>;

  return <Toggle label={label} defaultToggled={isDone} onClick={handleClick} />;
}
