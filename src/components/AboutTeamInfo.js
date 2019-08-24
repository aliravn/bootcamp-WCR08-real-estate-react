import React, {Component} from "react";
import "./AboutTeamInfo.css"

class AboutTeamInfo extends Component {
	render() {
		return (
			<div className="team-pic-container">
				<h2>Our Team</h2>
				<div className="team-foto">
					<img src={require("../img/team/team_caitlin.png")} />
				</div>
				<div className="team-foto">
					<img src={require("../img/team/team_jen.png")} />
				</div>
				<div className="team-foto">
					<img src={require("../img/team/team_jude.png")} />
				</div>
				<div className="team-foto">
					<img src={require("../img/team/team_nikki.png")} />
				</div>
				<div className="team-foto">
					<img src={require("../img/team/team_wyatt.png")} />
				</div>
				<div className="team-foto">
					<img src={require("../img/team/team-jonesy.png")} />
				</div>					
			</div>
		);
	}
} 

export default AboutTeamInfo;