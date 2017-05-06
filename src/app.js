import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { TodoList } from "./components";

export class App extends Component {
  configureStore() {
    const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
      module.hot.accept("./reducer", () => {
        const nextRootReducer = require("./reducer");
        store.replaceReducer(nextRootReducer);
      });
    }

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
