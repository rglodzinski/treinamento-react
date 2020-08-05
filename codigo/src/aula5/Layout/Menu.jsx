import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = () => {

    return (
        <nav>
            <ul className="menu">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/hooks">Hooks</Link></li>
                <li><Link to="/typescript">TypeScript</Link></li>
                <li><Link to="/api">Consumindo API</Link></li>
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/producao">Empacotamento Produção</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
