import React, {Component} from "react";
import "./OpenHouseInfo.css";
class OpenHouseInfo extends Component {

	render() {
		
		return (
			<div className="open-house-news-container">
				<h2>OPEN HOUSE</h2>
				<p>Next Date: 28.09.2019</p>
				<p>Address: Placeholder address, LosAngeles, CA 00000 </p>
				<img src={require("../img/DUMMYimage_small.jpg")} alt=""/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		);
	} 
}

export default OpenHouseInfo;