import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
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
			</div>
		);
	}
}

export default App;
