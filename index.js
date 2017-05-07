import React from "react";
import { render } from "react-dom";
import { App } from "./src/app";
import { initializeMaterialUI, initializeServiceWorker } from "./src/initializers";
import OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

initializeMaterialUI();

const containerEl = document.getElementById("container");
render(<App />, containerEl);
