import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = (props) => {
	return (
		<div className="comment-container">
			<p>
				<span>{props.username}</span>
				{props.text}
			</p>
		</div>
	);
};

Comment.propTypes = {
	username: PropTypes.string,
	text: PropTypes.string
};

export default Comment;
