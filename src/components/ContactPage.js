import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ContactNavigation from "./ContactNavigation";
import Header from "./Header";
import './ContactPage.css';

class ContactPage extends Component {
	render() {
		return (
			<div id="contact-container">
				<Header image={require("../img/header_villa.jpg")} />
				<ContactNavigation />


			</div>
		);
	}
}

export default ContactPage;