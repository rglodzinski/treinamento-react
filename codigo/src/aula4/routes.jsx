import React from "react";
import { Switch, Route } from "react-router-dom";

import Painel from "./Pages/Painel";
import Refs from "./Pages/Refs";
import Acessibilidade from "./Pages/Acessibilidade";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Painel} />
            <Route path="/refs" component={Refs} />
            <Route path="/acessibilidade" component={Acessibilidade} />
        </Switch>
    );
};

export default Routes;
