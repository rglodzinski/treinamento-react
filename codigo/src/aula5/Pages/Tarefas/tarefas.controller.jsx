import React, { useState, useEffect } from "react";
import ListaTarefas from "./tarefas.list";

const TAREFAS_API_BASE_URL = "http://10.107.5.150/api";
const jsonHeaders = new Headers({ "Content-Type": "application/json" });

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const fetchTarefas = () => {
    console.log("fetchTarefas");
    fetch(`${TAREFAS_API_BASE_URL}/tasks`, {
      method: "GET"
    }).then(response => {
      console.log("fetchTarefas, response=", response);

      response.json().then(tarefas => {
        console.log("Tarefas=", tarefas);
        setTarefas(tarefas);
      });
    });
  };

  useEffect(() => {
    fetchTarefas();
  }, []);

  return (
    <>
      <ListaTarefas tarefas={tarefas} />
    </>
  );
};

export default Tarefas;
