import React, { Component } from "react";

class BugSimulator extends Component {

    state = {
        handlError: false
    };

    handleSimulateError = () => {
        this.setState({
            handlError: true
        });
    }

    render() {
        if (this.state.handlError) {
            throw new Error("Erro simulado!");
        }
        return <button onClick={this.handleSimulateError}>Simula Erro</button>;
    }
};

export default BugSimulator;
