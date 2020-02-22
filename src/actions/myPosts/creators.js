import { SET_MY_POSTS_PENDING, SET_MY_POSTS_SUCCESS, SET_MY_POSTS_ERROR } from './types';

export const setMyPostsPending = (areMyPostsPending) => ({
	type: SET_MY_POSTS_PENDING,
	areMyPostsPending
});

export const setMyPostsSuccess = (myPosts) => ({
	type: SET_MY_POSTS_SUCCESS,
	myPosts
});

export const setMyPostsError = (error) => ({
	type: SET_MY_POSTS_ERROR,
	error
});

