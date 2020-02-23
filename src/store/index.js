import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';
import rootReducer from '../reduxReducers/rootReducer';

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));

export default store;
