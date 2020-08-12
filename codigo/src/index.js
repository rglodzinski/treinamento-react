import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Aula3 from "./aula3";

ReactDOM.render(
  <React.StrictMode>
    <Aula3 />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
