import loginReducer from './login';
import signUpReducer from './signup';
import postsReducer from './posts';

import { combineReducers } from 'redux';
import createPostReducer from './createPost';
import myPostsReducer from './myPosts';
import commentsReducer from './comments';

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signUpReducer,
	posts: postsReducer,
	createPost: createPostReducer,
	myPosts: myPostsReducer,
	comments: commentsReducer
});

export default rootReducer;
