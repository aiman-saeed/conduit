import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import articleReducer from "./articleReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  article: articleReducer,
  comments: commentReducer,
});
