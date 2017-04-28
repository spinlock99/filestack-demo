import React, { Component } from "react";
import { render } from "react-dom";
import { TodoList } from "./src/components/todos";

class App extends Component {
  render() {
    const todos = [
      { id: 0, isDone: false, text: "make components" }
    ];

    return <TodoList todos={todos} />;
  }
}

const containerEl = document.getElementById("container");
render(<App />, containerEl);
