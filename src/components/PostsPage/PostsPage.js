import React from "react";
import postsDispatcher from "../../actions/posts/dispatcher";
import { connect } from "react-redux";
import PostCard from "./PostCard/PostCard";

class PostsPage extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { arePostsPending, posts, error } = this.props;

    if (arePostsPending) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Something went wrong ...</div>;
    }

    return posts.map(post => <PostCard post={post} />);
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
  fetchPosts: () => dispatch(postsDispatcher())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
