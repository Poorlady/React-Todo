import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

export default combineReducers({
  todo: todoReducer,
  filter: visibilityReducer,
});
