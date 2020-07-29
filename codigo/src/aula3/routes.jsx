import React from "react";
import { Switch, Route } from "react-router-dom";

import Sobre from "./Pages/Sobre";
import Painel from "./Pages/Painel";
import Usuarios from "./Pages/Usuarios";
import Topicos from "./Pages/Topicos";
import UsoDeCss from "./Pages/UsoDeCss";
import Bootstrap from "./Pages/Bootstrap";
import MaterialUI from "./Pages/MaterialUI";
import DtpReactComponents from "./Pages/DtpReactComponents";
import DSGov from "./Pages/DSGov";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Painel} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/usuarios" component={Usuarios} />
            <Route path="/topicos" component={Topicos} />
            <Route path="/css" component={UsoDeCss} />
            <Route path="/bootstrap" component={Bootstrap} />
            <Route path="/material-ui" component={MaterialUI} />
            <Route path="/drc" component={DtpReactComponents} />
            <Route path="/dsgov" component={DSGov} />
        </Switch>
    );
};

export default Routes;
