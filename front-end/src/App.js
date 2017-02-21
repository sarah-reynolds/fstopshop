import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import NavBar from './containers/NavBar';
import { Link } from 'react-router';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<NavBar />
				</div>
				<div className="row">
                    <div className="col-sm-4">
					   <Link to="/"><img width="100%" src="/images/fstoplogo2.png" role="presentation" /></Link>
                    </div>
                    <SearchBar />
				</div>
				<div className="row">
					{this.props.children}
                </div>

			</div>
		);
	}
}

export default App;