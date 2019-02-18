import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

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

export default PostContainer;
