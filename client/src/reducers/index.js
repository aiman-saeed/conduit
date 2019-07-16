import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import articleReducer from "./articleReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  article: articleReducer
});
