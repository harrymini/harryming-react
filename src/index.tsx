import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CommonProvider } from "./commonContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <CommonProvider>
      <App />
    </CommonProvider>
  </React.StrictMode>
);
