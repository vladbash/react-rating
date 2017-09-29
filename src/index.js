import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";

import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let rootElement = document.getElementById("root");

const routes = <Route></Route>;

ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, rootElement);
  });
}

registerServiceWorker();
