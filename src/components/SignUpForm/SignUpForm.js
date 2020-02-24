import React from 'react';
import singUpDispatcher from '../../actions/signup/dispatcher';

import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			lastName: '',
			email: '',
			password: '',
			isPasswordValid: true,
			isEmailValid: true
		};
	}

	onInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	}

	onSignUpClick() {
		const { name, lastName, email, password } = this.state;

		const signUpData = {
			name: `${name} ${lastName}`,
			email,
			password
		};

		const isPasswordValid = this.isPasswordValid();
		const isEmailValid = this.isEmailValid();

		if (isEmailValid && isPasswordValid) {
			this.props.signUp(signUpData);

			this.setState({
				name: '',
				lastName: '',
				email: '',
				password: ''
			});
		} else {
			this.setState({ isPasswordValid, isEmailValid });
		}
	}

	isPasswordValid() {
		const passwordRegex = /^[a-zA-Z0-9]{3,30}$/;
		return passwordRegex.test(this.state.password);
	}

	isEmailValid() {
		const emailRegex = /.+\@.+\..+/;
		return emailRegex.test(this.state.email);
	}

	render() {
		const { name, lastName, email, password, isEmailValid, isPasswordValid } = this.state;
		const { isSignUpPending, isSignUpSuccess, signUpError } = this.props;

		return (
			<div>
				{isSignUpSuccess && <Redirect to="/posts" />}
				<h1>Sign Up</h1>
				<input
					onChange={e => this.onInputChange(e)}
					type="text"
					name="name"
					value={name}
					placeholder="Name"
				/>
				<br />
				<input
					onChange={e => this.onInputChange(e)}
					type="text"
					name="lastName"
					value={lastName}
					placeholder="Last name"
				/>
				<br />
				<input
					onChange={e => this.onInputChange(e)}
					type="text"
					name="email"
					value={email}
					placeholder="Email"
				/>
				<br />
				<input
					onChange={e => this.onInputChange(e)}
					type="password"
					name="password"
					value={password}
					placeholder="Password"
				/>
				<br />
				<button onClick={() => this.onSignUpClick()}>SignUp</button>

				<div className="message">
					{!isPasswordValid && (
						<div>Password must be at least 3 characters long, only letters and digits</div>
					)}
					{!isEmailValid && <div>Plese enter a valid email address</div>}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isSignUpPending: state.signup.isSignUpPending,
	isSignUpSuccess: state.signup.isSignUpSuccess,
	signUpError: state.signup.signUpError
});

const mapDispatchToProps = dispatch => ({
	signUp: signUpData => dispatch(singUpDispatcher(signUpData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
