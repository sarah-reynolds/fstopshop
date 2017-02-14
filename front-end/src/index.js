import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/styles.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './Home';
import SearchResults from './SearchResults'

// import reduxPromise from 'redux-promise'

const theStore = createStore(reducers);

ReactDOM.render(
	<Provider store={theStore} >
		<Router history={hashHistory} >
			<Route path='/' component={App} >
			<IndexRoute component={Home} />
			<Route path='/searchresults' component={SearchResults} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
