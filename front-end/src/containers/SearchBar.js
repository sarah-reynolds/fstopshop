import React, { Component } from 'react';
import FetchSearch from '../actions/FetchSearchAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			auctionSearch: ''
		}
		this.auctionSearch = this.auctionSearch.bind(this);
		this.changeSearch = this.changeSearch.bind(this);
	}

	auctionSearch(event){
		event.preventDefault()
		this.props.FetchSearch(this.state.auctionSearch)
	}

	changeSearch(event){
		this.setState({
			auctionSearch: event.target.value
		})
	}

	render() {
		return (
			<div className="col-sm-8">
				<form className="input-group input-wrapper" onSubmit={this.auctionSearch}>
					<input type="text" className="search-bar form-control" placeholder="Search for camera equipment" value={this.state.auctionSearch} onChange={this.changeSearch} />
					<span className="input-group-btn">
						<button className="btn btn-default search-button" type="submit"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
					</span>
				</form>
			</div>

		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		FetchSearch: FetchSearch
	}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
