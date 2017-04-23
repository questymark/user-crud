import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import users from './users';

const logger = createLogger({
    collapsed: true,
    diff: false,
});

export default function (initialState = {}) {
  const rootReducer = combineReducers({
      users
  });

  return createStore(rootReducer, initialState,
      compose(
        applyMiddleware(thunk, logger)
  ));
}