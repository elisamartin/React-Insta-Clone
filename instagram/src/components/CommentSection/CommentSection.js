import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './CommentSection.css';

const CommentForm = styled.form`
	display: flex;
	justify-content: center;
`;

const CommentInput = styled.input`
	width: 95%;
	border: 0;
	border-top: 1px solid lightgray;
	padding: 15px 0;
	text-align: start;
`;

const SubmitButton = styled.button`
	position: absolute;
	height: 0px;
	width: 0px;
	border: none;
	padding: 0px;
`;

class CommentSection extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: [],
			currentComment: ''
		};
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments,
			currentComment: '',
			likes: this.props.likes,
			isLiked: true
		});
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	addNewComment = (event) => {
		event.preventDefault();
		const newCommentList = [ ...this.state.comments, { username: 'DefaultUser', text: this.state.currentComment } ];
		this.setState({
			comments: newCommentList,
			currentComment: ''
		});
	};

	render() {
		return (
			<div>
				{this.state.comments.map((comment) => {
					return <Comment key={comment.text} username={comment.username} text={comment.text} />;
				})}
				<CommentForm>
					<CommentInput
						type="text"
						name="currentComment"
						placeholder="Add a comment..."
						value={this.state.currentComment}
						onChange={this.handleChange}
						onSubmit={this.addNewComment}
					/>
					<SubmitButton onClick={this.addNewComment} />
				</CommentForm>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
};

export default CommentSection;
