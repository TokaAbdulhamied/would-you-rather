import { combineReducers } from "redux";
import authUser from "./users";
import quistions from "./quistions";
import users from "./users";

const rootReducer = combineReducers({
  authUser,
  quistions,
  users,
});

export default rootReducer;
