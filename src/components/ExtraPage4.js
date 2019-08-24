import React, {Component} from "react";
import Header from './Header';
import "./ExtraPage4.css"

class SellPage extends Component {

	render() {
		
		return (
			<div id="sell-page-container">
				<Header image={require("../img/header_forsale.jpg")} />
				<div className="sell-page-content">
				</div>
			</div>
		);
	} 
}

export default SellPage;