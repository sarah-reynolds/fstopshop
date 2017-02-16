import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/styles.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './containers/Home';
import SearchResults from './containers/SearchResults';
import Register from './containers/Register';
import Login from './containers/Login';


import reduxPromise from 'redux-promise'

const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
	<Provider store={theStoreWithMiddleware(reducers)} >
		<Router history={hashHistory} >
			<Route path='/' component={App} >
				<IndexRoute component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/search/:term' component={SearchResults} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);