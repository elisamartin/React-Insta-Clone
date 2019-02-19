import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		this.setState({
			posts: dummyData
		});
	}

	render() {
		return (
			<div className="app-container">
				<SearchBar />
				{this.state.posts.map((post, timestamp) => {
					return <PostContainer key={timestamp} post={post} />;
				})}
			</div>
		);
	}
}

export default App;
