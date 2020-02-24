import React, { Component } from 'react';
import { connect } from 'react-redux';

class SinglePostPage extends Component {
	constructor(props) {
		super(props);
		this.postId = props.match.params.postId;

		this.post = props.posts.filter(post => post.id === this.postId);
	}
	render() {
		console.log(this.post);
		return (
			<div>
				<img src={this.post.imageUrl} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts.posts
	};
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostPage);
