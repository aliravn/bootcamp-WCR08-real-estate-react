import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import FooterNavBox from "./FooterNavBox";
import NavigationLink from "./NavigationLink"
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

class Footer extends Component {

	render() {
		
		return (
			<footer>
				<div id="footer-content">
					<FooterNavBox />
					<div className="footer-nav-box">
						<NavigationLink path="/apartments" title="Apartments" className="footer-nav-link"/>
						<NavigationLink path="/houses" title="Houses" className="footer-nav-link"/>
						<NavigationLink path="/villas" title="Villas" className="footer-nav-link"/>
						<NavigationLink path="/castles" title="Castles" className="footer-nav-link"/>
						<NavigationLink path="/" title="-" className="footer-nav-link"/>	
					</div>
					<div className="footer-nav-box">
						<NavigationLink path="/contact/ny" title="New York" className="footer-nav-link"/>
						<NavigationLink path="/contact/la" title="Los Angeles" className="footer-nav-link"/>
						<NavigationLink path="/contact/ch" title="Chicago" className="footer-nav-link"/>
						<NavigationLink path="/contact/mi" title="Miami" className="footer-nav-link"/>
						<NavigationLink path="contact/no" title="New Orleans" className="footer-nav-link"/>	
					</div>
					<div className="footer-nav-box">
						<div className="footer-text">
							Lorem ipsum dolor sit amet, consecte tur adipi scing elit, sed do eius mod tempor incididunt.
						</div>
						<div className="social-icon-container">
							<FaFacebookSquare className="social-icon"/> 
							<FaTwitter className="social-icon"/>
							<FaSkype className="social-icon"/>
							<FaLinkedin className="social-icon"/>
						</div>
					</div>
				</div>	
				<p>Copyright &copy; 2019. AliraVN</p>
			</footer>
		);
	} 
}

export default Footer;