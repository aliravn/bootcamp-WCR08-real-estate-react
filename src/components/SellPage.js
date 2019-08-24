import React, {Component} from "react";
import Header from './Header';
import SellPageContent from './SellPageContent';
import "./SellPage.css"

class SellPage extends Component {

	render() {
		
		return (
			<div id="sell-page-container">
				<Header image={require("../img/header_forsale.jpg")} />
				<SellPageContent />
			</div>
		);
	} 
}

export default SellPage;