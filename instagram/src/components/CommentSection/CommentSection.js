import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = (props) => {
	return (
		<div>
			{props.comments.map((comment) => {
				return <Comment key={comment.text} username={comment.username} text={comment.text} />;
			})}
			<form>
				<input type="text" name="addAComment" placeholder="Add a comment..." />
			</form>
		</div>
	);
};

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
};

export default CommentSection;
