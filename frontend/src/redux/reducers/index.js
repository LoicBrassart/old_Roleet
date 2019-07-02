import { combineReducers } from "redux";
import { reducer as notificationsReducer } from "reapop";

import modal from "./modalReducer";
import user from "./userReducer";

export default combineReducers({
  notifications: notificationsReducer(),
  modal,
  user
});
