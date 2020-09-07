import React from "react";
import { Switch, Route } from "react-router-dom";

import Painel from "./Pages/Painel";
import HooksPage from "./Pages/Hooks";
import TypescriptPage from "./Pages/Typescript";
import ApiPage from "./Pages/Api";
import ReduxPage from "./Pages/Redux";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Painel} />
      <Route exact path="/hooks" component={HooksPage} />
      <Route exact path="/typescript" component={TypescriptPage} />
      <Route exact path="/api" component={ApiPage} />
      <Route exact path="/redux" component={ReduxPage} />
    </Switch>
  );
};

export default Routes;
