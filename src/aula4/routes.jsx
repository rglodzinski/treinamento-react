import React from "react";
import { Switch, Route } from "react-router-dom";

import Painel from "./Pages/Painel";
import Refs from "./Pages/Refs";
import Acessibilidade from "./Pages/Acessibilidade";
import Contexto from "./Pages/Contexto";
import ErrorBoundaryView from "./Pages/ErrorBoundary";
import Hocs from "./Pages/HOCs";
import Portals from "./Pages/Portals";
import PropTypesChecking from "./Pages/PropTypes";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Painel} />
            <Route path="/refs" component={Refs} />
            <Route path="/acessibilidade" component={Acessibilidade} />
            <Route path="/contexto" component={Contexto} />
            <Route path="/error-boundary" component={ErrorBoundaryView} />
            <Route path="/hocs" component={Hocs} />
            <Route path="/portals" component={Portals} />
            <Route path="/prop-types" component={PropTypesChecking} />
        </Switch>
    );
};

export default Routes;
