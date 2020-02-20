import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { signUpReducer as reducer } from "../reducers/signUpReducer";

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;
