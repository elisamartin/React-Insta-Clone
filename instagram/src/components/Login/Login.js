import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleLogIn = (event) => {
		localStorage.setItem('username', event.target.username.value); // `${this.state.username}`
		this.setState({
			username: ''
		});
	};
	render() {
		return (
			<div>
				<form>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
					<input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
					<button onClick={this.handleLogIn}>Log In</button>
				</form>
			</div>
		);
	}
}

export default Login;
