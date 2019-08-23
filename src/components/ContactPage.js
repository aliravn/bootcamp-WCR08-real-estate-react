import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ContactNavigation from "./ContactNavigation";
import AboutPage from "./AboutPage";
import ContactOffice from "./ContactOffice";
import Header from "./Header";

import './ContactPage.css';

class ContactPage extends Component {
	render() {
		return (
			<div id="contact-container">
				<Header image={require("../img/header_villa.jpg")} />
				<Router>
				<ContactNavigation />
				<Switch>
					<Route path="/contact" exact component={ContactOffice} />
					<Route path="/contact/ny" exact component={ContactOffice} />
					<Route path="/contact/la" exact component={ContactOffice} />
					<Route path="/contact/ch" exact component={ContactOffice} />
					<Route path="/contact/mi" exact component={ContactOffice} />
					<Route path="/contact/no" exact component={ContactOffice} />
					<Route component={ContactOffice} />
				</Switch>
				</Router>

			</div>
		);
	}
}

export default ContactPage;