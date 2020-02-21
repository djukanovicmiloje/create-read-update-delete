import loginReducer from "./login";
import signUpReducer from "./signup";
import postsReducer from "./posts";

import { combineReducers } from "redux";
import createPostReducer from "./createPost";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  posts: postsReducer,
  createPost: createPostReducer
});

export default rootReducer;
