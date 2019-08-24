import React, {Component} from "react";
import {BrowserRouter as Route, NavLink } from 'react-router-dom';
import './ContactPage.css';

class ContactNavigation extends Component {

	render() {
		return (
			<div id="contact-nav-container">
				<NavLink to="/contact/ny" exact activeClassName="active" className="contact-nav-link">New York</NavLink>
				<NavLink to="/contact/la" exact activeClassName="active" className="contact-nav-link">Los Angeles</NavLink>
				<NavLink to="/contact/ch" exact activeClassName="active" className="contact-nav-link">Chicago</NavLink>
				<NavLink to="/contact/mi" exact activeClassName="active" className="contact-nav-link">Miami</NavLink>
				<NavLink to="/contact/no" exact activeClassName="active" className="contact-nav-link">New Orleans</NavLink>
			</div>
		);
	} 
}

export default ContactNavigation;