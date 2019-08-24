import React, {Component} from "react";
import QuAn from "./BuyPageQuAn";
import "./BuyPageGuide.css"

class BuyPageGuide extends Component {

	render() {
		
		return (
			<div className="buyer-guide-container">
				<h2>Buyer Guides</h2>
				<h3>Everything you need to know when looking at different types of homes for sale all in one place.</h3>
				<QuAn />
				<QuAn />
				<QuAn />
				<QuAn />											
			</div>
		);
	} 
}

export default BuyPageGuide;