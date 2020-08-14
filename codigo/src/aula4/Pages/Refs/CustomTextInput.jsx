import React, { Component } from "react";

class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput() {
    this.textInput.current.focus();
    this.textInput.current.value = "Testes";
    alert("Executou");
  }

  render() {
    return (
      <div>
        <input
          aria-label="Nome"
          type="text"
          ref={this.textInput}
          placeholder="Informe um nome"
        />
        <input
          autoFocus={false}
          type="button"
          value="Focar no input de texto"
          onClick={this.focusTextInput.bind(this)}
        />
      </div>
    );
  }
}

export default CustomTextInput;
