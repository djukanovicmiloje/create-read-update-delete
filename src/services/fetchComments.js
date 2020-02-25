import Comment from "../entities/comment";

const accessToken = sessionStorage.getItem("accessToken");
const headers = {
  "Content-Type": "application/json",
  "x-api-key": "B1tD3V",
  Authorization: "Bearer " + accessToken
};

const fetchComments = () => {
  const URL = "https://crud-api.hypetech.xyz/v1/comments";
  return fetch(URL, {
    method: "GET",
    headers: headers
  })
    .then(res => res.json())
    .then(data =>
      data.map(
        commentData =>
          new Comment(
            commentData.id,
            commentData.postId,
            commentData.userId,
            commentData.createdAt,
            commentData.body
          )
      )
    );
};

export default fetchComments;
