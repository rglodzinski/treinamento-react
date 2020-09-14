import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";

import Aula3 from "./aula3";

ReactDOM.render(<Aula3 />, document.getElementById("root"));
serviceWorker.register();
