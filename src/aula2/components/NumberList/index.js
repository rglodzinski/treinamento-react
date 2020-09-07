import React from "react";

const NumberList = (props) => {
  const ListItem = (props) => (
    <li>
      {props.identificador} - {props.value}
    </li>
  );

  props.items.forEach((element) => {
    console.log("Elemento: ", element);
  });

  const listItems = props.items.map(function (item) {
    return (
      <ListItem
        identificador={item.identificador}
        key={item.identificador}
        value={item.value}
      />
    );
  });

  const lista = props.items.map(function (item) {
    return (
      <ListItem
        identificador={item.identificador}
        key={item.identificador}
        value={item.value}
      />
    );
  });

  return (
    <div>
      <ul>{listItems}</ul>
      <ul>{lista}</ul>
    </div>
  );
};

export default NumberList;
