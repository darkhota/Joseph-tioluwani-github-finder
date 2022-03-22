import { combineReducers } from "redux";
import gitHubReducer from "./gitHubReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  github: gitHubReducer,
  alert: alertReducer
});
