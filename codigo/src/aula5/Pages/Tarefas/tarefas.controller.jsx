import React, { useState, useEffect } from "react";
import ListaTarefas from "./tarefas.list";
// import actions from "./actions-fetch";
import actions from "./actions-axios";

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const handleCarregar = () => {
    actions.carregar().then(tarefas => setTarefas(tarefas));
  };

  useEffect(() => handleCarregar(), []);

  const handleIncluir = tarefa =>
    actions.incluir(tarefa).then(() => handleCarregar());

  const handleEditar = tarefa =>
    actions.editar(tarefa).then(() => handleCarregar());

  const handleExcluir = tarefa =>
    actions.excluir(tarefa).then(() => handleCarregar());

  const acoes = {
    incluir: handleIncluir,
    editar: handleEditar,
    excluir: handleExcluir
  };

  return <ListaTarefas acoes={acoes} tarefas={tarefas} />;
};

export default Tarefas;
