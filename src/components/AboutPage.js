import React, {Component} from "react";
import Header from "./Header";
import Story from "./Story";
import Timeline from './Timeline';
import "./AboutTeamInfo.css"

class AboutPage extends Component {
	render() {
		return (
			<div id="content-container">
				<Header image={require("../img/header_castle.png")} />
				<Story />

				<div className="team-pic-container">
					<h2>Our Team</h2>
					<div className="team-foto">
						<img src={require("../img/team_caitlin.png")} />
					</div>
					<div className="team-foto">
						<img src={require("../img/team_jen.png")} />
					</div>
					<div className="team-foto">
						<img src={require("../img/team_jude.png")} />
					</div>
					<div className="team-foto">
						<img src={require("../img/team_nikki.png")} />
					</div>
					<div className="team-foto">
						<img src={require("../img/team_wyatt.png")} />
					</div>
					<div className="team-foto">
						<img src={require("../img/team-jonesy.png")} />
					</div>					
				</div>

				<Timeline />
			</div>
		);
	}
} 

export default AboutPage;