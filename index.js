import React from "react";
import { render } from "react-dom";
import { App } from "./src/app";
import { initializeMaterialUI, initializeServiceWorker } from "./src/initializers";

initializeMaterialUI();
initializeServiceWorker();

const containerEl = document.getElementById("container");
render(<App />, containerEl);
