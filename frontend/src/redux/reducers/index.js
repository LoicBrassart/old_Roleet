import { combineReducers } from "redux";
import modal from "./modalReducer";
import user from "./userReducer";

export default combineReducers({
  modal,
  user
});
