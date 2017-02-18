import React, { Component } from 'react';
import { Link } from 'react-router';

class AuctionItem extends Component {
	render() {
		console.log("this.props.item", this.props.item)
		var auctionItem = this.props.item;
		var auctionLink = '/auction/'+auctionItem.id;
		return(
		<div className="col-sm-4 col-xs-12">
			<div className="col-xs-12 product-wrapper">
				<div className="col-sm-4 col-xs-12">
					<img width="200px" src={auctionItem.url} role="presentation"/>
				</div>
				<div className="col-sm-8 col-xs-12">
					<h4><Link to={auctionLink}>{auctionItem.title}</Link></h4>
					<p>{auctionItem.description}</p>
					<p>Current bid: {auctionItem.current_bid}</p>
				</div>
			</div>
		</div>
		)
	}
}

export default AuctionItem;