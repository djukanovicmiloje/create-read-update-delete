import { SET_COMMENTS_FETCHED, SET_COMMENTS, SET_COMMENTS_ERROR } from './types';

export const setCommentsFetched = areCommentsFetched => ({
	type: SET_COMMENTS_FETCHED,
	areCommentsFetched
});

export const setComments = comments => ({
	type: SET_COMMENTS,
	comments
});

export const setCommentsError = error => ({
	type: SET_COMMENTS_ERROR,
	error
});
