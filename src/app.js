import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import ReactFilestack from "react-filestack";
import { config } from "../config";

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

    return store;
  }

  render() {
    const icon = "muidocs-icon-navigation-expand-more";
    return(
      <Provider store={this.configureStore()}>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Filestack Demo"
              iconClassNameRight={icon}
              zDepth={1}
            />
            <ReactFilestack
              apikey={config.filestackKey}
              buttonText="Filestack Demo"
              onSuccess={() => alert("success")}
              render={({ onPick }) => (
                <div style={{ marginTop: "40vh", textAlign: "center" }}>
                  <RaisedButton
                    label="Upload a File"
                    onClick={onPick}
                  />
                </div>
              )}
            />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
