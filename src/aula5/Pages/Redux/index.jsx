import React, { useEffect } from "react";
import { connect } from "react-redux";

import ListaTarefas from "../Tarefas/tarefas.list";

import {
  carregar,
  incluir,
  editar,
  excluir
} from "../../redux/reducers/tarefas.reducer";

const ReduxPage = props => {
  const { tarefas } = props;

  useEffect(() => {
    props.carregar();
  }, []);

  const acoes = {
    incluir: props.incluir,
    editar: props.editar,
    excluir: props.excluir
  };

  return <ListaTarefas acoes={acoes} tarefas={tarefas} />;
};

const mapStateToProps = state => ({
  tarefas: state.tarefas.listaTarefas
});

const mapDispatchToProps = {
  carregar,
  incluir,
  editar,
  excluir
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
