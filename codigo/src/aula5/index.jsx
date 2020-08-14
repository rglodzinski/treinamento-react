import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "./Layout/Menu";
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Menu />
        <br />
        <div className="container">
          <Routes />
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
