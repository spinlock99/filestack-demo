import React, { Component } from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { TodoList } from "./src/components";
import reducer from "./src/reducer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import injectTapEventPlugin from "react-tap-event-plugin";
if (!window.INJECT_TAP_EVENT) {
  window.INJECT_TAP_EVENT = true;
  injectTapEventPlugin();
}

import runtime from "serviceworker-webpack-plugin/lib/runtime";
if("serviceWorker" in navigator) {
  const registration = runtime.register();
}

class App extends Component {
  configureStore() {
    const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    if (module.hot) {
      module.hot.accept("./src/reducer", () => {
        const nextRootReducer = require("./src/reducer");
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

const containerEl = document.getElementById("container");
render(<App />, containerEl);
