import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './PostContainer.css';

const PostContainerS = styled.div`
	border: 1px solid lightgray;
	margin: 20px 0;
	width: 640px;
`;

const PostHeader = styled.div`
	height: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 15px;
`;

const PostHeaderImg = styled.img`
	border-radius: 50%;
	height: 100%;
`;

const Username = styled.p`
	padding-left: 15px;
	font-size: 1rem;
	font-weight: bold;
`;

const LikesContainer = styled.div`
	padding-left: 3%;
	font-size: 0.8rem;
	font-weight: bold;
`;

const LikesImg = styled.img`
	height: 20px;
	padding-top: 5px;
	padding-right: 15px;
`;

class PostContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: this.props.post.likes,
			src: 'https://image.flaticon.com/icons/svg/149/149217.svg'
		};
	}

	/*
	addLikes = () => {
		this.setState({
			likes: this.state.likes + 1
		});
	};
	*/

	toggleLikes = () => {
		if (!this.state.updated) {
			this.setState((prevState, props) => {
				return {
					likes: prevState.likes + 1,
					updated: true,
					src: 'https://image.flaticon.com/icons/svg/148/148836.svg'
				};
			});
		} else {
			this.setState((prevState, props) => {
				return {
					likes: prevState.likes - 1,
					updated: false,
					src: 'https://image.flaticon.com/icons/svg/149/149217.svg'
				};
			});
		}
	};

	render() {
		const { username, thumbnailUrl, imageUrl, comments } = this.props.post;
		return (
			<PostContainerS>
				<PostHeader>
					<PostHeaderImg src={thumbnailUrl} alt="Profile pic" />
					<Username>{username}</Username>
				</PostHeader>
				<img src={imageUrl} alt="Post" />
				<LikesContainer>
					<LikesImg src={this.state.src} alt="Heart" onClick={this.toggleLikes} />
					<LikesImg src="https://image.flaticon.com/icons/svg/134/134783.svg" alt="Comment" />
					<p>{this.state.likes} likes</p>
				</LikesContainer>
				<CommentSection comments={comments} userProfile={this.props.userProfile} />
			</PostContainerS>
		);
	}
}

PostContainer.propTypes = {
	username: PropTypes.string,
	thumbnailUrl: PropTypes.string,
	imageUrl: PropTypes.string,
	likes: PropTypes.number,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
};

export default PostContainer;
