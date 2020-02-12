import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createUserSuccess(user) {
    return { type: types.CREATE_USER_SUCCESS, user};
}

export function updateUserSuccess(user) {
    return { type: types.UPDATE_USER_SUCCESS, user};
}

export function loadUserSuccess(user) {
    return { type: types.LOAD_USER_SUCCESS, user};
}

export function loadUser() {
    return function (dispatch) {
        return userApi.getUser().then(user => {
            dispatch(loadUserSuccess(user));
        }).catch(error => {
            throw error;
        })
    }
}

export function saveUser(user) {
    //eslint-disable-next-line no-unused-vars
    return function(dispatch, getState) {
      dispatch(beginApiCall());
      return userApi
        .saveUser(user)
        .then(savedUser => {
          user.id
            ? dispatch(updateUserSuccess(savedUser))
            : dispatch(createUserSuccess(savedUser));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };
  }
  