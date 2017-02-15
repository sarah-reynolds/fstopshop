import React, { Component } from 'react';

class AuctionItem extends Component {
	render() {
		console.log("this.props.item", this.props.item)
		var auctionItem = this.props.item;
		return(
		<div className="col-xs-12 product-wrapper">
			<div className="col-sm-4 col-xs-12">
				<img width="200px" src={auctionItem.url} role="presentation"/>
			</div>
			<div className="col-sm-8 col-xs-12">
				<h4>{auctionItem.title}</h4>
				<p>{auctionItem.description}</p>
				<p>Current bid: {auctionItem.current_bid}</p>
			</div>
		</div>
		)
	}
}

export default AuctionItem;