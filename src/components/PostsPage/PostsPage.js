import React from 'react';
import postsDispatcher from '../../actions/posts/dispatcher';
import { connect } from 'react-redux';
import PostCard from './PostCard/PostCard';
import Header from '../../containers/Header';
import commentsDispatcher from '../../actions/fetchComments/dispatcher';

class PostsPage extends React.Component {
	componentDidMount() {
		this.props.fetchPosts();
		this.props.fetchComments();
	}

	render() {
		const { arePostsPending, posts, error } = this.props;

		if (arePostsPending) {
			return <div>Loading...</div>;
		}

		if (error) {
			return <div>Something went wrong ...</div>;
		}

		const postsToDisplay = posts.filter((post, index) => index > 36);
		//filters out foobar posts
		return (
			<div>
				<Header />
				<h1>Posts:</h1>
				<div className="posts_container">
					{postsToDisplay.map((post, key) => (
						<PostCard key={key} post={post} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		arePostsPending: state.posts.arePostsLoading,
		posts: state.posts.posts,
		error: state.posts.error
	};
};

const mapDispatchToProps = dispatch => ({
	fetchPosts: () => dispatch(postsDispatcher()),
	fetchComments: () => dispatch(commentsDispatcher())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
