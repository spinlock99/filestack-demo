import injectTapEventPlugin from "react-tap-event-plugin";

export function initializeMaterialUI() {
  if (window.INJECT_TAP_EVENT) { return null; }

  window.INJECT_TAP_EVENT = true;
  injectTapEventPlugin();
}
