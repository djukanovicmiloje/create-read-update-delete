import {
	SET_POSTS_LOADING,
	SET_POSTS,
	SET_POSTS_ERROR,
} from '../actions/posts/types';

const postsReducer = (
	state = {
		arePostsLoading: false,
		posts: [],
		error: null,
	},
	action,
) => {
	switch (action.type) {
	case SET_POSTS_LOADING:
		return {
			...state,
			arePostsLoading: action.arePostsLoading,
		};

	case SET_POSTS:
		return {
			...state,
			posts: action.posts,
		};

	case SET_POSTS_ERROR:
		return {
			...state,
			error: action.error,
		};

	default:
		return state;
	}
};

export default postsReducer;
