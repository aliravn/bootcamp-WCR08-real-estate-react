import React, {Component} from "react";
import Map from "./Map";
import './ContactIntroduction.css';

class ContactIntroduction extends Component {

	render() {
		return (
			<div className="contact-introduction-container">
				<h2>Contacts</h2>
				<p>We have offices in five cities and constantly growing.</p>
				<p>Please select the office closest to you on the tab above.</p>
				<p>Our experienced experts will be happy to answer your questions.</p>
				<Map />
			</div>
		);
	} 
}

export default ContactIntroduction;





