import { setComments, setCommentsError, setCommentsFetched } from './creators';
import fetchComments from '../../services/fetchComments';

const commentsDispatcher = () => dispatch => {
	fetchComments()
		.then(comments => {
			dispatch(setComments(comments));
			dispatch(setCommentsFetched(true));
		})
		.catch(error => {
			dispatch(setCommentsError(error));
			dispatch(setCommentsFetched(false));
		});
};

export default commentsDispatcher;
