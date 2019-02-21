import React from 'react';
import styled from 'styled-components';
import './SearchBar.css';

const SearchContainer = styled.div`
	width: 800px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
`;

const SearchLogosContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const LogoImg = styled.img`
	height: 25px;
	padding: 10px;
	border-right: 1px solid lightgray;
`;

const LogoLet = styled.img`
	height: 38px;
	padding: 10px;
`;

const SearchInput = styled.input`
	border: 1px solid lightgray;
	border-radius: 3px;
	font-size: 0.7rem;
	padding: 5px;
	text-align: center;
`;

const SearchNav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const SearchNavImg = styled.img`
	height: 20px;
	padding: 10px;
`;

const SearchBar = (props) => {
	return (
		<SearchContainer>
			<SearchLogosContainer>
				<LogoImg src="https://image.flaticon.com/icons/svg/87/87390.svg" alt="logo" />
				<LogoLet
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
					alt="Logo-lettering"
				/>
			</SearchLogosContainer>

			<form>
				<SearchInput
					type="text"
					name="searchText"
					placeholder="&#128269; Search"
					value={props.search}
					onChange={props.handleSearch}
				/>
			</form>

			<SearchNav>
				<SearchNavImg src="https://image.flaticon.com/icons/svg/174/174109.svg" alt="Explore" />
				<SearchNavImg src="https://image.flaticon.com/icons/svg/159/159774.svg" alt="Heart" />
				<SearchNavImg src="https://image.flaticon.com/icons/svg/1246/1246351.svg" alt="User" />
			</SearchNav>
		</SearchContainer>
	);
};

export default SearchBar;
