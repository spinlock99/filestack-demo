import "react-hot-loader/patch";
import React from "react";
import { render } from "react-dom";

//import { AppContainer } from "react-hot-loader";
import { TodoList } from "./components/todos";

render(<TodoList />, document.getElementById("app"));
