import React from "react";
import PropTypes from "prop-types";

const fieldsetStyles = {
    border: "solid 1px #d1d2d3",
    padding: "10px",
    marginBottom: "15px"
};

const UserInfo = props => {
    const { id, nome, cpf, idade, telefones } = props;

    const renderTelefone = telefone => {
        const { id, ddd, numero } = telefone;
        return <div key={id}>({ddd}) {numero}</div>;
    };

    return (
        <fieldset style={fieldsetStyles}>
            <label>Informações do Usuários - ID {id}</label>
            <dl>
                <dt>Nome</dt>
                <dd>{nome}</dd>
                <dt>CPF</dt>
                <dd>{cpf}</dd>
                <dt>Idade</dt>
                <dd>{idade}</dd>
            </dl>
            {telefones && telefones.length > 0 &&
                <fieldset style={fieldsetStyles}>
                    <label>Telefones</label>
                    {telefones.map(renderTelefone)}
                </fieldset>
            }
        </fieldset>
    );
};

UserInfo.propTypes = {
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    cpf: PropTypes.number.isRequired,
    idade: PropTypes.number.isRequired,
    telefones: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        ddd: PropTypes.number.isRequired,
        numero: PropTypes.number.isRequired,
        tipo: PropTypes.oneOf(["RESIDENCIAL", "PROFISSIONAL", "CELULAR", "RECADO"])
    }))
};

export default UserInfo;
