import { combineReducers } from "redux";

import tarefasReducer from "./tarefas.reducer";

const rootReducer = combineReducers({
  tarefas: tarefasReducer
});

export default rootReducer;
