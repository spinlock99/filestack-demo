import React, { Component } from "react";
import { render } from "react-dom";
import { TodoList } from "./src/components";

class App extends Component {
  render() {
    const todos = [
      { id: 0, isDone: true, text: "make components" },
      { id: 1, isDone: false, text: "design actions" },
      { id: 2, isDone: false, text: "implement reducer" },
      { id: 3, isDone: false, text: "connect components" }

    ];

    return <TodoList todos={todos} />;
  }
}

const containerEl = document.getElementById("container");
render(<App />, containerEl);
