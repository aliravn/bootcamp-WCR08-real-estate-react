import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import NavigationLink from "./NavigationLink"
import './Navigation.css';

class Navigation extends Component {

	render() {
		
		return (
			<nav>
				<NavigationLink path="/" title="CF-RealEstate" className="nav-link nav-link-text nav-logo"/>
				<NavigationLink path="/buy" title="Buy" className="nav-link nav-link-text"/>
				<NavigationLink path="/sell" title="Sell" className="nav-link nav-link-text"/>
				<NavigationLink path="/about" title="About" className="nav-link nav-link-text"/>
				<NavigationLink path="/contact" title="Contact" className="nav-link nav-link-text"/>
				<NavigationLink path="/login" title="Login" className="nav-link nav-link-text" id="login-link"/>
			</nav>
		);
	} 
}

export default Navigation;