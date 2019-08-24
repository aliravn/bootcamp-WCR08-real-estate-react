import React, {Component} from "react";
import Header from './Header';
import "./ExtraPage5.css";

class BuyPage extends Component {

	render() {
		
		return (
			<div id="buy-page-container">
				<Header image={require("../img/header_villa.jpg")} />
				<div className="buy-page-content">
				</div>
			</div>
		);
	} 
}

export default BuyPage;