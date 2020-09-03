import React from "react";
import "@govbr/design-system/dist/css/dsgov.min.css";

const DSGov = () => {
    return (
        <div>
            <button className="br-button primary" type="button">Entrar</button>
            <button className="br-button secondary" type="button">Voltar</button>
            <button className="br-button action" type="button">Adicionar</button>
            <button className="br-button tertiary" type="button">Fazer Login</button>
        </div>
    );
};

export default DSGov;
