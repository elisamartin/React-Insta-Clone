import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="search-bar">
			<div className="brand">
				<div className="logo">
					<img src="https://image.flaticon.com/icons/svg/87/87390.svg" alt="logo" />
				</div>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
					alt="Logo-lettering"
				/>
			</div>
			<input placeholder="&#128269; Search" />
			<div className="search-nav">
				<img src="https://image.flaticon.com/icons/svg/174/174109.svg" alt="Explore" />
				<img src="https://image.flaticon.com/icons/svg/159/159774.svg" alt="Heart" />
				<img src="https://image.flaticon.com/icons/svg/1246/1246351.svg" alt="User" />
			</div>
		</div>
	);
};

export default SearchBar;
