import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Painel</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/usuarios">Usuários</Link>
                </li>
                <li>
                    <Link to="/topicos">Tópicos</Link>
                </li>
                <li>
                    <Link to="/css">Exemplos de Uso de CSS</Link>
                </li>
                <li>
                    <Link to="/bootstrap">Bootstrap</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
