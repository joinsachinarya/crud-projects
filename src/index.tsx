import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { createStore } from "easy-peasy";
import { StoreProvider } from "easy-peasy";
import { state } from "./state/state";
const store = createStore(state);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
