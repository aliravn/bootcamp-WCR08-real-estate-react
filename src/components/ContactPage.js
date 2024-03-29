import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactNavigation from "./ContactNavigation";
import ContactOffice from "./ContactOffice";
import ContactIntroduction from "./ContactIntroduction"
import NewsletterSubscription from "./NewsletterSubscription";
import ContactOfficeLA from './ContactOfficeLA'
import Header from "./Header";

class ContactPage extends Component {
	render() {
		return (
			<div id="contact-container">
				<Header image={require("../img/header_office.jpg")} />
				<Router>
				<ContactNavigation />
				<Switch>
					<Route path="/contact" exact component={ContactIntroduction} />
					<Route path="/contact/ny" exact component={ContactOffice} />
					<Route path="/contact/la" exact component={ContactOfficeLA} />
					<Route path="/contact/ch" exact component={ContactOffice} />
					<Route path="/contact/mi" exact component={ContactOffice} />
					<Route path="/contact/no" exact component={ContactOffice} />
					<Route component={ContactOffice} />
				</Switch>
				<NewsletterSubscription />
				</Router>

			</div>
		);
	}
}

export default ContactPage;