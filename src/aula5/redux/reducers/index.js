import { combineReducers } from "redux";

import tarefasReducer from "./tarefas.reducer";
import contadorReducer from "./contador.reducer";

const rootReducer = combineReducers({
  tarefas: tarefasReducer,
  contador: contadorReducer
});

export default rootReducer;
