import * as types from "../actions/actionTypes";

export default function propertyReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_PROPERTY:
            return [...state, {...action.property}];
        case types.LOAD_PROPERTIES_SUCCESS:
            return action.properties;
        default:
            return state;
    }
}