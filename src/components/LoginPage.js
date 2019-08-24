import React, {Component} from "react";
import Header from './Header';
import LoginForm from "./LoginForm";
import LoginCreateAccount from "./LoginCreateAccount"
import "./LoginPage.css";

class LoginPage extends Component {

	render() {
		
		return (
			<div id="login-page-container">
				<Header image={require("../img/header_key.jpg")} />
				<LoginForm />
				<LoginCreateAccount />
			</div>
		);
	} 
}

export default LoginPage;