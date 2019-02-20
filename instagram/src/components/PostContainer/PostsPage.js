import React, { Component } from 'react';
import '../../App.css';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';
// import PropTypes from 'prop-types';

class PostsPage extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			search: ''
		};
	}

	componentDidMount() {
		this.setState({
			posts: dummyData
		});
	}

	handleSearch = (event) => {
		this.setState({
			posts: this.state.posts.filter((item) => {
				return item.username.includes(event.target.value);
			})
		});
	};

	logOut = () => {
		localStorage.clear('username');
		this.setState({ loggedIn: false });
		window.location.reload();
	};

	render() {
		return (
			<div className="app-container">
				<SearchBar
					searchText={this.state.search}
					handleSearch={this.handleSearch}
					searchItem={this.searchItem}
				/>
				{this.state.posts.map((post, timestamp) => {
					return <PostContainer key={timestamp} post={post} />;
				})}
				<button onClick={this.logOut}>LOG OUT</button>
			</div>
		);
	}
}

export default PostsPage;
