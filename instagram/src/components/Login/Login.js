import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {};
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleLogIn = (event) => {
		localStorage.setItem('username', `${this.state.username}`);
	};

	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
					<button onClick={this.handleLogIn}>Log In</button>
				</form>
			</div>
		);
	}
}

export default Login;
