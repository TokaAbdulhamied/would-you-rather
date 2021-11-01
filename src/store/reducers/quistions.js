import { GET_QUISTIONS } from "../actions/quistions";

export default function quistions(state = {}, action) {
  switch (action.type) {
    case GET_QUISTIONS:
      return { ...state, ...action.quistions };
    default:
      return state;
  }
}
