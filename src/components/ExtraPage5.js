import React, {Component} from "react";
import Header from './Header';
import "./ExtraPage5.css";

class BuyPage extends Component {

	render() {
		
		return (
			<div id="buy-page-container">
				<Header image={require("../img/header_flat.jpg")} />
				<div className="buy-page-content">
					<div class="big-slide">
						<p>Placeholder text</p>
					</div>
					<div class="small-slide-container">
						<div class="small-slide">
							<p>Placeholder text</p>
						</div>
						<div class="small-slide">
							<p>Placeholder text</p>
						</div>
						<div class="small-slide">
							<p>Placeholder text</p>
						</div>
						<div class="small-slide">
							<p>Placeholder text</p>
						</div>
					</div>
				</div>
			</div>
		);
	} 
}

export default BuyPage;