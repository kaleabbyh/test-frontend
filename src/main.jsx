/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import strore from "./store/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={strore}>
    <App />
  </Provider>
);
