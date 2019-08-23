import React, {Component} from "react";
import './Footer.css';

class Footer extends Component {

	render() {
		
		return (
			<footer>
				<div id="footer-content">
					<div className="footer-nav-box">
						<a href="#">About</a>
						<a href="#">Support</a>
						<a href="#">Term</a>
						<a href="#">Policy</a>
						<a href="#">Contact</a>
					</div>
					<div className="footer-nav-box">
						<a href="#">Apartments</a>
						<a href="#">Houses</a>
						<a href="#">Villas</a>
						<a href="#">Castles</a>
						<a href="#">-</a>					
					</div>
					<div className="footer-nav-box">
						<a href="#">New York</a>
						<a href="#">Los Angeles</a>
						<a href="#">Chicago</a>
						<a href="#">Miami</a>
						<a href="#">New Orleans</a>	
					</div>
					<div className="footer-nav-box">
						<div className="footer-text">
							Lorem ipsum dolor sit amet, consecte tur adipi scing elit, sed do eius mod tempor incididunt.
						</div>
						<div>
							Fb Tw Sk Go
						</div>
					</div>
				</div>	
				<p>Copyright &copy; 2019. AliraVN</p>
			</footer>
		);
	} 
}

export default Footer;