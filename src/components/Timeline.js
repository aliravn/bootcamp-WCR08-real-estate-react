import React, {Component} from "react";
import "./Timeline.css"

class Timeline extends Component {
	render() {
		return (
			<div id="timeline-container">
				<div className="circle">1980</div>
				<span className="marker">Company founded in New York</span>
				<div className="circle">1985</div>
				<span className="marker">Open first branch office in Chicago</span>
				<div className="circle">1992</div>
				<span className="marker">Open branch office in Miami</span>
				<div className="circle">1995</div>
				<span className="marker">Best RealEstate of the Year Award</span>
				<div className="circle">2002</div>
				<span className="marker">Open branch office in New Orleans</span>
				<div className="circle">2010</div>
				<span className="marker">pen branch office in Los Angeles</span>
				<div className="circle">2015</div>
				<span className="marker">RealEstate of the Year California Award</span>
				<div className="circle">2019</div>
				<span className="marker">Smth more, don't have ideas right now</span>
			</div>
		);
	}
} 

export default Timeline;