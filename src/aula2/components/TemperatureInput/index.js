import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>
          Informe a temperatura em {scaleNames[this.props.scale]}:
        </legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
