import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
	constructor() {
		super();
		this.state = {
			posts: dummyData
		};
	}

	render() {
		return (
			<div className="app-container">
				<SearchBar />
				{this.state.posts.map((post) => {
					return <PostContainer post={post} />;
				})}
			</div>
		);
	}
}

export default App;
