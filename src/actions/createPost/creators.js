import {
  SET_POST_CREATION_PENDING,
  SET_POST_CREATION_SUCCESS,
  SET_POST_CREATION_ERROR
} from "./types";

export const setPostCreationPending = isPostCreationPending => ({
  type: SET_POST_CREATION_PENDING,
  isPostCreationPending
});

export const setPostCreationSuccess = post => ({
  type: SET_POST_CREATION_SUCCESS,
  post
});

export const setPostCreationErrorr = error => ({
  type: SET_POST_CREATION_ERROR,
  error
});
