import React from "react";
import { useAuth } from "../Pages/Hooks/useAuth";

const Footer = () => {
    const auth = useAuth();
    return (
        <footer>
            {auth && auth.user &&
                <div>Usuário autenticado: <b>{auth.user.nome}</b></div>
            }
            {(!auth || !auth.user) &&
                <div>Nenhum usuário autenticado</div>
            }
        </footer>
    );
};

export default Footer;
