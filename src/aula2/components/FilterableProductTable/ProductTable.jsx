import React from "react";

import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = props => {
    const { filterText, inStockOnly, products } = props;

    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        const { name, stocked, category } = product;
        if (name.indexOf(filterText) === -1) {
            return;
        }
        if (inStockOnly && !stocked) {
            return;
        }
        if (category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={category}
                    key={category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={name}
            />
        );
        lastCategory = category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

export default ProductTable;
