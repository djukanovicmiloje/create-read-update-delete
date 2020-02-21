import { setPostsLoading, setPosts, setPostsError } from "./creators";
import fetchPosts from "../../services/fetchPosts";

const postsDispatcher = () => dispatch => {
  dispatch(setPostsLoading(true));

  fetchPosts()
    .then(posts => {
      dispatch(setPosts(posts));
      dispatch(setPostsLoading(false));
    })
    .catch(error => {
      dispatch(setPostsError(error));
      dispatch(setPostsLoading(false));
    });
};

export default postsDispatcher;
