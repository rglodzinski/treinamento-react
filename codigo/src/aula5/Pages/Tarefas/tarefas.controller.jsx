import React, { useState, useEffect } from "react";
import ListaTarefas from "./tarefas.list";

const TAREFAS_API_BASE_URL = "http://10.107.5.150/api";
const jsonHeaders = new Headers({ "Content-Type": "application/json" });

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const carregarTarefas = () => {
    console.log("carregarTarefas");
    fetch(`${TAREFAS_API_BASE_URL}/tasks`, {
      method: "GET",
      headers: jsonHeaders
    }).then(response => {
      console.log("carregarTarefas, response=", response);
      response.json().then(tarefas => {
        console.log("Tarefas=", tarefas);
        setTarefas(tarefas);
      });
    });
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const incluir = async tarefa => {
    console.log("incluir=", tarefa);
    const response = await fetch(`${TAREFAS_API_BASE_URL}/tasks`, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(tarefa)
    });
    console.log("incluir, response=", response);
    response.json().then(tarefaIncluida => {
      console.log("Tarefa Incluída=", tarefaIncluida);
      carregarTarefas();
    });
  };

  const editar = async tarefa => {
    console.log("editar=", tarefa);
    const response = await fetch(
      `${TAREFAS_API_BASE_URL}/tasks/${tarefa._id}`,
      {
        method: "PUT",
        headers: jsonHeaders,
        body: JSON.stringify(tarefa)
      }
    );
    console.log("editar, response=", response);
    response.json().then(tarefaEditada => {
      console.log("Tarefa Editada=", tarefaEditada);
      carregarTarefas();
    });
  };

  const excluir = async tarefa => {
    console.log("excluir=", tarefa);
    const response = await fetch(
      `${TAREFAS_API_BASE_URL}/tasks/${tarefa._id}`,
      {
        method: "DELETE",
        headers: jsonHeaders,
        body: JSON.stringify(tarefa)
      }
    );
    console.log("excluir, response=", response);
    carregarTarefas();
  };

  const acoes = { incluir, editar, excluir };

  return <ListaTarefas acoes={acoes} tarefas={tarefas} />;
};

export default Tarefas;
