import React from 'react';
import Greeting from './Greeting';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLogin: false};
    }

    handleLoginClick() {
        this.setState({isLogin:true});
    }

    handleLogoutClick() {
        this.setState({isLogin:false});
    }

    render() {
        const isLogin = this.state.isLogin;
        let button;

        if(isLogin) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLogin={isLogin} />
                {button}

                {/*  {isLogin &&
                    <h5>{new Date().toLocaleString()}</h5>} */}
                {isLogin ?
                    <h5>hello</h5>
                    : <h5>bye</h5>}
            </div>
        )
    }
}

export default LoginControl;