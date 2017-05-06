import runtime from "serviceworker-webpack-plugin/lib/runtime";

export function initializeServiceWorker() {
  if(!("serviceWorker" in navigator)) { return null; }
  const registration = runtime.register();
}
