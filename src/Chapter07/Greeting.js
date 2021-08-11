import React from 'react';

function UserGreeting(props) {
    return <h1>Wlecome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up!</h1>;
}

function Greeting(props) {
    const isLogin = props.isLogin;
    if (isLogin) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default Greeting;