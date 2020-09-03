import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Aula4 from "./aula4";

ReactDOM.render(<Aula4 />, document.getElementById("root"));

serviceWorker.unregister();
