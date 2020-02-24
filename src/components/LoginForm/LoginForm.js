import React, { Component } from 'react';
import { connect } from 'react-redux';
import loginDispatcher from '../../actions/login/dispatcher';
import { Redirect } from 'react-router';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	onInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	}

	onLoginClick() {
		const { email, password } = this.state;

		const loginData = {
			email,
			password
		};

		this.props.login(loginData);

		this.setState({
			email: '',
			password: ''
		});
	}

	render() {
		const { email, password } = this.state;
		const { isLoginPending, isLoginSuccess, loginError } = this.props;

		return (
			<div>
				{isLoginSuccess && <Redirect to="/posts" />}
				<h1>Log In</h1>
				<input
					onChange={e => this.onInputChange(e)}
					type="text"
					name="email"
					placeholder="email"
					value={email}
				/>
				<br />
				<input
					onChange={e => this.onInputChange(e)}
					type="text"
					name="password"
					placeholder="password"
					value={password}
				/>
				<br />
				<button onClick={() => this.onLoginClick()}>Login</button>

				<div className="message">
					{isLoginPending && <div>Please wait...</div>}
					{isLoginSuccess && <div>Success.</div>}
					{loginError && <div>{loginError}</div>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoginPending: state.login.isLoginPending,
	isLoginSuccess: state.login.isLoginSuccess,
	loginError: state.login.loginError
});

const mapDispatchToProps = dispatch => ({
	login: loginData => dispatch(loginDispatcher(loginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
