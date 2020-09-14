import React, { Component } from "react";
import FormularioPai from "./FormularioPai";

class FormularioFilho extends Component {
  state = {
    inputNomeValue: ""
  };

  handleChangeNome = event => {
    this.setState({
      inputNomeValue: event.target.value
    });
  };

  render() {
    console.log("Render do FILHO foi executado");

    return (
      <React.Fragment>
        <FormularioPai prefix="filho" totalInputs="200" />
        <div className="row">
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor="input-nome">Nome</label>
              <input
                id="input-nome"
                value={this.state.inputNomeValue}
                onChange={event => this.handleChangeNome(event)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormularioFilho;
