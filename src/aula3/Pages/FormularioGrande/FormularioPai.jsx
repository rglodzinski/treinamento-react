import React, { Component } from "react";

class FormularioPai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputsValues: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createFormInput = index => {
    const name = `${this.props.prefix}_input_${index}`;
    return (
      <div className="col-sm-2" key={index}>
        <div className="form-group">
          <label htmlFor={name}>{`Campo nº ${index}`}</label>
          <input
            id={name}
            name={name}
            value={this.state.inputsValues[name]}
            onChange={event => this.handleChange(event)}
          />
        </div>
      </div>
    );
  };

  render() {
    console.log("Render do PAI foi executado. Estado=", this.state);
    const totalInputs = this.props.totalInputs || 30;
    const inputs = [];

    for (let index = 1; index <= totalInputs; index++) {
      const input = this.createFormInput(index);
      inputs.push(input);
    }

    return (
      <React.Fragment>
        <div className="row">{inputs}</div>
        <hr />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default FormularioPai;
