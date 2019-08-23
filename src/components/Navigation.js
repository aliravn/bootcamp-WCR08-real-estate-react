import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {

	render() {
		
		return (
			<nav>
				<NavLink to="/" exact activeClassName="active" className="nav-link nav-logo">CF-RealEstate</NavLink>
				<NavLink to="/contact" exact activeClassName="active" className="nav-link">Buy</NavLink>
				<NavLink to="/about" exact activeClassName="active" className="nav-link">Rent</NavLink>
				<NavLink to="/contact" exact activeClassName="active" className="nav-link">Sell</NavLink>
				<NavLink to="/about" exact activeClassName="active" className="nav-link">About</NavLink>
				<NavLink to="/contact" exact activeClassName="active" className="nav-link">Contact</NavLink>
				<NavLink to="/login" exact activeClassName="active" className="nav-link" id="login-link">Login</NavLink>
			</nav>
		);
	} 
}

export default Navigation;