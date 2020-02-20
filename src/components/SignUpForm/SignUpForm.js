import React from "react";
import { signUpHttp as signUp } from "../../reducers/signUpReducer";

import { connect } from "react-redux";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      email: "",
      password: ""
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

    this.props.signUp(signUpData);

    this.setState({
      name: "",
      lastName: "",
      email: "",
      password: ""
    });
  }

  render() {
    const { name, lastName, email, password } = this.state;
    return (
      <div>
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
        <button onClick={() => this.onSignUpClick()}>SignUp</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSignUpPending: state.isSignUpPending,
  isSignUpSuccess: state.isSignUpSuccess,
  error: state.signUpError
});

const mapDispatchToProps = dispatch => ({
  signUp: signUpData => dispatch(signUp(signUpData)) //OVO MI NIJE JASNO STO POSTO KAKO RADI
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
