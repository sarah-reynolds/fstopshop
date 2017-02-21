import React, { Component } from 'react';
import FetchSearch from '../actions/FetchSearchAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.auctionSearch = this.auctionSearch.bind(this);
	}

	auctionSearch(event){
		event.preventDefault()
		this.props.FetchSearch({
			searchString: event.target.value
		})
	}

	render() {
		
		return (
			<div className="col-sm-8">
				<form className="input-group input-wrapper" onSubmit={this.auctionSearch}>
					<input type="text" className="search-bar form-control" placeholder="Search for camera equipment" />
					<span className="input-group-btn">
						<button className="btn btn-default search-button" type="submit"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
					</span>
				</form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
