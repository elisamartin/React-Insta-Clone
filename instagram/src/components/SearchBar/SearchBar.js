import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="search-bar">
			<div className="brand">
				<div className="logo">L</div>
				<h1>Instagram</h1>
			</div>
			<input placeholder="&#128269; Search" />
			<div className="search-nav">
				<div className="nav-explore">E</div>
				<div className="nav-heart">H</div>
				<div className="nav-user">U</div>
			</div>
		</div>
	);
};

export default SearchBar;
