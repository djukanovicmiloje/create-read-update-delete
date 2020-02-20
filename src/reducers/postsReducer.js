const SET_POSTS_PENDING = "SET_POSTS_PENDING";
const SET_POSTS_SUCCESS = "SET_POSTS_SUCCESS";
const SET_POSTS_ERROR = "SET_POSTS_ERROR";

const setPostsPending = arePostsPending => ({
  type: SET_POSTS_PENDING,
  arePostsPending
});

const setPostsSuccess = posts => ({
  type: SET_POSTS_SUCCESS,
  posts
});

const setPostsError = error => ({
  type: SET_POSTS_ERROR,
  error
});

export const postsReducer = (
  state = {
    arePostsPending: true,
    posts: [],
    postsError: null
  },
  action
) => {
  switch (action.type) {
    case SET_POSTS_PENDING:
      return {
        ...state,
        arePostsPending: action.arePostsPending
      };
    case SET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      };
    case SET_POSTS_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

// SAD TREBA DA NAPISEM DISPECERA

import fetchPosts from "../services/fetchPosts";

export const postsDispatcher = () => dispatch => {
  dispatch(setPostsPending(true));

  fetchPosts()
    .then(data => {
      console.log(data);
      dispatch(setPostsSuccess(data));
      dispatch(setPostsPending(false));
    })
    .catch(error => {
      dispatch(setPostsError(error));
    });
};
