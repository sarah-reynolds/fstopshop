import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterAction from '../actions/RegisterAction';

class Register extends Component {

	constructor(props) {
		super(props);
		this.registerUser = this.registerUser.bind(this)
		this.state = {
			registerResponse: ''
		}
	}

	registerUser(event){
		event.preventDefault()

		this.props.registerAction({
			name: event.target[0].value,
			username: event.target[1].value,
			password: event.target[2].value,
			email: event.target[3].value

		})


	}

	render() {
		var message = "";
		if(this.props.registerResponse.msg === "userNameTaken"){
			message = "*Username taken*";
		}else if(this.props.registerResponse.msg === "userInserted"){
			message = "User inserted";
		}else{
			message = "";
		}

		return (
			<div className="container">
				<div className="row">
					
					<div className="col-xs-12">
						<h2>Account sign up</h2><br />
					</div>
					<div className="col-sm-8 col-xs-12">
					<form id="register-form" onSubmit={this.registerUser}>
						<div className="form-group">
							<label>Full name&nbsp;</label>
								<input className="reg-input form-control" type="text" name="name"/>
						</div>
						<div className="form-group">
							<label>Username&nbsp;</label>
								<input className="reg-input form-control" type="text" name="username"/>
						</div>
						<div className="form-group">
							<label>Password&nbsp;</label>
								<input className="reg-input form-control" type="password" name="password" />
						</div>
						<div className="form-group">
							<label>Confirm password&nbsp;</label>
								<input className="reg-input form-control" type="password" />
						</div>
						<div className="form-group">
							<label>Email&nbsp;</label>
								<input className="reg-input form-control" type="email" name="email" />
						</div>
						<input className="search-button" type="submit" value="Register" />
					</form>
					</div>
					<div className="col-xs-12">
						<h3 className="">{message}</h3>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.register
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Register);
