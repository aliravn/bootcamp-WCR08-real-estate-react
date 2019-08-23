import React, {Component} from "react";
import "./Timeline.css"

class Timeline extends Component {
	render() {
		return (
			<div id="timeline-container">
				<div class="circle">1980</div>
				<span class="marker">Company founded in New York</span>
				<div class="circle">1985</div>
				<span class="marker">Open first branch office in Chicago</span>
				<div class="circle">1992</div>
				<span class="marker">Open branch office in Miami</span>
				<div class="circle">1995</div>
				<span class="marker">Best RealEstate of the Year Award</span>
				<div class="circle">2002</div>
				<span class="marker">Open branch office in New Orleans</span>
				<div class="circle">2010</div>
				<span class="marker">pen branch office in Los Angeles</span>
				<div class="circle">2015</div>
				<span class="marker">RealEstate of the Year California Award</span>
				<div class="circle">2019</div>
				<span class="marker">Smth more, don't have ideas right now</span>
			</div>
		);
	}
} 

export default Timeline;