import React from "react";
import { render } from "react-dom";
import { TodoList } from "./components/todos";

const todos = [
  { id: 0, isDone: true, text: "make components" }
];

render(<TodoList todos={todos} />, document.getElementById("app"));
