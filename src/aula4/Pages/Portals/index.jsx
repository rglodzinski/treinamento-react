import React, { Component } from "react";

import "./styles.scss";
import Modal from "./Modal";

class Portals extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    handleHide() {
        this.setState({ showModal: false });
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div>Conteúdo renderizado fora da div pai</div>
                    <button onClick={this.handleHide}>Fechar Modal</button>
                </div>
            </Modal>
        ) : null;

        return (
            <div className="app" id="app-root">
                <p>Esta div possui overflow: hidden.</p>
                <button onClick={this.handleShow}>Abrir Modal</button>
                {modal}
            </div>
        );
    }
};

export default Portals;
