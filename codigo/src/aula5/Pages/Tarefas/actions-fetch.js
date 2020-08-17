const TAREFAS_API_BASE_URL = "http://10.107.5.150/api/tasks";
const jsonHeaders = new Headers({ "Content-Type": "application/json" });

const carregar = async () => {
  const response = await fetch(`${TAREFAS_API_BASE_URL}`, {
    method: "GET",
    headers: jsonHeaders
  });
  const tarefas = await response.json();
  return tarefas;
};

const incluir = async tarefa => {
  const response = await fetch(`${TAREFAS_API_BASE_URL}`, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(tarefa)
  });
  const tarefaIncluida = await response.json();
  return tarefaIncluida;
};

const editar = async tarefa => {
  const response = await fetch(`${TAREFAS_API_BASE_URL}/${tarefa._id}`, {
    method: "PUT",
    headers: jsonHeaders,
    body: JSON.stringify(tarefa)
  });
  const tarefaEditada = await response.json();
  return tarefaEditada;
};

const excluir = async tarefa => {
  await fetch(`${TAREFAS_API_BASE_URL}/${tarefa._id}`, {
    method: "DELETE",
    headers: jsonHeaders,
    body: JSON.stringify(tarefa)
  });
};

export default { carregar, incluir, editar, excluir };
