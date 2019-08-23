import React, {Component} from "react";
import Article from "./Article";
import './Display.css';

class Display extends Component {

	render() {
		
		return (
			<div id="content-container">
				<div id="article-container">
					<Article image={require("../img/flat1.jpg")} />
					<Article image={require("../img/flat2.jpg")} />
					<Article image={require("../img/flat3.jpg")} />														
				</div>
				<button id="view-more-button">VIEW MORE LISTINGS</button>	
			</div>
		);
	} 
}

export default Display;