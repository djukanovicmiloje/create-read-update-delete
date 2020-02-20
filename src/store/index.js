import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { postsReducer as reducer } from "../reducers/postsReducer";

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;
