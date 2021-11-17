import { SET_AUTHED_USER } from "../actioncreators/authUser";

export default function authUser(state = "", action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.userId;

    default:
      return state;
  }
}
