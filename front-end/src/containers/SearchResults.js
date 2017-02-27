import React, { Component } from 'react';
import FetchSearch from '../actions/FetchSearchAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuctionItem from '../components/AuctionItem';


class SearchResults extends Component {

	render() {
		console.log("search results page",this.props.searchResults)
		var searchPageResults = [];
		this.props.searchResults.map((result,index)=>{
			searchPageResults.push(<AuctionItem key={index} item={result} />)
			return searchPageResults
		})
		return (
			<div className="container">
				<div className="row">

					{searchPageResults}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		searchResults: state.search
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchSearch: FetchSearch
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
