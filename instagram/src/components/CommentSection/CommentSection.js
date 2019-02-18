import React from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
	return (
		<div>
			{props.comments.map((comment) => {
				return <Comment username={comment.username} text={comment.text} />;
			})}
			<form>
				<input type="text" name="addAComment" placeholder="Add a comment..." />
			</form>
		</div>
	);
};

export default CommentSection;
