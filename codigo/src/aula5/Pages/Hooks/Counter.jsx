import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes no botão</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
};

export default Counter;
