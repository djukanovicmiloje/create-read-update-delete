import {
	SET_MY_POSTS_PENDING,
	SET_MY_POSTS_SUCCESS,
	SET_MY_POSTS_ERROR
} from '../actions/myPosts/types';

const myPostsReducer = (
	state = {
		areMyPostsPending: true,
		myPosts: null,
		error: null
	},
	action
) => {
	switch (action.type) {
	case SET_MY_POSTS_PENDING:
		return {
			...state,
			areMyPostsPending: action.areMyPostsPending
		};
	case SET_MY_POSTS_SUCCESS:
		return {
			...state,
			myPosts: action.myPosts
		};
	case SET_MY_POSTS_ERROR:
		return {
			...state,
			error: action.error
		};
	default:
		return state;
	}
};

export default myPostsReducer;
