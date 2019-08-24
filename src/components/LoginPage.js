import React, {Component} from "react";
import Header from './Header';
import LoginForm from "./LoginForm";
import "./LoginPage.css";

class LoginPage extends Component {

	render() {
		
		return (
			<div id="login-page-container">
				<Header image={require("../img/header_key.jpg")} />
				<div className="login-page-content">
					<LoginForm />
				</div>
			</div>
		);
	} 
}

export default LoginPage;