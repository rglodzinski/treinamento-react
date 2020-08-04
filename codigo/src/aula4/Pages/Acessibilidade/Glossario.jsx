import React from "react";

const ListaItem = ({ item }) => {
    const { nome, descricao } = item;
    return (
        <>
            <dt>{nome}</dt>
            <dd>{descricao}</dd>
        </>
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
