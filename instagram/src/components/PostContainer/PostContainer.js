import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

class PostContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: this.props.post.likes
		};
	}

	addLikes = () => {
		this.setState({
			likes: this.state.likes + 1
		});
	};

	render() {
		const { username, thumbnailUrl, imageUrl, comments } = this.props.post;
		return (
			<div className="post-container">
				<div className="post-header">
					<img src={thumbnailUrl} alt="Profile pic" />
					<p>{username}</p>
				</div>
				<img src={imageUrl} alt="Post" />
				<div className="likes-">
					<img
						src="https://image.flaticon.com/icons/svg/159/159774.svg"
						alt="Heart"
						onClick={this.addLikes}
					/>
					<img src="https://image.flaticon.com/icons/svg/134/134783.svg" alt="Comment" />
					<p>{this.state.likes} likes</p>
				</div>
				<CommentSection comments={comments} userProfile={this.props.userProfile} />
			</div>
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
