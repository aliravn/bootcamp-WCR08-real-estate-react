import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {

	render() {
		
		return (
			<nav>
				<NavLink to="/" exact activeClassName="active" className="nav-link nav-link-text nav-logo">CF-RealEstate</NavLink>
				<NavLink to="/buy" exact activeClassName="active" className="nav-link nav-link-text">Buy</NavLink>
				<NavLink to="/sell" exact activeClassName="active" className="nav-link nav-link-text">Sell</NavLink>
				<NavLink to="/about" exact activeClassName="active" className="nav-link nav-link-text">About</NavLink>
				<NavLink to="/contact" exact activeClassName="active" className="nav-link nav-link-text">Contact</NavLink>
				<NavLink to="/login" exact activeClassName="active" className="nav-link nav-link-text" id="login-link">Login</NavLink>
			</nav>
		);
	} 
}

export default Navigation;