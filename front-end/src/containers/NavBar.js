import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class NavBar extends Component {

	render() {
		var welcomeMsg = ""
		var account = ""
		var logout = ""
		var login = ""
		var register = ""
		console.log(this.props)
		if(this.props.loginData.token){
			welcomeMsg = "Welcome back!"
			account = "View my account"
			logout = "Log out"
			login = ""
			register = ""
		}else{
			welcomeMsg = ""
			account = ""
			logout = ""
			login = "Login"
			register = "Register"
		}
		

		console.log("loginData", this.props.loginData.msg)
		return (
			<div className="nav-wrapper text-right">
				<div className="col-xs-12 text-right">
					{welcomeMsg}&nbsp;<Link to='/account'>{account}</Link>&nbsp;<Link to='/login'>{login}</Link>&nbsp;<Link to='/register'>{register}</Link>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		loginData: state.login
	}
}

export default connect(mapStateToProps,null)(NavBar);
