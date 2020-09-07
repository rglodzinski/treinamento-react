import React, { Fragment } from "react";
import Glossario from "./Glossario";
import KeyboardFocus from "./KeybordFocus";
import ClickForaExemplo from "./ClickForaExemplo";
import ExamploDeBlur from "./ExamploDeBlur";

const Acessibilidade = () => {

    const capitulos = [
        {
            id: 1,
            nome: "Aula 1",
            descricao: "Iniciando a construção de uma aplicação web com React"
        },
        {
            id: 2,
            nome: "Aula 2",
            descricao: "Props e estado dos componentes"
        },
        {
            id: 3,
            nome: "Aula 3",
            descricao: "Composição vs herança"
        },
        {
            id: 4,
            nome: "Aula 4",
            descricao: "Guias avançados de React"
        },
        {
            id: 5,
            nome: "Aula 5",
            descricao: "Mantendo o estado da aplicação usando React Redux"
        },
    ];

    return (
        <Fragment>
            <h1>Exemplos</h1>
            <h2>Exemplo de uso de fragmentos React</h2>
            <Glossario items={capitulos} />
            <br />
            <br />
            <h2>Exemplo foco com o teclado</h2>
            <KeyboardFocus />
            <br />
            <br />
            <h2>Exemplo de uso do mouse</h2>
            <ClickForaExemplo />
            <button>Carregar a opção</button>
            <br />
            <button>Remover a opção</button>
            <br />
            <br />
            <h2>Exemplo de uso do onFocus e onBlur</h2>
            <ExamploDeBlur />
            <button>Carregar a opção</button>
            <br />
            <button>Remover a opção</button>
        </Fragment>
    );
};

export default Acessibilidade;
