import React, {Component} from "react";
import Header from './Header';
import SlideLayoutTemplate from "./SlideLayoutTemplate"
import BuyPageGuide from "./BuyPageGuide"
import OpenHouseInfo from "./OpenHouseInfo"


class BuyPage extends Component {

	render() {
		
		return (
			<div id="buy-page-container">
				<Header image={require("../img/header_flat.jpg")} />
				<SlideLayoutTemplate />
				<BuyPageGuide />
				<OpenHouseInfo />
			</div>
		);
	} 
}

export default BuyPage;