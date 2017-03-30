/**
* Login Form
* This is the login form for the app.
* author: @
*/

import React from 'react';

import '../stylesheets/containers/LoginForm.scss';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        // binding submitFormFunction to this. this refers to our current class.
        this.submitFormFunction = this.submitFormFunction.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
        this.onFacebookLoginEvent = this.onFacebookLoginEvent.bind(this);
        this.onGoogleLoginEvent = this.onGoogleLoginEvent.bind(this);
        this.onEmailInput = this.onEmailInput.bind(this);
        this.onPasswordInput = this.onPasswordInput.bind(this);
        this.onForgotPassword = this.onForgotPassword.bind(this);

        this.state = {
            email: "None",
            password: "None",
            space: "  "
        }
    }
    
    submitForm = (event) => {
        // ES6 function. Sets variable submitForm as a function with event as the input. Autobinds to this (important).
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
    }

    submitFormFunction(event) {
        // Javascript regular function definition, same function as above, but DOESN'T autobind to this. You need to bind it in constructor.
        // Run this when the form gets submitted, prevent the default action
       
        event.preventDefault();
        // var data = {
        //     username : this.state.email
        //     password : this.state.password
        // };
        // this.props.loginFunction(data);
    }

    onFacebookLoginEvent(event) {
        
    }

    onGoogleLoginEvent(event) {
        
    }

    onSubmitEvent(event) {
        this.props.submitFormFunction(event);
    }

    onEmailInput(event) {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordInput(event) {
        this.setState({
            password: event.target.value
        })
    }

    onForgotPassword(event) {

    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements
        return (
            <form className = "loginPage" onSubmit={this.submitForm}>
                <div>
                    <button className = "facebookLogin" id="FacebookLogin" type="submit" value="Submit" onClick={this.onFacebookLoginEvent}>Login with Facebook</button>
                    <button className = "googleLogin" id="GoogleLogin" type="submit" value="Submit" onClick={this.onGoogleLoginEvent}>Login with Google</button>
                </div>
                <div>
                    <span className="or">or</span>
                    <hr className="hr"/>
                </div>
                <div> 
                    <input onChange={this.onEmailInput}
                        required
                        className="emailBox"
                        placeholder = "Email Address"
                        ref = "email"
                        type = "email"
                    />
                    <input onChange={this.onPasswordInput}
                        required
                        className="passwordBox"
                        placeholder = "Password"
                        ref = "password"
                        type = "password"
                    />
                </div>
                <div>
                    <label for="rememberMe2" className = "rememberMe">                    
                        <input id = "rememberMe2" type = "checkbox" ref = "Remember me" placeholder = "Remember me"/>
                        {this.state.space}Remember Me
                    </label>
                    <a href="./forgotPassword" className="forgotPassword">Forgot Password?</a>
                </div>
                <button className="loginButton" id="Submit" type="submit" value="Submit" onClick={this.onSubmitEvent}>Login</button>
            </form>
        );
    }
}

export default LoginForm;