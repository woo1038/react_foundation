import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>water boil</p>
    }
    return <p>water not boil</p>
}

function toCelsius(f) {
    return (f - 32) * 5 / 9;
}

function toFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function tryConvert(t, c) {
    const input = parseFloat(t);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = c(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale : 'c',
            temperature: ''
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({ scale: 'c', temperature: temperature})
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({ scale: 'f', temperature: temperature})
    }

    render() {
        const { scale, temperature } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        
        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }

}

export default Calculator;