import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
	const { username, thumbnailUrl, imageUrl, likes, comments } = props.post;
	return (
		<div className="post-container">
			<div className="post-header">
				<img src={thumbnailUrl} alt="Profile pic" />
				<p>{username}</p>
			</div>
			<img src={imageUrl} alt="Post" />
			<p>{likes} likes</p>
			<CommentSection comments={comments} likes={likes} userProfile={props.userProfile} />
		</div>
	);
};

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
