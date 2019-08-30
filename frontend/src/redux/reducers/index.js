import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import modal from "./modalReducer";
import user from "./userReducer";

export default combineReducers({
  modal,
  user,
  form
});
