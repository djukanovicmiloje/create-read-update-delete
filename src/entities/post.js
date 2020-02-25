import UTCtoDateObj from "../utils/parseUTCstring";

class Post {
  constructor(id, title, subtitle, text, userId, createdAt) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.text = text;
    this.userId = userId;
    this.createdAt = createdAt;
  }
  getTimeStamp() {
    return UTCtoDateObj(this.createdAt);
  }

  getComments(comments) {
    return comments.filter(comment => comment.postId === this.id);
  }

  getCreator(users) {
    return users.filter(user => user.id === this.userId)[0];
  }
}

export default Post;
