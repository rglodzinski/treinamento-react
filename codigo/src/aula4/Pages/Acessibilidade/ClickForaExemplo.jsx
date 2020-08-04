import React, { Component } from 'react';

class ClickForaExemplo extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
        this.toggleContainer = React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    onClickOutsideHandler(event) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Selecione uma opção</button>
                {this.state.isOpen && (
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                    </ul>
                )}
            </div>
        );
    }
}

export default ClickForaExemplo;
