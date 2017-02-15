import React, { Component } from 'react';
import Product from './Product';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GetHomeAction from '../actions/GetHomeAction';
import AuctionItem from '../components/AuctionItem';

class Home extends Component {

	componentDidMount() {
		this.props.getHomeData()
	}
	render() {
		// this.props.getHomeData();
		console.log("this.props.homeData",this.props.homeData);
		
		var homeAuctions = [];
		this.props.homeData.map((auction, index)=>{
			// homeAuctions.push(<li key={index} >{auction.title}</li>)
			homeAuctions.push(<AuctionItem key={index} item={auction} />)
		})
		return (
			<div className="container">
				<div className="row">
					
					Homepage
					{homeAuctions}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		homeData: state.home
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getHomeData: GetHomeAction
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
