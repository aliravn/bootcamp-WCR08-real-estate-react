import React, {Component} from "react";
import "./LoginPage.css";

class LoginForm extends Component {

	render() {
		
		return (
			<div className="create-account-container">
				<h2>Create Account</h2>
				<form>
					<span>Email: <input type="text" maxlength="20" placeholder="email@example.com" /></span>
					<span>Full Name: <input type="text" maxlength="20" placeholder="John Doe" /></span>
					<span>Username: <input type="text" maxlength="20" placeholder="johndoe" /></span>
					<span>Password:<input type="password" maxlength="20" placeholder="password" /></span>
					<button>Create Account</button>
				</form>
			</div>
		);
	} 
}

export default LoginForm;