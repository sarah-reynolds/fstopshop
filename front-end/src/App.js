import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row header-wrapper">
                    <div className="col-sm-4">
					   <img width="100%" src="/images/fstoplogo2.png" role="presentation" />
                    </div>
                    <SearchBar />
				</div>
                <div className="row">
                    <div className="col-xs-12">
                        <h4>Buy and sell photography equipment.</h4>
                    </div>
                </div>
				<div className="row">
					{this.props.children}
                </div>

			</div>
		);
	}
}

export default App;
