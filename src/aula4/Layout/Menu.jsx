import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/refs">Refs</Link>
        </li>
        <li>
          <Link to="/acessibilidade">Acessibilidade</Link>
        </li>
        <li>
          <Link to="/contexto">Contexto</Link>
        </li>
        <li>
          <Link to="/error-boundary">ErrorBoundaries</Link>
        </li>
        <li>
          <Link to="/hocs">HOCs</Link>
        </li>
        <li>
          <Link to="/portals">Portals</Link>
        </li>
        <li>
          <Link to="/prop-types">Prop-Types</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
