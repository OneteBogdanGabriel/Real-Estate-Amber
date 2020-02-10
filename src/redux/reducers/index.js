import { combineReducers } from "redux";
import property from "./propertyReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  property,
  user
});

export default rootReducer;
