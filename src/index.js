import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";

import Aula4 from "./aula4";

ReactDOM.render(<Aula4 />, document.getElementById("root"));
serviceWorker.register();
