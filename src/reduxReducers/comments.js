import {
	SET_COMMENTS,
	SET_COMMENTS_ERROR,
	SET_COMMENTS_FETCHED
} from '../actions/fetchComments/types';

const commentsReducer = (
	state = {
		areCommentsFetched: false,
		comments: [],
		error: null
	},
	action
) => {
	switch (action.type) {
	case SET_COMMENTS_FETCHED:
		return {
			...state,
			areCommentsFetched: action.areCommentsFetched
		};

	case SET_COMMENTS:
		return {
			...state,
			comments: action.comments
		};

	case SET_COMMENTS_ERROR:
		return {
			...state,
			error: action.error
		};

	default:
		return state;
	}
};

export default commentsReducer;
