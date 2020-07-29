import React from "react";
import { useParams } from "react-router-dom";

const Topico = () => {
    let { topicoId } = useParams();
    return <h3>Tópico selecionado: {topicoId}</h3>;
};

export default Topico;
