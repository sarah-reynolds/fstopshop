import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginAction from '../actions/LoginAction';
import { browserHistory } from 'react-router';

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			message: ""
		}

		this.loginSubmit = this.loginSubmit.bind(this)
	}

	loginSubmit(event){
		event.preventDefault();
		this.props.loginAction({
			username: event.target[0].value,
			password: event.target[1].value
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.loginResponse.msg === "badUsername"){
			this.setState({
				message: "Username does not exist"
			})
		}else if(this.props.loginResponse.msg === "badPassword"){
			this.setState({
				message: "Incorrect password"
			})
		}else if(this.props.loginResponse.msg === "foundUser"){
			browserHistory.push('/');
		}else{
			this.setState({
				message: ""
			})
		}
	}

	render() {
		
		// console.log(this.props.loginResponse)
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<h2>Log in</h2><br />
					</div>
					<div className="col-sm-8 col-sm-offset-2 col-xs-12">
					<form id="register-form" onSubmit={this.loginSubmit}>
						<div className="form-group">
							<label>Username&nbsp;</label>
								<input className="reg-input form-control" type="text" name="username"/>
						</div>
						<div className="form-group">
							<label>Password&nbsp;</label>
								<input className="reg-input form-control" type="password" name="password"/>
						</div>
						
						<input className="search-button" type="submit" value="Login" />
					</form>
					<div>{this.state.message}</div>
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
