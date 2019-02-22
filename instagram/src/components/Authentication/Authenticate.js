import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
	class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false
			};
		}

		componentDidMount() {
			if (localStorage.getItem('username')) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		}

		render() {
			return this.state.loggedIn ? <App /> : <Login />;
		}
	};

export default Authenticate;
