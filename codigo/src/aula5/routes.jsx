import React from "react";
import { Switch, Route } from "react-router-dom";

import Painel from "./Pages/Painel";
import HooksPage from "./Pages/Hooks";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Painel} />
            <Route exact path="/hooks" component={HooksPage} />
        </Switch>
    );
};

export default Routes;
