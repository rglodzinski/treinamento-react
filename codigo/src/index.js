import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Aula5 from "./aula5";

ReactDOM.render(
  <React.StrictMode>
    <Aula5 />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
