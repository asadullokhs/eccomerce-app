import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MyStoreProvider } from "./context/Mystore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MyStoreProvider>
    <ToastContainer />
    <App />
  </MyStoreProvider>
);
