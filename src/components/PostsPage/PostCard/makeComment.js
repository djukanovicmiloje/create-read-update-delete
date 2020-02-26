import React, { Component } from "react";
import postComment from "../../../services/postComment";

class MakeComment extends Component {
  constructor(props) {
    super(props);
    this.postId = props.post.id;
    this.state = {
      comment: ""
    };
  }
  onInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  onPostClick() {
    const postData = {
      postId: this.postId,
      body: this.state.comment,
      isPublic: true
    };

    postComment(postData);
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          name="comment"
          value={this.state.comment}
          placeholder="Make a comment ..."
          onChange={e => this.onInputChange(e)}
        />
        <button onClick={() => this.onPostClick()}>POST</button>
      </React.Fragment>
    );
  }
}

export default MakeComment;
