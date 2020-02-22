import React from 'react';
import { Component } from 'react';
import createPostDispatcher from '../../actions/createPost/dispatcher';
import { connect } from 'react-redux';

class CreatePostPage extends Component {
	constructor(props) {
		super(props);
	}

	onInputChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	}

	onCreatePostClick() {
		const { title, subtitle, imageUrl, text, isPublic } = this.state;

		const postData = { title, subtitle, imageUrl, text, isPublic: true };

		this.props.createPost(postData);
	}

	render() {
		return (
			<div>
				<input
					onChange={(e) => this.onInputChange(e)}
					type="text"
					name="title"
					placeholder="title"
				/>
				<input
					onChange={(e) => this.onInputChange(e)}
					type="text"
					name="subtitle"
					placeholder="subtitle"
				/>
				<input
					onChange={(e) => this.onInputChange(e)}
					type="text"
					name="imageUrl"
					placeholder="imageUrl"
				/>
				<input
					onChange={(e) => this.onInputChange(e)}
					type="text"
					name="text"
					placeholder="text"
				/>
				<input
					onChange={(e) => this.onInputChange(e)}
					type="checkbox"
					name="isPublic"
				/>
				<button onClick={() => this.onCreatePostClick()}>Create Post</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isPostCreationPending: state.createPost.isPostCreationPending,
	post: state.createPost.post,
	error: state.createPost.error,
});

const mapDispatchToProps = (dispatch) => ({
	createPost: (postData) => dispatch(createPostDispatcher(postData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage);
