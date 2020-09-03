import React, { Component } from "react";

class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        );
    }
}

export default ToggleButton;