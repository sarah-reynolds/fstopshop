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
		// this.props.registerAction(this.state)
		console.log()

	}

	render() {
		if(this.props.registerResponse.msg === "userNameTaken"){
			var message = "Username taken";
		}else if(this.props.registerResponse.msg === "userInserted"){
			var message = "User inserted";
		}else{
			var message = "";
		}

		return (
			<div className="container">
				<div className="row">
					Register
					<h3>{message}</h3>
					<form onSubmit={this.registerUser}>
						<input type="text" name="name" placeholder="Full name" />
						<input type="text" name="username" placeholder="Username" />
						<input type="password" name="password" placeholder="Password" />
						<input type="email" name="email" placeholder="email" />
						<input type="submit" value="Register!" />
					</form>

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
