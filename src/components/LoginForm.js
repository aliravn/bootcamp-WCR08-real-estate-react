import React, {Component} from "react";
import "./ExtraPage3.css";

class LoginForm extends Component {

	render() {
		
		return (
			<div id="login-container">
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