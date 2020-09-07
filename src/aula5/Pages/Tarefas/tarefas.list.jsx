import React from "react";
import MaterialTable from "material-table";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { localizationProp } from "./materialTableBr";

const ListaTarefas = props => {
  const situacoes = ["Criada", "Em Andamento", "Cancelada", "Concluída"];

  const { tarefas, acoes } = props;
  const { incluir, editar, excluir } = acoes;

  const situacaoField = props => {
    return (
      <FormControl>
        <Select
          defaultValue="Criada"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        >
          {situacoes.map((situacao, index) => (
            <MenuItem key={index} value={situacao}>
              {situacao}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const colunas = [
    { title: "Identificador", field: "_id", editable: "never" },
    { title: "Descrição", field: "descricao" },
    {
      title: "Data Criação",
      field: "dataCriacao",
      type: "date",
      initialEditValue: new Date()
    },
    { title: "Data Início", field: "dataInicio", type: "date" },
    { title: "Data Previsão", field: "dataPrevisao", type: "date" },
    { title: "Data Fim", field: "dataFim", type: "date" },
    {
      title: "Situação",
      field: "situacao",
      editComponent: situacaoField
    }
  ];

  return (
    <MaterialTable
      dateSetting={{
        locale: "pt_BR"
      }}
      localization={localizationProp}
      columns={colunas}
      editable={{
        onRowAdd: incluir,
        onRowUpdate: editar,
        onRowDelete: excluir
      }}
      data={tarefas}
      title="Lista de Tarefas"
    />
  );
};

export default ListaTarefas;
