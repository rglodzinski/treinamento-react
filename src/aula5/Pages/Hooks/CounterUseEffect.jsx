import React, { useState, useEffect } from "react";

const CounterUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes no botão`;
    });

    return (
        <div>
            <p>Você clicou {count} vezes no botão</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
};

export default CounterUseEffect;
