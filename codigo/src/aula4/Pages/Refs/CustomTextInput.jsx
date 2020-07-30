import React, { Component } from "react";

class CustomTextInput extends Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <input type="button" value="Focar no input de texto" onClick={this.focusTextInput} />
            </div>
        );
    }
}

export default CustomTextInput;
