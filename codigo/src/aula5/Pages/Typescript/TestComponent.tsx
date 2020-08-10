import * as React from "react";

type ITestComponent = {
    name: String;
}

const TestComponent = (props: ITestComponent) => {
    const { name } = props;
    return (
        <div>Olá {name}, seja bem vindo ao uso de TypeScript!</div>
    );
};

export default TestComponent;
