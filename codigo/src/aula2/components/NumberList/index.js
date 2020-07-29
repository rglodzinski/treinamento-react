import React from "react";

const NumberList = props => {

    const ListItem = props => (<li>{props.value}</li>);

    const items = props.items;

    const listItems = items.map(item =>
        <ListItem key={item.id} value={item.value} />
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default NumberList;