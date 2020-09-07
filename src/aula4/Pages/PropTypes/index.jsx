import React from "react";

import infoUsuarios from "./usuarios.json";
import UserInfo from "./UserInfo";

const PropTypesChecking = () => {

    const renderUsuario = usuario => {
        return <UserInfo key={usuario.id} {...usuario} />
    }

    return (
        <div>
            <h1>Usuários</h1>
            {infoUsuarios && infoUsuarios.map(renderUsuario)}
        </div>
    );
};

export default PropTypesChecking;
