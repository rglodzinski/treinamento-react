import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";

import Aula5 from "./aula5";

ReactDOM.render(<Aula5 />, document.getElementById("root"));
serviceWorker.register();
