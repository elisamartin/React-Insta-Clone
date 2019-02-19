import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

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
				<form>
					<input
						className="comment-input"
						type="text"
						name="currentComment"
						placeholder="Add a comment..."
						value={this.state.currentComment}
						onChange={this.handleChange}
						onSubmit={this.addNewComment}
					/>
					<button onClick={this.addNewComment}>Submit</button>
				</form>
			</div>
		);
	}
}

/*
const CommentSection = (props) => {
	return (
		<div>
			{props.comments.map((comment) => {
				return <Comment key={comment.text} username={comment.username} text={comment.text} />;
			})}
			<form>
				<input className="comment-input" type="text" name="addAComment" placeholder="Add a comment..." />
			</form>
		</div>
	);
};

*/

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		})
	)
};

export default CommentSection;
