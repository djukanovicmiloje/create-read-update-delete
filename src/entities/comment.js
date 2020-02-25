import UTCtoDateObj from "../utils/parseUTCstring";

class Comment {
  constructor(id, postId, userId, createdAt, body) {
    this.id = id;
    this.postId = postId;
    this.userId = userId;
    this.createdAt = createdAt;
    this.body = body;
  }
  getTimeStamp() {
    return UTCtoDateObj(this.createdAt);
  }
  getUser(users) {
    return users.filter(user => user.id === this.userId)[0];
  }
}

export default Comment;
