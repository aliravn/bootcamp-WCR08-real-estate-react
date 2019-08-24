import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import NavigationLink from "./NavigationLink"
import "./FooterNavBox.css";

const FooterNavBox = () => {
	return (
		<div className="footer-nav-box">
			<Router>
				<NavigationLink path="/about" title="About" className="footer-nav-link"/>
				<NavigationLink path="/support" title="Support" className="footer-nav-link"/>
				<NavigationLink path="/term" title="Term" className="footer-nav-link"/>
				<NavigationLink path="/policy" title="Policy" className="footer-nav-link"/>
				<NavigationLink path="/contact" title="Contact" className="footer-nav-link"/>
			</Router>
		</div>
	);
}

export default FooterNavBox;