import {combineReducers} from 'redux';
import users from './usersReducer';
import user from './userReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  user,
  ajaxCallsInProgress
});

export default rootReducer;
