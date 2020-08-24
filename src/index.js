import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/main.scss";

let target = document.getElementById("app");

ReactDOM.render(<App randomizeVideos={true} />, target);
