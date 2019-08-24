import React, {Component} from "react";
import Header from './Header';
import "./ExtraPage4.css"

class SellPage extends Component {

	render() {
		
		return (
			<div id="sell-page-container">
				<Header image={require("../img/header_castle.png")} />
				<div className="sell-page-content">
				</div>
			</div>
		);
	} 
}

export default SellPage;