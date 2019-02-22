import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentText = styled.p`
	padding: 0 3%;
	font-size: 0.8rem;
`;

const CommentUsername = styled.span`
	padding-right: 5px;
	font-weight: bold;
`;

const Comment = (props) => {
	return (
		<div className="comment-container">
			<CommentText>
				<CommentUsername>{props.username}</CommentUsername>
				{props.text}
			</CommentText>
		</div>
	);
};

Comment.propTypes = {
	username: PropTypes.string,
	text: PropTypes.string
};

export default Comment;
