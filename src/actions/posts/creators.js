import { SET_POSTS_FETCHED, SET_POSTS, SET_POSTS_ERROR } from './types';

export const setPostsFetched = arePostsFetched => ({
	type: SET_POSTS_FETCHED,
	arePostsFetched
});

export const setPosts = posts => ({
	type: SET_POSTS,
	posts
});

export const setPostsError = error => ({
	type: SET_POSTS_ERROR,
	error
});
