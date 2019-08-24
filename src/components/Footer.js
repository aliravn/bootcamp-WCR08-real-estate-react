import React, { Component } from "react";
import { BrowserRouter as Switch, NavLink } from 'react-router-dom';
import FooterNavBox from "./FooterNavBox";
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
						<NavLink to="/apartments" exact activeClassName="active" className="footer-nav-link">Apartments</NavLink>
						<NavLink to="/houses" exact activeClassName="active" className="footer-nav-link">Houses</NavLink>
						<NavLink to="/villas" exact activeClassName="active" className="footer-nav-link">Villas</NavLink>
						<NavLink to="/castles" exact activeClassName="active" className="footer-nav-link">Castles</NavLink>
						<NavLink to="/" exact activeClassName="active" className="footer-nav-link">-</NavLink>				
					</div>
					<div className="footer-nav-box">
						<NavLink to="/contact" exact activeClassName="active" className="footer-nav-link">New York</NavLink>
						<NavLink to="/contact" exact activeClassName="active" className="footer-nav-link">Los Angeles</NavLink>
						<NavLink to="/contact" exact activeClassName="active" className="footer-nav-link">Chicago</NavLink>
						<NavLink to="/contact" exact activeClassName="active" className="footer-nav-link">Miami</NavLink>
						<NavLink to="/contact" exact activeClassName="active" className="footer-nav-link">New Orleans</NavLink>
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