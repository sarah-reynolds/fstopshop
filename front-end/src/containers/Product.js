import React, { Component } from 'react';

class Product extends Component {
	render() {
		return(
		<div className="col-xs-12 product-wrapper">
			<div className="col-sm-4 col-xs-12">
				<img src="http://i.imgur.com/cnK2ZCg.jpg" role="presentation"/>
			</div>
			<div className="col-sm-8 col-xs-12">
				<h4>Nikon D750 24.3 MP FX-format Full HD 1080p Video Digital SLR Camera Body Only</h4>
				<p>$1,499.95</p>
			</div>
		</div>
		)
	}
}

export default Product;