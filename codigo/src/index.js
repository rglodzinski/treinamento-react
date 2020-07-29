import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./index.css";


// import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import Aula1 from "./aula1/components";
// import Aula2 from "./aula2/components";
import Aula3 from "./aula3";

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

/*
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById("hello-world")
);
*/

/*
function tick() {
  const elemento = (
    <div>
      <h1>Olá!</h1>
      <h2>Agora é {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(elemento, document.getElementById("relogio"));
};

setInterval(tick, 1000);
*/

/*
function Ola(props) {
  return <h1>Olá, {props.nome}</h1>;
}

const elemento = <Ola nome="Ricardo" />;
ReactDOM.render(
  elemento,
  document.getElementById("componente-ola")
);
*/

/*
function Composicao() {
  return (
    <div>
      <Ola nome="Ricardo" />
      <Ola nome="José" />
    </div>
  );
}

ReactDOM.render(
  <Composicao />,
  document.getElementById("composicao")
);
*/

/*
ReactDOM.render(
  <React.StrictMode>
    <Aula2 />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

ReactDOM.render(
  <React.StrictMode>
    <Aula3 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
