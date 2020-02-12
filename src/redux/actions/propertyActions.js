import * as types from "./actionTypes";
import * as propertyApi from "../../api/propertyApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createPropertySuccess(property) {
    return { type: types.CREATE_PROPERTY_SUCCESS, property};
}

export function updatePropertySuccess(property) {
  return { type: types.UPDATE_PROPERTY_SUCCESS, property };
}

export function deletePropertyOptimistic(property) {
  return { type: types.DELETE_PROPERTY_OPTIMISTIC, property };
}

export function saveProperty(property) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return propertyApi
      .saveProperty(property)
      .then(savedProperty => {
        property.id
          ? dispatch(updatePropertySuccess(savedProperty))
          : dispatch(createPropertySuccess(savedProperty));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteProperty(property) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    dispatch(deletePropertyOptimistic(property));
    return propertyApi.deleteProperty(property.id);
  };
}
