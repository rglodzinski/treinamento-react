import axios from "axios";

const TAREFAS_API_BASE_URL = "http://10.107.5.150/api/tasks";

const carregar = async () => {
  const response = await axios.get(TAREFAS_API_BASE_URL);
  return response.data;
};

const incluir = async tarefa => {
  const response = await axios.post(TAREFAS_API_BASE_URL, tarefa);
  return response.data;
};

const editar = async tarefa => {
  const response = await axios.put(
    `${TAREFAS_API_BASE_URL}/${tarefa._id}`,
    tarefa
  );
  return response.data;
};

const excluir = async tarefa => {
  const response = await axios.delete(
    `${TAREFAS_API_BASE_URL}/${tarefa._id}`,
    tarefa
  );
  return response.data;
};

export default { carregar, incluir, editar, excluir };
