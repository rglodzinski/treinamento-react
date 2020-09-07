import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      cpf: "",
      idade: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.idadeRef = React.createRef();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert(
      `Valores submetidos: NOME=${this.state.Nome}, CPF=${this.state.cpf}, IDADE=${this.idadeRef.current.value}`
    );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input
            name="nome"
            type="text"
            value={this.state.nomeDaVariavel}
            onChange={this.handleChange}
          />
        </label>
        <label>
          CPF:
          <input
            name="cpf"
            type="text"
            value={this.state.cpf}
            onChange={this.handleChange}
          />
        </label>
        <label>
          IDADE:
          <input type="text" ref={this.idadeRef} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default NameForm;
