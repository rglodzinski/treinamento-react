import React from "react";
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";
import Topico from "./Topico";

const Topicos = () => {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Tópicos</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/componentes`}>Componentes</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-vs-state`}>Props vs. State</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:topicoId`}>
                    <Topico />
                </Route>
                <Route path={match.path}>
                    <h3>Selecione um tópico.</h3>
                </Route>
            </Switch>
        </div>
    );
};

export default Topicos;
