import React from "react";
import postsDispatcher from "../../actions/posts/dispatcher";
import { connect } from "react-redux";
import PostCard from "./PostCard/PostCard";
import Header from "../../containers/Header";
import commentsDispatcher from "../../actions/fetchComments/dispatcher";
import usersDispatcher from "../../actions/fetchUsers/dispatcher";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    const { usersState, postsState, commentsState } = props;
    this.isDataFetched =
      usersState.areUsersFetched &&
      postsState.arePostsFetched &&
      commentsState.areCommentsFetched;
    debugger;
    this.posts = postsState.posts;
    this.comments = commentsState.comments;
    this.users = usersState.users;
  }
  componentDidMount() {
    this.props.fetchData();
    // this.props.fetchPosts();
    // this.props.fetchComments();
    // this.props.fetchUsers();
  }

  render() {
    if (!this.isDataFetched) {
      return <div>Loading...</div>;
    }

    // if (error) {
    //   return <div>Something went wrong ...</div>;
    // } TODO ERROR

    const postsToDisplay = this.posts.filter((post, index) => index > 36);
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
    usersState: state.users,
    commentsState: state.comments,
    postsState: state.posts
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(postsDispatcher());
    dispatch(commentsDispatcher());
    dispatch(usersDispatcher());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
