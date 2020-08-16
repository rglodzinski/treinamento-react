const TAREFAS_API_BASE_URL = "http://10.107.5.150/api/tasks";
const jsonHeaders = new Headers({ "Content-Type": "application/json" });

const carregar = async () => {
  console.log("carregarTarefas");
  const response = await fetch(`${TAREFAS_API_BASE_URL}`, {
    method: "GET",
    headers: jsonHeaders
  });
  console.log("carregarTarefas, response=", response);
  const tarefas = await response.json();
  console.log("Tarefas=", tarefas);
  return tarefas;
};

const incluir = async tarefa => {
  console.log("incluir=", tarefa);
  const response = await fetch(`${TAREFAS_API_BASE_URL}`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(tarefa)
  });
  console.log("incluir, response=", response);
  const tarefaIncluida = await response.json();
  console.log("Tarefa Incluída=", tarefaIncluida);
  return tarefaIncluida;
};

const editar = async tarefa => {
  console.log("editar=", tarefa);
  const response = await fetch(`${TAREFAS_API_BASE_URL}/${tarefa._id}`, {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(tarefa)
  });
  console.log("editar, response=", response);
  const tarefaEditada = await response.json();
  console.log("Tarefa Editada=", tarefaEditada);
  return tarefaEditada;
};

const excluir = async tarefa => {
  console.log("excluir=", tarefa);
  const response = await fetch(`${TAREFAS_API_BASE_URL}/${tarefa._id}`, {
    method: "DELETE",
    headers: jsonHeaders,
    body: JSON.stringify(tarefa)
  });
  console.log("excluir, response=", response);
};

export default { carregar, incluir, editar, excluir };
