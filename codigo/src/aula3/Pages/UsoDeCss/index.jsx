import React from "react";
import classnames from "classnames";

import "./estilos.css";
import SassButton from "../../components/SassButton";

const UsoDeCss = props => {

    const { isActive = true } = props;

    return (
        <div className="wrapper">
            <header>
                <div className="section">
                    <span
                        className={classnames("menu", { "active": isActive })}>
                        Menu
                    </span>
                </div>
            </header>
            <div className="content">
                <div className="section">
                    <h1>Conteúdo</h1>
                    <br />
                    <SassButton>Botão Normal</SassButton>
                    <SassButton flat>Botão Flat</SassButton>
                    <SassButton small>Botão Pequeno</SassButton>
                    <SassButton large>Botão Grande</SassButton>
                </div>
            </div>
            <footer>
                <div className="section">Rodapé</div>
            </footer>
        </div>
    );
};

export default UsoDeCss;
