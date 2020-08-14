import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Aula4 from "./aula4";

ReactDOM.render(
  <React.StrictMode>
    <Aula4 />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
