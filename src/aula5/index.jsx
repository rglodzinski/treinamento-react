import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Menu from "./Layout/Menu";
import Routes from "./routes";

import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
        <br />
        <div className="container">
          <Routes />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
