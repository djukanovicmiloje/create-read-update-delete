import { setMyPostsPending, setMyPostsSuccess, setMyPostsError } from './creators';
import fetchMyPosts from '../../services/fetchMyPosts';

const myPostsDispatcher = () => dispatch => {
	dispatch(setMyPostsPending(true));

	fetchMyPosts()
		.then(posts => {
			dispatch(setMyPostsSuccess(posts));
			dispatch(setMyPostsPending(false));
		})
		.catch(error => {
			dispatch(setMyPostsError(error));
		});
};

export default myPostsDispatcher;
