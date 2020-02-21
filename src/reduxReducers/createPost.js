import {
  SET_POST_CREATION_PENDING,
  SET_POST_CREATION_SUCCESS,
  SET_POST_CREATION_ERROR
} from "../actions/createPost/types";

const createPostReducer = (
  state = {
    isPostCreationPending: false,
    post: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case SET_POST_CREATION_PENDING:
      return {
        ...state,
        isPostCreationPending: action.isPostCreationPending
      };
    case SET_POST_CREATION_SUCCESS:
      return {
        ...state,
        post: action.post
      };
    case SET_POST_CREATION_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default createPostReducer;
