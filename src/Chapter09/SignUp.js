import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            gender: 1
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        var { name, gender } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    name
                    <input
                        type='text'
                        name={'name'}
                        value={name}
                        onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Gender
                    <select
                        name={'gender'}
                        value={gender}
                        onChange={this.handleChange}>
                        <option value={1}>man</option>
                        <option value={0}>woman</option>
                    </select>
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default SignUp;