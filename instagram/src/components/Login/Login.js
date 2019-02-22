import React, { Component } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
	width: 400px;
	height: 400px;
	margin: 50px auto;
	border: 1px solid lightgray;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const LoginLogo = styled.img`
	height: 100px;
	padding: 30px;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LoginInput = styled.input`
	width: 250px;
	padding: 12px 20px;
	margin-bottom: 8px;
	border-radius: 2px;
`;

const LoginSubmit = styled.button`
	width: 250px;
	padding: 12px 20px;
	margin-bottom: 20px;
	border-radius: 2px;
	background-color: #6495ed;
`;

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
			<LoginContainer>
				<LoginLogo
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
					alt="Logo-lettering"
				/>
				<LoginForm>
					<LoginInput
						type="text"
						placeholder="Username"
						name="username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					<LoginInput
						type="text"
						placeholder="Password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<LoginSubmit onClick={this.handleLogIn}>Log In</LoginSubmit>
				</LoginForm>
			</LoginContainer>
		);
	}
}

export default Login;
