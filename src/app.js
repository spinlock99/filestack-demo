import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import db from "./db";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { TodoList } from "./components";

export class App extends Component {
  configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

    if (module.hot) {
      module.hot.accept("./reducer", () => {
        const nextRootReducer = require("./reducer");
        store.replaceReducer(nextRootReducer);
      });
    }

    db.table("todos").toArray().then(todos => {
      todos.forEach(todo => {
        store.dispatch({
          type: "ADD_TODO",
          payload: todo
        });
      });
    });

    return store;
  }

  getData(event) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      console.log(this.responseText);
    }
    xhttp.open("GET", "README.txt", true);
    xhttp.send();
  }

  render() {
    const icon = "muidocs-icon-navigation-expand-more";
    return(
      <Provider store={this.configureStore()}>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Todo PWA"
              iconClassNameRight={icon}
              onLeftIconButtonTouchTap={this.getData}
              zDepth={1}
            />
            <TodoList />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
