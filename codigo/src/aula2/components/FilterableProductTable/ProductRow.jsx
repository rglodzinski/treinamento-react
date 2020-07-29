import React from "react";

const ProductRow = props => {
    const { product } = props;
    const { stocked, name, price } = product;
    const nameComponent = stocked ? name : <span style={{ color: "red" }}>{name}</span>;

    return (
        <tr>
            <td>{nameComponent}</td>
            <td>{price}</td>
        </tr>
    );
};

export default ProductRow;
