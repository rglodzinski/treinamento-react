import React, { Component } from "react";

function UserGreeting(props) {
    return <h1>Você está logado!</h1>;
};

function GuestGreeting(props) {
    return <h1>Você não está logado!</h1>;
};

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
};

class LoginControl extends Component {

    constructor(props) {
        super(props);
        this.handleLoginLogout = this.handleLoginLogout.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginLogout() {
        this.setState(state => ({ isLoggedIn: !state.isLoggedIn }));
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let loginLogoutBtn = (
            <button onClick={this.handleLoginLogout}>
                {isLoggedIn ? "Sair" : "Entrar"}
            </button>
        );

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {loginLogoutBtn}
            </div>
        );
    }
}

export default LoginControl;