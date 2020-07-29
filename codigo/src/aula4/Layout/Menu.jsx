import React from "react";
import { Link } from "react-router-dom";

import "./menu.scss";

const Menu = () => {

    return (
        <nav>
            <ul className="menu">
                <li><Link to="/">Refs</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
