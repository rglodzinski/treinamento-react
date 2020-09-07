import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = () => {

    return (
        <nav>
            <ul className="menu">
                <li><Link to="/">Painel</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/usuarios">Usuários</Link></li>
                <li><Link to="/topicos">Tópicos</Link></li>
                <li><Link to="/css">Exemplos de Uso de CSS</Link></li>
                <li><Link to="/bootstrap">Bootstrap</Link></li>
                <li><Link to="/material-ui">Material-UI</Link></li>
                <li><Link to="/drc">Starscream-Theme + Dtp-React-Components</Link></li>
                <li><Link to="/dsgov">DS Gov</Link></li>
                <li><Link to="/wc">WebComponents</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
