import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import Twitter from "./components/Twitter";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Twitter />
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
