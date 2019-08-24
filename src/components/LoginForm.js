import React, {Component} from "react";
import "./LoginPage.css";

class LoginForm extends Component {

	render() {
		
		return (
			<div className="login-container">
				<h2>Login</h2>
				<form>
					<span>Login: <input type="text" maxlength="20" placeholder="username or email" /></span>
					<span>Password:<input type="password" maxlength="20" placeholder="password" /></span>
					<button>Login</button>
				</form>
			</div>
		);
	} 
}

export default LoginForm;