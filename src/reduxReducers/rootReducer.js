import loginReducer from "./login";
import signUpReducer from "./signup";
import postsReducer from "./posts";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  posts: postsReducer
});

export default rootReducer;
