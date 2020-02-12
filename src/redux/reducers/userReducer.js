import * as types from "../actions/actionTypes";

export default function userReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_USER_SUCCESS:
            return [...state, {...action.user}];
        case types.LOAD_USER_SUCCESS:
            return action.user;
        default:
            return state;
    }
}