import React, { Component } from "react";
import { render } from "react-dom";
import { TodoList } from "./src/components";
import { List, Map } from "immutable";

class App extends Component {
  render() {
    const todos = List([
      Map({ id: 0, isDone: true, text: "make components" }),
      Map({ id: 1, isDone: false, text: "design actions" }),
      Map({ id: 2, isDone: false, text: "implement reducer" }),
      Map({ id: 3, isDone: false, text: "connect components" })
    ]);

    return <TodoList todos={todos} />;
  }
}

const containerEl = document.getElementById("container");
render(<App />, containerEl);
