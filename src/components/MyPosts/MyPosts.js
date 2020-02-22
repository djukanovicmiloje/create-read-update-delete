import React, { Component } from 'react';
import myPostsDispatcher from '../../actions/myPosts/dipstacher';
import { connect } from 'react-redux';

class MyPosts extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchMyPosts();
	}

	render() {
		const { areMyPostsPending, myPosts, error } = this.props;

		if (areMyPostsPending) {
			return <div>Loading...</div>;
		}

		return myPosts.map(post => <div>{post.title}</div>);
	}
}

const mapStateToProps = state => ({
	areMyPostsPending: state.myPosts.areMyPostsPending,
	myPosts: state.myPosts.myPosts,
	error: state.myPosts.error
});

const mapDispatchToProps = dispatch => ({
	fetchMyPosts: () => dispatch(myPostsDispatcher())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
