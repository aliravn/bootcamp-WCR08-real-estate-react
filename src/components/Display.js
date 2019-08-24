import React, {Component} from "react";
import Article from "./Article";
import ButtonViewMore from "./ButtonViewMore"
import './Display.css';

class Display extends Component {

	render() {
		
		return (
			<div id="content-container">
				<div id="article-container">
					<Article image={require("../img/house1.jpg")} />
					<Article image={require("../img/house2.jpg")} />
					<Article image={require("../img/house3.jpg")} />
					<Article image={require("../img/flat1.jpg")} />
					<Article image={require("../img/flat2.jpg")} />
					<Article image={require("../img/flat3.jpg")} />
					<Article image={require("../img/villa1.jpg")} />
					<Article image={require("../img/villa2.jpg")} />
					<Article image={require("../img/villa3.jpg")} />												
				</div>
				<ButtonViewMore />
			</div>
		);
	} 
}

export default Display;