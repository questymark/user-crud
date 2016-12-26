import * as types from './actionTypes';
import userApi from '../api/mockUserApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users};
}

export function loadUserSuccess(user) {
  return { type: types.LOAD_USER_SUCCESS, user};
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, users: user};
}

export function loadUsers() { 
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getUser(id) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return userApi.getUser(id).then(user => {
      dispatch(loadUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return userApi.saveUser(user).then(user => {
      if (user.id) {
        dispatch(updateUserSuccess(user))
      } else {
        dispatch(createUserSuccess(user))
      }
      
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  }; 
}

export function deleteUser(id) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return userApi.deleteUser(id).then((users) => {
      dispatch(loadUsersSuccess(users));
    })
  }
}
