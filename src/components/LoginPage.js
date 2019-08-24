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
				<h3>I could have added more components here,</h3>
				<h3>but by this page I've already run out of imagination</h3>
				<h3>=^.^=</h3>
			</div>
		);
	} 
}

export default LoginPage;