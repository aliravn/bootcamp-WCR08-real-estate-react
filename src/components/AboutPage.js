import React, {Component} from "react";
import Header from "./Header";
import Story from "./Story";
import Timeline from './Timeline';

class AboutPage extends Component {
	render() {
		return (
			<div id="content-container">
				<Header image={require("../img/header_sale.jpg")} />
				<Story />
				<Timeline />
			</div>
		);
	}
} 

export default AboutPage;