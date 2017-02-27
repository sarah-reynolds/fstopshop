import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginAction from '../actions/LoginAction';
import { browserHistory } from 'react-router';

class Login extends Component {
	
	constructor(props) {
		super(props);

		this.loginSubmit = this.loginSubmit.bind(this)
	}

	loginSubmit(event){
		event.preventDefault();
		this.props.loginAction({
			username: event.target[0].value,
			password: event.target[1].value
		})
	}

	render() {
		var message = "";
		if(this.props.loginResponse.msg === "badUsername"){
			message = "Username does not exist";
		}else if(this.props.loginResponse.msg === "badPassword"){
			message = "Incorrect password";
		}else if(this.props.loginResponse.msg === "foundUser"){
			browserHistory.push('/');
		}else{
			message = "";
		}

		// console.log(this.props.loginResponse)
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h2>Account details</h2><br />
					</div>
					<div className="col-sm-8 col-xs-12">

					<div>Account details will go here</div>
					</div>
				</div>
			</div>
		);
	}
}


function mapStateToProps(state){
	return{
		loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);
