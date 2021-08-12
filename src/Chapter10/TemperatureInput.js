import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrengeit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        this.props.onTemperatureChange(event.target.value);
        console.log(event);
    }

    render() {
        const { scale, temperature } = this.props;
        
        console.log(temperature);
        return (
            <fieldset>
                <legend>enter temperature in {scaleNames[scale]}:</legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}

export default TemperatureInput;