export const GET_USERS = "GET_USERS";

const getUser = (users) => ({
  type: GET_USERS,
  users,
});
