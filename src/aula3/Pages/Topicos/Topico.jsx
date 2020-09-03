import React from "react";
import { useParams } from "react-router-dom";

const Topico = () => {
  let { nome } = useParams();
  return <h3>Tópico selecionado: {nome}</h3>;
};

export default Topico;
