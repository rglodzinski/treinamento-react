import axios from "../config/axios";

const TAREFAS_PATH = "/tasks";

const initialState = {
  listaTarefas: []
};

export const ACTION_TYPES = {
  CARREGAR: "tarefa/CARREGAR",
  INCLUIR: "tarefa/CRIAR",
  ATUALIZAR: "tarefa/ATUALIZAR",
  EXCLUIR: "tarefa/APAGAR"
};

export default (state = initialState, action) => {
  const { listaTarefas } = state;
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.CARREGAR:
      return { ...state, listaTarefas: payload };
    case ACTION_TYPES.INCLUIR:
      return { ...state, listaTarefas: [...listaTarefas, payload] };
    case ACTION_TYPES.ATUALIZAR:
      return {
        ...state,
        listaTarefas: listaTarefas.map(tarefa =>
          tarefa._id === payload._id ? payload : tarefa
        )
      };
    case ACTION_TYPES.EXCLUIR:
      return {
        ...state,
        listaTarefas: listaTarefas.filter(tarefa => tarefa._id !== payload._id)
      };
    default:
      return state;
  }
};

export const carregar = () => dispatch =>
  axios.get(TAREFAS_PATH).then(response =>
    dispatch({
      type: ACTION_TYPES.CARREGAR,
      payload: response.data
    })
  );

export const incluir = tarefa => dispatch =>
  axios.post(TAREFAS_PATH, tarefa).then(response =>
    dispatch({
      type: ACTION_TYPES.INCLUIR,
      payload: response.data
    })
  );

export const editar = tarefa => dispatch =>
  axios.put(`${TAREFAS_PATH}/${tarefa._id}`, tarefa).then(response =>
    dispatch({
      type: ACTION_TYPES.ATUALIZAR,
      payload: response.data
    })
  );

export const excluir = tarefa => dispatch =>
  axios.delete(`${TAREFAS_PATH}/${tarefa._id}`, tarefa).then(response =>
    dispatch({
      type: ACTION_TYPES.EXCLUIR,
      payload: tarefa
    })
  );
