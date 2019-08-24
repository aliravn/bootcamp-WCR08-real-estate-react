import React, {Component} from "react";
import {BrowserRouter as Route, NavLink } from 'react-router-dom';
import NavigationLink from "./NavigationLink"
import './ContactPage.css';

class ContactNavigation extends Component {

	render() {
		return (
			<div id="contact-nav-container">
				<NavigationLink path="/contact/ny" title="New York" className="contact-nav-link" />
				<NavigationLink path="/contact/la" title="Los Angeles" className="contact-nav-link" />
				<NavigationLink path="/contact/ch" title="Chicago" className="contact-nav-link" />
				<NavigationLink path="/contact/mi" title="Miami" className="contact-nav-link" />
				<NavigationLink path="/contact/no" title="New Orleans" className="contact-nav-link" />				
			</div>
		);
	} 
}

export default ContactNavigation;