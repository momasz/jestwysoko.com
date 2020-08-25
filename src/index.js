import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/main.scss";
import {
  BrowserRouter as Router
} from "react-router-dom";

let target = document.getElementById("app");

ReactDOM.render(
  <Router>
    <App randomizeVideos={true} />
  </Router>
  , target);
