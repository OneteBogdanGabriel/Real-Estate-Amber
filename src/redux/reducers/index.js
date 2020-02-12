import { combineReducers } from "redux";
import properties from "./propertyReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
  properties,
  users
});

export default rootReducer;
