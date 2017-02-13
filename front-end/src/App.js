import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row header-wrapper">
                    <div className="col-sm-4">
					   <img width="100%" src="/images/fstoplogo.png" role="presentation" />
                    </div>
                    <div className="col-sm-8 input-group input-wrapper">
                        <input type="text" className="search-bar form-control" aria-describedby="basic-addon2"/>
                        <span className="input-group-addon search-button">Search</span>
                    </div>
				</div>
                <div className="row">
                    <div className="col-xs-12">
                        <h3>Buy and sell photography equipment.</h3>
                    </div>
                </div>
				<p>
					Sanity check.
				</p>
			</div>
		);
	}
}

export default App;
