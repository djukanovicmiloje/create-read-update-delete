import React from "react";
import { postsDispatcher } from "../../reducers/postsReducer";
import { connect } from "react-redux";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { arePostsPending, posts, error } = this.props;

    console.log("ALOOOO", posts);
    if (arePostsPending) {
      return <div>Loading...</div>;
    }
    debugger;

    return <div>{JSON.stringify(posts)}</div>;
    //return posts.map(post => <div>{JSON.stringify(post)}</div>);
    //return posts.map(post => <div>{post.body}</div>);
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    arePostsPending: state.arePostsPending,
    posts: state.posts,
    error: state.error
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(postsDispatcher())
// });

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(postsDispatcher())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
