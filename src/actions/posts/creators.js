import { SET_POSTS_LOADING, SET_POSTS, SET_POSTS_ERROR } from "./types";

export const setPostsLoading = arePostsLoading => ({
  type: SET_POSTS_LOADING,
  arePostsLoading
});

export const setPosts = posts => ({
  type: SET_POSTS,
  posts
});

export const setPostsError = error => ({
  type: SET_POSTS_ERROR,
  error
});
