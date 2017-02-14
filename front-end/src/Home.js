import React, { Component } from 'react';
import Product from './Product';

class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<Product />
				</div>
			</div>
		);
	}
}

export default Home;
