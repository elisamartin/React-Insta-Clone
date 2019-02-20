import React, { Component } from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
	class extends Component {
		render() {
			return <App />;
		}
	};

export default Authenticate;
