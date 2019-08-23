import React, {Component} from "react";
import './Header.css';

class Header extends Component {

	render() {
		
		return (
			<header>
				<img id="header-image" src={require("../img/header_house.jpg")} alt="castle_image" />
				<div id="header-text-container">
					<h1 className="header-text">Find Your Dream Home</h1>
					<p className="header-subtext">Apartments - Houses - Villas and much more...</p>
				</div>
			</header>
		);
	} 
}

export default Header;