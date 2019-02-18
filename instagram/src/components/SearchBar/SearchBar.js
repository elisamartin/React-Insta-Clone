import React from 'react';

const SearchBar = (props) => {
	return (
		<div className="searchBar">
			<div className="brand">
				<div className="logo" />
				<h1>Instagram</h1>
			</div>
			<input placeholder="&#128269; Search" />
			<div className="search-nav">
				<div className="nav-explore" />
				<div className="nav-heart" />
				<div className="nav-user" />
			</div>
		</div>
	);
};

export default SearchBar;
