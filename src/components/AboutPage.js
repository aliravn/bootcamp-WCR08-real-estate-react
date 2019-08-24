import React, {Component} from "react";
import Header from "./Header";
import Story from "./Story";
import Timeline from './Timeline';
import AboutTeamInfo from"./AboutTeamInfo"

class AboutPage extends Component {
	render() {
		return (
			<div id="content-container">
				<Header image={require("../img/header_castle.png")} />
				<Story />
				<AboutTeamInfo />	
				<Timeline />
			</div>
		);
	}
} 

export default AboutPage;