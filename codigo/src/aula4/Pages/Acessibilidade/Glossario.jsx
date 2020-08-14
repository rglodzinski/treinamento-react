import React from "react";

const ListaItem = ({ item }) => {
  const { nome, descricao } = item;
  return (
    <React.Fragment>
      <dt>{nome}</dt>
      <dd>{descricao}</dd>
    </React.Fragment>
  );
};

const Glossario = props => {
  const { items } = props;
  return (
    <dl>
      {items.map(item => (
        <ListaItem item={item} key={item.id} />
      ))}
    </dl>
  );
};

export default Glossario;
