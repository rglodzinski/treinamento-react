import React from "react";
import Counter from "./Counter";
import CounterUseEffect from "./CounterUseEffect";
import CounterUseEffectLimpeza from "./CounterUseEffectLimpeza";
import CustomHooks from "./CustomHooks";

const HooksPage = () => {
    return (
        <div>
            <Counter />
            <hr />
            <CounterUseEffect />
            <hr />
            <CounterUseEffectLimpeza />
            <hr />
            <CustomHooks />
        </div>
    );
};

export default HooksPage;