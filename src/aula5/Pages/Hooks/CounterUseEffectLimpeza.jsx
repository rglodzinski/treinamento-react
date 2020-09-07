import React, { useState, useEffect } from "react";

const CounterUseEffectLimpeza = () => {
    const [inputValue, setInputValue] = useState("");
    const [originalTitle] = useState(document.title);

    const showHourInTitle = () => {
        const now = new Date();
        document.title = `Agora é ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }

    useEffect(() => {
        console.log("Ligando intervalo de showHourInTitle");
        const intervalId = setInterval(showHourInTitle, 1000);
        return () => {
            console.log("LIMPANDO intervalo de showHourInTitle");
            clearInterval(intervalId);
            document.title = originalTitle;
        };
    });

    return (
        <div>
            <p>Você escreveu: {inputValue}</p>
            <input type="text" onChange={e => setInputValue(e.target.value)} />
        </div>
    );
};

export default CounterUseEffectLimpeza;
