import React, {Component} from "react";
import Header from './Header';
import Searchbar from './Searchbar';
import Display from "./Display";

class HomePage extends Component {

	render() {
		
		return (
			<div>
				<Header />
				<Searchbar />
				<Display />
			</div>
		);
	} 
}

export default HomePage;