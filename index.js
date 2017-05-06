import React from "react";
import { render } from "react-dom";
import { App } from "./src/app";

import injectTapEventPlugin from "react-tap-event-plugin";
if (!window.INJECT_TAP_EVENT) {
  window.INJECT_TAP_EVENT = true;
  injectTapEventPlugin();
}

import runtime from "serviceworker-webpack-plugin/lib/runtime";
if("serviceWorker" in navigator) {
  const registration = runtime.register();
}

const containerEl = document.getElementById("container");
render(<App />, containerEl);
