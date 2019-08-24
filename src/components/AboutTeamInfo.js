import React, {Component} from "react";
import "./AboutTeamInfo.css"

class AboutTeamInfo extends Component {
	render() {
		return (
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
		);
	}
} 

export default AboutTeamInfo;