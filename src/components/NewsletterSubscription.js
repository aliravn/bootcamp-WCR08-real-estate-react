import React, {Component} from 'react';
import "./NewsletterSubscription.css"

class NewsletterSubscrition extends Component {
	render() {
		return (
			<div id="newsletter-container">
				Subscribe to our newsletter to get the latest listings right away:
				<input type="text" placeholder="e.g. email@example.org" />
				<button>Subscribe</button>
			</div>
		);
	}
}

export default NewsletterSubscrition;