export const GET_USERS = "GET_USERS";
import { _getUsers } from "../../utils/_DATA";

const getUser = (users) => ({
  type: GET_USERS,
  users,
});

export const handleGetUsers = () => (dispatch) => {
  _getUsers().then((users) => dispatch(getUser(users)));
};
