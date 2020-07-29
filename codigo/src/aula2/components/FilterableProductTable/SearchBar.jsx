import React from "react";

const SearchBar = props => {
    const { filterText, inStockOnly } = props;

    const handleFilterTextChange = e => {
        props.onFilterTextChange(e.target.value);
    };

    const handleInStockChange = e => {
        props.onInStockChange(e.target.checked);
    };

    return (
        <form>
            <input
                type="text"
                placeholder="Pesquisar..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleInStockChange}
                />
                {" "}
                Exibir apenas produtos em estoque
            </p>
        </form>
    );
};

export default SearchBar;
