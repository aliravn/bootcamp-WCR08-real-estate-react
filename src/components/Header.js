import React, {Component} from "react";
import './Header.css';

class Header extends Component {

	render() {
		
		return (
			<header>
				<img id="header-image" src={require("../img/header_house.jpg")} alt="castle_image" />
				<div id="header-text-container">
					<h1 class="header-text">Find Your Dream Home</h1>
					<p class="header-subtext">Apartments - Houses - Villas and much more...</p>
				</div>
			</header>
		);
	} 
}

export default Header;