import React, {Component} from "react";
import Header from './Header';
import "./ExtraPage3.css";

class LoginPage extends Component {

	render() {
		
		return (
			<div id="login-page-container">
				<Header image={require("../img/header_flat.jpg")} />
				<div className="login-page-content">
					<div id="login-container">
						<form>
							<span>Login: <input type="text" maxlength="20" placeholder="username or email" /></span>
							<span>Password:<input type="password" maxlength="20" placeholder="password" /></span>
							<button>Login</button>
						</form>
					</div>
				</div>
			</div>
		);
	} 
}

export default LoginPage;