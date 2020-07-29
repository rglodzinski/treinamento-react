import React, { Component } from "react";

import Modal from "../Modal";

class SignUpDialog extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: "" };
    }

    render() {
        const { id, show, onClose } = this.props;
        return (
            <Modal
                id={id}
                show={show}
                onClose={onClose}
                title="Programa de Exploração de Marte">
                <p>Como gostaria de ser chamado?</p>
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Enviar</button>
            </Modal>
        );
    }

    handleChange(e) {
        this.setState({ login: e.target.value });
    }

    handleSignUp() {
        alert(`Bem-vindo a bordo, ${this.state.login}!`);
    }
}

export default SignUpDialog;
