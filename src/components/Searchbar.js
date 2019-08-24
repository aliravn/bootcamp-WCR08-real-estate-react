import React, {Component} from "react";
import './Searchbar.css';

class Searchbar extends Component {

	render() {
		
		return (
			<div id="searchbar">
				<select>
					<option value="flat">Flat</option>
					<option value="house">House</option>
					<option value="villa">Villa</option>
					<option value="castle">Castle</option>
				</select>
				<p className="searchbar-header">What are you looking for?</p>
				<input type="text" placeholder="City"/>
				<input type="text" placeholder="Price up to" />
				<button id="search-button">Search</button>
			</div>
		);
	} 
}

export default Searchbar;