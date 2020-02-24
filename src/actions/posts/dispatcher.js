import { setPosts, setPostsError, setPostsFetched } from './creators';
import fetchPosts from '../../services/fetchPosts';

const postsDispatcher = () => dispatch => {
	fetchPosts()
		.then(posts => {
			dispatch(setPosts(posts));
			dispatch(setPostsFetched(true));
		})
		.catch(error => {
			dispatch(setPostsError(error));
			dispatch(setPostsFetched(false));
		});
};

export default postsDispatcher;
