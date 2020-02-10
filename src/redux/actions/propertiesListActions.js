import * as types from "./actionTypes";
import * as propertiesListAPI from "../../api/propertiesListApi";

export function loadPropertySuccess(properties) {
    return { type: types.LOAD_PROPERTIES_SUCCESS, properties}
}

export function loadProperties() {
    return function (dispatch) {
        return propertiesListAPI.getProperties().then(properties => {
            dispatch(loadPropertySuccess(properties));
        }).catch(error => {
            throw error;
        })
    }
}