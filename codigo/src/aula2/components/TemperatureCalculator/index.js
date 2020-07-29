import React, { Component } from "react";
import { tryConvert, toCelsius, toFahrenheit } from "../../../utils/temperature";
import TemperatureInput from "../TemperatureInput";

const BoilingVerdict = props => {
    if (props.celsius >= 100) {
        return <p>A água ferveria.</p>;
    }
    return <p>A água não ferveria.</p>;
};

class TemperatureCalculator extends Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: "", scale: "c" };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: "c", temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: "f", temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default TemperatureCalculator;