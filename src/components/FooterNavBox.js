import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import "./FooterNavBox.css";

const FooterNavBox = () => {

	return (
		<div className="footer-nav-box">
			<NavLink to="/about" exact activeClassName="active" className="footer-nav-link">About</NavLink>
			<NavLink to="/support" exact activeClassName="active" className="footer-nav-link">Support</NavLink>
			<NavLink to="/term" exact activeClassName="active" className="footer-nav-link">Term</NavLink>
			<NavLink to="/policy" exact activeClassName="active" className="footer-nav-link">Policy</NavLink>
			<NavLink to="/contact" exact activeClassName="active" className="footer-nav-link">Contact</NavLink>
		</div>

	);
}

export default FooterNavBox;